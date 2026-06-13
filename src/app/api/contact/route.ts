import { NextRequest, NextResponse } from "next/server";

function sanitizeInput(input: any): string {
  if (typeof input !== "string") {
    return "";
  }
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
    .slice(0, 5000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject || "");
    const sanitizedMessage = sanitizeInput(message);

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    const formId = process.env.FORMSPREE_FORM_ID;
    if (!formId) {
      console.error("FORMSPREE_FORM_ID is not configured in environment variables.");
      return NextResponse.json(
        { error: "Contact form configuration is incomplete. Please define FORMSPREE_FORM_ID in environment variables." },
        { status: 500 }
      );
    }

    // Forward to Formspree with timeout and size limits
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

    try {
      const formspreeResponse = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          subject: sanitizedSubject,
          message: sanitizedMessage,
        }),
        signal: controller.signal,
      });

      // Read response stream chunk-by-chunk up to 50KB to prevent memory issues
      let responseText = "";
      if (formspreeResponse.body) {
        const reader = formspreeResponse.body.getReader();
        const decoder = new TextDecoder();
        let totalBytes = 0;
        const MAX_BYTES = 50 * 1024; // 50KB limit

        while (totalBytes < MAX_BYTES) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          if (value) {
            totalBytes += value.byteLength;
            responseText += decoder.decode(value, { stream: true });
          }
        }
        if (totalBytes >= MAX_BYTES) {
          console.warn("Formspree response payload exceeded 50KB limit. Aborted further stream reading.");
          await reader.cancel();
        }
      } else {
        responseText = await formspreeResponse.text();
      }

      if (!formspreeResponse.ok) {
        let errorData: any = {};
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          // Ignored
        }
        console.error("Formspree error response:", errorData);
        
        // Handle array of errors that Formspree can return
        let errorMessage = "Failed to send message via Formspree.";
        if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          errorMessage = errorData.errors.map((err: any) => err.message).join(", ");
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }
        
        return NextResponse.json(
          { error: errorMessage },
          { status: formspreeResponse.status }
        );
      }
    } catch (fetchError: any) {
      if (fetchError.name === "AbortError") {
        console.error("Fetch request to Formspree timed out after 5 seconds");
        return NextResponse.json(
          { error: "Request to submit contact form timed out. Please try again." },
          { status: 504 }
        );
      }
      throw fetchError;
    } finally {
      clearTimeout(timeoutId);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! It has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}


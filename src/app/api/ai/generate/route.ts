import { NextRequest, NextResponse } from "next/server";
import { DeepSeekService } from "@/lib/deepseek";

// In-memory rate limiting map
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_COUNT = 10; // Max 10 requests
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

/**
 * Checks if a client IP is rate limited.
 * @param ip Client IP address
 * @returns boolean true if rate limited, false otherwise
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitInfo = rateLimitMap.get(ip);

  if (!limitInfo) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  // If window elapsed, reset count
  if (now - limitInfo.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (limitInfo.count >= RATE_LIMIT_COUNT) {
    return true;
  }

  limitInfo.count += 1;
  return false;
}

/**
 * Basic HTML/Script tag stripping sanitization
 * @param text input string
 * @returns sanitized string
 */
function sanitizeInput(text: string): string {
  if (!text) return "";
  // Strip HTML-like tags and trim whitespace
  return text
    .replace(/<[^>]*>/g, "")
    .trim();
}

// Valid tool slugs in the application
const VALID_SLUGS = new Set([
  "ai-hook-generator",
  "ai-script-generator",
  "ai-caption-generator",
  "instagram-caption-generator",
  "tiktok-caption-generator",
  "ai-cta-generator",
  "ai-video-idea-generator",
  "ai-product-description-generator",
  "ai-comment-reply-generator",
  "ai-social-media-post-generator",
  "ai-content-rewriter",
  "ai-youtube-title-generator",
  "ai-youtube-description-generator",
  "ai-youtube-hashtag-generator",
]);

export async function POST(request: NextRequest) {
  // 1. Rate Limiting Check
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor ? forwardedFor.split(",")[0] : (realIp || "127.0.0.1");

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait 1 minute before generating content again." },
      { status: 429 }
    );
  }

  try {
    // 2. Parse Request Body
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const { prompt, slug, tone, niche, platform, length } = body;

    // 3. Validation & Sanitization
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Validation failed: 'prompt' is required and must be a string." }, { status: 400 });
    }

    if (!slug || typeof slug !== "string" || !VALID_SLUGS.has(slug)) {
      return NextResponse.json({ error: "Validation failed: Invalid or missing 'slug'." }, { status: 400 });
    }

    // Sanitize prompt and enforce strict length limit to optimize token usage
    const sanitizedPrompt = sanitizeInput(prompt);
    if (sanitizedPrompt.length === 0) {
      return NextResponse.json({ error: "Validation failed: 'prompt' cannot be empty after sanitization." }, { status: 400 });
    }

    if (sanitizedPrompt.length > 500) {
      return NextResponse.json({ error: "Validation failed: Niche description/prompt is too long (max 500 characters)." }, { status: 400 });
    }

    // Call DeepSeek service
    const generatedContent = await DeepSeekService.generateContent({
      prompt: sanitizedPrompt,
      slug,
      tone: tone || "engaging",
      niche: niche || "general",
      platform: platform || "general",
      length: length || "short",
    });

    return NextResponse.json({ content: generatedContent });

  } catch (error: any) {
    console.error("AI Generation Route Error:", error);
    
    // Return friendly error message
    const errorMessage = error.message || "An unexpected error occurred during content generation.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

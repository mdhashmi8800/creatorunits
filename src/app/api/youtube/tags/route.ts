import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Guard JSON parsing to prevent crashes from malformed payloads
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { url } = body;

    // 2. Validate input existence and type
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "YouTube URL is required and must be a string" }, { status: 400 });
    }

    // Extract video ID to build standard watch URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (!match || match[2].length !== 11) {
      return NextResponse.json({ error: "Invalid YouTube URL format" }, { status: 400 });
    }

    const videoId = match[2];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // 3. Set an 8-second fetch and stream-reading timeout using AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    let html = "";
    try {
      const response = await fetch(watchUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
        next: { revalidate: 3600 } // Cache results for 1 hour to reduce outgoing requests
      });

      if (!response.ok) {
        return NextResponse.json({ error: "Failed to fetch YouTube page" }, { status: 500 });
      }

      // 4. Read response stream chunk-by-chunk up to a maximum of 2MB to prevent out-of-memory crash
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let totalBytes = 0;
        const MAX_BYTES = 2 * 1024 * 1024; // 2MB limit

        while (totalBytes < MAX_BYTES) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          if (value) {
            totalBytes += value.byteLength;
            html += decoder.decode(value, { stream: true });
          }
        }
        // Cancel the reader if we hit the limit to free resources and close the connection
        if (totalBytes >= MAX_BYTES) {
          console.warn(`YouTube page payload exceeded 2MB limit. Aborted further stream reading.`);
          await reader.cancel();
        }
      } else {
        html = await response.text();
      }
    } catch (fetchError: any) {
      if (fetchError.name === "AbortError") {
        console.error("Fetch request to YouTube or body stream reading timed out");
        return NextResponse.json({ error: "Request to YouTube timed out" }, { status: 504 });
      }
      throw fetchError;
    } finally {
      clearTimeout(timeoutId);
    }

    const tags: string[] = [];

    // 5. Use String.prototype.matchAll to eliminate while loop state mutations and prevent infinite loops
    const ogTagRegex = /<meta\s+property=["']og:video:tag["']\s+content=["']([^"']+)["']/gi;
    const ogMatches = html.matchAll(ogTagRegex);
    for (const ogMatch of ogMatches) {
      if (ogMatch[1] && !tags.includes(ogMatch[1])) {
        tags.push(ogMatch[1]);
      }
    }

    // Method 2: Extract standard keywords meta tag (fallback / addition)
    if (tags.length === 0) {
      const keywordsRegex = /<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/i;
      const kwMatch = html.match(keywordsRegex);
      if (kwMatch && kwMatch[1]) {
        const splitTags = kwMatch[1].split(",").map(t => t.trim()).filter(Boolean);
        splitTags.forEach(tag => {
          if (!tags.includes(tag)) tags.push(tag);
        });
      }
    }

    // Method 3: Parse from internal JSON metadata block (if direct HTML parsing was limited)
    if (tags.length === 0) {
      const jsonRegex = /"keywords"\s*:\s*\[(.*?)\]/i;
      const jsonMatch = html.match(jsonRegex);
      if (jsonMatch && jsonMatch[1]) {
        const parsedTags = jsonMatch[1]
          .split(",")
          .map(t => t.replace(/["']/g, "").trim())
          .filter(Boolean);
        parsedTags.forEach(tag => {
          if (!tags.includes(tag)) tags.push(tag);
        });
      }
    }

    // 6. Return response with Cache-Control headers to enable Cloudflare CDN caching at the edge
    return NextResponse.json(
      { videoId, tags },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
        },
      }
    );
  } catch (error: any) {
    console.error("YouTube Tags Extraction failure:", error);
    return NextResponse.json({ error: error.message || "Failed to extract tags" }, { status: 500 });
  }
}


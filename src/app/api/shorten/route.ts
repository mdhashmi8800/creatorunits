import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "A valid URL is required" }, { status: 400 });
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return NextResponse.json({ error: "URL must start with http:// or https://" }, { status: 400 });
    }

    // 1. Try TinyURL public API (server-side, avoids browser CORS)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url.trim())}`, {
        signal: controller.signal,
        headers: { "User-Agent": "CreatorUnits-Shortener/1.0" },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const text = await res.text();
        if (text && text.startsWith("http")) {
          return NextResponse.json({ shortUrl: text.trim() });
        }
      }
    } catch (tinyErr) {
      console.warn("TinyURL request failed, attempting is.gd fallback", tinyErr);
    }

    // 2. Fallback to is.gd
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url.trim())}`, {
        signal: controller.signal,
        headers: { "User-Agent": "CreatorUnits-Shortener/1.0" },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.shorturl) {
          return NextResponse.json({ shortUrl: data.shorturl });
        }
      }
    } catch (isgdErr) {
      console.warn("is.gd request failed", isgdErr);
    }

    return NextResponse.json(
      { error: "Unable to shorten URL right now. Please try again in a few moments." },
      { status: 502 }
    );
  } catch (err: unknown) {
    console.error("Shorten API Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


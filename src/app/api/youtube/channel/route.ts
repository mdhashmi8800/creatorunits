import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { input } = body;

    if (!input || typeof input !== "string") {
      return NextResponse.json({ error: "YouTube channel URL, handle, or ID is required" }, { status: 400 });
    }

    const trimmed = input.trim();

    // 1. Direct UC ID pattern check
    const directMatch = trimmed.match(/^UC[a-zA-Z0-9_-]{22}$/);
    if (directMatch) {
      return NextResponse.json({ channelId: directMatch[0] });
    }

    // Direct channel URL check
    const channelUrlMatch = trimmed.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i);
    if (channelUrlMatch) {
      return NextResponse.json({ channelId: channelUrlMatch[1] });
    }

    // 2. Format target URL for lookup
    let targetUrl = trimmed;
    if (trimmed.startsWith("@")) {
      targetUrl = `https://www.youtube.com/${trimmed}`;
    } else if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      targetUrl = `https://www.youtube.com/@${trimmed}`;
    }

    // 3. Fetch channel page with 6-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json({ error: `YouTube responded with HTTP ${res.status}` }, { status: 502 });
    }

    const html = await res.text();

    // 4. Extract authentic Channel ID using standard YouTube HTML patterns
    const patterns = [
      /<meta\s+itemprop="channelId"\s+content="(UC[a-zA-Z0-9_-]{22})"/i,
      /<meta\s+property="og:url"\s+content="https?:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i,
      /"browseId"\s*:\s*"(UC[a-zA-Z0-9_-]{22})"/i,
      /"externalId"\s*:\s*"(UC[a-zA-Z0-9_-]{22})"/i,
      /\/channel\/(UC[a-zA-Z0-9_-]{22})"/i,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        return NextResponse.json({ channelId: match[1] });
      }
    }

    return NextResponse.json(
      { error: "Could not locate Channel ID in YouTube page. Please try pasting the Page Source directly." },
      { status: 404 }
    );
  } catch (err: unknown) {
    console.error("YouTube Channel Route Error:", err);
    return NextResponse.json({ error: "Failed to connect to YouTube. Please try the Page Source method." }, { status: 500 });
  }
}


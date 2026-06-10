import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "YouTube URL is required" }, { status: 400 });
    }

    // Extract video ID to build standard watch URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (!match || match[2].length !== 11) {
      return NextResponse.json({ error: "Invalid YouTube URL format" }, { status: 400 });
    }

    const videoId = match[2];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Fetch the video page HTML
    const response = await fetch(watchUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 } // Cache results for 1 hour to reduce outgoing requests
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch YouTube page" }, { status: 500 });
    }

    const html = await response.text();

    const tags: string[] = [];

    // Method 1: Extract og:video:tag metadata (multiple occurrences)
    const ogTagRegex = /<meta\s+property=["']og:video:tag["']\s+content=["']([^"']+)["']/gi;
    let ogMatch;
    while ((ogMatch = ogTagRegex.exec(html)) !== null) {
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

    return NextResponse.json({ videoId, tags });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to extract tags" }, { status: 500 });
  }
}

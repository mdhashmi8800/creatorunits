import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-yt-timestamp",
  "slug": "youtube-timestamp-generator",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "YouTube Timestamp Link Generator",
  "shortDesc": "Generate shareable YouTube links that start playing at exact hours, minutes, or seconds.",
  "metaDesc": "Create YouTube links that start at a specific time. Convert hours, minutes, and seconds into shareable ?t= timestamp URLs. 100% free and instant.",
  "instructions": [
    "Paste any YouTube video URL (standard watch URL, youtu.be short link, or mobile link).",
    "Enter your target start time in hours, minutes, and seconds.",
    "Click 'Generate Timestamp Link' to compute the total second offset or standard timestamp parameter.",
    "Copy the generated link or click 'Test Link' to verify playback starts at the exact frame."
  ],
  "features": [
    "Compatible with all YouTube URL formats (youtube.com/watch, youtu.be, m.youtube.com).",
    "Converts HH:MM:SS into both total seconds (?t=125) and standard human-readable parameters (?t=2m5s).",
    "One-click copy to clipboard with instant URL validation.",
    "100% client-side: video URLs are never stored, tracked, or sent to external servers."
  ],
  "componentName": "YoutubeTimestampGenerator",
  "faqs": [
    {
      "question": "How do YouTube timestamp links work?",
      "answer": "YouTube accepts a time query parameter appended to the URL: '?t=X' (or '&t=X' if other parameters already exist). The parameter accepts either the total elapsed duration in seconds (e.g. ?t=90) or a combined time format (e.g. ?t=1m30s). When clicked, the YouTube player automatically seeks to that exact moment."
    },
    {
      "question": "Does a timestamp link work on both mobile and desktop YouTube apps?",
      "answer": "Yes. Links with the ?t= parameter are natively recognized by desktop web browsers, mobile browsers (Safari, Chrome), and the official iOS and Android YouTube apps, automatically cueing playback to the specified time."
    },
    {
      "question": "How do I create clickable timestamp chapters in a YouTube video description?",
      "answer": "To create video chapters in YouTube descriptions, type timestamps starting at 00:00 (e.g. '00:00 Intro', '02:15 Main Tutorial', '06:30 Summary'). Each chapter must be at least 10 seconds long, and you must include at least three chronological timestamps."
    },
    {
      "question": "Can I link to a specific timestamp on an embedded YouTube video?",
      "answer": "Yes. For embedded iframe players, append '?start=X' where X is the start time in seconds (e.g. 'https://www.youtube.com/embed/VIDEO_ID?start=120'). This instructs the embedded player to begin at the 2-minute mark."
    },
    {
      "question": "Why didn't my YouTube timestamp link start at the right time?",
      "answer": "The most common reasons are: (1) using a question mark (?) when an ampersand (&) was needed on a URL that already had parameters, (2) including spaces inside the parameter (e.g. ?t= 60s), or (3) entering a timestamp that exceeds the total duration of the video."
    }
  ],
  "seoTitle": "YouTube Timestamp Link Generator",
  "seoHeading": "Create Shareable YouTube Links That Start at Any Time",
  "seoIntro": "Send viewers straight to the most interesting part of any YouTube video. Enter your video URL and target timestamp to generate clean, shareable links in seconds.",
  "seoBody": "\n<h3>Why Timestamp Links Boost Engagement</h3>\n<p>Attention spans are short. When sharing a 45-minute podcast or an in-depth tutorial, directing viewers to the beginning forces them to scrub through the timeline to find what they want. By sharing an exact <strong>timestamp link</strong>, you respect your audience's time, resulting in higher click-through rates, greater retention, and better engagement.</p>\n\n<h3>YouTube URL Parameter Syntax: Standard vs. Short Links</h3>\n<ul>\n  <li><strong>Standard Desktop URL:</strong> <code>https://www.youtube.com/watch?v=dQw4w9WgXcQ&amp;t=43s</code> (uses <code>&amp;t=</code> because <code>?v=</code> is already present).</li>\n  <li><strong>Short youtu.be Link:</strong> <code>https://youtu.be/dQw4w9WgXcQ?t=43</code> (uses <code>?t=</code> because no other parameters exist).</li>\n  <li><strong>Combined Notation:</strong> <code>https://youtu.be/dQw4w9WgXcQ?t=1h12m30s</code> (supported across all modern YouTube players).</li>\n</ul>\n\n<h3>Related Free YouTube &amp; Creator Utilities</h3>\n<ul>\n  <li><a href=\"/tools/creator/youtube-tag-extractor\">YouTube Tag Extractor</a> — Inspect tags and keywords used by top competitor videos.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your thumbnail on simulated desktop and mobile feeds.</li>\n  <li><a href=\"/tools/video/fps-calculator\">FPS Calculator &amp; Frame Counter</a> — Compute exact frame numbers and SMPTE timecodes.</li>\n  <li><a href=\"/category/creator\">All Creator Tools</a> — Full suite of YouTube and video optimization utilities.</li>\n</ul>\n"
};

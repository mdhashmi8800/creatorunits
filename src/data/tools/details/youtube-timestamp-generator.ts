import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-yt-timestamp",
  "slug": "youtube-timestamp-generator",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "YouTube Timestamp Link Generator",
  "shortDesc": "Generate links to start YouTube videos at specific timestamps (minutes and seconds).",
  "metaDesc": "Create shareable YouTube links that start at a specific time. Enter URL and timestamps in minutes/seconds. Copies link instantly.",
  "instructions": [
    "Paste the YouTube video link.",
    "Enter the target time in minutes and seconds.",
    "Click 'Generate Timestamp Link'.",
    "Copy and share the generated t= URL."
  ],
  "features": [
    "Handles mobile, short, and desktop URLs.",
    "Live preview link.",
    "Precision time controls."
  ],
  "componentName": "YoutubeTimestampGenerator",
  "faqs": [
    {
      "question": "How do YouTube timestamp links work?",
      "answer": "YouTube accepts a query parameter '?t=X' or '&t=X' where X is the start time in seconds, which tells the player to seek to that timestamp on launch."
    }
  ],
  "seoTitle": "YouTube Timestamp Link Generator - Start Video at Specific Time",
  "seoHeading": "Generate Shareable YouTube Video Timestamp Links",
  "seoIntro": "Direct your viewers to the exact moment in a video. Set the hour, minute, and second values to build custom share links.",
  "seoBody": "<h3>Why Use Timestamps?</h3><p>Sharing long videos is easier when you direct viewers directly to the highlight. It boosts retention and improves sharing experience.</p>"
};

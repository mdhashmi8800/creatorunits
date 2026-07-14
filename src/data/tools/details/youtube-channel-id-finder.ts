import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-yt-channel-id",
  "slug": "youtube-channel-id-finder",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "YouTube Channel ID Finder",
  "shortDesc": "Find the unique channel ID of any YouTube channel by its user URL or handle.",
  "metaDesc": "Extract YouTube channel IDs from URLs, handles, and source tags online. Quick, free, and runs fully in your browser.",
  "instructions": [
    "Paste any YouTube channel link, custom URL, or handle (e.g., @creators).",
    "Click 'Find Channel ID'.",
    "The tool extracts the UC... ID block instantly.",
    "Copy the ID to your clipboard."
  ],
  "features": [
    "Supports handle lookups (@name).",
    "Extracts IDs from page source codes client-side.",
    "One-click copy to clipboard."
  ],
  "componentName": "YoutubeChannelIdFinder",
  "faqs": [
    {
      "question": "What is a YouTube Channel ID?",
      "answer": "A YouTube Channel ID is a unique, 24-character alphanumeric string starting with 'UC' that Google assigns to every channel. Unlike custom URLs or handles, it never changes."
    },
    {
      "question": "Why do I need a Channel ID?",
      "answer": "Channel IDs are required by developers, APIs, integrations, and tools (such as feed readers or stat trackers) to identify channels precisely."
    }
  ],
  "seoTitle": "YouTube Channel ID Finder - Get UC ID from URL",
  "seoHeading": "Find and Extract YouTube Channel IDs Instantly",
  "seoIntro": "Need to grab a unique channel ID for an API connection or statistical tracking tool? Retyping page layouts is tedious. Get it instantly in one click.",
  "seoBody": "<h3>How to Locate Channel IDs</h3><p>Paste your target handle or channel page link. The browser extracts the identifier instantly on-device.</p>"
};

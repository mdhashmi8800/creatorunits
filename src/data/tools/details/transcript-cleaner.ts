import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-trans-clean",
  "slug": "transcript-cleaner",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Transcript Cleaner & Formatter",
  "shortDesc": "Clean auto-generated transcripts by removing timestamps, speaker tags, and paragraph breaks.",
  "metaDesc": "Clean YouTube and Zoom transcripts online. Remove timestamps, strip speaker labels, and clean spaces instantly.",
  "instructions": [
    "Paste your raw transcript text block (e.g. from YouTube or Otter.ai).",
    "Toggle formatting checkboxes (Remove timestamps, remove speaker IDs, join paragraphs).",
    "Click 'Clean Transcript'.",
    "Copy or export readable paragraphs."
  ],
  "features": [
    "Removes time tags (e.g. [00:12] or 1:23).",
    "Strips bracket speaker labels.",
    "Combines fragmented single lines into readable texts paragraphs."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "Does this affect foreign languages transcript formats?",
      "answer": "No, because the clean regex filters focus specifically on numeric timestamp layouts and speaker structures."
    }
  ],
  "seoTitle": "Transcript Cleaner - Format YouTube & Zoom Transcripts Online",
  "seoHeading": "Convert Raw Transcripts into Readable Articles",
  "seoIntro": "Transform messy timestamps dumps into clear, edited paragraphs. Clean transcript records for blog posts or notes.",
  "seoBody": "<h3>Simplify Content Repurposing</h3><p>Easily repurpose webinar calls and podcasts transcripts. Strip metadata tags to get clean copies for editing.</p>"
};

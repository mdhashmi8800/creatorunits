import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-sub-gen",
  "slug": "subtitle-generator",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Subtitle Generator & Editor",
  "shortDesc": "Write, edit, and sync subtitles for videos, exporting as standard SRT or VTT files.",
  "metaDesc": "Write SRT and VTT subtitles online. Interactive subtitle editor to sync timelines and write caption files locally.",
  "instructions": [
    "Upload video (optional, for timeline previews) or enter audio duration.",
    "Add subtitle cards, inputting start/end timestamps and text subtitles.",
    "Review the interactive timeline markers.",
    "Export as SRT (SubRip) or VTT (WebVTT) caption files."
  ],
  "features": [
    "Clean visual timelines editor.",
    "One-click time shifts (+/- 100ms adjustments).",
    "Auto-formats SRT syntax strings."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "What is the difference between SRT and VTT?",
      "answer": "SRT is a simple text format used by most media players. VTT supports extra styling metadata and is standard for web video players."
    }
  ],
  "seoTitle": "Subtitle Generator - Create SRT & VTT Caption Files",
  "seoHeading": "Write and Sync Subtitles for Videos Offline",
  "seoIntro": "Create caption tracks for social videos. Draft paragraphs, sync start-end times, and export standard subtitle files.",
  "seoBody": "<h3>Boosting Video Reach</h3><p>Captions keep users watching when audio is muted. Use SRT files to improve accessibility and boost search indexing ranks.</p>"
};

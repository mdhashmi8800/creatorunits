import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-compressor",
  "slug": "video-compressor",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Video Compressor",
  "shortDesc": "Compress video files by adjusting bitrates, resolution, and format constraints client-side.",
  "metaDesc": "Compress MP4 and WebM videos online. Adjust target sizes and re-encode videos in-browser using WebCodecs API.",
  "instructions": [
    "Select your video file (MP4 or WebM).",
    "Select desired size target (e.g. Small, Medium, Custom).",
    "Select output resolution (1080p, 720p, 480p).",
    "Click 'Compress Video' to process locally."
  ],
  "features": [
    "Uses modern browser WebCodecs API for re-encoding.",
    "Shows estimated compressed file output bounds.",
    "Runs fully locally with no network upload overheads."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "How does local video compression work?",
      "answer": "Modern browsers support WebCodecs and canvas capture drawing to read video frames, scale dimensions, and re-write stream tracks."
    }
  ],
  "seoTitle": "Video Compressor - Compress MP4, WebM Videos in Browser",
  "seoHeading": "Reduce Video File Sizes Without Server Uploads",
  "seoIntro": "Send videos over Discord or email easily. Compress sizes locally using advanced HTML5 video re-encoding controls.",
  "seoBody": "<h3>Why Local Video Compression?</h3><p>Server video processors are slow and risky. Local processing finishes in seconds and keeps your personal clips private.</p>"
};

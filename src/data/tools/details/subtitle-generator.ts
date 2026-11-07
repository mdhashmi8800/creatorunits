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
    },
    {
      "question": "How does the browser-based video processor work?",
      "answer": "It uses modern browser APIs (such as HTML5 Video, Canvas, and WebAssembly) to read, compress, extract thumbnails, or convert video files fully on your local machine."
    },
    {
      "question": "Is my video uploaded to a cloud server to compress or extract details?",
      "answer": "No. Your video files are processed entirely client-side. Large file uploads are slow and risky; local processing ensures your video never leaves your computer, making it fast and secure."
    },
    {
      "question": "What formats are supported by the Subtitle Generator & Editor?",
      "answer": "The tool supports common video containers such as MP4, WebM, and MOV, and audio formats like MP3 depending on the browser's native codecs."
    },
    {
      "question": "Why is local video thumbnail extraction faster?",
      "answer": "Traditional online tools upload your video to their server, extract the frame, and send it back. Our tool renders the frame inside your browser Canvas instantly, saving gigabytes of bandwidth."
    },
    {
      "question": "Does video compression degrade visual quality?",
      "answer": "Compression will reduce the file size by adjusting the bitrate. By optimizing keyframes locally, it targets file size reductions with minimal visible loss for social feeds."
    },
    {
      "question": "Can I convert video files to MP3 audio?",
      "answer": "Yes, you can extract the audio track from video files and download it as a high-quality MP3 for podcasts or sound bites."
    },
    {
      "question": "Are there limits on video file sizes?",
      "answer": "The only limit is your device's memory and CPU capacity. Because it runs locally, there are no artificial file upload limits."
    },
    {
      "question": "Can I use this tool on a Chromebook or lightweight laptop?",
      "answer": "Yes. Since it runs in the web browser, it works on any platform (Windows, macOS, ChromeOS, Linux) without installing external media players."
    },
    {
      "question": "Is there any software I need to download?",
      "answer": "No. This tool operates entirely within your browser window using standard web capabilities."
    }
  ],
  "seoTitle": "Subtitle Generator - Create SRT & VTT Caption Files",
  "seoHeading": "Write and Sync Subtitles for Videos Offline",
  "seoIntro": "Create caption tracks for social videos. Draft paragraphs, sync start-end times, and export standard subtitle files.",
  "seoBody": "\n<h3>How the Subtitle Generator & Editor Works</h3>\n<p>Write, edit, and sync subtitles for videos, exporting as standard SRT or VTT files.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Upload video (optional, for timeline previews) or enter audio duration.</li>\n  <li>Add subtitle cards, inputting start/end timestamps and text subtitles.</li>\n  <li>Review the interactive timeline markers.</li>\n  <li>Export as SRT (SubRip) or VTT (WebVTT) caption files.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Clean visual timelines editor.</li>\n  <li>One-click time shifts (+/- 100ms adjustments).</li>\n  <li>Auto-formats SRT syntax strings.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

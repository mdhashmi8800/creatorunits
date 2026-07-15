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
  "seoBody": "\n<h3>Why You Should Use Our Subtitle Generator & Editor</h3>\n<p>The Subtitle Generator & Editor is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the Subtitle Generator & Editor provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Clean visual timelines editor.:</strong> Clean visual timelines editor.</li>\n  <li><strong>One-click time shifts (+/- 100ms adjustments).:</strong> One-click time shifts (+/- 100ms adjustments).</li>\n  <li><strong>Auto-formats SRT syntax strings.:</strong> Auto-formats SRT syntax strings.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our Subtitle Generator & Editor runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the Subtitle Generator & Editor with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Video Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

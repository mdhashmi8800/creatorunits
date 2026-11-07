import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-aspect-calc",
  "slug": "aspect-ratio-calculator",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Aspect Ratio Calculator",
  "shortDesc": "Calculate dimensions, pixel scales, and crop boundaries for standard screens.",
  "metaDesc": "Calculate video aspect ratios online. Enter width/height to get ratios (16:9, 9:16, 4:3) or auto-fill dimensions.",
  "instructions": [
    "Input a width or height parameter.",
    "Select standard presets (16:9 widescreen, 9:16 portrait, 1:1 square).",
    "The tool calculates the matching dimension.",
    "Copy standard pixel metrics configs."
  ],
  "features": [
    "Auto-locking ratios indicators.",
    "Interactive crop mask overlays previews.",
    "Includes common cinema layouts presets."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "What is an Aspect Ratio?",
      "answer": "An aspect ratio is the proportional relationship between a screen's width and its height (e.g., 16:9 widescreen, 9:16 mobile)."
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
      "question": "What formats are supported by the Aspect Ratio Calculator?",
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
  "seoTitle": "Aspect Ratio Calculator - Calculate Resolution Scales Online",
  "seoHeading": "Calculate Widescreen & Portrait Sizing Scales",
  "seoIntro": "Adjust video renders or design canvases. Lock dimensions to standard ratios to prevent stretching graphics.",
  "seoBody": "\n<h3>How the Aspect Ratio Calculator Works</h3>\n<p>Calculate dimensions, pixel scales, and crop boundaries for standard screens.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Input a width or height parameter.</li>\n  <li>Select standard presets (16:9 widescreen, 9:16 portrait, 1:1 square).</li>\n  <li>The tool calculates the matching dimension.</li>\n  <li>Copy standard pixel metrics configs.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Auto-locking ratios indicators.</li>\n  <li>Interactive crop mask overlays previews.</li>\n  <li>Includes common cinema layouts presets.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

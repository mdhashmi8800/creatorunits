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
      "question": "What formats are supported by the Video Compressor?",
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
  "seoTitle": "Video Compressor - Compress MP4, WebM Videos in Browser",
  "seoHeading": "Reduce Video File Sizes Without Server Uploads",
  "seoIntro": "Send videos over Discord or email easily. Compress sizes locally using advanced HTML5 video re-encoding controls.",
  "seoBody": "\n<h3>How the Video Compressor Works</h3>\n<p>Compress video files by adjusting bitrates, resolution, and format constraints client-side.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Select your video file (MP4 or WebM).</li>\n  <li>Select desired size target (e.g. Small, Medium, Custom).</li>\n  <li>Select output resolution (1080p, 720p, 480p).</li>\n  <li>Click 'Compress Video' to process locally.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Uses modern browser WebCodecs API for re-encoding.</li>\n  <li>Shows estimated compressed file output bounds.</li>\n  <li>Runs fully locally with no network upload overheads.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

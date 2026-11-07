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
      "question": "What formats are supported by the Transcript Cleaner & Formatter?",
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
  "seoTitle": "Transcript Cleaner - Format YouTube & Zoom Transcripts Online",
  "seoHeading": "Convert Raw Transcripts into Readable Articles",
  "seoIntro": "Transform messy timestamps dumps into clear, edited paragraphs. Clean transcript records for blog posts or notes.",
  "seoBody": "\n<h3>How the Transcript Cleaner & Formatter Works</h3>\n<p>Clean auto-generated transcripts by removing timestamps, speaker tags, and paragraph breaks.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Paste your raw transcript text block (e.g. from YouTube or Otter.ai).</li>\n  <li>Toggle formatting checkboxes (Remove timestamps, remove speaker IDs, join paragraphs).</li>\n  <li>Click 'Clean Transcript'.</li>\n  <li>Copy or export readable paragraphs.</li>\n</ol>\n"
};

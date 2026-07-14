import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-to-mp3",
  "slug": "video-to-mp3",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Video to MP3 Converter",
  "shortDesc": "Extract audio tracks from video files on-device and download as MP3 or WAV.",
  "metaDesc": "Extract audio from MP4 videos. Convert video tracks to WAV or MP3 files online. Runs 100% in your browser.",
  "instructions": [
    "Upload video file (MP4, MOV, WebM).",
    "Select target audio formats (WAV or MP3).",
    "Click 'Extract Audio'.",
    "Download the audio file."
  ],
  "features": [
    "Uses AudioContext to decode audio buffers.",
    "Lossless WAV exports option.",
    "Fast local file parsing."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "Is there a file size limit?",
      "answer": "Since decoding uses system RAM, very large files (over 500MB) might crash mobile browsers. Best for clips under 10 minutes."
    }
  ],
  "seoTitle": "Video to MP3 Converter - Extract Audio from Video Online",
  "seoHeading": "Extract Audio Tracks from Video Clips",
  "seoIntro": "Convert recordings and webinar videos into audio podcasts. Extract WAV/MP3 files locally in your browser.",
  "seoBody": "<h3>On-Device Audio Extraction</h3><p>Using Web Audio APIs, the browser decodes audio streams directly from video containers, bypassing upload latency.</p>"
};

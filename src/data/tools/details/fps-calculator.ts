import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-fps-calc",
  "slug": "fps-calculator",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "FPS Calculator & Frame Counter",
  "shortDesc": "Calculate total frames, duration, file sizes, and rendering times based on frames per second.",
  "metaDesc": "Calculate video frames and render sizes online. Convert durations to frames at 24fps, 30fps, 60fps instantly.",
  "instructions": [
    "Enter video duration (hours, minutes, seconds).",
    "Select target frame rate (23.976, 24, 25, 29.97, 30, 60 fps).",
    "View total frame counts and duration scales.",
    "Calculate estimated file size based on bitrate."
  ],
  "features": [
    "Drop-frame formats calculations.",
    "Converts frames back into timestamp code strings.",
    "Estimates raw video storage requirements."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "What is the difference between 30fps and 29.97fps?",
      "answer": "29.97fps is a drop-frame color television standard (NTSC) that skips specific frame numbers to match audio/video timing."
    }
  ],
  "seoTitle": "FPS Calculator - Convert Timecode to Frame Counts",
  "seoHeading": "Calculate Frame Rates and Render Duration Variables",
  "seoIntro": "Calculate editing frames ranges or estimate storage sizes. Input timecodes and FPS parameters to get accurate counts.",
  "seoBody": "<h3>SMPTE Timecode Computations</h3><p>Compute precise frame segments for video metadata editing or animation keyframes schedules.</p>"
};

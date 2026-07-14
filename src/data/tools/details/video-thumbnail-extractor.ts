import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-thumb-ext",
  "slug": "video-thumbnail-extractor",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "Video Thumbnail Extractor",
  "shortDesc": "Seek through video files and capture any frame as a high-quality JPG or PNG image.",
  "metaDesc": "Grab frames from video files online. Seek to exact timestamps and download high-resolution video screenshots.",
  "instructions": [
    "Upload video file.",
    "Use the player slider timeline to locate the exact frame.",
    "Use frame step buttons (+/- 1 frame) for precision.",
    "Click 'Capture Frame' and download as JPG/PNG."
  ],
  "features": [
    "Frame-by-frame seeking controls.",
    "Exports at exact native video resolution.",
    "No quality loss."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "Can I grab full HD thumbnails?",
      "answer": "Yes, because the canvas draws the frame at the video's absolute dimensions (e.g. 1920x1080 if it is a 1080p source)."
    }
  ],
  "seoTitle": "Video Thumbnail Extractor - Save Frame Screenshot from Video",
  "seoHeading": "Extract High-Quality Thumbnails from Video Files",
  "seoIntro": "Capture promotional covers or design reference frames. Seek, step, and capture native resolution screenshots.",
  "seoBody": "<h3>Accurate Frame Capture</h3><p>Standard OS screenshots are blurry. Extract crisp frames directly from video decoding contexts to prevent motion blur.</p>"
};

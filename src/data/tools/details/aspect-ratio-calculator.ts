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
    }
  ],
  "seoTitle": "Aspect Ratio Calculator - Calculate Resolution Scales Online",
  "seoHeading": "Calculate Widescreen & Portrait Sizing Scales",
  "seoIntro": "Adjust video renders or design canvases. Lock dimensions to standard ratios to prevent stretching graphics.",
  "seoBody": "<h3>Standard Modern Ratios</h3><p>Configure layouts: 16:9 is standard for YouTube, 9:16 for TikTok/Shorts, and 1:1 or 4:5 for Instagram feeds.</p>"
};

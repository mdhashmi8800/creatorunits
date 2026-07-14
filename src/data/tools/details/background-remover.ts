import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-bg-remover",
  "slug": "background-remover",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Background Remover (Color Key)",
  "shortDesc": "Remove solid color backgrounds (like green screens or white backdrops) from images instantly.",
  "metaDesc": "Remove white or green backgrounds from images online. Simple client-side chroma key transparency tool using canvas.",
  "instructions": [
    "Upload your image (PNG or JPG).",
    "Click on the image preview to pick the background color you want to remove.",
    "Adjust the tolerance slider to refine edge removal boundaries.",
    "Download your transparent PNG graphic."
  ],
  "features": [
    "Color-picker for target backgrounds.",
    "Adjustable color tolerance.",
    "Renders transparent alpha channels."
  ],
  "componentName": "BackgroundRemover",
  "faqs": [
    {
      "question": "Does this require cloud processing?",
      "answer": "No. The background removal executes in your browser canvas context, ensuring 100% data privacy."
    }
  ],
  "seoTitle": "Background Remover - Remove Solid Backgrounds from Images",
  "seoHeading": "Create Transparent Images by Removing Solid Backdrops",
  "seoIntro": "Isolate product images or cut out graphics. Pick backdrop colors and adjust edge tolerances.",
  "seoBody": "<h3>Chroma Key Color Removal</h3><p>Remove white backdrops from logos or green screens from photo layers directly on-device.</p>"
};

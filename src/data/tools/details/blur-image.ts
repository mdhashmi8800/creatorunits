import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-blur",
  "slug": "blur-image",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Blur Image Utility",
  "shortDesc": "Apply adjustable Gaussian blur effects to your images or hide sensitive zones.",
  "metaDesc": "Blur images online. Adjust blur radius parameters to create soft backgrounds or hide sensitive screenshot credentials.",
  "instructions": [
    "Upload the target graphic.",
    "Adjust the blur radius slider (1px to 100px).",
    "Preview the blurred filter state.",
    "Download the output JPG or PNG."
  ],
  "features": [
    "Adjustable pixel blur levels.",
    "Real-time visual feedback.",
    "Completely private local rendering."
  ],
  "componentName": "BlurImage",
  "faqs": [
    {
      "question": "Is the blur reversible after saving?",
      "answer": "No, once exported, the pixels are merged. Keep original copies of files."
    }
  ],
  "seoTitle": "Blur Image Online - Apply Gaussian Blur Filters",
  "seoHeading": "Apply Soft Blur and Privacy Masks to Images",
  "seoIntro": "Hide confidential details in screenshots or design aesthetic backdrops by applying custom blur levels.",
  "seoBody": "<h3>Gaussian Blur Operations</h3><p>Smooth pixel channels locally. Perfect for masking passwords or styling banner backdrops.</p>"
};

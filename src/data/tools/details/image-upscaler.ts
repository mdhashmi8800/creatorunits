import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-upscaler",
  "slug": "image-upscaler",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Upscaler & Sharpener",
  "shortDesc": "Upscale images by 2x or 4x scale with canvas contrast sharpening algorithms.",
  "metaDesc": "Upscale and sharpen low-res images online. Scale images client-side using canvas resampling and contrast sharpening filters.",
  "instructions": [
    "Upload your photo (JPG, PNG, WebP).",
    "Select scale sizing (200% or 400%).",
    "Toggle the sharpening filter.",
    "Export your upscaled high-res image."
  ],
  "features": [
    "2x and 4x canvas scaling modes.",
    "Edge sharpening filters.",
    "Zero server uploads."
  ],
  "componentName": "ImageUpscaler",
  "faqs": [
    {
      "question": "How does canvas sharpening work?",
      "answer": "It applies a convolution matrix (sharpening kernel) over pixels to enhance brightness contrast differences along boundaries."
    }
  ],
  "seoTitle": "Image Upscaler - Upscale & Sharpen Photos Online",
  "seoHeading": "Scale and Sharpen Low-Resolution Graphics",
  "seoIntro": "Upscale digital assets and logos. Enhance lines and contrasts using smart client-side scaling filters.",
  "seoBody": "<h3>Canvas-Based Interpolation</h3><p>Use high-quality bicubic resampling filters to enlarge images without creating blurry edges.</p>"
};

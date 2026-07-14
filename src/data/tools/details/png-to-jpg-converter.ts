import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-png-to-jpg",
  "slug": "png-to-jpg-converter",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "PNG to JPG Converter",
  "shortDesc": "Convert PNG transparent graphics into standard JPG images with quality adjustments.",
  "metaDesc": "Convert PNG to JPG online. Replace transparencies with white backgrounds and adjust quality settings offline.",
  "instructions": [
    "Upload your PNG file.",
    "Select background fill color (defaults to white).",
    "Set export compression quality level.",
    "Download the JPG file."
  ],
  "features": [
    "Replaces alpha channels with solid color fills.",
    "High speed client-side rendering.",
    "Adjusts output JPEG file constraints."
  ],
  "componentName": "PngToJpg",
  "faqs": [
    {
      "question": "What happens to transparency during conversion?",
      "answer": "JPEGs do not support transparency. Transparent areas are replaced with your chosen fill color (usually white)."
    }
  ],
  "seoTitle": "PNG to JPG Converter - Convert Transparency to Standard Image",
  "seoHeading": "Convert PNG Files to JPEG Online Instantly",
  "seoIntro": "Translate alpha-masked files back into widely supported JPEGs. Choose background fills and compression levels.",
  "seoBody": "<h3>When to Convert to JPG</h3><p>JPEGs use less space for photorealistic images. Convert PNG photographs to JPG to optimize page sizes.</p>"
};

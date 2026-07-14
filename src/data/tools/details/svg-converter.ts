import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-svg-conv",
  "slug": "svg-converter",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "SVG to PNG/JPG Converter",
  "shortDesc": "Convert vector SVG graphics into rasterized PNG or JPG files at custom resolutions.",
  "metaDesc": "Convert SVG vector files to PNG or JPG online. Render vectors to canvas and download at any custom dimensions.",
  "instructions": [
    "Upload your vector SVG file.",
    "Set target export width in pixels (locks height automatically).",
    "Select target format (PNG or JPG).",
    "Click 'Convert & Download'."
  ],
  "features": [
    "Enables scaling vector graphics cleanly before rendering.",
    "Supports high-resolution exports.",
    "Instant canvas rasterization."
  ],
  "componentName": "SvgConverter",
  "faqs": [
    {
      "question": "Will my graphic pixelate when converting SVG to PNG?",
      "answer": "No, because SVGs are vector shapes, you can scale the export size (e.g. to 2000px) before converting to keep it crisp."
    }
  ],
  "seoTitle": "SVG to PNG/JPG Converter - Render Vector Graphics Online",
  "seoHeading": "Rasterize Vector SVGs to High-Res Images",
  "seoIntro": "Convert icons and illustrations into transparent PNGs or JPEGs for office slides and social uploads.",
  "seoBody": "<h3>Client-Side SVG Rendering</h3><p>Your vectors are drawn directly onto high-density canvases at selected resolutions to protect design assets.</p>"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-to-img",
  "slug": "pdf-to-image",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "PDF to Image Converter",
  "shortDesc": "Convert PDF document pages into separate PNG or JPG image files on-device.",
  "metaDesc": "Convert PDF pages to PNG/JPG online. Renders PDF files to canvases and downloads high-res images instantly.",
  "instructions": [
    "Upload your PDF document.",
    "Select target export resolution (e.g. 150 DPI or 300 DPI).",
    "Select image format (PNG or JPG).",
    "Convert pages and download them in a zip pack."
  ],
  "features": [
    "Renders vectors cleanly.",
    "Downloads all pages as separate image grids.",
    "Maintains layout structures."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Why convert PDF pages to images?",
      "answer": "It makes pages viewable on platforms that don't support document files, or lets you reuse page designs in editor tools."
    }
  ],
  "seoTitle": "PDF to Image Converter - Save PDF Pages as PNG/JPG",
  "seoHeading": "Convert PDF Document Pages to Images",
  "seoIntro": "Transform reports pages into design assets. Render PDF vectors to high-density PNG or JPG cards.",
  "seoBody": "<h3>High-Quality Document Rasterization</h3><p>Browser page renderers paint PDF vector paths onto canvas layers at adjustable DPI variables for crisp outputs.</p>"
};

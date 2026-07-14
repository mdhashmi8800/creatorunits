import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-img-to-pdf",
  "slug": "image-to-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Image to PDF Converter",
  "shortDesc": "Convert multiple JPG, PNG, or WebP images into a single, structured PDF file.",
  "metaDesc": "Convert images to PDF online. Drag and drop PNG/JPG pictures, arrange layout order, and compile a single PDF file.",
  "instructions": [
    "Upload or drop pictures (JPG, PNG, WebP).",
    "Arrange page layout order sequence.",
    "Configure page sizes (Fit image, A4, Letter).",
    "Click 'Compile PDF'."
  ],
  "features": [
    "A4 and Letter size templates presets.",
    "Fits pages boundaries automatically.",
    "Drag-to-rearrange controls."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Will my images be compressed during compilation?",
      "answer": "You can configure quality parameters. By default, it preserves original dimensions to prevent blurring."
    }
  ],
  "seoTitle": "Image to PDF Converter - Convert PNG/JPG to PDF Document",
  "seoHeading": "Convert and Compile Images into a Single PDF",
  "seoIntro": "Convert scanner photos or design screenshots into single document packages. Reorder and export in seconds.",
  "seoBody": "<h3>Consolidating Picture Collections</h3><p>Arrange visual collections into document archives. Runs client-side to keep portfolios private.</p>"
};

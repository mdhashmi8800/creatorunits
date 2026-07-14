import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-compress",
  "slug": "compress-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Compress PDF Sizes",
  "shortDesc": "Reduce the file size of PDF documents by optimization structures and metadata filters.",
  "metaDesc": "Reduce PDF file sizes online. Clean redundant elements and compress document metadata on-device.",
  "instructions": [
    "Upload your target PDF document.",
    "Select optimization parameters (Low, Medium, High).",
    "Click 'Compress PDF'.",
    "Download your optimized smaller PDF document."
  ],
  "features": [
    "Strips duplicate font parameters.",
    "Compresses document structures.",
    "Zero server uploads."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Will compressing a PDF degrade the text clarity?",
      "answer": "No, text and vector graphics are preserved. The compressor optimizes structural metadata to reduce size."
    }
  ],
  "seoTitle": "Compress PDF Online - Reduce PDF File Size",
  "seoHeading": "Shrink PDF Document Footprints Safely",
  "seoIntro": "Optimize documents for email attachments. Strip metadata weights and clean structural layouts.",
  "seoBody": "<h3>Clean Document Architectures</h3><p>Modern PDFs contain redundant metadata layers. Cleaning these components minimizes size without affecting layout rendering.</p>"
};

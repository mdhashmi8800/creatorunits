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
    },
    {
      "question": "How does the Image to PDF Converter keep my PDF documents secure?",
      "answer": "All PDF calculations (merging, splitting, compression, locking, or unlocking) are handled locally using client-side JavaScript. Your confidential documents are never uploaded to any remote server."
    },
    {
      "question": "Can I merge multiple PDFs into one document?",
      "answer": "Yes. You can upload multiple files, arrange their order, and compile them into a single PDF document in seconds."
    },
    {
      "question": "How does the PDF unlock tool work?",
      "answer": "If you have a password-protected PDF, entering the password allows the script to decrypt the file locally and save a new version without security restrictions."
    },
    {
      "question": "Can I convert images to PDFs using this tool?",
      "answer": "Yes. You can drag and drop JPG, PNG, or WebP files, and the tool will assemble them into a clean, formatted PDF document."
    },
    {
      "question": "How does PDF compression reduce file size?",
      "answer": "It optimizes vector pathways, compress image blocks, and strips duplicate page resources, making the file lightweight for email attachments."
    },
    {
      "question": "Are my passwords saved when I lock a PDF?",
      "answer": "No. The encryption key is applied locally to compile the PDF. We never see, log, or store your passwords."
    },
    {
      "question": "Does this work for scanned PDF documents?",
      "answer": "Yes. It processes scanned pages as high-density images, keeping their original quality while resizing the wrapper structure."
    },
    {
      "question": "Is there any subscription fee for splitting large PDFs?",
      "answer": "No. It is 100% free with no page count restrictions or watermarks added."
    },
    {
      "question": "Can I use this tool on my mobile phone?",
      "answer": "Yes. The layout is mobile-friendly, enabling you to manage PDF documents easily on your smartphone or tablet."
    }
  ],
  "seoTitle": "Image to PDF Converter - Convert PNG/JPG to PDF Document",
  "seoHeading": "Convert and Compile Images into a Single PDF",
  "seoIntro": "Convert scanner photos or design screenshots into single document packages. Reorder and export in seconds.",
  "seoBody": "\n<h3>How the Image to PDF Converter Works</h3>\n<p>Convert multiple JPG, PNG, or WebP images into a single, structured PDF file.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Upload or drop pictures (JPG, PNG, WebP).</li>\n  <li>Arrange page layout order sequence.</li>\n  <li>Configure page sizes (Fit image, A4, Letter).</li>\n  <li>Click 'Compile PDF'.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>A4 and Letter size templates presets.</li>\n  <li>Fits pages boundaries automatically.</li>\n  <li>Drag-to-rearrange controls.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

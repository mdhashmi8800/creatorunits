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
    },
    {
      "question": "How does the PDF to Image Converter keep my PDF documents secure?",
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
  "seoTitle": "PDF to Image Converter - Save PDF Pages as PNG/JPG",
  "seoHeading": "Convert PDF Document Pages to Images",
  "seoIntro": "Transform reports pages into design assets. Render PDF vectors to high-density PNG or JPG cards.",
  "seoBody": "\n<h3>How the PDF to Image Converter Works</h3>\n<p>Convert PDF document pages into separate PNG or JPG image files on-device.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Upload your PDF document.</li>\n  <li>Select target export resolution (e.g. 150 DPI or 300 DPI).</li>\n  <li>Select image format (PNG or JPG).</li>\n  <li>Convert pages and download them in a zip pack.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Renders vectors cleanly.</li>\n  <li>Downloads all pages as separate image grids.</li>\n  <li>Maintains layout structures.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

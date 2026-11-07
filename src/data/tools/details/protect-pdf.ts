import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-protect",
  "slug": "protect-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Protect PDF Document",
  "shortDesc": "Secure your PDF documents by encrypting them with strong passwords.",
  "metaDesc": "Protect PDF files online. Encrypt documents with strong custom passwords to restrict opening rights locally.",
  "instructions": [
    "Upload the target PDF file.",
    "Enter a secure opening password.",
    "Click 'Protect PDF'.",
    "Download the encrypted PDF document."
  ],
  "features": [
    "Adds secure user opening passwords.",
    "Uses AES encryption protocols.",
    "100% private local compression."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Is this password encryption secure?",
      "answer": "Yes, it uses standard 128-bit encryption schemas, making it safe for business documentation transfers."
    },
    {
      "question": "How does the Protect PDF Document keep my PDF documents secure?",
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
  "seoTitle": "Protect PDF - Add Password Security Encryption",
  "seoHeading": "Secure and Encrypt PDF Files Online",
  "seoIntro": "Prevent unauthorized access to business lists, contracts, or tax slides. Encrypt files locally with passwords.",
  "seoBody": "\n<h3>How the Protect PDF Document Works</h3>\n<p>Secure your PDF documents by encrypting them with strong passwords.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Upload the target PDF file.</li>\n  <li>Enter a secure opening password.</li>\n  <li>Click 'Protect PDF'.</li>\n  <li>Download the encrypted PDF document.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Adds secure user opening passwords.</li>\n  <li>Uses AES encryption protocols.</li>\n  <li>100% private local compression.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

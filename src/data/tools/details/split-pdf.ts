import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-split",
  "slug": "split-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Split PDF Pages",
  "shortDesc": "Extract specific page ranges or split a PDF file into individual pages.",
  "metaDesc": "Split PDF pages online. Select custom page ranges (e.g. 1-3, 5) or export all pages as individual documents.",
  "instructions": [
    "Upload your PDF document.",
    "Specify target page splits (e.g., '1-3' or select 'Extract All Pages').",
    "Click 'Split PDF'.",
    "Download the extracted file bundle."
  ],
  "features": [
    "Supports page range formats (e.g. 1-2, 5).",
    "Extracts pages instantly.",
    "Offline-first processing."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Can I split password-protected PDFs?",
      "answer": "You must first decrypt the PDF using our Unlock tool before extracting pages."
    },
    {
      "question": "How does the Split PDF Pages keep my PDF documents secure?",
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
  "seoTitle": "Split PDF Online - Extract Pages from PDF Document",
  "seoHeading": "Divide PDF Files into Separate Page Ranges",
  "seoIntro": "Isolate important chapters or strip unnecessary pages. Split files client-side with precision indicators.",
  "seoBody": "\n<h3>Why You Should Use Our Split PDF Pages</h3>\n<p>The Split PDF Pages is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the Split PDF Pages provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Supports page range formats (e.g. 1-2, 5).:</strong> Supports page range formats (e.g. 1-2, 5).</li>\n  <li><strong>Extracts pages instantly.:</strong> Extracts pages instantly.</li>\n  <li><strong>Offline-first processing.:</strong> Offline-first processing.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our Split PDF Pages runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the Split PDF Pages with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the PDF Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

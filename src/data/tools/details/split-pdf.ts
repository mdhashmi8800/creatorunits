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
    }
  ],
  "seoTitle": "Split PDF Online - Extract Pages from PDF Document",
  "seoHeading": "Divide PDF Files into Separate Page Ranges",
  "seoIntro": "Isolate important chapters or strip unnecessary pages. Split files client-side with precision indicators.",
  "seoBody": "<h3>Page Extraction</h3><p>Extracting page vectors locally keeps data isolated from cloud databases, protecting your documents details.</p>"
};

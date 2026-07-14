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
    }
  ],
  "seoTitle": "Protect PDF - Add Password Security Encryption",
  "seoHeading": "Secure and Encrypt PDF Files Online",
  "seoIntro": "Prevent unauthorized access to business lists, contracts, or tax slides. Encrypt files locally with passwords.",
  "seoBody": "<h3>On-Device File Protection</h3><p>Encrypting file data structures on-device secures your assets before you transmit them over emails.</p>"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-unlock",
  "slug": "unlock-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Unlock PDF Password",
  "shortDesc": "Remove password security limits from protected PDF files if you know the password.",
  "metaDesc": "Unlock password protected PDFs online. Input password to decrypt and save PDF files without restrictions.",
  "instructions": [
    "Upload protected PDF file.",
    "Enter the file's current opening password.",
    "Click 'Unlock PDF'.",
    "Download the decrypted PDF."
  ],
  "features": [
    "Removes print and copy restrictions.",
    "Decrypts PDF encryption schemas.",
    "Processed locally."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "Can this crack a forgotten password?",
      "answer": "No. For security compliance, you must provide the correct password to unlock the document container."
    }
  ],
  "seoTitle": "Unlock PDF - Remove Password Security Restraints",
  "seoHeading": "Decrypt Protected PDF Files Instantly",
  "seoIntro": "Unlock documents to enable copying, editing, and printing. Input passwords to decrypt files client-side.",
  "seoBody": "<h3>Standard PDF Decryption</h3><p>Browser cryptographies decrypt files on-device, meaning decrypted data never traverses internet networks.</p>"
};

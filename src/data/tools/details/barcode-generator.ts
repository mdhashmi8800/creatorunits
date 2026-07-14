import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-barcode",
  "slug": "barcode-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Barcode Generator",
  "shortDesc": "Generate Code 128, EAN-13, or UPC barcode graphics ready for printing.",
  "metaDesc": "Generate standard barcodes online. Convert numeric strings into Code 128, EAN, or UPC barcode images.",
  "instructions": [
    "Type code characters (numbers or alphanumeric string).",
    "Select barcode standard format (Code 128, EAN-13, or UPC).",
    "Click 'Generate Barcode'.",
    "Download barcode image."
  ],
  "features": [
    "Supports Code 128, EAN-13, and UPC layouts.",
    "Renders crisp vector lines outputs on canvas.",
    "Includes human-readable code labels underneath."
  ],
  "componentName": "BarcodeGenerator",
  "faqs": [
    {
      "question": "What characters are supported in Code 128?",
      "answer": "Code 128 is high-density alphanumeric, meaning it supports numbers, lowercase/uppercase letters, and symbols."
    }
  ],
  "seoTitle": "Barcode Generator - Create Code 128, EAN, UPC Barcodes",
  "seoHeading": "Generate Retail & Shipping Barcodes Online",
  "seoIntro": "Label physical inventory items or package tracking codes. Create clean printable barcode graphics instantly.",
  "seoBody": "<h3>Standard Barcode Protocols</h3><p>Generate Code 128 barcodes for warehouse tags or EAN-13/UPC lines for retail packaging covers.</p>"
};

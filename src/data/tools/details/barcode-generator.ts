import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-barcode",
  "slug": "barcode-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Barcode Generator",
  "shortDesc": "Generate crisp Code 128 and Code 39 barcodes for inventory tracking, retail packaging, and shipping labels.",
  "metaDesc": "Free online barcode generator. Create printable Code 128 and Code 39 barcodes for product SKUs, warehouse inventory, and packaging. High-res PNG export.",
  "instructions": [
    "Select your barcode symbology: Code 128 (Universal logistics/retail) or Code 39 (Alphanumeric industrial).",
    "Enter your barcode value (letters, numbers, or standard punctuation).",
    "Adjust bar height (40px to 160px) and print density scale (1x to 4x for 300 DPI print quality).",
    "Toggle the human-readable text label below the barcode bars on or off.",
    "Click 'Download Barcode PNG' to export a high-resolution graphic ready for printing or packaging design."
  ],
  "features": [
    "Supports high-density Code 128 with automated modulo 103 checksum calculation.",
    "Supports industrial Code 39 symbology with standard start/stop delimiters (*).",
    "Configurable print density scale (up to 4x) for crisp 300+ DPI thermal and laser printing.",
    "Optional human-readable OCR text label underneath barcode bars.",
    "100% client-side rendering on HTML5 canvas with zero data transmission to external servers.",
    "Compatible with all handheld laser barcode scanners, image CMOS readers, and mobile phone apps."
  ],
  "componentName": "BarcodeGenerator",
  "faqs": [
    {
      "question": "What is the difference between Code 128 and Code 39 barcodes?",
      "answer": "Code 128 is a modern, high-density linear barcode format that encodes the entire 128-character ASCII table (uppercase, lowercase, numbers, and symbols) with a built-in modulo 103 checksum. It is the international standard for shipping labels, carton tracking, and inventory management. Code 39 is an older, simpler symbology that encodes only uppercase letters, digits 0-9, and six punctuation marks. Code 128 produces significantly more compact barcodes for the same data length."
    },
    {
      "question": "Can I use this free barcode generator for retail products sold in stores?",
      "answer": "For internal retail operations, warehouse inventory SKUs, customer membership cards, and local shelf tags, yes — Code 128 barcodes work with all POS laser scanners. However, if you sell products through major retail chains (Walmart, Target) or online marketplaces (Amazon), you are required to use official GS1 GTIN barcodes (UPC-A in North America or EAN-13 internationally). These require an officially registered company prefix from GS1 (gs1.org) and cannot be legally generated for retail sale from any free online generator."
    },
    {
      "question": "What is the minimum recommended print size for reliable barcode scanning?",
      "answer": "The minimum recommended bar height for handheld scanners is 15 mm (0.6 inches). The width depends on the character count, but each narrow bar module should be printed at a minimum of 0.25 mm (10 mils). For commercial packaging, always print at 300 DPI or higher and preserve a 'quiet zone' (blank white space) of at least 10 times the narrow bar width on both sides."
    },
    {
      "question": "Why won't my handheld scanner read my printed barcode?",
      "answer": "Common causes of scanning failure include: (1) inadequate quiet zones (printing text or graphics too close to the outer bars), (2) low print resolution resulting in fuzzy bar edges, (3) insufficient color contrast (bars must be solid black on a pure white background — avoid red backgrounds because laser scanners use red light), or (4) invalid characters in Code 39."
    },
    {
      "question": "Do generated barcodes expire or have usage fees?",
      "answer": "No. Barcodes generated on Creator Units are 100% free for both personal and commercial use forever. There are no licensing fees, usage limits, or watermarks."
    },
    {
      "question": "Are my barcode numbers or product SKUs private?",
      "answer": "Yes. Our Barcode Generator operates 100% locally inside your web browser. None of your product numbers, internal SKUs, or customer identifiers are sent over the network or saved to any database."
    }
  ],
  "seoTitle": "Free Barcode Generator: Code 128, EAN & UPC",
  "seoHeading": "Generate Code 128 & Code 39 Barcodes Online for Free",
  "seoIntro": "Create high-resolution, printable 1D barcodes for product labeling, warehouse inventory management, library assets, and shipping tags. 100% free, browser-native, and private.",
  "seoBody": "\n<h3>Barcode Symbology Comparison: Code 128 vs. Code 39 vs. UPC/EAN</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Symbology</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Character Set</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Density / Compactness</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Primary Use Case</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Code 128 (Supported)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Full 128 ASCII (Letters, Numbers, Symbols)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">High (11 modules per character)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Shipping labels, warehouse SKUs, supply chain, healthcare</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Code 39 (Supported)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Uppercase A-Z, 0-9, and <code>- . $ / + %</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Low (15 modules per character)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Automotive manufacturing, government ID badges, industrial tracking</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>UPC-A / EAN-13</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Fixed 12 or 13 numeric digits only</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Medium (Fixed length)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Global retail checkout (Requires official GS1.org registration)</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Understanding Retail POS Limitations: GS1 vs. Custom Barcodes</h3>\n<p>It is important to understand the genuine legal distinction between generating a barcode graphic and issuing a commercial retail barcode:</p>\n<ul>\n  <li><strong>Internal Business Use:</strong> You can freely use our Code 128 or Code 39 generator for your own warehouse inventory, warehouse bin labels, internal product catalog codes, library books, event wristbands, and membership passes. Any standard barcode scanner will read them perfectly.</li>\n  <li><strong>Commercial Retail (Amazon, Walmart, Supermarkets):</strong> Global retailers scan 12-digit UPC or 13-digit EAN barcodes linked to the global GS1 database. You cannot fabricate these numbers yourself; you must purchase an authentic company prefix license from <a href=\"https://www.gs1.org/\" target=\"_blank\" rel=\"noopener noreferrer\">GS1.org</a> to guarantee uniqueness across worldwide commerce.</li>\n</ul>\n\n<h3>Printing Guidelines for 100% First-Time Scan Success</h3>\n<ol>\n  <li><strong>Always Maintain Quiet Zones:</strong> Leave at least 0.25 inches (6 mm) of blank white margin to the left and right of the barcode. Handheld scanners measure contrast transitions and require blank space to identify the start pattern.</li>\n  <li><strong>Print at 300+ DPI:</strong> Thermal label printers and standard office laser printers should be set to 300 DPI or higher to ensure the narrowest bars remain sharp and unpixelated.</li>\n  <li><strong>Stick to High Contrast:</strong> Never print red bars or print on red paper — barcode lasers operate at a 650nm red wavelength and interpret red ink as white space. Black bars on pure white backgrounds are optimal.</li>\n</ol>\n\n<h3>Related Utilities for Physical Products &amp; Creators</h3>\n<ul>\n  <li><a href=\"/tools/utility/qr-code-generator\">Free QR Code Generator</a> — Generate 2D QR codes for website URLs, menus, and WiFi.</li>\n  <li><a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a> — Track marketing campaign performance across printed QR codes.</li>\n  <li><a href=\"/category/utility\">Explore All Utility Tools</a> — Unit converters, text formatters, and password utilities.</li>\n</ul>\n"
};

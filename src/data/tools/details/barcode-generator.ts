import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-barcode",
  "slug": "barcode-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Free Barcode Generator — Code 128, EAN-13, UPC-A & Code 39",
  "shortDesc": "Generate printable linear barcodes in Code 128, EAN-13, UPC-A, and Code 39. Download high-resolution PNG & SVG vector files with automatic checksums.",
  "metaDesc": "Free online barcode generator. Create printable Code 128, EAN-13, UPC-A, and Code 39 barcodes for product SKUs, inventory, and retail labels. High-res PNG & SVG export.",
  "instructions": [
    "Select your barcode symbology: Code 128 (Logistics/Shipping), EAN-13 (International Retail), UPC-A (North America), or Code 39 (Industrial).",
    "Enter your barcode value (letters, numbers, or standard punctuation depending on symbology).",
    "For EAN-13 and UPC-A, enter 12 or 11 digits — the tool automatically computes and verifies the Modulo 10 check digit.",
    "Adjust bar height (40px to 160px) and print density scale (1x to 4x for 300+ DPI print resolution).",
    "Toggle human-readable OCR text labels on or off.",
    "Export your barcode as a high-resolution PNG, vector SVG, or click 'Print Barcode' to print directly to a thermal label printer."
  ],
  "features": [
    "Full support for 4 major symbologies: Code 128, EAN-13, UPC-A, and Code 39.",
    "Automated Modulo 10 check digit calculation for retail EAN-13 and UPC-A barcodes.",
    "Automated Modulo 103 checksum calculation for high-density Code 128 barcodes.",
    "Dual export formats: High-res PNG raster graphic or clean scalable vector SVG.",
    "One-click browser print integration tailored for standard label and thermal receipt printers.",
    "Customizable bar height and print density scale (up to 4x) for 300+ DPI clarity.",
    "100% private and client-side: all barcode generation runs locally in your browser with zero network tracking."
  ],
  "componentName": "BarcodeGenerator",
  "faqs": [
    {
      "question": "What barcode symbologies does this generator support?",
      "answer": "Our generator supports the four most widely used linear barcode symbologies: (1) Code 128 — universal standard for warehouse SKUs, logistics cartons, and shipping labels; (2) EAN-13 — the 13-digit global standard for retail point-of-sale outside North America and ISBN book publishing; (3) UPC-A — the 12-digit standard for retail products sold across the United States and Canada; and (4) Code 39 — industrial alphanumeric symbology widely used in manufacturing, defense, and healthcare."
    },
    {
      "question": "How does automated checksum calculation work for EAN-13 and UPC-A?",
      "answer": "EAN-13 and UPC-A require a final check digit calculated using the standard GS1 Modulo 10 algorithm. When you type 12 digits for EAN-13 (or 11 digits for UPC-A), our generator automatically computes the mathematical check digit, validates the parity structure, and appends it to the barcode matrix. If you paste an existing 13-digit or 12-digit code with an incorrect checksum, the tool flags the discrepancy and corrects it automatically."
    },
    {
      "question": "Can I use barcodes generated here for products sold in retail stores (Walmart, Amazon, Target)?",
      "answer": "If you already hold an authorized GS1 company prefix, you can input your registered GTIN numbers here to generate crystal-clear, print-ready PNG or vector SVG graphics for your product packaging and labels. However, if you do not yet own registered barcodes, you must register an authentic company prefix through GS1 (gs1.org) before distributing products through commercial retail chains."
    },
    {
      "question": "What is the benefit of downloading vector SVG barcodes vs. PNG?",
      "answer": "PNG is a raster bitmap image ideal for digital previews and basic labels. Vector SVG is resolution-independent, meaning graphic designers can import it into Adobe Illustrator, CorelDRAW, or InDesign and scale it to any size without pixelation or loss of edge sharpness. This is essential for professional packaging printing and flexographic label presses."
    },
    {
      "question": "What is the recommended print resolution and quiet zone for reliable barcode scanning?",
      "answer": "Always print barcodes at 300 DPI or higher using laser or thermal transfer printers. Maintain a 'quiet zone' (a solid white blank margin) of at least 10 times the width of the narrowest bar (approximately 6 mm or 0.25 inches) on both sides of the barcode. Scanners require this white space to establish optical contrast and detect the start pattern."
    },
    {
      "question": "Are generated barcodes free for commercial use and completely private?",
      "answer": "Yes. Barcodes generated on Creator Units are 100% free for both personal and commercial use without royalties, watermarks, or subscription traps. All rendering executes entirely inside your browser's JavaScript engine — none of your internal SKUs, product numbers, or customer IDs are ever transmitted to or stored on our servers."
    }
  ],
  "seoTitle": "Free Barcode Generator — Code 128, EAN-13, UPC-A & Code 39",
  "seoHeading": "Generate High-Resolution Code 128, EAN-13, UPC-A & Code 39 Barcodes",
  "seoIntro": "Create print-ready linear barcodes for retail product packaging, warehouse inventory SKUs, library cataloging, and logistics labels. Instant PNG and vector SVG export with automated GS1 checksum calculation.",
  "seoBody": "\n<h3>Barcode Symbology Comparison Matrix</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Symbology</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Character Set</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Structure &amp; Checksum</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Primary Industry Applications</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Code 128</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Full 128 ASCII (Letters, Numbers, Symbols)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">High density, Modulo 103 checksum</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Shipping labels (FedEx, UPS), Amazon FBA carton labels, warehouse inventory</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>EAN-13</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">13 numeric digits only</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Variable left parity, Modulo 10 check digit</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Supermarket POS checkout in Europe, Asia, Latin America, and ISBN books</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>UPC-A</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">12 numeric digits only</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Fixed 6+6 structure, Modulo 10 check digit</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">North American retail checkout (USA &amp; Canada consumer packaged goods)</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Code 39</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Uppercase A-Z, 0-9, and <code>- . $ / + %</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Start/stop asterisks (*), discrete symbology</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Automotive manufacturing (AIAG), aerospace, government badges, healthcare</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>How to Choose Between Raster PNG and Vector SVG</h3>\n<ul>\n  <li><strong>Use Vector SVG:</strong> For packaging artwork, commercial flexographic printing, product box mockups, and importing into vector design software (Illustrator, CorelDRAW, Inkscape). Vectors scale infinitely without pixelation.</li>\n  <li><strong>Use High-Resolution PNG (3x / 4x):</strong> For direct digital embedding, web invoices, Microsoft Word / Excel inventory manifests, and standard desktop thermal label printers.</li>\n</ul>\n\n<h3>Best Practices for 100% First-Pass Barcode Scan Rates</h3>\n<ol>\n  <li><strong>Preserve Adequate Quiet Zones:</strong> Handheld laser and CMOS camera scanners require a minimum of 10 module widths of blank white margin on both sides of the barcode. Trimming or overlapping graphics into this zone will cause scan failures.</li>\n  <li><strong>Maintain High Contrast:</strong> Bars must be printed in dense black ink on a solid white surface. Never print red bars or use red paper — standard optical scanners use 650nm red LEDs or lasers and cannot detect contrast against red backgrounds.</li>\n  <li><strong>Verify Print Density:</strong> Thermal label printers must be calibrated to ensure bar widths do not bleed into adjoining spaces, preserving exact dimensional ratios.</li>\n</ol>\n\n<h3>Related Free Creator Utilities</h3>\n<ul>\n  <li><a href=\"/tools/utility/qr-code-generator\">Free QR Code Generator</a> — Create 2D QR codes for website URLs, menus, and contact cards.</li>\n  <li><a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a> — Add Google Analytics tracking tags to marketing QR codes.</li>\n  <li><a href=\"/category/utility\">Explore All Utility Tools</a> — URL tools, unit converters, and password utilities.</li>\n</ul>\n"
};

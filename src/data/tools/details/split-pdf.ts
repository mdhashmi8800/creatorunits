import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "pdf-split",
  "slug": "split-pdf",
  "category": "pdf",
  "categoryName": "PDF Tools",
  "title": "Split PDF Pages Online — Extract Page Ranges Free",
  "shortDesc": "Extract custom page ranges or separate multi-page PDF documents into individual files with 100% on-device client-side processing.",
  "metaDesc": "Free online PDF splitter. Extract specific page ranges (e.g., 1-3, 5, 8-10) or split every page into a standalone PDF. 100% private, no file uploads.",
  "instructions": [
    "Upload or drag & drop your PDF file into the dropzone.",
    "Select your split mode: 'Custom Page Ranges' (e.g. 1-3, 5, 8) or 'Extract All Pages as Separate Files'.",
    "Preview page thumbnails to confirm your selection.",
    "Click 'Split PDF' to extract the chosen pages instantly in your browser memory.",
    "Download your extracted PDF document or ZIP bundle immediately."
  ],
  "features": [
    "Flexible page range selector supporting complex syntax (e.g., `1-4, 7, 9-12`).",
    "One-click 'Split All' mode creating individual 1-page PDF documents.",
    "Zero server uploads: all PDF parsing and rendering happens in client-side JavaScript memory.",
    "Preserves vector fonts, form fields, high-res images, and document bookmarks.",
    "100% free with no file size caps, page limits, or watermark stamps."
  ],
  "componentName": "PdfUtilities",
  "faqs": [
    {
      "question": "How does client-side PDF splitting work?",
      "answer": "Our tool uses client-side WebAssembly and JavaScript PDF parsers (PDF-Lib). When you load a file, your browser's local memory parses the PDF document structure and writes a new PDF binary containing only your selected page objects. No network upload or server processing takes place."
    },
    {
      "question": "How do I format custom page ranges?",
      "answer": "Use hyphens for continuous page sequences and commas for individual pages. For example: `1-5, 8, 12-15` will extract pages 1 through 5, page 8, and pages 12 through 15 into a single organized PDF document."
    },
    {
      "question": "Is it safe to split confidential contracts or tax documents here?",
      "answer": "Yes, absolutely. Because the splitting process occurs entirely within your local browser sandbox and never communicates with an external server, your sensitive business contracts, medical forms, and financial statements remain 100% confidential on your device."
    },
    {
      "question": "Can I split a password-protected PDF?",
      "answer": "If a PDF has an open password, you must decrypt it first using our Unlock PDF tool before splitting pages. Once decrypted, you can extract any page ranges seamlessly."
    },
    {
      "question": "Does splitting reduce the print quality or resolution of images inside the PDF?",
      "answer": "No. Our tool performs lossless page extraction. Original vector typography, high-DPI image assets, and color profiles are transferred directly into the new PDF container without re-compression."
    },
    {
      "question": "Is there a limit on how many pages I can split?",
      "answer": "No. You can split documents with hundreds of pages. Processing speed depends entirely on your local computer CPU and memory."
    }
  ],
  "seoTitle": "Split PDF Online — Extract Pages from PDF Documents Free",
  "seoHeading": "Extract Specific Page Ranges from PDF Files Instantly",
  "seoIntro": "Need to extract a specific chapter, invoice, or signature page from a massive PDF? Our free, browser-based Split PDF tool isolates custom page ranges locally in milliseconds — without uploading your confidential files to the cloud.",
  "seoBody": "\n<h3>Why Client-Side PDF Splitting Protects Your Privacy</h3>\n<p>Most online PDF tools require you to upload your files to remote cloud servers where they are queued, processed, and stored on third-party databases. For confidential legal contracts, bank statements, client presentations, and tax returns, cloud uploads represent a serious data privacy liability.</p>\n<p>Creator Units eliminates this vulnerability entirely. By executing PDF extraction <strong>100% client-side in browser RAM</strong>, your confidential documents never cross the internet.</p>\n\n<h3>Supported Page Range Syntax Examples</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Input Syntax</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Extracted Result</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Common Use Case</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>1-3</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Pages 1, 2, and 3</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Extracting executive summary &amp; table of contents</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>5</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Single Page 5 only</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Isolating a signed contract page or receipt</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>1-2, 5, 8-10</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Pages 1, 2, 5, 8, 9, 10</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Compiling custom multi-section client reports</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Extract All</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Every page as an individual PDF file</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Archiving invoices or single-page slide decks</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Complementary Free PDF Utilities</h3>\n<ul>\n  <li><a href=\"/tools/pdf/merge-pdf\">Merge PDF</a> — Combine multiple PDF documents into a single organized file.</li>\n  <li><a href=\"/tools/pdf/compress-pdf\">Compress PDF</a> — Reduce document byte weight for email attachments.</li>\n  <li><a href=\"/tools/pdf/protect-pdf\">Protect PDF</a> — Encrypt documents with 256-bit AES passwords client-side.</li>\n  <li><a href=\"/tools/pdf/image-to-pdf\">Image to PDF Converter</a> — Assemble JPG, PNG, and WebP graphics into clean PDF portfolios.</li>\n</ul>\n"
};

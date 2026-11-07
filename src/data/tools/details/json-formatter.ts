import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-json-format",
  "slug": "json-formatter",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JSON Formatter & Prettifier",
  "shortDesc": "Format and indent raw JSON string variables into readable, highlighted objects.",
  "metaDesc": "Format and prettify JSON online. Paste raw code, choose spacing indentation, and output clean formatted scripts.",
  "instructions": [
    "Paste your raw, unformatted JSON data block.",
    "Select spacing size (2 spaces, 4 spaces, or tabs).",
    "Click 'Prettify JSON' (or choose 'Minify' to remove spaces).",
    "Copy formatted output."
  ],
  "features": [
    "Custom indentation variables.",
    "Supports minifying output data.",
    "Syntax coloring previews."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "Can this process large JSON documents?",
      "answer": "Yes, but very large files (over 50MB) may lag browser rendering due to syntax highlighting constraints."
    },
    {
      "question": "Why should developers use the JSON Formatter & Prettifier?",
      "answer": "It provides quick, client-side developer utilities like JSON formatting, Base64 encoding, minification, and UUID generation without opening heavy terminal commands."
    },
    {
      "question": "Are my encoded strings or JSON tokens secure?",
      "answer": "Yes. Unlike typical online formatters, your strings and JWT tokens are processed entirely locally. Sensitive database keys or user tokens are never sent to external APIs."
    },
    {
      "question": "What is the difference between formatting and minifying?",
      "answer": "Formatting adds spacing and indents for human readability. Minifying strips whitespace and comments to compress file sizes for faster web serving."
    },
    {
      "question": "Can I decode JSON Web Tokens (JWT) here?",
      "answer": "Yes. You can paste your token, and the script will decode the header, payload, and signature locally without security risks."
    },
    {
      "question": "How does the UUID Generator work?",
      "answer": "It generates universally unique identifiers conforming to RFC4122 specifications, ensuring secure keys for databases and APIs."
    },
    {
      "question": "Is there a size limit for files minified?",
      "answer": "No. Since calculations run on-device, the tool handles large code blocks instantly."
    },
    {
      "question": "Can I format invalid JSON payloads?",
      "answer": "The tool highlights syntax errors (like missing commas or quotes) so you can debug structure issues in real time."
    },
    {
      "question": "Does the tool support dark mode for developers?",
      "answer": "Yes. The entire CreatorUnits.com interface is designed with a premium, developer-friendly dark theme."
    },
    {
      "question": "Do I need to install any package to use this?",
      "answer": "No. Everything runs standard in your web browser sandbox, eliminating CLI installations."
    }
  ],
  "seoTitle": "JSON Formatter - Prettify & Indent Code Online",
  "seoHeading": "Format and Prettify JSON Data Structs",
  "seoIntro": "Convert dense APIs logs dumps into readable hierarchies. Clean spaces and format indentations client-side.",
  "seoBody": "\n<h3>How the JSON Formatter & Prettifier Works</h3>\n<p>Format and indent raw JSON string variables into readable, highlighted objects.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Paste your raw, unformatted JSON data block.</li>\n  <li>Select spacing size (2 spaces, 4 spaces, or tabs).</li>\n  <li>Click 'Prettify JSON' (or choose 'Minify' to remove spaces).</li>\n  <li>Copy formatted output.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Custom indentation variables.</li>\n  <li>Supports minifying output data.</li>\n  <li>Syntax coloring previews.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

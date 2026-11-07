import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-json-val",
  "slug": "json-validator",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JSON Validator & Parser",
  "shortDesc": "Check JSON strings for syntax errors, showing specific line/column offsets of issues.",
  "metaDesc": "Validate JSON syntax online. Validate parsing rules, detect missing brackets or trailing commas, and locate errors lines.",
  "instructions": [
    "Input or paste JSON code scripts.",
    "Click 'Validate JSON'.",
    "View status indicator (success message or error report).",
    "Locate specific line references if validation fails."
  ],
  "features": [
    "Locates syntax error lines.",
    "Detects trailing commas issues.",
    "Clean status dashboards."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "What are common JSON syntax errors?",
      "answer": "Missing closing brackets, mismatched quotation marks, unescaped quote characters, or trailing commas at arrays endings."
    },
    {
      "question": "Why should developers use the JSON Validator & Parser?",
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
  "seoTitle": "JSON Validator - Validate JSON Syntax Errors Online",
  "seoHeading": "Validate JSON Scripts and Detect Parsing Errors",
  "seoIntro": "Debug API variables before uploading codes. Locate missing braces and syntax bugs locally in your browser.",
  "seoBody": "\n<h3>How the JSON Validator & Parser Works</h3>\n<p>Check JSON strings for syntax errors, showing specific line/column offsets of issues.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Input or paste JSON code scripts.</li>\n  <li>Click 'Validate JSON'.</li>\n  <li>View status indicator (success message or error report).</li>\n  <li>Locate specific line references if validation fails.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Locates syntax error lines.</li>\n  <li>Detects trailing commas issues.</li>\n  <li>Clean status dashboards.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

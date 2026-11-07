import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-uuid-gen",
  "slug": "uuid-generator",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "UUID v4 Generator",
  "shortDesc": "Generate cryptographically secure RFC 4122 compliance UUID version 4 variables in bulk.",
  "metaDesc": "Create RFC 4122 version 4 UUIDs. Generate unique random UUID lists in bulk. Secure client-side crypto generation.",
  "instructions": [
    "Select count quantity of UUIDs to generate (up to 500).",
    "Toggle parameters (Uppercase/Lowercase, Hyphen inclusion).",
    "Click 'Generate UUIDs'.",
    "Copy all generated lines or export as JSON list."
  ],
  "features": [
    "Uses cryptographically secure crypto.getRandomValues API.",
    "Bulk generation indicators.",
    "Formats clean strings arrays."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "What is UUID v4?",
      "answer": "A UUID version 4 is a 128-bit globally unique identifier generated randomly, with a negligible probability of duplicates."
    },
    {
      "question": "Why should developers use the UUID v4 Generator?",
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
  "seoTitle": "UUID Generator - Generate Bulk RFC 4122 v4 UUIDs",
  "seoHeading": "Generate Secure Unique Random UUIDs in Bulk",
  "seoIntro": "Generate unique identifiers for database records, test data scripts, or API payloads securely.",
  "seoBody": "\n<h3>How the UUID v4 Generator Works</h3>\n<p>Generate cryptographically secure RFC 4122 compliance UUID version 4 variables in bulk.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Select count quantity of UUIDs to generate (up to 500).</li>\n  <li>Toggle parameters (Uppercase/Lowercase, Hyphen inclusion).</li>\n  <li>Click 'Generate UUIDs'.</li>\n  <li>Copy all generated lines or export as JSON list.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Uses cryptographically secure crypto.getRandomValues API.</li>\n  <li>Bulk generation indicators.</li>\n  <li>Formats clean strings arrays.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

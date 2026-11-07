import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-b64-conv",
  "slug": "base64-encoder-decoder",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "Base64 Encoder & Decoder",
  "shortDesc": "Encode standard strings to Base64 format or translate Base64 variables back to text.",
  "metaDesc": "Encode or decode Base64 data online. Translate standard strings or process image files to base64 datasets instantly.",
  "instructions": [
    "Select mode (Encode or Decode).",
    "Input source text or upload a small file.",
    "The tool processes base64 translations.",
    "Copy output or download files."
  ],
  "features": [
    "Supports string base64 translations.",
    "Handles file uploads data-URIs outputs.",
    "Simple two-column dashboard formats."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "What is Base64 encoding?",
      "answer": "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format, commonly used for embed resources."
    },
    {
      "question": "Why should developers use the Base64 Encoder & Decoder?",
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
  "seoTitle": "Base64 Encoder Decoder - Translate Strings & File Data-URIs",
  "seoHeading": "Encode & Decode Base64 Strings Locally",
  "seoIntro": "Encode config parameters or translate data arrays. Convert small images into embed HTML data-URI lines.",
  "seoBody": "\n<h3>How the Base64 Encoder & Decoder Works</h3>\n<p>Encode standard strings to Base64 format or translate Base64 variables back to text.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Select mode (Encode or Decode).</li>\n  <li>Input source text or upload a small file.</li>\n  <li>The tool processes base64 translations.</li>\n  <li>Copy output or download files.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Supports string base64 translations.</li>\n  <li>Handles file uploads data-URIs outputs.</li>\n  <li>Simple two-column dashboard formats.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

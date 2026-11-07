import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-jwt-decode",
  "slug": "jwt-decoder",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JWT (JSON Web Token) Decoder",
  "shortDesc": "Decode and inspect the Header, Payload, and Signature components of any JWT token.",
  "metaDesc": "Decode JSON Web Tokens online. Parse JWT header and payload details locally. Displays token exp timecodes.",
  "instructions": [
    "Paste your encoded JSON Web Token (JWT) string.",
    "The tool splits elements by dots instantly.",
    "Inspect Header and Payload JSON structures.",
    "Review token expiration (exp) timestamp conversions."
  ],
  "features": [
    "Real-time token splitting.",
    "Translates epoch exp codes.",
    "Syntax highlighted payload displays."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "Is my JWT token safe on this website?",
      "answer": "Yes, our decoder is 100% client-side. Your authorization tokens are parsed in your browser and never sent over the web."
    },
    {
      "question": "Why should developers use the JWT (JSON Web Token) Decoder?",
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
  "seoTitle": "JWT Decoder - Decode JSON Web Tokens Privately",
  "seoHeading": "Inspect JWT Header & Payload Data Structures",
  "seoIntro": "Verify token validity, check scope credentials, or debug token expiration bugs privately.",
  "seoBody": "\n<h3>How the JWT (JSON Web Token) Decoder Works</h3>\n<p>Decode and inspect the Header, Payload, and Signature components of any JWT token.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Paste your encoded JSON Web Token (JWT) string.</li>\n  <li>The tool splits elements by dots instantly.</li>\n  <li>Inspect Header and Payload JSON structures.</li>\n  <li>Review token expiration (exp) timestamp conversions.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Real-time token splitting.</li>\n  <li>Translates epoch exp codes.</li>\n  <li>Syntax highlighted payload displays.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

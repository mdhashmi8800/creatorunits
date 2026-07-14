import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-js-min",
  "slug": "javascript-minifier",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JavaScript Minifier",
  "shortDesc": "Compress JavaScript files by removing comments, whitespace, and formatting layouts.",
  "metaDesc": "Minify JavaScript files online. Strip whitespace and formatting codes to shrink JS assets.",
  "instructions": [
    "Paste your functional JavaScript codes block.",
    "Click 'Minify JS'.",
    "Review the compressed code outputs.",
    "Copy or export minified files."
  ],
  "features": [
    "Removes JS comments (both single-line and blocks).",
    "Strips spaces and line returns safely.",
    "Validates bracket pairing basic syntax."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "Does this obfuscate code variables names?",
      "answer": "No, this is a lightweight minifier that strips comment boxes and spacing to ensure code remains easily debuggable while saving space."
    }
  ],
  "seoTitle": "JavaScript Minifier - Compress JS Code Online",
  "seoHeading": "Minify JavaScript Assets for Web Performance",
  "seoIntro": "Reduce browser download times. Shrink script file sizes by removing whitespace and comments.",
  "seoBody": "<h3>Accelerate JS Hydrations</h3><p>Small script packages reduce parsing delays on mobile CPU chips, speeding up page hydration ratios.</p>"
};

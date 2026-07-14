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
    }
  ],
  "seoTitle": "JSON Formatter - Prettify & Indent Code Online",
  "seoHeading": "Format and Prettify JSON Data Structs",
  "seoIntro": "Convert dense APIs logs dumps into readable hierarchies. Clean spaces and format indentations client-side.",
  "seoBody": "<h3>Essential Developer Utilities</h3><p>Format variables to speed up code reviews and locate structural parameters nesting bugs.</p>"
};

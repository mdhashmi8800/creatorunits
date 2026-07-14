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
    }
  ],
  "seoTitle": "JSON Validator - Validate JSON Syntax Errors Online",
  "seoHeading": "Validate JSON Scripts and Detect Parsing Errors",
  "seoIntro": "Debug API variables before uploading codes. Locate missing braces and syntax bugs locally in your browser.",
  "seoBody": "<h3>On-Device Syntax Checks</h3><p>Validating syntax locally ensures private tokens and variables remain secure in your browser window context.</p>"
};

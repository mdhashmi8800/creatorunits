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
    }
  ],
  "seoTitle": "UUID Generator - Generate Bulk RFC 4122 v4 UUIDs",
  "seoHeading": "Generate Secure Unique Random UUIDs in Bulk",
  "seoIntro": "Generate unique identifiers for database records, test data scripts, or API payloads securely.",
  "seoBody": "<h3>Cryptographically Secure UUIDs</h3><p>Our generator utilizes browser-native random generators rather than Math.random to avoid seed conflicts.</p>"
};

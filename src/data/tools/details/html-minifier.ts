import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-html-min",
  "slug": "html-minifier",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "HTML Minifier",
  "shortDesc": "Compress HTML markup files by removing spaces, line breaks, and comment tags.",
  "metaDesc": "Minify HTML pages online. Remove comments, reduce code footprint, and speed up webpage loads offline.",
  "instructions": [
    "Paste your raw HTML page markup.",
    "Toggle minifier configs (Remove comment blocks, collapse white space).",
    "Click 'Minify HTML'.",
    "Copy the compressed HTML code."
  ],
  "features": [
    "Strips HTML comments elements.",
    "Collapses double white spaces blocks.",
    "Calculates file size savings percentages."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "Will minification break my inline JavaScript?",
      "answer": "It can if your JS scripts lack closing semicolons. Ensure scripts are properly structured before minifying HTML."
    }
  ],
  "seoTitle": "HTML Minifier - Compress HTML Web Page Codes",
  "seoHeading": "Minify HTML Code for Speed Optimization",
  "seoIntro": "Accelerate web loading times. Remove redundant comments, line breaks, and space weights from documents.",
  "seoBody": "<h3>Boost Page Performance Scores</h3><p>Smaller HTML files load faster on mobile networks, directly improving Google PageSpeed rankings scores.</p>"
};

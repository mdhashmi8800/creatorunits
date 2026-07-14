import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-density-chk",
  "slug": "keyword-density-checker",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "Keyword Density Checker",
  "shortDesc": "Analyze text or articles to count keyword frequencies and prevent search keyword stuffing.",
  "metaDesc": "Check keyword density online. Paste drafts to parse word frequencies and check two-word and three-word phrases density scores.",
  "instructions": [
    "Paste your article or copy block.",
    "Set stop-words filters (hides small words like 'the', 'is').",
    "Click 'Analyze Text'.",
    "Review the word frequency metrics table."
  ],
  "features": [
    "Calculates single, double, and triple-word phrase density indexes.",
    "Highlights keyword stuffing warning limits (above 3%).",
    "Strips common conjunctions."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What is keyword stuffing?",
      "answer": "Keyword stuffing is the practice of loading a webpage with keywords in an attempt to manipulate search rankings, which hurts readability and incurs search penalties."
    }
  ],
  "seoTitle": "Keyword Density Checker - Analyze Word Frequencies",
  "seoHeading": "Optimize Word Distributions on Blog Drafts",
  "seoIntro": "Check if your content is naturally balanced. Analyze density indexes of key concepts to improve readability.",
  "seoBody": "<h3>Healthy Density Thresholds</h3><p>Keep your target search keywords between 1% and 2.5% density levels. Focus on semantic variations (LSI) to improve indexing.</p>"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-random-num",
  "slug": "random-number-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Random Number Generator",
  "shortDesc": "Generate random numbers within custom ranges, supporting bulk generation and sorting.",
  "metaDesc": "Generate random numbers online. Set min/max ranges, count lists, and filter duplicate items client-side.",
  "instructions": [
    "Enter minimum and maximum boundaries values.",
    "Set quantity count of numbers to generate.",
    "Toggle parameters (Allow duplicate values, sorting order).",
    "Generate and copy number list."
  ],
  "features": [
    "Uses secure cryptographic random inputs keys.",
    "Provides sorting functions.",
    "Filters duplicate values."
  ],
  "componentName": "RandomNumberGenerator",
  "faqs": [
    {
      "question": "Is this secure for sweepstakes?",
      "answer": "Yes, it uses browser cryptographic random generators, ensuring unbiased random value distributions."
    }
  ],
  "seoTitle": "Random Number Generator - Secure Bulk Range Generator",
  "seoHeading": "Generate Random Numbers within Custom Ranges",
  "seoIntro": "Select sweepstakes winners or generate sample datasets values. Configure ranges and quantity levels.",
  "seoBody": "<h3>Unbiased Value Generators</h3><p>Verify random distributions. Fits requirements for audits and gaming tables runs.</p>"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "biz-discount-calc",
  "slug": "discount-calculator",
  "category": "business",
  "categoryName": "Business Tools",
  "title": "Discount Calculator",
  "shortDesc": "Calculate discounted price, savings amounts, and original prices from discount values.",
  "metaDesc": "Calculate discount prices online. Enter original product cost and discount percentage to find savings and final costs.",
  "instructions": [
    "Input original product price.",
    "Set discount percentage rate (e.g. 20%).",
    "Optional: add extra stacks discounts percentages.",
    "Read final purchase price and total saved amounts."
  ],
  "features": [
    "Supports stacked double-discount calculations.",
    "Computes absolute currency savings indicators.",
    "Clear percentage inputs indicators."
  ],
  "componentName": "BusinessCalculators",
  "faqs": [
    {
      "question": "How do stacked discounts work?",
      "answer": "It applies the second discount percentage to the already discounted price, rather than adding percentages together."
    }
  ],
  "seoTitle": "Discount Calculator - Find Sales Savings & Final Cost",
  "seoHeading": "Calculate Sales Discounts & Savings Amounts",
  "seoIntro": "Solve purchasing savings margins. Enter original retail costs and discount percentages to check values.",
  "seoBody": "<h3>Smart Shopping Computations</h3><p>Verify discounts labels during clearance events to trace absolute savings metrics.</p>"
};

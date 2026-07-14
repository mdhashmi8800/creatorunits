import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-schema-gen",
  "slug": "schema-generator",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "Schema Markup Generator",
  "shortDesc": "Generate JSON-LD structured data schema scripts for FAQs, Articles, and Products.",
  "metaDesc": "Create JSON-LD schema markups online. Select schema type and enter values to generate Google SEO structured data.",
  "instructions": [
    "Select schema type (FAQ, Article, Product, Organization, Breadcrumb).",
    "Fill in standard entity values (Questions, prices, author).",
    "Generate JSON-LD script block.",
    "Validate and paste into page head."
  ],
  "features": [
    "Supports 5 common schema architectures.",
    "Validates JSON syntax rules.",
    "One-click copy blocks."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What is Schema Markup?",
      "answer": "Schema markup is code (structured data) that you place on your website to help search engines return informative results for users."
    }
  ],
  "seoTitle": "Schema Generator - JSON-LD Structured Data Creator",
  "seoHeading": "Create Google Search Rich Snippet Schema Scripts",
  "seoIntro": "Qualify for Google search rich snippets (like FAQ drop-downs or star ratings). Build structured JSON-LD scripts.",
  "seoBody": "<h3>Testing Rich Snippets</h3><p>Validate generated scripts on Google's Rich Results Test tool before uploading to production pages.</p>"
};

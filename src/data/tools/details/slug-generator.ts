import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-slug-gen",
  "slug": "slug-generator",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "SEO Slug Generator",
  "shortDesc": "Convert article titles into clean, hyphenated, SEO-friendly URL paths by stripping stop-words.",
  "metaDesc": "Generate SEO-friendly URL slugs online. Input titles to remove accents, strip small words, and generate clean slugs.",
  "instructions": [
    "Type or paste your page or article title.",
    "Toggle stop-words filter options (removes prepositions).",
    "Generate URL slug.",
    "Copy slug directly for folder names."
  ],
  "features": [
    "Strips English stop-words (the, and, a, for).",
    "Transliterates accents (é -> e, ñ -> n).",
    "Converts symbols to hyphens."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What makes a URL slug SEO friendly?",
      "answer": "Keep it short, lowercase, descriptive, and containing your main keyword. Remove accents and stop-words."
    }
  ],
  "seoTitle": "SEO Slug Generator - Create Clean URL Paths Online",
  "seoHeading": "Generate URL Slugs for Website Links",
  "seoIntro": "Optimize address paths for search crawlers. Convert blog titles into clean, human-readable address directories.",
  "seoBody": "<h3>Standard URL Formats</h3><p>Keep URLs readable. Clear paths explain page content to users instantly and improve search indexing metrics.</p>"
};

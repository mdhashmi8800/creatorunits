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
    },
    {
      "question": "What is the benefit of using the SEO Slug Generator?",
      "answer": "It helps you build clean meta tags, robots.txt rules, sitemaps, and check keyword density to satisfy search engine crawlers and improve index visibility."
    },
    {
      "question": "How do search engine crawlers use robots.txt and sitemaps?",
      "answer": "Sitemaps act as a directory of your pages, while robots.txt acts as a rulebook telling crawlers which directories to crawl and which to ignore."
    },
    {
      "question": "Are my website URLs or meta details tracked?",
      "answer": "No. All tag generation, validation, and checklist outputs are processed in-browser. We do not store or track your domain assets."
    },
    {
      "question": "Why is keyword density validation important?",
      "answer": "Keyword density ensures you use search queries naturally. Stuffing keywords too frequently can lead to search penalties under Google's helpful content updates."
    },
    {
      "question": "How do structured data (Schema) scripts help my pages?",
      "answer": "Schema scripts provide direct context to search engines (e.g. FAQ, product reviews), qualifying your site for rich snippets and voice search optimization."
    },
    {
      "question": "Can I copy the generated tags directly?",
      "answer": "Yes. Copying the schema or meta blocks to your HTML head takes only a single click."
    },
    {
      "question": "Does this tool support Open Graph and Twitter Cards?",
      "answer": "Yes. You can generate custom social preview tags to ensure your pages look polished when shared on Facebook, LinkedIn, or Twitter."
    },
    {
      "question": "Is this tool suitable for WordPress, Shopify, and custom websites?",
      "answer": "Yes. The generated HTML meta blocks and JSON-LD schemas can be pasted into any content management system or custom codebase."
    },
    {
      "question": "Is there a limit on how many tags I can generate?",
      "answer": "No. The SEO tools have no usage caps, allowing you to optimize unlimited URLs for your business campaigns."
    }
  ],
  "seoTitle": "SEO Slug Generator - Create Clean URL Paths Online",
  "seoHeading": "Generate URL Slugs for Website Links",
  "seoIntro": "Optimize address paths for search crawlers. Convert blog titles into clean, human-readable address directories.",
  "seoBody": "\n<h3>How the SEO Slug Generator Works</h3>\n<p>Convert article titles into clean, hyphenated, SEO-friendly URL paths by stripping stop-words.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Type or paste your page or article title.</li>\n  <li>Toggle stop-words filter options (removes prepositions).</li>\n  <li>Generate URL slug.</li>\n  <li>Copy slug directly for folder names.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Strips English stop-words (the, and, a, for).</li>\n  <li>Transliterates accents (é -> e, ñ -> n).</li>\n  <li>Converts symbols to hyphens.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-robots-gen",
  "slug": "robots-txt-generator",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "Robots.txt Generator",
  "shortDesc": "Create structured robots.txt files to guide and optimize search engine crawling.",
  "metaDesc": "Generate robots.txt files online. Configure disallow directories, specify search crawlers, and link sitemaps instantly.",
  "instructions": [
    "Set crawling behaviors for standard user-agents (Google, Bing, Yahoo).",
    "Add directories to Disallow (e.g. /admin or /private).",
    "Link your XML sitemap URL.",
    "Click 'Generate Robots.txt' and download file."
  ],
  "features": [
    "Simplifies directory blocking.",
    "Sitemap paths alignment fields.",
    "Saves config files in seconds."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What is a robots.txt file?",
      "answer": "A robots.txt file resides in a website's root directory, instructing search engine bots which paths they are allowed to index."
    }
  ],
  "seoTitle": "Robots.txt Generator - Create Custom robots.txt Files",
  "seoHeading": "Create Search Robot Crawler Rule Files",
  "seoIntro": "Guide index bots efficiently. Block duplicate paths from index queues to optimize search crawl budgets.",
  "seoBody": "<h3>Optimizing Crawl Budgets</h3><p>Prevent robots from wasting resources scanning query logs or admin pages, speeding up index times.</p>"
};

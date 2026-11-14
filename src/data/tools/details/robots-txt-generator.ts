import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-robots-gen",
  "slug": "robots-txt-generator",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "Robots.txt Generator — Create Custom robots.txt Files",
  "shortDesc": "Generate valid, search-engine-ready robots.txt files. Configure crawl rules for Googlebot, Bingbot, and AI scrapers with instant sitemap linking.",
  "metaDesc": "Free robots.txt generator. Create search crawler rules for Googlebot, Bingbot, and AI scrapers (GPTBot, CCBot, ClaudeBot). Configure disallow paths and XML sitemaps.",
  "instructions": [
    "Select a Quick Preset (Standard Website, WordPress, Next.js / Jamstack, or Shield From AI Scrapers) or configure manually.",
    "Specify the target User-agent (use * for all web crawlers, or specify Googlebot, Bingbot, or custom bot tokens).",
    "Add directories or URL paths to Allow (e.g. / or /wp-admin/admin-ajax.php).",
    "Add paths to Disallow from search crawling (e.g. /admin, /api/, /checkout/, /search).",
    "Toggle 'Block AI scrapers' to disallow OpenAI (GPTBot), Common Crawl (CCBot), Anthropic (ClaudeBot), and PerplexityBot.",
    "Enter your XML sitemap URL (e.g. https://www.yourdomain.com/sitemap.xml).",
    "Click 'Compile Robots.txt' to preview the formatted file, then copy to your clipboard or click 'Download robots.txt' to save it directly to your site root."
  ],
  "features": [
    "Preset rule templates for WordPress, Next.js, static sites, and modern CMS platforms.",
    "Built-in protection toggles to manage or block generative AI crawlers (GPTBot, CCBot, ClaudeBot, PerplexityBot, Google-Extended).",
    "Explicit Allow and Disallow directive support conforming to the official RFC 9309 Robots Exclusion Protocol.",
    "Automated XML Sitemap directive formatting.",
    "Direct in-browser download of the generated robots.txt text file.",
    "100% client-side: all parsing and file compilation executes in your browser with zero data storage."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What is a robots.txt file and where must it be hosted?",
      "answer": "A robots.txt file is a plain text file placed in the root directory of your website (e.g., https://example.com/robots.txt). It follows the Robots Exclusion Standard (RFC 9309) to instruct automated search engine crawlers (like Googlebot and Bingbot) which pages, query parameters, or file directories they are permitted or forbidden to request and crawl."
    },
    {
      "question": "Does robots.txt prevent a page from appearing in Google Search results?",
      "answer": "No! This is one of the most dangerous misconceptions in SEO. Robots.txt controls crawling, NOT indexing. If other websites link to a URL blocked by robots.txt, Google can still index the URL and display it in search results without crawling its content (often showing 'No information is available for this page'). To guarantee a page is never indexed in search results, allow Googlebot to crawl it and apply a <meta name='robots' content='noindex'> tag or return an X-Robots-Tag: noindex HTTP header."
    },
    {
      "question": "Should I block CSS, JavaScript, or image directories in robots.txt?",
      "answer": "NEVER block CSS, JavaScript, fonts, or critical asset directories (such as /_next/static/ or /wp-content/themes/). Googlebot renders modern web applications like a full Chrome browser to index client-rendered content and compute Core Web Vitals. If you disallow CSS or JavaScript in robots.txt, Google cannot render your layout, leading to mobile rendering penalties and de-indexation."
    },
    {
      "question": "How do I block AI crawlers (GPTBot, CCBot, ClaudeBot) from scraping my content?",
      "answer": "You can declare explicit User-agent blocks for recognized generative AI and LLM training bots. For example:\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: CCBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nOur generator includes a one-click toggle to automatically add directives for GPTBot, CCBot, ClaudeBot, Google-Extended, and PerplexityBot without affecting standard Google Search indexing."
    },
    {
      "question": "Are robots.txt directives case-sensitive?",
      "answer": "Yes. URL paths in robots.txt are strictly case-sensitive. 'Disallow: /admin' will block /admin and /admin/dashboard, but will NOT block /Admin or /ADMIN. Ensure your disallow rules match the exact casing used by your web server or CMS routing."
    },
    {
      "question": "What is the Crawl-delay directive and does Googlebot support it?",
      "answer": "The 'Crawl-delay' directive was historically used by Yahoo and Bing to limit the frequency of crawl requests per second. However, Googlebot has NEVER supported the Crawl-delay directive in robots.txt. To adjust Google's crawl speed, webmasters must use the Crawl Rate settings in Google Search Console. Bing still partially acknowledges crawl-delay rules."
    },
    {
      "question": "What happens if a robots.txt file returns a 404 or 500 error?",
      "answer": "If your server returns an HTTP 404 (Not Found) for /robots.txt, search engines assume the website has no crawling restrictions and crawl all discoverable pages. However, if your server returns an HTTP 500 (Internal Server Error) or times out, Googlebot treats it as a server outage and temporarily suspends crawling of your entire site until the robots.txt file returns a 200 OK or 404 response."
    }
  ],
  "seoTitle": "Robots.txt Generator — Create Custom robots.txt Files",
  "seoHeading": "Create Search Engine & AI Crawler Rules (robots.txt)",
  "seoIntro": "Control how Googlebot, Bingbot, and AI scrapers crawl your website. Create clean, RFC 9309-compliant robots.txt files with custom Allow/Disallow directives, AI bot blocks, and XML sitemap pointers in seconds.",
  "seoBody": "\n<h3>What Is the Robots Exclusion Protocol (RFC 9309)?</h3>\n<p>The <strong>Robots Exclusion Standard</strong> (officially standardized by the IETF as RFC 9309) defines the protocol webmasters use to guide automated web crawlers. When Googlebot or Bingbot visits your domain, the very first HTTP request it makes is to <code>/robots.txt</code>. The rules defined in this file establish boundaries to conserve server bandwidth and direct crawl budget toward high-priority pages.</p>\n\n<h3>Standard Directives Breakdown</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Directive</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Syntax Example</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Function &amp; SEO Impact</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>User-agent</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>User-agent: *</code> or <code>User-agent: Googlebot</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Identifies which crawler the subsequent rules apply to. Asterisk (<code>*</code>) applies universally.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Disallow</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Disallow: /admin/</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Instructs the crawler not to request any URL paths starting with that prefix.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Allow</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Allow: /wp-admin/admin-ajax.php</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Carves out an exception inside an otherwise disallowed directory.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Sitemap</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Sitemap: https://example.com/sitemap.xml</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Directs search bots to your XML sitemap location for rapid index discovery.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Managing Generative AI and LLM Scrapers</h3>\n<p>With the rise of large language models (LLMs), many web publishers choose to allow standard search engines (Google, Bing) to index their pages while blocking automated scraping by AI training bots. You can selectively disallow bots such as:</p>\n<ul>\n  <li><strong>GPTBot:</strong> OpenAI's automated web crawler used for model training and ChatGPT data ingestion.</li>\n  <li><strong>CCBot:</strong> Common Crawl foundation crawler, frequently consumed by open-source LLM datasets.</li>\n  <li><strong>ClaudeBot:</strong> Anthropic's crawler for training Claude AI models.</li>\n  <li><strong>Google-Extended:</strong> Google's token used to block training for Gemini and Vertex AI without impacting Google Search indexing.</li>\n  <li><strong>PerplexityBot:</strong> Perplexity AI's indexing crawler for real-time web search summaries.</li>\n</ul>\n\n<h3>Common robots.txt Mistakes to Avoid</h3>\n<ol>\n  <li><strong>Blocking Googlebot From Rendering Assets:</strong> Never block <code>/_next/</code>, <code>/wp-content/</code>, or static CSS/JS files. If Google cannot load stylesheets and scripts, your mobile ranking will plummet.</li>\n  <li><strong>Attempting to Noindex via robots.txt:</strong> The <code>Noindex: /path</code> directive in robots.txt was officially deprecated by Google in 2019 and is completely ignored. Use HTTP headers or meta tags instead.</li>\n  <li><strong>Missing Sitemaps:</strong> Always append the absolute URL of your XML sitemap at the bottom of robots.txt.</li>\n  <li><strong>Relative Sitemap URLs:</strong> Always provide the full canonical URL (e.g. <code>https://www.example.com/sitemap.xml</code>), never a relative path like <code>/sitemap.xml</code>.</li>\n</ol>\n\n<h3>Related SEO &amp; Developer Tools</h3>\n<ul>\n  <li><a href=\"/tools/seo/xml-sitemap-generator\">XML Sitemap Generator</a> — Create Google-ready sitemap.xml files with change frequencies and priorities.</li>\n  <li><a href=\"/tools/seo/meta-tag-generator\">Meta Tag Generator</a> — Generate search titles, meta descriptions, and robots indexing directives.</li>\n  <li><a href=\"/tools/seo/schema-generator\">Schema Generator</a> — Build structured JSON-LD schemas for articles, FAQs, and organizations.</li>\n  <li><a href=\"/category/seo\">Browse All SEO Tools</a> — Keyword density checkers, Open Graph builders, and URL analyzers.</li>\n</ul>\n"
};

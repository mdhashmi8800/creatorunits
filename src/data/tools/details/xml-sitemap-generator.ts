import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "seo-sitemap-gen",
  "slug": "xml-sitemap-generator",
  "category": "seo",
  "categoryName": "SEO Tools",
  "title": "XML Sitemap Generator",
  "shortDesc": "Create and download a valid XML sitemap for any website — input your URLs, set priorities and frequencies, and export.",
  "metaDesc": "Free XML sitemap generator. Enter your page URLs, set change frequency and priority scores, and download a valid sitemap.xml file instantly. No sign-up required.",
  "instructions": [
    "Enter each page URL you want indexed (one per line or paste a list).",
    "Set the changefreq for each URL: Daily, Weekly, or Monthly.",
    "Assign a priority score from 0.0 (lowest) to 1.0 (highest) — use 1.0 for your homepage.",
    "Click 'Generate Sitemap' to build the XML.",
    "Review the output and click 'Download sitemap.xml' to save the file."
  ],
  "features": [
    "Generates valid XML sitemaps with correct namespace declarations.",
    "Supports changefreq and priority attributes per URL.",
    "Instant download — no upload to external servers.",
    "Compatible with Google Search Console, Bing Webmaster Tools, and any CMS."
  ],
  "componentName": "SeoUtilities",
  "faqs": [
    {
      "question": "What is an XML sitemap?",
      "answer": "An XML sitemap is a structured file that lists the important URLs of a website and provides metadata about each one — such as when it was last updated, how often it changes, and its priority relative to other pages. Search engines like Google and Bing read this file to discover and schedule crawls of your pages more efficiently, especially for large or newly published websites."
    },
    {
      "question": "Why do websites need an XML sitemap?",
      "answer": "Search engine crawlers discover pages by following links. If a page has no inbound links, crawlers may never find it. An XML sitemap acts as a guaranteed directory — submitting it to Google Search Console ensures Googlebot at least knows every page exists, even new or deeply nested ones. It's particularly important for new websites, e-commerce sites with thousands of products, and content-heavy blogs."
    },
    {
      "question": "How is a sitemap different from robots.txt?",
      "answer": "A sitemap tells search engines which pages exist and should be crawled. A robots.txt file tells crawlers which pages they are NOT allowed to access. They serve opposite purposes and should both be used together: the sitemap invites crawlers to your important pages, while robots.txt blocks sensitive areas like admin panels or duplicate parameter URLs."
    },
    {
      "question": "What is the changefreq attribute and should I use it?",
      "answer": "The `changefreq` attribute hints to crawlers how often a page typically changes: `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, or `never`. Search engines treat this as a hint, not a strict instruction. For most websites, setting your homepage and blog index to `daily`, category pages to `weekly`, and individual articles/tools to `monthly` is a reasonable convention."
    },
    {
      "question": "What priority score should I assign to my pages?",
      "answer": "Priority scores range from 0.0 to 1.0 and indicate a page's relative importance compared to other pages on the same site. Use 1.0 for your homepage, 0.8–0.9 for major category or hub pages, 0.6–0.7 for individual articles or tool pages, and 0.3–0.5 for supporting pages like About or Contact. Priority scores only affect crawl scheduling within your own site — they do not improve rankings directly."
    },
    {
      "question": "How do I submit my sitemap to Google Search Console?",
      "answer": "After downloading your sitemap.xml file, upload it to your website's root directory so it's accessible at `https://yourdomain.com/sitemap.xml`. Then open Google Search Console, navigate to Sitemaps in the left menu, paste the full sitemap URL, and click Submit. Google will begin processing your sitemap within hours, and you'll see crawl status in the console over the following days."
    },
    {
      "question": "How many URLs can an XML sitemap contain?",
      "answer": "A single sitemap file can contain a maximum of 50,000 URLs and must not exceed 50 MB uncompressed. If your site has more pages, you need a sitemap index file that references multiple individual sitemaps. Our generator is designed for standard websites; for very large sites with tens of thousands of pages, consider dynamic sitemap generation built into your CMS or framework."
    },
    {
      "question": "Does this tool upload my URLs to your servers?",
      "answer": "No. All sitemap generation happens locally in your browser using JavaScript. Your page URLs, priorities, and the generated XML are never sent to our servers, stored, or logged. You can safely input your internal staging URLs and draft page lists without privacy concerns."
    },
    {
      "question": "Should I include every page of my website in the sitemap?",
      "answer": "Only include pages you want indexed by search engines. Exclude pages with noindex directives, admin panels, thank-you pages, login pages, duplicate filtered/sorted URLs, and paginated archives beyond page 1. A clean sitemap with fewer, high-quality URLs signals better site quality than one stuffed with every possible URL variant."
    },
    {
      "question": "What other SEO tools work well alongside a sitemap?",
      "answer": "An XML sitemap works best as part of a broader technical SEO setup. Pair it with a robots.txt file that properly blocks non-indexable sections, meta tag generators for page-level metadata, and a schema markup generator for rich results eligibility. Together these tools ensure search engines can discover, understand, and represent your content correctly in search results."
    }
  ],
  "seoTitle": "Free XML Sitemap Generator — Create & Download sitemap.xml Online",
  "seoHeading": "Generate a Valid XML Sitemap for Any Website in Seconds",
  "seoIntro": "Need to create an XML sitemap quickly without coding? Our free online XML sitemap generator lets you paste your page URLs, set change frequency and priority values, and download a valid sitemap.xml file instantly — no login, no software installation, and no data sent to any server.",
  "seoBody": "\n<h3>What Is an XML Sitemap and Why Does It Matter for SEO?</h3>\n<p>An XML sitemap is a structured file that provides search engines with a complete, authoritative list of your website's important pages. Google's crawlers discover pages primarily by following links, but new sites, pages with few inbound links, and deep content can be missed entirely. Submitting a sitemap to Google Search Console guarantees Googlebot learns about these pages and can schedule them for crawling.</p>\n<p>For sites with regularly updated content — like blogs, tool directories, and e-commerce catalogues — a properly configured sitemap can significantly speed up the indexing of new pages.</p>\n\n<h3>How to Create and Submit an XML Sitemap</h3>\n<ol>\n  <li><strong>List your canonical URLs.</strong> Include only the final, indexable versions — no noindex pages, no pagination, no query-parameter duplicates.</li>\n  <li><strong>Set changefreq and priority.</strong> Use <code>daily</code> for actively updated pages, <code>monthly</code> for stable content. Set priority to <code>1.0</code> for your homepage and scale down from there.</li>\n  <li><strong>Generate and download</strong> the <code>sitemap.xml</code> file.</li>\n  <li><strong>Upload</strong> the file to your domain root: <code>https://yourdomain.com/sitemap.xml</code></li>\n  <li><strong>Submit the URL</strong> in Google Search Console under Sitemaps.</li>\n  <li><strong>Reference it in robots.txt:</strong> Add a line <code>Sitemap: https://yourdomain.com/sitemap.xml</code></li>\n</ol>\n\n<h3>Sitemap Best Practices</h3>\n<ul>\n  <li><strong>Only include indexable pages</strong> — exclude pages with <code>noindex</code> meta tags, admin pages, login pages, and parameter-based duplicates</li>\n  <li><strong>Keep URLs canonical</strong> — all URLs should use HTTPS and match your preferred www/non-www host exactly</li>\n  <li><strong>Update your sitemap</strong> when you publish new pages or change important URLs</li>\n  <li><strong>Use a sitemap index</strong> if your site exceeds 50,000 URLs — split into multiple sitemap files</li>\n  <li><strong>Avoid stuffing</strong> — a sitemap with 10,000 thin or duplicate pages is worse than one with 500 quality pages</li>\n</ul>\n\n<h3>XML Sitemap Format Reference</h3>\n<p>A valid XML sitemap follows the Sitemaps Protocol (sitemaps.org). The basic structure looks like this:</p>\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"&gt;\n  &lt;url&gt;\n    &lt;loc&gt;https://example.com/&lt;/loc&gt;\n    &lt;lastmod&gt;2026-08-01&lt;/lastmod&gt;\n    &lt;changefreq&gt;daily&lt;/changefreq&gt;\n    &lt;priority&gt;1.0&lt;/priority&gt;\n  &lt;/url&gt;\n&lt;/urlset&gt;</code></pre>\n<p>Our generator produces correctly structured XML with all required namespace declarations so you can upload it immediately without editing.</p>\n\n<h3>100% Private — No URLs Sent to Any Server</h3>\n<p>All sitemap generation runs locally in your browser. Your page URLs are never transmitted to our servers or stored in any database, making this tool safe for internal, staging, and pre-launch websites.</p>\n"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-utm",
  "slug": "utm-builder",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "UTM Campaign Builder",
  "shortDesc": "Build marketing campaign tracking URLs with UTM parameters for Google Analytics in seconds.",
  "metaDesc": "Free UTM builder for Google Analytics. Create campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content parameters instantly in your browser.",
  "instructions": [
    "Enter your destination website URL (e.g. https://yoursite.com/landing-page).",
    "Enter utm_source — the platform sending traffic (e.g. newsletter, instagram, google).",
    "Enter utm_medium — the marketing channel type (e.g. email, cpc, social).",
    "Enter utm_campaign — your campaign name (e.g. summer_sale_2026).",
    "Optional: set utm_term (for paid keywords) or utm_content (to distinguish ad variants).",
    "Copy the generated tracking URL from the output box."
  ],
  "features": [
    "Generates valid, properly encoded UTM URLs.",
    "Live preview updates as you type.",
    "One-click copy to clipboard.",
    "Clear field tooltips explaining each UTM parameter."
  ],
  "componentName": "UtmBuilder",
  "faqs": [
    {
      "question": "What is a UTM builder?",
      "answer": "A UTM builder is a tool that helps you append UTM (Urchin Tracking Module) tracking parameters to URLs. These parameters tell analytics platforms like Google Analytics exactly where traffic is coming from — which campaign, which channel, and which source. Instead of manually typing `?utm_source=newsletter&utm_medium=email&utm_campaign=launch`, a UTM builder validates your inputs and assembles the correct URL format automatically."
    },
    {
      "question": "What are the five standard UTM parameters?",
      "answer": "The five standard UTM parameters are: `utm_source` (identifies the platform sending traffic, e.g. `newsletter`, `instagram`, `google`), `utm_medium` (identifies the marketing channel, e.g. `email`, `cpc`, `social`), `utm_campaign` (identifies the specific promotion, e.g. `summer_sale_2026`), `utm_term` (tracks paid search keywords, e.g. `image+compressor`), and `utm_content` (distinguishes between multiple links in the same campaign, e.g. `blue_cta_button` vs `sidebar_link`)."
    },
    {
      "question": "Are UTM parameters case-sensitive?",
      "answer": "Yes, UTM parameters are strictly case-sensitive in Google Analytics 4. If you write `utm_source=Newsletter` on one link and `utm_source=newsletter` on another, GA4 will count them as two separate traffic sources. Always use lowercase letters and underscores to keep your reports clean and consistent."
    },
    {
      "question": "Can I use spaces in UTM parameter values?",
      "answer": "Avoid spaces in UTM values. Web browsers convert spaces to `%20`, making URLs hard to read and share. Use underscores (`_`) or hyphens (`-`) instead — for example, `utm_campaign=summer_sale_2026` instead of `utm_campaign=summer sale 2026`. Our UTM builder automatically handles encoding so your generated URL is always valid."
    },
    {
      "question": "Where should I put UTM parameters — before or after the hash?",
      "answer": "Always put UTM parameters before the URL hash (`#`). UTM codes are query parameters and belong in the query string portion of the URL. The correct structure is: `https://example.com/page?utm_source=email&utm_campaign=launch#section`. If you place UTM codes after the `#`, analytics platforms will not read them because browsers strip everything after `#` before sending the request to the server."
    },
    {
      "question": "Why did my analytics fail to track my UTM parameters?",
      "answer": "The most common causes of UTM tracking failures are: (1) placing parameters after the URL hash, (2) server-side redirects that strip query parameters before the page loads, (3) typos in parameter names such as using `utm-source` with a hyphen instead of `utm_source` with an underscore, and (4) missing Google Analytics tracking code on the destination page."
    },
    {
      "question": "Does my website need special server setup to read UTM codes?",
      "answer": "No. UTM parameters are standard URL query strings. Analytics platforms like Google Analytics 4, Plausible, Fathom, and Mixpanel automatically read them from the browser's address bar when a page loads. No custom server code or configuration is required."
    },
    {
      "question": "Is this UTM builder free and private?",
      "answer": "Yes. Our UTM Campaign Builder runs entirely client-side in your browser using JavaScript. Your target URLs, campaign names, and tracking links are never sent to external servers or stored anywhere. Everything stays on your device."
    },
    {
      "question": "Should I shorten my UTM URLs before sharing?",
      "answer": "For social media and email campaigns, yes — long UTM URLs look cluttered. Build your full tracking URL with all UTM parameters first, then paste it into a URL shortener (like Bitly or TinyURL) to create a cleaner shareable link. The shortener will forward clicks to your full UTM URL, so analytics tracking is preserved."
    },
    {
      "question": "How do UTM parameters help digital marketing decisions?",
      "answer": "UTM parameters let you see exactly which campaigns, channels, and content pieces are driving real conversions — not just visits. By tagging every link in every campaign (email newsletters, social posts, paid ads, influencer links), you can compare ROI across channels in your analytics dashboard and make budget decisions based on actual data rather than guesswork."
    }
  ],
  "seoTitle": "Free UTM Builder — Create Campaign Tracking URLs for Google Analytics",
  "seoHeading": "Build UTM Tracking URLs for Any Marketing Campaign",
  "seoIntro": "Running an email campaign, publishing social media posts, or managing paid ads? Without UTM parameters, Google Analytics can't tell you which channel drove each visitor. Our free UTM builder generates properly formatted campaign tracking URLs in seconds — no spreadsheets, no manual typing, no encoding mistakes.",
  "seoBody": "\n<h3>What Are UTM Parameters and Why Do Marketers Need Them?</h3>\n<p>UTM parameters are five simple text tags you append to any destination URL. When a user clicks the link, Google Analytics (GA4) reads the tags and records exactly which source, medium, campaign, keyword, and ad content drove that visit. Without UTM codes, GA4 groups all traffic into vague buckets like \"direct\" or \"referral\", making it impossible to measure real campaign performance.</p>\n<p>Using a dedicated UTM builder — rather than typing parameters manually — eliminates typos, inconsistent capitalisation, and broken encoding that corrupt your analytics reports.</p>\n\n<h3>How to Use the UTM Campaign Builder</h3>\n<ol>\n  <li><strong>Enter your landing page URL.</strong> This is the destination page you want to track — your homepage, a product page, or a specific blog post.</li>\n  <li><strong>Fill in utm_source.</strong> Use the platform name: <code>google</code>, <code>facebook</code>, <code>newsletter</code>, <code>youtube</code>.</li>\n  <li><strong>Fill in utm_medium.</strong> Use the channel type: <code>cpc</code>, <code>email</code>, <code>social</code>, <code>organic</code>.</li>\n  <li><strong>Fill in utm_campaign.</strong> Use a descriptive campaign name: <code>black_friday_2026</code>, <code>product_launch</code>.</li>\n  <li><strong>Copy the generated URL</strong> and paste it into your ads, emails, or social posts.</li>\n</ol>\n\n<h3>UTM Parameter Naming Conventions</h3>\n<p>Consistent naming is critical. Inconsistent casing, different spellings, and arbitrary abbreviations all split your data into separate rows in Analytics. Follow these conventions:</p>\n<ul>\n  <li>Always use <strong>lowercase</strong> — GA4 is case-sensitive</li>\n  <li>Use <strong>underscores</strong> instead of spaces or hyphens</li>\n  <li>Use the same <strong>source names</strong> across all campaigns (e.g. always <code>instagram</code>, never <code>IG</code> on some links)</li>\n  <li>Include the campaign <strong>year or quarter</strong> in the campaign name for easy filtering later</li>\n</ul>\n\n<h3>Common UTM Examples by Channel</h3>\n<ul>\n  <li><strong>Email newsletter:</strong> <code>?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=august_digest</code></li>\n  <li><strong>Google Ads:</strong> <code>?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=brand_search&amp;utm_term=image+compressor</code></li>\n  <li><strong>Instagram organic post:</strong> <code>?utm_source=instagram&amp;utm_medium=social&amp;utm_campaign=product_feature</code></li>\n  <li><strong>YouTube description link:</strong> <code>?utm_source=youtube&amp;utm_medium=video&amp;utm_campaign=tutorial_series&amp;utm_content=description_link</code></li>\n</ul>\n\n<h3>100% Browser-Based — Your Campaign Data Stays Private</h3>\n<p>Unlike many online UTM generators that log your URLs to marketing databases, our UTM builder runs entirely client-side. Your destination URLs, campaign names, and generated tracking links are processed locally in your browser and never transmitted to any server. Your marketing strategies remain private.</p>\n"
};

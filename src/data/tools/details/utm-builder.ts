import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-utm",
  "slug": "utm-builder",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "UTM Builder & Campaign URL Generator",
  "shortDesc": "Build and validate marketing campaign tracking URLs with UTM parameters for Google Analytics (GA4) in seconds.",
  "metaDesc": "Free UTM builder and campaign URL generator. Create custom Google Analytics tracking links with utm_source, utm_medium, utm_campaign, utm_term, and utm_content. 100% free and client-side.",
  "instructions": [
    "Enter your destination website or landing page URL (e.g., https://example.com/promo).",
    "Specify Campaign Source (utm_source) — the platform referring traffic, such as google, newsletter, instagram, or linkedin.",
    "Specify Campaign Medium (utm_medium) — the marketing channel, such as cpc, email, social, or banner.",
    "Specify Campaign Name (utm_campaign) — your strategic promotion name, such as summer_sale_2026 or product_launch.",
    "Optional: Add Campaign Term (utm_term) for paid search keywords, and Campaign Content (utm_content) to A/B test ad variations or button placements.",
    "Click Copy URL to instantly copy the fully formatted, valid tracking link to your clipboard."
  ],
  "features": [
    "Generates clean, W3C-compliant, URL-encoded UTM tracking links.",
    "Real-time live preview with parameter syntax validation.",
    "Instant one-click copy to clipboard with local activity history.",
    "Compatible with Google Analytics 4 (GA4), Mixpanel, Plausible, and all major analytics platforms.",
    "100% private and client-side: your URLs, campaigns, and UTM tags are never sent to external servers."
  ],
  "componentName": "UtmBuilder",
  "faqs": [
    {
      "question": "What is a UTM builder and campaign URL generator?",
      "answer": "A UTM builder (or campaign URL generator) is a digital marketing utility that appends Urchin Tracking Module (UTM) parameters to website URLs. When users click a UTM-tagged link, web analytics platforms like Google Analytics 4 (GA4) parse these parameters to pinpoint exactly which traffic source, marketing medium, advertising campaign, keyword, or creative variant generated the session."
    },
    {
      "question": "What are the 5 standard UTM parameters and how are they used?",
      "answer": "The five standard UTM parameters are: (1) utm_source — identifies the specific website, platform, or advertiser sending traffic (e.g., google, facebook, newsletter); (2) utm_medium — identifies the high-level marketing channel type (e.g., email, cpc, organic_social, referral); (3) utm_campaign — identifies the individual marketing initiative or product launch (e.g., black_friday_2026); (4) utm_term — used primarily in paid search to track specific bid keywords (e.g., image_compressor); (5) utm_content — used to differentiate links pointing to the same URL within one creative, such as header_cta vs footer_link."
    },
    {
      "question": "Are UTM parameters case-sensitive in Google Analytics 4?",
      "answer": "Yes. Google Analytics 4 treats UTM parameters as strictly case-sensitive. If one campaign uses utm_source=Email and another uses utm_source=email, GA4 will report them on separate lines as distinct traffic sources. To maintain pristine reporting hygiene, always use lowercase letters throughout all UTM tags."
    },
    {
      "question": "How should spaces and special characters be formatted in UTM tags?",
      "answer": "You should avoid spaces and special characters in UTM parameters. Use underscores (_) or hyphens (-) to separate words (e.g., summer_sale_2026 instead of summer sale 2026). If special characters are entered, our UTM builder automatically applies URL encoding (percent-encoding) so your final link never breaks."
    },
    {
      "question": "Where do UTM parameters go in relation to URL anchors (#)?",
      "answer": "UTM parameters must always be placed BEFORE any URL anchor fragment (#). The correct structure is: https://example.com/page?utm_source=twitter&utm_medium=social#pricing. If parameters are placed after the #, browsers strip them before making the server request, preventing analytics tracking."
    },
    {
      "question": "Can I convert my UTM tracking URL into a QR code or short link?",
      "answer": "Yes! Once you generate your campaign URL with our UTM builder, you can paste it directly into our QR Code Generator to create a scannable offline marketing code, or use a URL shortener for clean social media and SMS distribution. The tracking parameters will be preserved across redirects."
    },
    {
      "question": "Is this UTM builder completely free and private?",
      "answer": "Yes. Our UTM builder runs 100% locally in your web browser. None of your campaign names, landing page URLs, or marketing tags are transmitted to or logged on any database. Your proprietary campaign strategies remain strictly private."
    },
    {
      "question": "Why is my UTM traffic showing up as 'Direct / None' in GA4?",
      "answer": "Common causes of UTM traffic defaulting to Direct/None include: (1) redirects on your website that strip query parameters, (2) placing UTM parameters after an anchor hash (#), (3) typos in parameter keys (such as using utm-source with a dash instead of utm_source with an underscore), or (4) the destination page missing the GA4 tracking tag."
    }
  ],
  "seoTitle": "Free UTM Builder & Campaign URL Generator — Google Analytics Link Creator",
  "seoHeading": "Create Custom UTM Campaign Tracking URLs for Google Analytics",
  "seoIntro": "Measure your marketing ROI with precision. Our free, browser-based UTM builder and campaign URL generator creates error-free tracking links for Google Analytics 4 (GA4), paid ads, email newsletters, and social media campaigns in seconds.",
  "seoBody": "\n<h3>What Is a Campaign URL Builder and Why Is UTM Tracking Essential?</h3>\n<p>In digital marketing, knowing your total visitor count is not enough — you need to know exactly which marketing channels and individual creatives drive revenue. Without UTM tracking parameters, web analytics platforms like Google Analytics 4 (GA4) group incoming traffic into broad, generic categories like &quot;Direct&quot; or &quot;Referral&quot;.</p>\n<p>By using a dedicated <strong>UTM builder and campaign URL creator</strong>, you attach standardized tracking tags to your links. When users click, GA4 captures these tags and attributes conversions directly to your specific campaigns, ad copy, or email sends.</p>\n\n<h3>The 5 Core UTM Parameters Explained</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Parameter</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Required</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Purpose &amp; Description</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Example Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>utm_source</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Yes</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Identifies the referrer or platform sending traffic.</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>google</code>, <code>newsletter</code>, <code>instagram</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>utm_medium</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Yes</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Identifies the high-level marketing or delivery channel.</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>cpc</code>, <code>email</code>, <code>social</code>, <code>affiliate</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>utm_campaign</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Yes</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Identifies the specific promotion, launch, or theme.</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>summer_sale_2026</code>, <code>brand_awareness</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>utm_term</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Optional</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Tracks specific paid search keywords or audience segments.</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>free_image_compressor</code>, <code>seo_tools</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>utm_content</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Optional</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Differentiates ad variants, banners, or button placements.</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>blue_button</code>, <code>hero_banner</code>, <code>sidebar_link</code></td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Best Practices for UTM Naming Conventions</h3>\n<ul>\n  <li><strong>Enforce Lowercase Everywhere:</strong> Because GA4 is case-sensitive, always standardize on lowercase. Avoid mixing <code>Facebook</code> and <code>facebook</code>.</li>\n  <li><strong>Use Consistent Separators:</strong> Use underscores (<code>_</code>) or hyphens (<code>-</code>) instead of spaces. Spaces get encoded as <code>%20</code>, making URLs cumbersome.</li>\n  <li><strong>Keep Parameter Values Concise:</strong> Don't overload UTM tags with redundant narrative. Keep keys descriptive yet succinct.</li>\n  <li><strong>Check for Redirect Preservation:</strong> Ensure your server redirects (e.g. HTTP to HTTPS or non-www to www) preserve query parameters rather than stripping them.</li>\n</ul>\n\n<h3>Real-World UTM Examples by Marketing Channel</h3>\n<ul>\n  <li><strong>Email Newsletter:</strong> <code>https://www.creatorunits.com/tools?utm_source=weekly_digest&amp;utm_medium=email&amp;utm_campaign=august_updates&amp;utm_content=header_cta</code></li>\n  <li><strong>Google Search Ads:</strong> <code>https://www.creatorunits.com/tools/utility/utm-builder?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=search_utilities&amp;utm_term=utm+builder</code></li>\n  <li><strong>Instagram Bio Link:</strong> <code>https://www.creatorunits.com/tools?utm_source=instagram&amp;utm_medium=social&amp;utm_campaign=profile_bio</code></li>\n  <li><strong>YouTube Description Link:</strong> <code>https://www.creatorunits.com/tools/creator/youtube-tag-extractor?utm_source=youtube&amp;utm_medium=video&amp;utm_campaign=tutorial_series&amp;utm_content=description_link</code></li>\n</ul>\n\n<h3>Combine With Related Creator Tools</h3>\n<p>Enhance your digital campaigns by combining your UTM tracking URLs with our other free utilities:</p>\n<ul>\n  <li>Read our comprehensive <a href=\"/blog/utm-tracking-link-guide\">UTM Tracking Link Guide for Content Creators</a> for step-by-step GA4 reporting tips.</li>\n  <li>Turn your campaign link into a scannable physical asset with our <a href=\"/tools/utility/qr-code-generator\">QR Code Generator</a>.</li>\n  <li>Safely encode complex query strings using our <a href=\"/tools/utility/url-encoder-decoder\">URL Encoder / Decoder</a>.</li>\n</ul>\n"
};

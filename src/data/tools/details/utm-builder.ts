import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-utm",
  "slug": "utm-builder",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "UTM Campaign Builder",
  "shortDesc": "Build marketing campaign links with source, medium, and term tracking codes.",
  "metaDesc": "Create tracking URLs for Google Analytics. Build UTM campaign links with source, medium, name, content parameters instantly.",
  "instructions": [
    "Enter your base website URL.",
    "Enter campaign parameters: Source (e.g. newsletter), Medium (email), Campaign Name (launch).",
    "Optional: set Campaign Term or Campaign Content.",
    "Copy the built tracking link from the output box."
  ],
  "features": [
    "Ensures valid URL structures.",
    "Live output preview updates.",
    "Clear explanation tooltips."
  ],
  "componentName": "UtmBuilder",
  "faqs": [
    {
      "question": "What is a UTM code?",
      "answer": "UTM (Urchin Tracking Module) parameters are five simple text codes (query parameters) that you append to the end of your website URLs. When a user clicks a tracking link, Google Analytics (GA4) or other web metrics software reads these parameters to track exactly where the visitor came from, which marketing channel they used, and which campaign drove the click."
    },
    {
      "question": "What are the five standard UTM parameters?",
      "answer": "The five standard parameters are: `utm_source` (identifies the platform or site sending traffic, e.g. `newsletter`), `utm_medium` (identifies the marketing channel type, e.g. `email`), `utm_campaign` (identifies the specific product launch or promotion, e.g. `summer_sale`), `utm_term` (used for tracking paid search keywords), and `utm_content` (used to distinguish different ads or links within the same campaign, e.g. `blue_button`)."
    },
    {
      "question": "Are UTM codes case-sensitive?",
      "answer": "Yes, UTM parameters are strictly case-sensitive. If you write `utm_source=Newsletter` on one link and `utm_source=newsletter` on another, Google Analytics will track them as two completely separate traffic sources. To maintain clean, organized reports, always use lowercase letters for all UTM values."
    },
    {
      "question": "Can I use spaces in UTM parameters?",
      "answer": "We recommend avoiding spaces in UTM parameters. If you include spaces, web browsers automatically convert them to percent-encoded characters (like `%20`), which makes your URLs look cluttered and hard to read. Instead of spaces, use underscores (`_`) or hyphens (`-`) to separate words (e.g. `summer_sale_2026`)."
    },
    {
      "question": "Why did my analytics fail to track UTM parameters?",
      "answer": "Tracking failures are usually caused by three issues: pasting UTM parameters after a URL hash identifier (hashes `#` must always go at the very end of the URL), server redirects that strip query parameters when loading the destination page, or using misspelled parameter names (e.g. `utm-source` with a hyphen instead of `utm_source` with an underscore)."
    },
    {
      "question": "Does my website need special setup to read UTM codes?",
      "answer": "No. UTM parameters are standard query parameters. Popular analytics platforms (like Google Analytics 4, Plausible, Fathom, and Mixpanel) are designed to read these codes automatically from the browser's address bar when a page loads. You do not need to write custom scripts to capture them."
    },
    {
      "question": "Is this UTM builder secure?",
      "answer": "Yes, our UTM builder runs entirely client-side in your local browser using JavaScript. Your target URLs, campaign details, and tracking links are never sent to external servers or logged in any database, protecting your marketing strategies and landing page links."
    }
  ],
  "seoTitle": "UTM Link Builder - Campaign Tracking URL Generator",
  "seoHeading": "Build Custom Tracking URLs for Google Analytics",
  "seoIntro": "Launching an email campaign, publishing social updates, or running paid search ads? Tracking your traffic is key to measuring ROI. Our Free online UTM Campaign Builder allows you to append standard tracking parameters to your URLs instantly, ready for Google Analytics.",
  "seoBody": "\n<h3>Why Campaign Tracking and UTM Parameters Matter</h3>\n<p>Without UTM parameters, web analytics platforms group traffic into broad, vague categories like 'Direct' or 'Referral'. For example, if you send an email newsletter and a user clicks a link, Google Analytics might classify it as direct traffic if they open it in a desktop client. This makes it impossible to measure which marketing channels are converting. Appending UTM parameters ensures Google Analytics registers the correct source, medium, and campaign name, helping you evaluate campaign performance. Coordinate URL query codes using our <a href=\"/tools/utility/url-encoder-decoder\">URL Encoder / Decoder</a>.</p>\n\n<h3>Guidelines for Organized UTM Naming Schemes</h3>\n<p>To prevent chaotic analytics dashboards and segmented records, establish a strict naming guide for your team:</p>\n<ol>\n  <li><strong>Always Use Lowercase:</strong> Treat <code>email</code>, <code>Email</code>, and <code>EMAIL</code> as different channels. Sticking to lowercase prevents reporting clutter.</li>\n  <li><strong>Use Underscores or Hyphens:</strong> Replace spaces with separators like <code>_</code> or <code>-</code> (e.g. <code>newsletter_july</code>).</li>\n  <li><strong>Keep Parameter Meanings Standard:</strong> Use <code>utm_source</code> for the platform (e.g. <code>twitter</code>), <code>utm_medium</code> for the channel type (e.g. <code>social</code>), and <code>utm_campaign</code> for the campaign goal (e.g. <code>product_launch</code>).</li>\n</ol>\n<p>Once you generate your tracking link, you can package it into a scannable graphic using our related <a href=\"/tools/utility/qr-code-generator\">QR Code Generator</a> to track prints, or link it on a profile page built with our <a href=\"/tools/social/social-media-link-in-bio-helper\">Social Link-in-Bio Helper</a>.</p>\n\n<h3>Key Features of Our UTM Generator</h3>\n<ul>\n  <li><strong>URL Structure Validation:</strong> The builder checks for existing query characters (like <code>?</code>) and appends UTM parameters using the correct separator (<code>&</code>), preventing broken link paths.</li>\n  <li><strong>Live Output Previews:</strong> View your fully constructed URL update dynamically as you type each parameter character.</li>\n  <li><strong>Helpful Parameter Tooltips:</strong> Get quick reminders of what each parameter represents, helping you build accurate tags.</li>\n</ul>\n\n<h3>Common UTM Tracking Mistakes</h3>\n<ul>\n  <li><strong>Placing Parameters After Hashes:</strong> Putting parameters after a hash sign (e.g. <code>example.com/#about?utm_source=email</code>). Browsers ignore everything after the hash, so analytics scripts will miss the parameters. Put the hash at the end: <code>example.com/?utm_source=email#about</code>.</li>\n  <li><strong>Tracking Internal Site Links:</strong> Appending UTM codes to banners on your own website. This resets the visitor's original source session, ruining path tracking. Use internal event tracking instead.</li>\n  <li><strong>Using Spaces or Symbols:</strong> Writing spaces inside values. This results in ugly URLs filled with <code>%20</code>. Keep parameters clean.</li>\n</ul>\n\n<h3>Official Analytics Guidelines & References</h3>\n<p>To read official recommendations on campaign tags, consult <a href=\"https://support.google.com/analytics/answer/10917952\" target=\"_blank\" rel=\"noopener noreferrer\">Google Analytics 4 Campaign Tracking Support</a> and check developer specs at <a href=\"https://support.google.com/analytics/answer/1033867\" target=\"_blank\" rel=\"noopener noreferrer\">Google Campaign URL Builder Guide</a>.</p>\n    "
};

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
    },
    {
      "question": "What kinds of tasks is the UTM Campaign Builder best suited for?",
      "answer": "The UTM Campaign Builder is a fast daily utility designed to handle common tasks like password generation, word counting, unit calculations, and QR code creations in seconds, avoiding the search for third-party software."
    },
    {
      "question": "Is the Password Generator secure?",
      "answer": "Yes. It uses the Web Crypto API, which leverages your computer's built-in cryptographic engine to generate random characters locally. No passwords are ever transmitted over the network."
    },
    {
      "question": "How do UTM links help in digital marketing?",
      "answer": "UTM parameters tell Google Analytics exactly where your website traffic is coming from (e.g. newsletter, social banner, guest blog). Using the builder helps you avoid format errors that skew analytics."
    }
  ],
  "seoTitle": "UTM Link Builder - Campaign Tracking URL Generator",
  "seoHeading": "Build Custom Tracking URLs for Google Analytics",
  "seoIntro": "Launching an email campaign, publishing social updates, or running paid search ads? Tracking your traffic is key to measuring ROI. Our Free online UTM Campaign Builder allows you to append standard tracking parameters to your URLs instantly, ready for Google Analytics.",
  "seoBody": "\n<h3>Why You Should Use Our UTM Campaign Builder</h3>\n<p>The UTM Campaign Builder is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the UTM Campaign Builder provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Ensures valid URL structures.:</strong> Ensures valid URL structures.</li>\n  <li><strong>Live output preview updates.:</strong> Live output preview updates.</li>\n  <li><strong>Clear explanation tooltips.:</strong> Clear explanation tooltips.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our UTM Campaign Builder runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the UTM Campaign Builder with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Utility Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

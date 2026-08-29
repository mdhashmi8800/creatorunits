import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-css-min",
  "slug": "css-minifier",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "CSS Minifier — Compress Stylesheets & Boost Page Speed",
  "shortDesc": "Minify CSS stylesheets online by stripping comments, spaces, and line breaks to optimize render-blocking stylesheet performance and Core Web Vitals.",
  "metaDesc": "Free online CSS minifier. Compress stylesheet files, strip comments and whitespace, optimize color hex codes, and improve First Contentful Paint (FCP). 100% client-side.",
  "instructions": [
    "Paste your raw CSS rules, media queries, or stylesheet blocks into the editor.",
    "Click 'Minify CSS' to execute real-time syntax compression.",
    "Inspect the compression metrics displaying original bytes, minified bytes, and percentage saved.",
    "Click 'Copy Minified' to copy the optimized CSS or deploy it to your web server."
  ],
  "features": [
    "Strips multi-line comments (`/* ... */`) while preserving critical author licenses.",
    "Collapses redundant 6-digit hex color codes to 3-digit equivalents (e.g. `#ffffff` to `#fff`).",
    "Removes redundant unit qualifiers from zero values (e.g. `margin: 0px` to `margin: 0`).",
    "Preserves CSS custom properties (variables), calc expressions, and CSS Grid/Flexbox layouts.",
    "100% client-side: your design tokens, themes, and CSS files are never uploaded to remote servers."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "What is CSS minification?",
      "answer": "CSS minification is the practice of removing unnecessary characters from stylesheet files without changing how the browser renders visual styles. This includes removing comments, indentation spaces, line breaks, redundant semicolons, and collapsing color codes. The resulting file is smaller and downloads faster."
    },
    {
      "question": "Why is minifying CSS critical for First Contentful Paint (FCP)?",
      "answer": "CSS is a render-blocking resource. Web browsers cannot render any text or graphics until all linked CSS stylesheets are completely downloaded and parsed into the CSSOM (CSS Object Model). Minifying CSS reduces stylesheet payload sizes, allowing browsers to render the first pixel on screen much faster."
    },
    {
      "question": "Does minifying CSS break media queries or flexbox layouts?",
      "answer": "No. Our CSS minifier strictly obeys CSS3 syntax rules. Media queries (`@media`), `@keyframes` animations, CSS Grid, Flexbox declarations, and modern CSS variables (`var(--primary)`) remain 100% functionally intact."
    },
    {
      "question": "What is the difference between Minification and PurgeCSS / Unused CSS Removal?",
      "answer": "Minification removes formatting whitespace and comments from existing CSS rules. PurgeCSS (or unused CSS removal) scans your HTML templates to delete entire CSS class rules that are never used on the page. Combining unused CSS removal with CSS minification yields the absolute fastest page load speeds."
    },
    {
      "question": "Should I inline critical CSS or keep it as a minified external stylesheet?",
      "answer": "For optimal Core Web Vitals, inline your minified 'Critical CSS' (styles required for above-the-fold content) directly in the HTML `<head>`, and load the rest of your minified external stylesheets asynchronously."
    },
    {
      "question": "Is this CSS minifier free to use?",
      "answer": "Yes. It is 100% free with no file size limits, running locally in your browser sandbox with zero server uploads."
    }
  ],
  "seoTitle": "Free CSS Minifier — Compress Web Stylesheets Online",
  "seoHeading": "Minify CSS Stylesheets to Accelerate Page Rendering & FCP",
  "seoIntro": "Eliminate render-blocking stylesheet bloat. Our free, browser-based CSS Minifier strips comments, indentation, and redundant color codes safely to improve First Contentful Paint (FCP) and Core Web Vitals.",
  "seoBody": "\n<h3>How CSS Minification Improves Page Rendering Speed</h3>\n<p>Because stylesheets are inherently <strong>render-blocking</strong>, every millisecond a mobile browser spends downloading and parsing heavy CSS directly delays First Contentful Paint (FCP) and Largest Contentful Paint (LCP). Large uncompressed stylesheets with extensive comments, indentation, and spaces force mobile users on 4G/5G connections to wait on a blank white screen.</p>\n<p>By using our <strong>CSS Minifier</strong>, you can strip non-rendering characters and optimize color hex values, reducing file weights by <strong>20% to 50%</strong>.</p>\n\n<h3>CSS Optimization Transformations Breakdown</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Rule Element</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Unminified Source</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Minified Output</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Savings Rationale</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Comments</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>/* Header Hero Navigation */</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><em>(Removed)</em></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Comments are ignored by browser rendering engine</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Zero Unit Values</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>margin: 0px; padding: 0em;</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>margin:0;padding:0</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Zero requires no unit identifier in CSS specifications</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Hex Colors</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>color: #ffffff; background: #000000;</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>color:#fff;background:#000</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">3-character hex equivalent saves 3 bytes per color declaration</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Trailing Semicolons</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>.card { color: #fff; }</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>.card{color:#fff}</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Final declaration before closing brace does not require semicolon</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Complementary Developer Utilities</h3>\n<ul>\n  <li><a href=\"/tools/developer/javascript-minifier\">JavaScript Minifier</a> — Compress script bundles to reduce TBT and improve INP.</li>\n  <li><a href=\"/tools/developer/json-formatter\">JSON Formatter &amp; Validator</a> — Format and validate API data structures client-side.</li>\n  <li><a href=\"/tools/developer/base64-encoder-decoder\">Base64 Encoder / Decoder</a> — Convert small icons and fonts to inline data URIs.</li>\n</ul>\n"
};

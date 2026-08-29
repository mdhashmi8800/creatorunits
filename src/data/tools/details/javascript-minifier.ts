import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-js-min",
  "slug": "javascript-minifier",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JavaScript Minifier — Compress JS Code & Reduce Bundle Size",
  "shortDesc": "Minify JavaScript code online by removing comments, redundant whitespace, and newlines to accelerate web page loading and Core Web Vitals.",
  "metaDesc": "Free online JavaScript minifier. Compress JS code, strip comments and whitespace, reduce bundle file size, and improve Core Web Vitals (LCP & TBT). 100% client-side.",
  "instructions": [
    "Paste your raw JavaScript (ES5, ES6+, or TypeScript output) into the code input editor.",
    "Click 'Minify JS' to compress the script in real-time.",
    "Inspect the compression statistics showing original bytes, minified bytes, and percentage saved.",
    "Click 'Copy Minified' to copy the compressed code or download it as a `.min.js` file for production deployment."
  ],
  "features": [
    "Strips single-line (`//`) and multi-line (`/* */`) comments while preserving copyright notices.",
    "Removes redundant spaces, tabs, and newline breaks without breaking statement syntax.",
    "Real-time file size gauge and byte reduction percentage tracker.",
    "Supports modern ECMAScript features (arrow functions, template literals, async/await, optional chaining).",
    "100% private and client-side: your proprietary codebase, API endpoints, and logic are never uploaded to remote servers."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "What is JavaScript minification and how does it work?",
      "answer": "JavaScript minification is the process of removing all unnecessary characters from source code without altering its functional behavior. This includes stripping indentation spaces, newline breaks, comments, and redundant formatting. While human developers need formatted code for readability, web browsers execute minified code identically with significantly less network bandwidth."
    },
    {
      "question": "How does minifying JS improve Google Core Web Vitals?",
      "answer": "Minifying JavaScript reduces the network payload (bytes transferred), speeding up Largest Contentful Paint (LCP). Furthermore, smaller JS payloads parse and execute faster in the browser's V8 JavaScript engine, directly reducing Total Blocking Time (TBT) and Interaction to Next Paint (INP)."
    },
    {
      "question": "What is the difference between Minification, Obfuscation, and Tree-Shaking?",
      "answer": "Minification removes whitespace, line breaks, and comments to shrink file size. Obfuscation transforms variable names, functions, and control flow into complex, unreadable logic to prevent reverse-engineering. Tree-shaking is a build-step process (like in Webpack/Rollup) that dead-code eliminates unused module exports."
    },
    {
      "question": "Will minification break my JavaScript code?",
      "answer": "Standard JavaScript minification does not break properly written code. The most common pitfall is relying on Automatic Semicolon Insertion (ASI). If source code omits semicolons, minifying multiple statements onto a single line can occasionally cause syntax errors. Always write well-formed JavaScript with explicit semicolons."
    },
    {
      "question": "Should I still use Gzip / Brotli compression if I minify my JS?",
      "answer": "Yes! Minification and HTTP compression (Gzip/Brotli) work synergistically. Minification removes character-level redundancy, and Gzip compresses the resulting text on the wire, typically yielding an 80% to 90% total reduction in asset transfer size."
    },
    {
      "question": "Is this JavaScript minifier completely free and private?",
      "answer": "Yes. Our JS minifier runs 100% in your local browser sandbox using client-side tokenizers. None of your source code, internal logic, or confidential algorithms are ever transmitted to any database or server."
    }
  ],
  "seoTitle": "Free JavaScript Minifier — Compress JS Code Online",
  "seoHeading": "Minify JavaScript Files to Boost Page Speed & Core Web Vitals",
  "seoIntro": "Slash JavaScript bundle sizes, reduce server bandwidth, and boost Core Web Vitals. Our free, browser-based JavaScript Minifier strips comments, indentation, and whitespace safely in milliseconds.",
  "seoBody": "\n<h3>Why JavaScript Minification Is Essential for Web Performance</h3>\n<p>Modern web applications rely heavily on JavaScript for interactivity, analytics, and UI components. However, uncompressed JavaScript files bloated with comments, tabs, and indentation slow down network download speeds, increase time-to-interactive, and negatively impact Google search rankings.</p>\n<p>By passing your production scripts through our <strong>JavaScript Minifier</strong>, you eliminate non-executable characters, reducing file sizes by <strong>30% to 60%</strong> before applying server-side Gzip or Brotli compression.</p>\n\n<h3>Code Optimization Comparison: Minification vs. Obfuscation</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Optimization Type</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Primary Purpose</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Typical Size Reduction</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Impact on Execution Speed</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Minification</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Strips whitespace, comments, and redundant formatting</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">30% &ndash; 60% smaller</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Faster parse &amp; download; identical runtime</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Obfuscation</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Scrambles identifiers &amp; control flow for security</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">May increase file size</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Slightly slower runtime execution</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Gzip / Brotli (Server)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">HTTP wire compression of text streams</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">65% &ndash; 85% on top of minification</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Instant network transit; fast browser decompress</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Best Practices When Deploying Minified JavaScript</h3>\n<ul>\n  <li><strong>Generate Source Maps:</strong> In production build pipelines, pair <code>.min.js</code> bundles with <code>.map</code> source maps to enable easy debugging in Chrome DevTools without exposing unminified code to end users.</li>\n  <li><strong>Use Strict Semicolon Hygiene:</strong> Always terminate JavaScript statements with explicit semicolons to prevent ASI errors when lines are concatenated.</li>\n  <li><strong>Defer Non-Critical Scripts:</strong> Add <code>defer</code> or <code>async</code> attributes to your <code>&lt;script&gt;</code> tags so script loading never blocks initial DOM rendering.</li>\n</ul>\n\n<h3>Complementary Developer Utilities</h3>\n<ul>\n  <li><a href=\"/tools/developer/css-minifier\">CSS Minifier</a> — Compress CSS stylesheets by stripping comments, spaces, and color codes.</li>\n  <li><a href=\"/tools/developer/json-formatter\">JSON Formatter &amp; Validator</a> — Format, validate, and debug JSON payloads client-side.</li>\n  <li><a href=\"/tools/developer/base64-encoder-decoder\">Base64 Encoder / Decoder</a> — Encode and decode strings, images, and binary tokens securely.</li>\n  <li><a href=\"/tools/developer/jwt-decoder\">JWT Token Decoder</a> — Inspect JSON Web Token headers, payloads, and expiration dates.</li>\n</ul>\n"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-url-encode",
  "slug": "url-encoder-decoder",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "URL Encoder / Decoder",
  "shortDesc": "Encode or decode strings to ensure safe transmission within query parameters.",
  "metaDesc": "Encode or decode strings to URL safe formats online. Translate special characters and spaces instantly. Runs client-side.",
  "instructions": [
    "Paste your text or encoded link parameter in the input panel.",
    "Click 'Encode' to escape special characters, or 'Decode' to convert back to standard text.",
    "Copy the converted output with one click."
  ],
  "features": [
    "Instant translation of % characters.",
    "Clean double-panel layout.",
    "Handles long query strings."
  ],
  "componentName": "UrlEncoderDecoder",
  "faqs": [
    {
      "question": "What is URL encoding?",
      "answer": "URL encoding (also known as Percent-Encoding) is a mechanism used to translate special characters within a Uniform Resource Identifier (URI) under specific conditions. Internet routers and web browsers are designed to interpret a specific set of characters (like `/`, `?`, `&`, `=`, `#`) as syntax controls. If your target data contains these characters (for example, putting an email address or another URL inside a query parameter), you must encode them to prevent parsing errors."
    },
    {
      "question": "How does Percent-Encoding work?",
      "answer": "Percent-encoding replaces non-ASCII or reserved characters with a percent sign (`%`) followed by a two-digit hexadecimal representation of the character's ASCII byte value. For example, a space character is replaced by `%20`, a question mark becomes `%3F`, an ampersand becomes `%26`, and an equals sign becomes `%3D`."
    },
    {
      "question": "What are reserved and unreserved characters?",
      "answer": "Under URI guidelines (RFC 3986), characters are split into two groups: Unreserved characters (letters `A-Z`, `a-z`, numbers `0-9`, and symbols `-`, `_`, `.`, `~`) do not have special syntactic meaning and never need encoding. Reserved characters (such as `/`, `?`, `:`, `@`, `&`, `=`, `+`, `$`) have syntactic purposes. If they are used as part of the data query, they must be escaped."
    },
    {
      "question": "Does URL encoding compress my parameters?",
      "answer": "No. URL encoding actually increases the character length of your text blocks. Since a single space (1 character) translates into `%20` (3 characters), your query string grows longer. Keep this in mind when developing API layouts with tight URL length limits (typically 2048 characters in older web browsers)."
    },
    {
      "question": "What is the difference between `encodeURI` and `encodeURIComponent`?",
      "answer": "In JavaScript, `encodeURI` is designed to encode a full website address, leaving address controls (like `http://`, slashes, and port colons) intact. `encodeURIComponent` is designed to encode a single query key or value parameter, escaping all reserved characters (including slashes and colons) to ensure they do not break the parent URL structure."
    },
    {
      "question": "Can I decode text that was double-encoded?",
      "answer": "Yes, but you will need to run the decoding process twice. If a string is encoded twice, symbols like `%` become `%25`. Running the decoder once will return a percent-escaped string (e.g. `%20`), and running it a second time will restore the original standard text."
    },
    {
      "question": "Is my data sent to a server for encoding or decoding?",
      "answer": "No. Our URL Encoder / Decoder runs 100% locally in your web browser. The conversions are processed using standard client-side JavaScript APIs (like `encodeURIComponent` and `decodeURIComponent`). Your confidential passwords, API keys, and email addresses are never sent over the internet, ensuring total data security."
    },
    {
      "question": "When would I need to URL encode a string?",
      "answer": "You need URL encoding whenever you place user-supplied data inside a URL query parameter. Common examples include: embedding an email address in a subscribe link (`?email=user%40example.com`), passing a full URL as a redirect parameter (`?return_url=https%3A%2F%2Fexample.com%2Fdashboard`), building search query strings (`?q=image+compressor+free`), and constructing UTM tracking links where the campaign name contains special characters."
    },
    {
      "question": "What is the difference between URL encoding a space as `+` versus `%20`?",
      "answer": "Both represent a space, but in different contexts. The `+` character is used in the `application/x-www-form-urlencoded` format — which is what HTML form submissions use by default. The `%20` encoding is the strict RFC 3986 percent-encoding standard for spaces in URI components. When building URL query parameters manually (as in API integrations and UTM links), always use `%20` to be safe. Our encoder uses `encodeURIComponent`, which produces `%20` — the most universally compatible encoding."
    },
    {
      "question": "How do I decode a URL that has been encoded multiple times?",
      "answer": "If a string has been encoded more than once, you need to run the decoder multiple times. For example, a double-encoded space looks like `%2520` (the `%` sign itself was encoded to `%25`). Running the decoder once gives `%20`, and running it again gives the original space. If you paste a URL into the decoder and it still contains `%` sequences after decoding, run the decoder again until the output stabilises."
    }
  ],
  "seoTitle": "URL Encoder Decoder - Percent Encoding Online Tool",
  "seoHeading": "Encode or Decode URL Query Parameters Online",
  "seoIntro": "Working on API integrations, UTM tracking links, or web database queries? Special characters in URLs can break routing paths. Our Free online URL Encoder / Decoder helps you convert strings to percent-encoded formats or decode escaped strings instantly.",
  "seoBody": "\n<h3>Why You Should Use Our URL Encoder / Decoder</h3>\n<p>The URL Encoder / Decoder is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the URL Encoder / Decoder provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Instant translation of % characters.:</strong> Instant translation of % characters.</li>\n  <li><strong>Clean double-panel layout.:</strong> Clean double-panel layout.</li>\n  <li><strong>Handles long query strings.:</strong> Handles long query strings.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our URL Encoder / Decoder runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the URL Encoder / Decoder with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Utility Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

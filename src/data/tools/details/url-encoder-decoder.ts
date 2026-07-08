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
    }
  ],
  "seoTitle": "URL Encoder Decoder - Percent Encoding Online Tool",
  "seoHeading": "Encode or Decode URL Query Parameters Online",
  "seoIntro": "Working on API integrations, UTM tracking links, or web database queries? Special characters in URLs can break routing paths. Our Free online URL Encoder / Decoder helps you convert strings to percent-encoded formats or decode escaped strings instantly.",
  "seoBody": "\n<h3>Understanding Percent-Encoding Rules (RFC 3986)</h3>\n<p>Web browsers and server directories use URIs to fetch files and route web pages. To prevent parsing conflicts, the internet standard defines a strict character set. If you need to send data—like an email address containing an <code>@</code> symbol, or a nested URL containing slashes—inside a query parameter, you must escape them. The <strong>URL Encoder / Decoder</strong> converts these characters into safe hexadecimal byte values. If you are building tracking links, run your variables through our <a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a> before encoding. If you want to package links into scannable graphics, try our <a href=\"/tools/utility/qr-code-generator\">QR Code Generator</a>.</p>\n\n<h3>Key Differences in Encoding Methods</h3>\n<p>When developing web scripts, selecting the correct encoding scope is crucial:</p>\n<ul>\n  <li><strong>Full URL Encoding (encodeURI):</strong> Escapes spaces and non-ASCII characters but ignores standard routing controls (like <code>http://</code>, slashes, and colons). Use this when repairing broken links containing spaces.</li>\n  <li><strong>Component Encoding (encodeURIComponent):</strong> Escapes every reserved character (including slashes, question marks, and colons). Use this when nesting parameter data (like setting a referral URL parameter).</li>\n</ul>\n\n<h3>Key Benefits of Browser-Based Encoding</h3>\n<ul>\n  <li><strong>Zero Server Latency:</strong> All conversions execute locally in your browser's memory using JavaScript APIs. Processing is instantaneous.</li>\n  <li><strong>Absolute Security:</strong> Ideal for developers handling API credentials, private tokens, or customer emails. We never transmit or save your data.</li>\n  <li><strong>Clean Side-by-Side Panels:</strong> Easily paste, convert, review, and copy outputs between the two panels.</li>\n</ul>\n\n<h3>Common URL Formatting Mistakes to Avoid</h3>\n<ol>\n  <li><strong>Double-Encoding Links:</strong> Running an already encoded link through the encoder again. This converts <code>%20</code> into <code>%2520</code>, which can break server routing controllers. Always decode your strings first if you are unsure of their status.</li>\n  <li><strong>Ignoring Length Limits:</strong> Most modern servers and browsers (like legacy Internet Explorer versions) truncate URLs longer than 2048 characters. Since encoding expands character lengths, keep query inputs compact.</li>\n  <li><strong>Manually Writing Escape Codes:</strong> Trying to guess percent codes (like typing <code>%2F</code> for slashes). Use our tool to automate conversions and prevent syntax errors.</li>\n</ol>\n\n<h3>Official Technical Standards</h3>\n<p>To learn more about URI guidelines, consult the official <a href=\"https://datatracker.ietf.org/doc/html/rfc3986\" target=\"_blank\" rel=\"noopener noreferrer\">IETF RFC 3986 URI Specification</a> and explore JavaScript developer references at the <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent\" target=\"_blank\" rel=\"noopener noreferrer\">MDN Web Docs encodeURIComponent Page</a>.</p>\n    "
};

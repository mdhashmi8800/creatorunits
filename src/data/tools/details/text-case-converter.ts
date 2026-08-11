import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-case-conv",
  "slug": "text-case-converter",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Text Case Converter",
  "shortDesc": "Convert text formats: UPPERCASE, lowercase, Title Case, Sentence Case, or slugify.",
  "metaDesc": "Convert text between UPPERCASE, lowercase, Title Case, Sentence Case, camelCase, PascalCase, and url-friendly slugs instantly.",
  "instructions": [
    "Paste or type your text.",
    "Select a case format button.",
    "Review the converted text and click copy."
  ],
  "features": [
    "Supports 7 distinct case formats.",
    "URL Slug generator converter.",
    "Clears input in one click."
  ],
  "componentName": "TextCaseConverter",
  "faqs": [
    {
      "question": "What is a text case converter?",
      "answer": "A text case converter is a formatting utility that automates the process of changing the capitalization style of blocks of text. Instead of manually retyping paragraphs to correct formatting issues, you can paste your text and convert it instantly between styles like UPPERCASE, lowercase, Title Case (capitalizing major words), Sentence Case (capitalizing only the first letter of sentences), camelCase, PascalCase, and URL-friendly slugs."
    },
    {
      "question": "How does Title Case capitalization work?",
      "answer": "Title Case format capitalizes the first letter of every major word in a string. Under standard English grammar rules (such as APA or Chicago Manual of Style guidelines), minor words—such as articles (a, an, the), coordinating conjunctions (and, but, for), and short prepositions (in, on, at, to)—are kept in lowercase unless they are the first or last word of the title."
    },
    {
      "question": "What is a URL Slug and why is it useful?",
      "answer": "A URL slug is a clean, readable text string used at the end of a web page address to describe its content. Slugs contain only lowercase letters, numbers, and hyphens (e.g. `text-case-converter`). They replace spaces with dashes and strip special symbols, which makes them SEO-friendly and prevents web servers from returning 404 errors."
    },
    {
      "question": "What is the difference between camelCase and PascalCase?",
      "answer": "Both are programming case styles that remove spaces between words to create single string tokens. In camelCase, the first word starts with a lowercase letter, and all subsequent words start with uppercase (e.g. `myVariableName`). In PascalCase, every single word starts with an uppercase letter, including the first word (e.g. `MyClassName`)."
    },
    {
      "question": "Why did my Sentence Case conversion fail to capitalize some sentences?",
      "answer": "Sentence Case relies on standard punctuation marks (like periods, question marks, and exclamation points) followed by spaces to detect sentence boundaries. If you forget to put a space after a period, or if your text block contains unusual punctuation (like abbreviations or decimals), the converter might not recognize the start of a new sentence."
    },
    {
      "question": "Does this case converter support Unicode characters?",
      "answer": "Yes, our case converter handles standard UTF-8 characters and accented European letters (like `é`, `ü`, `ñ`) correctly. However, very unique mathematical symbols, emojis, and specific non-latin alphabets do not have capital or lowercase variants, so their glyph layout remains unchanged during conversions."
    },
    {
      "question": "Is my text data safe and secure on this website?",
      "answer": "Yes, our case converter is completely secure. The conversions are processed locally on your device using client-side JavaScript string APIs (like `.toUpperCase()` and regex replacement functions). We never upload or save your text drafts to any server, keeping your work private."
    },
    {
      "question": "When should I use Title Case vs Sentence case?",
      "answer": "Use Title Case for headings, article titles, product names, and navigation labels — where every major word is capitalised. Use Sentence case for body copy, UI labels, tooltips, and form placeholders — where only the first word and proper nouns are capitalised. Title Case looks formal and is common in editorial contexts, while Sentence case feels more modern and is preferred in product interfaces and mobile apps."
    },
    {
      "question": "How does the URL slug converter work?",
      "answer": "The slug converter transforms any text into a clean, lowercase, hyphen-separated format suitable for page URLs and file names. For example, 'Best Image Tools for 2026!' becomes 'best-image-tools-for-2026'. Spaces are replaced with hyphens, special characters and punctuation are stripped, and everything is lowercased — matching the standard format expected by web servers and CMS platforms."
    },
    {
      "question": "What is camelCase and when is it used?",
      "answer": "camelCase (also written camel case) is a naming convention where the first word is lowercase and each subsequent word starts with a capital letter, with no spaces — for example, `myVariableName` or `getUserData`. It's the standard in JavaScript and most programming languages for variable names, function names, and object property keys. Our converter supports camelCase output for developers who need to quickly format database fields or API parameter names."
    }
  ],
  "seoTitle": "Text Case Converter - UPPERCASE, lowercase, Title Case",
  "seoHeading": "Convert Text Formats and Capitalization Styles Online",
  "seoIntro": "Need to fix caps lock errors, draft blog headings, or convert page titles into clean URL slugs? Retyping text blocks manually wastes time. Our Free online Text Case Converter converts your copy between seven case formats instantly in your browser.",
  "seoBody": "\n<h3>Why You Should Use Our Text Case Converter</h3>\n<p>The Text Case Converter is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the Text Case Converter provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Supports 7 distinct case formats.:</strong> Supports 7 distinct case formats.</li>\n  <li><strong>URL Slug generator converter.:</strong> URL Slug generator converter.</li>\n  <li><strong>Clears input in one click.:</strong> Clears input in one click.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our Text Case Converter runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the Text Case Converter with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Utility Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

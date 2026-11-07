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
  "seoBody": "\n<h3>How the Text Case Converter Works</h3>\n<p>Convert text formats: UPPERCASE, lowercase, Title Case, Sentence Case, or slugify.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Paste or type your text.</li>\n  <li>Select a case format button.</li>\n  <li>Review the converted text and click copy.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Supports 7 distinct case formats.</li>\n  <li>URL Slug generator converter.</li>\n  <li>Clears input in one click.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

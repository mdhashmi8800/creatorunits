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
    }
  ],
  "seoTitle": "Text Case Converter - UPPERCASE, lowercase, Title Case",
  "seoHeading": "Convert Text Formats and Capitalization Styles Online",
  "seoIntro": "Need to fix caps lock errors, draft blog headings, or convert page titles into clean URL slugs? Retyping text blocks manually wastes time. Our Free online Text Case Converter converts your copy between seven case formats instantly in your browser.",
  "seoBody": "\n<h3>Understanding Different Capitalization and Formatting Cases</h3>\n<p>When drafting copy for blogs, books, websites, or software scripts, different case systems serve specific purposes. Standard text formatting includes:</p>\n<ul>\n  <li><strong>Sentence Case:</strong> Capitalizes the first letter of each sentence, matching standard paragraph reading formats. Ideal for drafting emails or articles.</li>\n  <li><strong>Title Case:</strong> Capitalizes all major words. Standard for book titles, blog headers, and main page titles to draw attention.</li>\n  <li><strong>UPPERCASE & lowercase:</strong> Converts all characters to capital letters or small letters. Useful for fixing caps-lock errors.</li>\n  <li><strong>URL Slugs (slugify):</strong> Converts text to lowercase, replaces spaces with hyphens, and strips special characters, creating clean addresses.</li>\n</ul>\n<p>Before launching a website, combine URL slugs with tracking parameters generated in our <a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a>. If you want to check word lengths, character statistics, and reading speed diagnostics, try our <a href=\"/tools/utility/word-counter\">Word & Sentence Counter</a>.</p>\n\n<h3>Practical Coding Cases: camelCase vs. PascalCase</h3>\n<p>Developers use space-less case formats to write readable variable names, classes, and file paths:</p>\n<ul>\n  <li><strong>camelCase:</strong> Standard for naming variables, objects, and functions in JavaScript and Java (e.g. <code>const toolDetails = {}</code>).</li>\n  <li><strong>PascalCase:</strong> Used for naming React components, TypeScript interfaces, and class systems (e.g. <code>export class TextCaseConverter {}</code>).</li>\n</ul>\n\n<h3>Key Benefits of Browser-Based Conversion</h3>\n<ul>\n  <li><strong>Instant Processing:</strong> Converts thousands of words in milliseconds. No upload queues or network latency.</li>\n  <li><strong>100% Secure & Private:</strong> Files are processed locally. Ideal for drafting corporate slides, business reports, or private messages without leak risks.</li>\n  <li><strong>Simple One-Click Copying:</strong> Copy converted results directly to your clipboard in one tap.</li>\n</ul>\n\n<h3>Common Capitalization Mistakes</h3>\n<ol>\n  <li><strong>Leaving Double Spaces:</strong> Standard converters convert text case but leave double spacing. Check text formatting details before publishing.</li>\n  <li><strong>Ignoring Prepositions in Title Case:</strong> Capitalizing short prepositions (like <code>with</code>, <code>of</code>, <code>to</code>) in headings. Title case rules require keeping these in lowercase.</li>\n  <li><strong>Pasting Slugs with Accents:</strong> Creating slugs that retain foreign accents (e.g. <code>/café-shop</code>). Always strip accents for clean browser path compatibility.</li>\n</ol>\n\n<h3>Official References & Specifications</h3>\n<p>To learn about title formatting rules, check out the <a href=\"https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case\" target=\"_blank\" rel=\"noopener noreferrer\">APA Title Case Guidelines</a> and review JavaScript string standards at the <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase\" target=\"_blank\" rel=\"noopener noreferrer\">MDN String toUpperCase Guide</a>.</p>\n    "
};

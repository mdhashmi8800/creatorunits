import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-word-count",
  "slug": "word-counter",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Word & Sentence Counter",
  "shortDesc": "Measure word count, character count, keyword density, and estimated reading time.",
  "metaDesc": "Word counter and keyword density analyzer online. Track character counts, sentences, paragraphs, reading speed, and vocabulary stats.",
  "instructions": [
    "Type or paste your blog draft.",
    "Review density graphs showing most repeated words.",
    "Track word lists and reading time estimates."
  ],
  "features": [
    "Density analytics for top keywords.",
    "Calculates paragraphs and sentences.",
    "Supports large document pastes."
  ],
  "componentName": "WordCounter",
  "faqs": [
    {
      "question": "What is a word and sentence counter?",
      "answer": "A word and sentence counter is a text analysis utility designed for bloggers, content writers, students, and SEO specialists. It tracks structural statistics—such as character count, total words, sentence boundaries, and paragraph breaks—in real-time as you type. It also calculates advanced reading metrics, including estimated reading duration, average speaking time, and keyword density charts."
    },
    {
      "question": "How are word counts calculated in digital text?",
      "answer": "Word counts are calculated by splitting the text block using spaces, hyphens, and paragraph breaks as word boundary indicators. Consecutive space characters are treated as a single boundary to prevent count inflation. Hyphenated words (such as 'full-time') are typically counted as a single word under standard digital formatting models."
    },
    {
      "question": "What is keyword density and why does it matter for SEO?",
      "answer": "Keyword density is the percentage frequency of a specific word or phrase relative to the total word count of a document. In SEO writing, monitoring density helps you avoid keyword stuffing (repeating keywords excessively, which can trigger Google search spam penalties) while ensuring your target terms appear naturally throughout the text."
    },
    {
      "question": "How does the tool estimate reading and speaking times?",
      "answer": "Estimated reading time is calculated using a standard reading benchmark of 200 to 250 words per minute (WPM), which represents the average adult reading speed. Speaking time is calculated using a slower benchmark of 130 to 150 WPM, representing standard conversational speaking speeds for speeches or presentations."
    },
    {
      "question": "Does this tool count spaces and punctuation marks?",
      "answer": "Our word counter tracks two distinct character indicators: 'Characters with Spaces' (which counts every single letter, number, space, and punctuation byte) and 'Characters without Spaces' (which ignores space characters, measuring only physical symbols). This is useful for writing essays or articles with strict spacing constraints."
    },
    {
      "question": "Can I count words in multiple paragraphs?",
      "answer": "Yes, you can paste massive articles, essays, and reports containing multiple paragraph breaks. The tool runs paragraph calculations by identifying consecutive line-break markers, allowing you to track overall text volume and structure without crashing your browser."
    },
    {
      "question": "Is my pasted text secure on this website?",
      "answer": "Yes, our word counter operates 100% locally in your browser using JavaScript. Your text drafts, reports, and scripts are never sent over the internet or saved on our servers, ensuring total privacy and security for your drafts."
    },
    {
      "question": "What is the ideal word count for a blog post?",
      "answer": "It depends on the content type. For in-depth guides and how-to articles that target competitive keywords, 1,500–2,500 words typically perform best in search results. For listicles and quick tips, 800–1,200 words is standard. For product pages and landing pages, shorter and more direct copy (300–600 words) usually converts better. Use our word counter to ensure your draft hits the right target before publishing."
    },
    {
      "question": "How does reading time get calculated?",
      "answer": "Reading time is estimated based on average adult reading speed of approximately 200–250 words per minute. A 1,000-word article takes roughly 4–5 minutes to read. Our tool uses this benchmark to calculate and display an estimated reading time alongside the word count, helping you set accurate expectations in your article headers and social media previews."
    },
    {
      "question": "What are the character limits for major social media platforms?",
      "answer": "Platform character limits to keep in mind: Twitter/X posts allow 280 characters (with media). Instagram captions support up to 2,200 characters but show only the first 125 before truncation. LinkedIn posts allow 3,000 characters. YouTube titles are capped at 100 characters. Meta descriptions for SEO should stay between 150–160 characters. Use the character counter to check your copy before publishing."
    }
  ],
  "seoTitle": "Word Counter - Analyze Text Density and Reading Speed",
  "seoHeading": "Analyze Word Counts, Readability, and Keyword Density",
  "seoIntro": "Drafting an essay, writing a blog post, or preparing a speech? Keeping track of length and readability is essential. Our Free online Word & Sentence Counter provides real-time counts, reading metrics, and keyword density diagnostics as you type.",
  "seoBody": "\n<h3>How the Word & Sentence Counter Works</h3>\n<p>Measure word count, character count, keyword density, and estimated reading time.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Type or paste your blog draft.</li>\n  <li>Review density graphs showing most repeated words.</li>\n  <li>Track word lists and reading time estimates.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Density analytics for top keywords.</li>\n  <li>Calculates paragraphs and sentences.</li>\n  <li>Supports large document pastes.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

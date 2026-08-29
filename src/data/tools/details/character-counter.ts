import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-char-counter",
  "slug": "character-counter",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "Social Media Character Counter & Copy Length Checker",
  "shortDesc": "Count characters, words, sentences, and paragraphs in real-time while monitoring strict limits for Twitter/X, Instagram, TikTok, LinkedIn, and YouTube.",
  "metaDesc": "Free Social Media Character Counter. Live character, word, and reading time counter. Track real-time limits for Twitter/X (280), Instagram (2200), TikTok, and LinkedIn.",
  "instructions": [
    "Type or paste your post copy, tweet, caption, or article text into the input editor.",
    "Inspect live metric counts: Characters (with and without spaces), Words, Sentences, and Paragraphs.",
    "Review the color-coded platform limit badges (Twitter/X, Instagram Bio/Caption, LinkedIn, YouTube, TikTok).",
    "Check estimated Silent Reading Time and Spoken Speaking Time indicators for video scripts.",
    "Click 'Copy Text' to export your validated copy to your clipboard."
  ],
  "features": [
    "Real-time character counting with instant platform boundary indicators (Twitter, Instagram, TikTok, LinkedIn, YouTube, SEO).",
    "Grapheme-aware emoji counting to prevent Unicode truncation surprises.",
    "Calculates word count, sentence count, and average reading & speaking duration.",
    "Case conversion utilities and whitespace cleaning tools built-in.",
    "100% private and client-side: your drafts, notes, and tweets are never sent to external servers."
  ],
  "componentName": "CharacterCounter",
  "faqs": [
    {
      "question": "What are the exact character limits across all major social networks?",
      "answer": "Current character limits: Twitter / X: 280 characters (standard) or 25,000 (Premium); Instagram Caption: 2,200 characters (truncated in feed after ~125 characters); Instagram Bio: 150 characters; TikTok Caption: 2,200 characters; LinkedIn Post: 3,000 characters; LinkedIn Headline: 220 characters; YouTube Video Title: 100 characters; YouTube Video Description: 5,000 characters; YouTube Tags: 500 characters."
    },
    {
      "question": "How do emojis impact social media character limits?",
      "answer": "Standard English characters use 1 byte (1 character). However, emojis are complex Unicode graphemes that require 2 to 4 bytes (e.g. skin tone modifiers or zero-width joiners in family emojis). While modern platforms count most standard emojis as 2 characters (like on Twitter/X), pasting multi-modifier emojis into systems with byte-length limits can consume extra characters. Our tool uses UTF-16 code point counters to match how social networks parse text."
    },
    {
      "question": "What is the optimal caption length for Instagram and LinkedIn?",
      "answer": "For Instagram, while the limit is 2,200 characters, posts with either ultra-short captions (under 50 characters) or long-form storytelling captions (between 500 and 1,000 characters) generate the highest save and share rates. For LinkedIn, structured posts between 1,000 and 2,000 characters with clear paragraph breaks generate maximum comment velocity."
    },
    {
      "question": "What is the character limit for Google SEO title tags and meta descriptions?",
      "answer": "Google search snippets measure titles by pixel width (approx. 600px), which equates to roughly 50 to 60 characters. Meta descriptions are allocated approx. 960px on desktop (150–160 characters) and 680px on mobile (~120 characters). Keeping copy within these bounds prevents awkward truncation with ellipses (...)."
    },
    {
      "question": "How is the estimated speaking time calculated for video scripts?",
      "answer": "Estimated speaking time is calculated based on the standard natural conversational pace of 130 to 150 words per minute (WPM). Reading time is calculated at the standard silent reading pace of 200 to 250 WPM."
    },
    {
      "question": "Is my text private when using this character counter?",
      "answer": "Yes. Our tool operates 100% locally in your web browser. Your text, private notes, and marketing copy never leave your computer RAM."
    }
  ],
  "seoTitle": "Free Social Character Counter — Track Limits for Twitter, IG & LinkedIn",
  "seoHeading": "Count Characters, Words & Platform Limits in Real Time",
  "seoIntro": "Never get truncated by social platform cutoffs again. Our free, browser-based Character Counter monitors word count, character limits, emoji lengths, and reading times for Twitter/X, Instagram, TikTok, LinkedIn, and YouTube.",
  "seoBody": "\n<h3>2026 Master Social Media Character Limits Reference</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Platform &amp; Placement</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Max Limit</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Truncation Point (See More)</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Sweet Spot Recommendation</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Twitter / X Tweet</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">280 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">280 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">200 &ndash; 250 characters for clean retweets</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram Caption</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">2,200 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">125 chars (First 2 lines)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Put compelling hook in first 100 characters</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram Bio</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">150 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">150 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">120 &ndash; 140 chars with clean line breaks</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>TikTok Caption</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">2,200 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">100 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">150 &ndash; 300 chars with 3&ndash;5 SEO keywords</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>LinkedIn Post</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">3,000 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">140 &ndash; 200 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1,200 &ndash; 1,800 chars structured with white space</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube Title</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">100 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">60 &ndash; 70 chars on mobile</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">50 &ndash; 65 characters to prevent title cut-off</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube Description</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">5,000 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">150 chars (Above the fold)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Key links and summary in first 2 lines</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Google SEO Title</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">60 chars (~600px)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">60 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">50 &ndash; 58 characters</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Google Meta Description</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">160 chars (~960px)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">155 chars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">140 &ndash; 155 characters with CTA</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Tips for Writing High-Engagement Social Copy</h3>\n<ul>\n  <li><strong>Hook in the First 100 Characters:</strong> Because platforms hide captions behind &quot;...see more&quot; after 100–140 characters, front-load your most intriguing question or bold statement.</li>\n  <li><strong>Use Strategic Spacing:</strong> Walls of text reduce reader completion rates. Use single-line paragraphs and bullet points.</li>\n  <li><strong>Track Script Pacing:</strong> When recording TikToks or YouTube Shorts, aim for 2.2 to 2.5 words per second. A 60-second Short requires a script of roughly 130–150 words.</li>\n</ul>\n\n<h3>Related Free Text &amp; Social Utilities</h3>\n<ul>\n  <li><a href=\"/tools/social/bio-template-generator\">Bio Template Generator</a> — Generate character-checked social bios with emojis.</li>\n  <li><a href=\"/tools/social/hashtag-helper\">Hashtag Helper</a> — Compose and organize clean CamelCase hashtag groups.</li>\n  <li><a href=\"/tools/utility/text-case-converter\">Text Case Converter</a> — Convert text between UPPERCASE, lowercase, Title Case, and camelCase.</li>\n  <li><a href=\"/tools/creator/video-metadata-helper\">YouTube Video Metadata Helper</a> — Draft title, description, and tags with live limit gauges.</li>\n</ul>\n"
};

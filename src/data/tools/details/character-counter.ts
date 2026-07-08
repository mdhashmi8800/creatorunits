import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-char-counter",
  "slug": "character-counter",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "Social Character Counter",
  "shortDesc": "Count characters and words while checking limits for Twitter, Instagram, and Facebook.",
  "metaDesc": "Live character and word counter. Check real-time limit indicators for Twitter tweets, IG bios, FB updates, and LinkedIn posts.",
  "instructions": [
    "Type or paste your post copy.",
    "Review word count, character count, and reading duration indexes.",
    "Check the status chips indicating if your text is within bounds for major networks."
  ],
  "features": [
    "Limits checked: Twitter (280), IG Bio (150), IG Caption (2200), LinkedIn Post (3000).",
    "Calculates speaking and reading times.",
    "Clears input in one click."
  ],
  "componentName": "CharacterCounter",
  "faqs": [
    {
      "question": "What is a character counter?",
      "answer": "A social character counter is a real-time tracking tool that counts letters, numbers, spaces, and punctuation in your copy. It displays live limit checkers for platforms like Twitter, Instagram, and LinkedIn, ensuring your posts remain within the boundaries of each network before you upload them. This real-time feedback helps you craft posts that fit perfectly within each platform's rules."
    },
    {
      "question": "Why do social media platforms have limits?",
      "answer": "Social media platforms enforce character limits to maintain clean layouts, maximize scanning speeds, and prevent users from cluttering home feeds with long text blocks. For example, Twitter limits tweets to 280 characters, and Instagram caps bios at 150, keeping platform feeds concise and readable for mobile users. These constraints encourage creators to communicate efficiently and keep timelines scannable."
    },
    {
      "question": "Can I count spaces and special characters?",
      "answer": "Yes! Our character counter tracks spaces, paragraph breaks, emojis, numbers, and special symbols in addition to letters. All of these components occupy character bytes on social platforms, so counting them in real time helps you draft accurate captions and updates without truncation. This precision means fewer surprises when your post goes live."
    },
    {
      "question": "Is character counting useful for SEO?",
      "answer": "Yes, character counting is highly useful for search engine optimization. Page titles should remain under 60 characters, and meta descriptions should stay below 160 to prevent search engines from truncating them on search results pages. Using our tool ensures your SEO copy is fully optimized. Staying within these limits helps your pages rank better and avoids awkward truncation in search previews."
    },
    {
      "question": "Which platforms benefit from character limits?",
      "answer": "All networks benefit from character limits. Short copy forces creators to write concise headlines, which improves readability and user engagement. Platforms like Instagram, TikTok, Twitter, and LinkedIn show higher click-through rates on updates that place key information in the first few lines before truncation. Writing within these limits pushes you to prioritize your most compelling message upfront."
    },
    {
      "question": "How do emojis affect character counts?",
      "answer": "Emojis are complex Unicode symbols that often take up more than one character byte in digital encoding. While standard English letters occupy 1 byte (1 character), emojis can consume 2 to 4 bytes depending on skin tone options or gender joins. Our tool uses standard Javascript string length algorithms that count emojis based on how social platforms register them, ensuring your counts stay accurate."
    },
    {
      "question": "Is this character counter secure for drafting?",
      "answer": "Yes, our counter runs entirely client-side in your local browser. Your drafted text blocks, social media posts, and notes are never sent over the internet or uploaded to any remote server. This ensures total privacy for writing confidential business announcements or personal drafts."
    }
  ],
  "seoTitle": "Social Character Counter - Track Limits for Post Copy",
  "seoHeading": "Draft Social Updates Within Platform Limits",
  "seoIntro": "Keep updates from getting cut off. Track characters, spaces, and paragraphs with live limit checkers. Learn how social networks count emojis, character limits for SEO metadata, and best practices for writing high-engagement posts.",
  "seoBody": "\n<h3>Why You Should Monitor Post Lengths</h3>\n<p>Each platform has unique truncation thresholds. For instance, Instagram captions clip behind a 'More' button after 125 characters. Design your copy to put the most hook-worthy lines right at the beginning. If you are drafting long articles or need deep readability metrics (like word counts, paragraphs, and keyword density charts), try our comprehensive <a href=\"/tools/utility/word-counter\">Word & Sentence Counter</a>. If you are drafting customized profiles, try our <a href=\"/tools/social/bio-template-generator\">Bio Template Generator</a>.</p>\n\n<h3>Standard Limits Reference Chart</h3>\n<p>To keep your social campaign designs aligned, stay within these standard limits:</p>\n<ul>\n  <li><strong>Twitter/X Tweet:</strong> 280 characters maximum for free accounts. Premium subscribers get up to 25,000 characters, but feed cards still truncate early.</li>\n  <li><strong>Instagram Bio:</strong> 150 characters maximum. Make every character count with emojis and concise bullet points.</li>\n  <li><strong>Instagram Caption:</strong> 2,200 characters maximum, though feed cards clip text after 125. Place links or hooks first.</li>\n  <li><strong>LinkedIn Profile Headline:</strong> 220 characters maximum. Use this space to write target search terms.</li>\n  <li><strong>LinkedIn Post:</strong> 3,000 characters maximum. Keep updates under 1,000 characters to maximize completion rates.</li>\n</ul>\n\n<h3>How Emojis and Special Characters Impact Limits</h3>\n<p>When drafting social updates, keep in mind that digital systems write characters in UTF-8 or UTF-16 bytes. While standard characters occupy 1 byte, special Unicode symbols—like the fancy fonts generated by our <a href=\"/tools/social/fancy-text-generator\">Fancy Text Generator</a>—can register as multiple code units. Emojis also consume more bytes. Our tool uses standard character indexes to mirror how networks register text, preventing your captions from getting rejected.</p>\n\n<h3>Common Character Tracking Mistakes</h3>\n<ol>\n  <li><strong>Writing Right Up to the Limit:</strong> Social networks sometimes update their character parsing rules or ignore line breaks in length calculations. Leave a 10-character buffer to ensure your posts save without errors.</li>\n  <li><strong>Ignoring SEO Snippet Limits:</strong> Writing website meta descriptions that exceed 160 characters. Search engines will truncate the excess text, hiding call-to-actions.</li>\n  <li><strong>Forgetting FTC Affiliate Disclosures:</strong> Forgetting to add disclosures (e.g. <code>#ad</code>) within the first 125 characters of sponsored captions.</li>\n</ol>\n\n<h3>Technical Character Specs & References</h3>\n<p>To read more about standard character encodings, consult the official <a href=\"https://www.unicode.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Unicode Consortium Standard Site</a> and check web indexing guidelines at <a href=\"https://developers.google.com/search/docs/appearance/title-link\" target=\"_blank\" rel=\"noopener noreferrer\">Google Search Metadata Title Links Guide</a>.</p>\n    "
};

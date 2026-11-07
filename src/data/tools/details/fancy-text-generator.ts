import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-fancy-text",
  "slug": "fancy-text-generator",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "Fancy Text Generator",
  "shortDesc": "Convert plain text into stylized Unicode fonts for your bios, captions, and posts.",
  "metaDesc": "Convert normal text to bold, italic, script, gothic, bubble, and double-struck unicode styles. Copy and paste to Instagram, Twitter, and TikTok.",
  "instructions": [
    "Type or paste your text in the input box.",
    "Scroll down to see your text styled in 30+ Unicode formats.",
    "Click the 'Copy' button next to any style to copy it to your clipboard.",
    "Paste the styled text directly on Instagram, TikTok, Facebook, or WhatsApp."
  ],
  "features": [
    "30+ Unique Styles: Script, Gothic, Bold, Italic, Strikethrough, Bubble, and more.",
    "Instant Copy: Click to copy to clipboard.",
    "Unicode-Safe: Works on standard operating systems and web pages.",
    "Real-time render."
  ],
  "componentName": "FancyTextGenerator",
  "faqs": [
    {
      "question": "How does a fancy text generator work?",
      "answer": "A fancy text generator does not actually create new font files. Instead, it maps standard ASCII characters (A-Z, a-z) to corresponding stylized characters located in the Unicode mathematical alphanumeric blocks. These include bold, italic, script, double-struck, bubble, and gothic styles. Since these are actual Unicode characters rather than fonts, they can be copied and pasted onto any website or app that supports standard Unicode text."
    },
    {
      "question": "Can I use stylized text on Instagram and TikTok?",
      "answer": "Yes, you can use these stylized text outputs directly in your Instagram bio, caption updates, comment feeds, and TikTok profile descriptions. They also work in Twitter/X posts, Facebook group posts, and WhatsApp chats. Since the output is standard Unicode character data, the social networks will render them without converting them back to plain text."
    },
    {
      "question": "Will everyone be able to see my fancy text?",
      "answer": "Most modern smartphones, tablets, and computers support the mathematical alphanumeric Unicode blocks, so the text will render correctly for nearly all users. However, very old operating systems or outdated web browsers might display empty boxes (sometimes called 'tofu') instead of the stylized letters. Keep this in mind if you have a legacy audience."
    },
    {
      "question": "Is fancy text readable by screen readers for accessibility?",
      "answer": "No. Screen readers read mathematical Unicode symbols literally. For example, if you convert the word 'Hello' to a bold script style, a screen reader will announce 'Mathematical Bold Script Capital H, Mathematical Bold Script Small e...' and so on. This makes stylized text difficult to understand for visually impaired users. We recommend using fancy text sparingly, such as for single words or highlights, rather than entire sentences."
    },
    {
      "question": "Why do some platforms display square boxes instead of characters?",
      "answer": "Square boxes occur when a device's system font library does not contain the specific glyphs needed to render that particular Unicode block. This is a client-side layout issue that is out of our control. To minimize this, our generator prioritizes the most widely supported Unicode blocks (like bold, italic, and double-struck) which have high compatibility."
    },
    {
      "question": "Can I use this tool to generate secure usernames?",
      "answer": "Yes, you can use these fancy fonts to create unique, eye-catching profile handles and usernames. However, some social media networks require usernames to contain only standard ASCII alphanumeric characters (like standard letters, numbers, and underscores). In these cases, you should use standard text. Generate catchphrase ideas using our Username Generator tool."
    },
    {
      "question": "Is this font generator free to use?",
      "answer": "Yes, our fancy text generator is completely free. There are no registration screens, limits on text length, or fees. You can style as much copy as you want, whenever you want."
    },
    {
      "question": "How does the Fancy Text Generator make my profiles stand out?",
      "answer": "The Fancy Text Generator provides easy-to-use custom styles, bio templates, and link formatting that grab attention. By creating unique fonts, engaging bios, and WhatsApp click-to-chat coordinates, you enhance your brand's visual identity."
    },
    {
      "question": "Are there any hidden costs or premium upgrades?",
      "answer": "No, everything on CreatorUnits.com is free and open to all. There are no monthly paywalls or advertising overlays blocking your customization tools."
    },
    {
      "question": "Are the fancy text styles generated compatible with all social networks?",
      "answer": "Yes. The fancy styles utilize Unicode symbols. These symbols are recognized by all major social media platforms, including Instagram, TikTok, Twitter, Facebook, and LinkedIn."
    }
  ],
  "seoTitle": "Fancy Text Generator - Copy & Paste Unicode Styles",
  "seoHeading": "Generate Stylized Text for Bios and Captions",
  "seoIntro": "Want to make your social media profiles stand out from the crowd? Standard fonts can look plain and uninspiring. Our Free online Fancy Text Generator translates normal text into 30+ custom Unicode styles—including bold, italic, script, bubble, and gothic—ready to copy and paste.",
  "seoBody": "\n<h3>How the Fancy Text Generator Works</h3>\n<p>Convert plain text into stylized Unicode fonts for your bios, captions, and posts.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Type or paste your text in the input box.</li>\n  <li>Scroll down to see your text styled in 30+ Unicode formats.</li>\n  <li>Click the 'Copy' button next to any style to copy it to your clipboard.</li>\n  <li>Paste the styled text directly on Instagram, TikTok, Facebook, or WhatsApp.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>30+ Unique Styles: Script, Gothic, Bold, Italic, Strikethrough, Bubble, and more.</li>\n  <li>Instant Copy: Click to copy to clipboard.</li>\n  <li>Unicode-Safe: Works on standard operating systems and web pages.</li>\n  <li>Real-time render.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

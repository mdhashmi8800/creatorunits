import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-url-short",
  "slug": "url-shortener",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Free URL Shortener Integration",
  "shortDesc": "Shorten long tracking links or generate short redirect links using TinyURL integrations.",
  "metaDesc": "Shorten links online. Convert long campaign URLs into short, shareable links instantly.",
  "instructions": [
    "Paste your long campaign URL.",
    "Click 'Shorten Link'.",
    "The tool calls API integrations to generate short addresses.",
    "Copy and track your short link."
  ],
  "features": [
    "Free TinyURL endpoints integrations.",
    "QR Code generation for short links.",
    "Tracks link validity."
  ],
  "componentName": "UrlShortener",
  "faqs": [
    {
      "question": "Do links expire?",
      "answer": "TinyURL links do not expire by default. They will redirect traffic permanently."
    },
    {
      "question": "Why should I use a URL shortener for social media and marketing?",
      "answer": "Short URLs improve visual cleanlines on platforms with character constraints (like Twitter/X or Instagram bios) and make printed URLs easier to type manually. They also conceal long, ugly query strings while preserving tracking parameters like UTM tags."
    },
    {
      "question": "Do shortened URLs preserve UTM tracking parameters?",
      "answer": "Yes. When you shorten a URL that already contains UTM parameters, the shortened link redirects to the full destination URL including all parameters, so Google Analytics tracks session details normally."
    },
    {
      "question": "Are short links safe to click?",
      "answer": "Most short links are safe, but because they hide the destination domain, spam filters and security tools occasionally inspect them. Using established services like TinyURL or custom domain shorteners ensures high deliverability and user trust."
    },
    {
      "question": "Are my texts or files analyzed for marketing profiles?",
      "answer": "No. We respect user privacy completely. The calculations, word counts, and timezone adjustments run client-side and are not tracked, logged, or recorded."
    },
    {
      "question": "Can I use the QR codes generated for business purposes?",
      "answer": "Yes. The QR codes are standard high-resolution matrix barcodes. You can print them on menus, business cards, flyers, or use them on digital sites with no licensing restrictions."
    },
    {
      "question": "How do I format time zones using this tool?",
      "answer": "Select your current local time and the target time zone. The tool will calculate the offset and date shift, ensuring you schedule campaigns and meetings accurately."
    },
    {
      "question": "Are there any limitations on the inputs I can use?",
      "answer": "No. You can input long strings of text or large numbers, and our on-device scripts will process them instantly in real time."
    },
    {
      "question": "Does the tool support copy-to-clipboard functionality?",
      "answer": "Yes. Every utility features a clean 'Copy' button so you can transfer your outputs without selecting text manually."
    },
    {
      "question": "Do I need to sign up to use the Free URL Shortener Integration?",
      "answer": "No sign-up or registration is needed. You can use this utility completely anonymously."
    }
  ],
  "seoTitle": "URL Shortener - Shorten Long Links Online",
  "seoHeading": "Shorten URLs and Web Link Directories",
  "seoIntro": "Clean up long, messy tracking links. Convert UTM parameters links into tidy, click-friendly URLs.",
  "seoBody": "\n<h3>How the Free URL Shortener Integration Works</h3>\n<p>Shorten long tracking links or generate short redirect links using TinyURL integrations.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Paste your long campaign URL.</li>\n  <li>Click 'Shorten Link'.</li>\n  <li>The tool calls API integrations to generate short addresses.</li>\n  <li>Copy and track your short link.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Free TinyURL endpoints integrations.</li>\n  <li>QR Code generation for short links.</li>\n  <li>Tracks link validity.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

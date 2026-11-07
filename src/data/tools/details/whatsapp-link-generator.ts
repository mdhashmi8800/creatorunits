import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "social-wa-link",
  "slug": "whatsapp-link-generator",
  "category": "social",
  "categoryName": "Social Media Tools",
  "title": "WhatsApp Link Generator",
  "shortDesc": "Generate instant chat links with custom pre-filled messages for your customers.",
  "metaDesc": "Create WhatsApp wa.me links with custom pre-filled texts. Perfect for Instagram bio links, customer service, and contact pages.",
  "instructions": [
    "Enter your phone number (including country code).",
    "Type the message you want customers to send when opening the chat.",
    "Click 'Generate Link' to test and copy the generated link."
  ],
  "features": [
    "Handles international phone codes.",
    "Pre-fills custom message templates.",
    "Creates direct wa.me URLs."
  ],
  "componentName": "WhatsAppLinkGenerator",
  "faqs": [
    {
      "question": "What is a WhatsApp link generator?",
      "answer": "A WhatsApp link generator is a simple web utility that creates direct click-to-chat links (often using the `wa.me` short URL format). When a user clicks this link on a mobile device or desktop computer, it opens the WhatsApp application directly to a chat window with your specified phone number. It can also pre-fill a custom template message in the text input box, saving users from typing their initial question."
    },
    {
      "question": "How do I format my phone number for WhatsApp links?",
      "answer": "You must write your phone number in full international format, which includes the country code followed by the area code and subscriber number. Do not include any brackets, spaces, hyphens, or leading zeros (such as `+` or `00`). For example, a US number `+1 (555) 123-4567` should be entered as `15551234567`."
    },
    {
      "question": "What is a pre-filled WhatsApp message?",
      "answer": "A pre-filled message is a template text block that automatically loads in the user's WhatsApp input field when they scan your QR or click your link. For example, if you set the template to 'Hello, I would like to order a website,' the user only has to tap 'Send' to begin the conversation, which increases lead conversion rates."
    },
    {
      "question": "Does this link work on both mobile and desktop?",
      "answer": "Yes! If clicked on a mobile device (iOS or Android), the link opens the native WhatsApp application automatically. If clicked on a desktop computer, it directs the user to WhatsApp Web or prompts them to open the desktop application, ensuring a seamless user experience across all devices."
    },
    {
      "question": "Is this WhatsApp link generator free to use?",
      "answer": "Yes, our generator is completely free. There are no registration prompts, monthly fees, or limits on the number of links you can create. You can build links for all your sales pages, profiles, and campaigns directly within your browser."
    },
    {
      "question": "Why does my generated link show an error when clicked?",
      "answer": "This error is almost always caused by formatting issues in the phone number. If you include leading zeros (like `00`), symbols (like `+`), or spaces, WhatsApp's servers will fail to recognize the contact. Always double-check that your phone number contains only numeric characters and starts with the country code."
    },
    {
      "question": "Is my phone number safe when using this tool?",
      "answer": "Yes! Our generator runs entirely client-side using JavaScript. Your phone number and pre-filled message variables are never sent to our servers or stored in any database. The links are built locally in your browser, keeping your contact details completely secure."
    },
    {
      "question": "How does the WhatsApp Link Generator make my profiles stand out?",
      "answer": "The WhatsApp Link Generator provides easy-to-use custom styles, bio templates, and link formatting that grab attention. By creating unique fonts, engaging bios, and WhatsApp click-to-chat coordinates, you enhance your brand's visual identity."
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
  "seoTitle": "WhatsApp Link Generator - Create Free Custom Chat Links",
  "seoHeading": "Create Custom Click-to-Chat Links for WhatsApp",
  "seoIntro": "Want to make it easy for customers to contact your business? Our Free online WhatsApp Link Generator allows you to create direct chat links complete with custom pre-filled message templates. Perfect for Instagram bios, portfolios, and contact forms.",
  "seoBody": "\n<h3>How the WhatsApp Link Generator Works</h3>\n<p>Generate instant chat links with custom pre-filled messages for your customers.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Enter your phone number (including country code).</li>\n  <li>Type the message you want customers to send when opening the chat.</li>\n  <li>Click 'Generate Link' to test and copy the generated link.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Handles international phone codes.</li>\n  <li>Pre-fills custom message templates.</li>\n  <li>Creates direct wa.me URLs.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

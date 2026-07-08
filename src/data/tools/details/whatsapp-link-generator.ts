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
    }
  ],
  "seoTitle": "WhatsApp Link Generator - Create Free Custom Chat Links",
  "seoHeading": "Create Custom Click-to-Chat Links for WhatsApp",
  "seoIntro": "Want to make it easy for customers to contact your business? Our Free online WhatsApp Link Generator allows you to create direct chat links complete with custom pre-filled message templates. Perfect for Instagram bios, portfolios, and contact forms.",
  "seoBody": "\n<h3>How WhatsApp Click-to-Chat Links Drive Conversions</h3>\n<p>In digital marketing and e-commerce, reducing friction is key to converting leads into sales. If a customer wants to message you on WhatsApp, they normally have to save your phone number to their contacts, search for the contact in the app, and type their initial greeting. This slow process causes many leads to drop off. A <strong>WhatsApp Link Generator</strong> solves this by creating a direct <code>wa.me</code> short link. Clicking it launches the chat immediately, bypassing the contact-saving steps. Coordinate link codes by checking parameters in our <a href=\"/tools/utility/url-encoder-decoder\">URL Encoder / Decoder</a>.</p>\n\n<h3>Guidelines for Formatting Phone Numbers and Pre-filled Messages</h3>\n<p>To ensure your links function correctly on all devices, follow these guidelines:</p>\n<ol>\n  <li><strong>Use Clean Numeric Strings:</strong> Strip all spaces, brackets, hyphens, and leading symbols from your number. Input the country code first (e.g. <code>1</code> for US, <code>44</code> for UK) followed by the number. A UK number `+44 7911 123456` should be formatted as <code>447911123456</code>.</li>\n  <li><strong>Draft Conversational Pre-filled Messages:</strong> Write template greetings that prompt action (e.g. 'Hi! I'm interested in booking a consultation. What slots do you have available?').</li>\n  <li><strong>Incorporate Link Prompts:</strong> Place the link inside your social profiles using our <a href=\"/tools/social/bio-template-generator\">Bio Template Generator</a> or link aggregator.</li>\n</ol>\n\n<h3>Key Features of Our WhatsApp Link Builder</h3>\n<ul>\n  <li><strong>Automated URL Encoding:</strong> The builder automatically formats spaces and special characters inside your pre-filled text into browser-safe URL parameters, preventing link breaks.</li>\n  <li><strong>Interactive Testing:</strong> Copy the link or test it directly inside a new tab in one click to verify that the chat loads.</li>\n  <li><strong>QR Code Compatibility:</strong> Want to print your link on posters, brochures, or stickers? Use our related <a href=\"/tools/social/whatsapp-qr-generator\">WhatsApp QR Code Generator</a> to export scan-to-chat QR codes.</li>\n</ul>\n\n<h3>Common Link Creation Pitfalls</h3>\n<ul>\n  <li><strong>Including the Plus (+) Symbol:</strong> Writing <code>+15551234567</code> in the URL. This will cause WhatsApp to return a 'Phone number is shared via an invalid link' error. Keep it strictly numeric.</li>\n  <li><strong>Forgetting the Country Code:</strong> Entering a local number without country prefixes. Users outside your region will be unable to contact you.</li>\n  <li><strong>Overly Long Pre-filled Messages:</strong> Writing a 500-word paragraph. Keep greetings concise and focused on the initial question.</li>\n</ul>\n\n<h3>Official Platform Documentation</h3>\n<p>For official specifications on click-to-chat integrations, refer to the <a href=\"https://faq.whatsapp.com/591152353072084/\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp Help Center Guide on Click-to-Chat</a> and explore developer link parameter rules at the <a href=\"https://developers.facebook.com/docs/whatsapp/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta for Developers WhatsApp Portal</a>.</p>\n    "
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-random-num",
  "slug": "random-number-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Random Number Generator",
  "shortDesc": "Generate random numbers within custom ranges, supporting bulk generation and sorting.",
  "metaDesc": "Generate random numbers online. Set min/max ranges, count lists, and filter duplicate items client-side.",
  "instructions": [
    "Enter minimum and maximum boundaries values.",
    "Set quantity count of numbers to generate.",
    "Toggle parameters (Allow duplicate values, sorting order).",
    "Generate and copy number list."
  ],
  "features": [
    "Uses secure cryptographic random inputs keys.",
    "Provides sorting functions.",
    "Filters duplicate values."
  ],
  "componentName": "RandomNumberGenerator",
  "faqs": [
    {
      "question": "Is this secure for sweepstakes?",
      "answer": "Yes, it uses browser cryptographic random generators, ensuring unbiased random value distributions."
    },
    {
      "question": "What is the difference between pseudorandom and cryptographically random numbers?",
      "answer": "Pseudorandom number generators (PRNGs) use mathematical algorithms seeded with a starting value to produce number sequences that appear random but are technically reproducible. Cryptographically secure random number generators (CSPRNGs) use hardware entropy sources — like CPU timing jitter or mouse movement — to produce numbers that are truly unpredictable. Our generator uses the browser's `crypto.getRandomValues()` API, which is cryptographically secure."
    },
    {
      "question": "Can I use this for giveaways and contests?",
      "answer": "Yes, our random number generator uses a cryptographically secure source, making it appropriate for picking giveaway winners from a numbered list. To run a fair draw: assign each participant a number (e.g. 1 to 200), set the generator range to 1–200, generate a number, and the participant with that number wins. The output is unbiased and unpredictable."
    },
    {
      "question": "Can I simulate dice rolls with this tool?",
      "answer": "Yes. Set the range to 1–6 for a standard six-sided die, 1–8 for a D8, 1–20 for a D20, and so on. You can generate multiple results in sequence to simulate rolling multiple dice. For tabletop RPG and board game purposes, the cryptographic randomness ensures fair, unbiased outcomes."
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
      "question": "Do I need to sign up to use the Random Number Generator?",
      "answer": "No sign-up or registration is needed. You can use this utility completely anonymously."
    }
  ],
  "seoTitle": "Random Number Generator - Secure Bulk Range Generator",
  "seoHeading": "Generate Random Numbers within Custom Ranges",
  "seoIntro": "Select sweepstakes winners or generate sample datasets values. Configure ranges and quantity levels.",
  "seoBody": "\n<h3>How the Random Number Generator Works</h3>\n<p>Generate random numbers within custom ranges, supporting bulk generation and sorting.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Enter minimum and maximum boundaries values.</li>\n  <li>Set quantity count of numbers to generate.</li>\n  <li>Toggle parameters (Allow duplicate values, sorting order).</li>\n  <li>Generate and copy number list.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Uses secure cryptographic random inputs keys.</li>\n  <li>Provides sorting functions.</li>\n  <li>Filters duplicate values.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

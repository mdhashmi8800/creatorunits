import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-password",
  "slug": "password-generator",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Secure Password Generator",
  "shortDesc": "Create cryptographically secure, random passwords with custom rules.",
  "metaDesc": "Generate secure, random passwords online. Customize length, letters, numbers, symbols. Cryptographically secure client-side generation.",
  "instructions": [
    "Choose your password length (recommended 12-24 characters).",
    "Toggle parameters: Uppercase, Lowercase, Numbers, and Symbols.",
    "Click 'Generate Password'.",
    "Copy the result and view the strength evaluation indicator."
  ],
  "features": [
    "Uses cryptographically secure `crypto.getRandomValues`.",
    "Calculates password entropy strength scores.",
    "Privacy-first: No generation variables are saved or transmitted."
  ],
  "componentName": "PasswordGenerator",
  "faqs": [
    {
      "question": "What is a secure password generator?",
      "answer": "A secure password generator is a cryptographic utility that creates highly random character strings for user accounts. Unlike humans, who rely on predictable patterns, personal dates, or repeated dictionary words, generators combine uppercase letters, lowercase letters, numbers, and special symbols in completely random orders, producing keys that are virtually immune to dictionary attacks."
    },
    {
      "question": "What makes a password cryptographically secure?",
      "answer": "A password is cryptographically secure when it is generated using a cryptographically secure pseudorandom number generator (CSPRNG), such as JavaScript's built-in `window.crypto.getRandomValues()` API. Standard random math functions (like `Math.random()`) use predictable seed algorithms that can be guessed by automated hacking scripts, whereas CSPRNGs utilize hardware-level entropy sources to ensure absolute unpredictability."
    },
    {
      "question": "What is password entropy?",
      "answer": "Password entropy is a mathematical measure of a password's strength and unpredictability, calculated in bits of information. Higher entropy indicates a more secure key that would take a computer longer to guess via brute force. Our tool calculates entropy based on character length and the size of the character pool selected (e.g. including symbols increases the pool and boosts entropy)."
    },
    {
      "question": "How long should a secure password be?",
      "answer": "Modern cybersecurity guidelines (such as NIST standards) recommend a minimum password length of 12 characters. For highly sensitive accounts (like online banking, master email accounts, and password managers), we recommend generating keys between 16 and 24 characters. Each character added exponentially increases the time required for brute-force decryption."
    },
    {
      "question": "Are my generated passwords saved on this website?",
      "answer": "No. Our password generator operates 100% locally inside your web browser. All random string calculations and strength evaluations are computed client-side using JavaScript. We never upload, log, or save your passwords to any servers or databases, ensuring complete security and privacy."
    },
    {
      "question": "Should I change my passwords regularly?",
      "answer": "Modern security experts recommend changing passwords only if you suspect a security breach, if your account credentials have been leaked in a data dump, or if you are replacing a weak legacy password. Regularly changing passwords without a breach often leads users to write down passwords or create predictable variations, which actually reduces account security."
    },
    {
      "question": "How do I store my complex generated passwords?",
      "answer": "Because complex random passwords (e.g. `p9&K#mQ!z9@r`) are impossible to memorize, we highly recommend storing them in a dedicated, encrypted password manager (like Bitwarden, 1Password, or Dashlane). A password manager stores all your keys securely behind a single master password, allowing you to autofill logins on all devices."
    },
    {
      "question": "What makes a password cryptographically secure?",
      "answer": "A password is cryptographically secure when it is generated using a true hardware or cryptographic entropy source (like the Web Crypto API's `crypto.getRandomValues()`), has high entropy (at least 16+ mixed characters), and contains an unpredictable mix of uppercase, lowercase, numbers, and symbols that resists dictionary and brute-force attacks."
    },
    {
      "question": "Is generating passwords in the browser safe?",
      "answer": "Yes, as long as the generator runs 100% client-side using native browser APIs like `window.crypto`. Our Password Generator does not make any network requests or send generated keys to any server — everything happens locally in your browser memory."
    },
  ],
  "seoTitle": "Secure Password Generator - Create Strong Random Keys",
  "seoHeading": "Generate Cryptographically Secure Random Passwords",
  "seoIntro": "Securing your online accounts is more critical than ever. Weak, predictable passwords are the primary entry point for credential stuffing and brute-force attacks. Our Free online Secure Password Generator creates highly random keys using browser-level cryptographic entropy APIs.",
  "seoBody": "\n<h3>Why You Should Use Our Secure Password Generator</h3>\n<p>The Secure Password Generator is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the Secure Password Generator provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Uses cryptographically secure `crypto.getRandomValues`.:</strong> Uses cryptographically secure `crypto.getRandomValues`.</li>\n  <li><strong>Calculates password entropy strength scores.:</strong> Calculates password entropy strength scores.</li>\n  <li><strong>Privacy-first:</strong>  No generation variables are saved or transmitted.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our Secure Password Generator runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the Secure Password Generator with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Utility Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

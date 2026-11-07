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
  "seoBody": "\n<h3>How the Secure Password Generator Works</h3>\n<p>Create cryptographically secure, random passwords with custom rules.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Choose your password length (recommended 12-24 characters).</li>\n  <li>Toggle parameters: Uppercase, Lowercase, Numbers, and Symbols.</li>\n  <li>Click 'Generate Password'.</li>\n  <li>Copy the result and view the strength evaluation indicator.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Uses cryptographically secure `crypto.getRandomValues`.</li>\n  <li>Calculates password entropy strength scores.</li>\n  <li>Privacy-first: No generation variables are saved or transmitted.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

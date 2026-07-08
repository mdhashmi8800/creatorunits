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
    }
  ],
  "seoTitle": "Secure Password Generator - Create Strong Random Keys",
  "seoHeading": "Generate Cryptographically Secure Random Passwords",
  "seoIntro": "Securing your online accounts is more critical than ever. Weak, predictable passwords are the primary entry point for credential stuffing and brute-force attacks. Our Free online Secure Password Generator creates highly random keys using browser-level cryptographic entropy APIs.",
  "seoBody": "\n<h3>Understanding Cryptographic Randomness vs. Standard Randomness</h3>\n<p>Many online password generators rely on basic programming functions like JavaScript's <code>Math.random()</code>. While useful for simple games, <code>Math.random()</code> is not secure. It uses a predictable mathematical formula (a PRNG) that can be reverse-engineered if a hacker captures a sequence of outputs. Our <strong>Secure Password Generator</strong> utilizes <code>crypto.getRandomValues()</code>, a browser-level CSPRNG API. It accesses system entropy—such as hardware device noise—to generate keys that are statistically indistinguishable from pure physical randomness, protecting you from sophisticated hacking scripts.</p>\n\n<h3>NIST Password Guidelines and Best Practices</h3>\n<p>To ensure maximum protection for your personal and business accounts, align your setups with the latest <a href=\"https://www.nist.gov/\" target=\"_blank\" rel=\"noopener noreferrer\">NIST (National Institute of Standards and Technology) Password Guidelines</a>:</p>\n<ul>\n  <li><strong>Prioritize Length Over Complexity:</strong> A 20-character password made of simple letters is often harder to crack than an 8-character password filled with complex symbols. Aim for at least 14-16 characters.</li>\n  <li><strong>Avoid Predictable Patterns:</strong> Do not replace letters with obvious symbols (e.g. using <code>P@ssword!</code>). Automated dictionary scripts scan for these standard replacements instantly.</li>\n  <li><strong>Use Unique Keys:</strong> Never reuse a password across multiple sites. If a single forum database is breached, hackers will attempt to log into your email, PayPal, and social accounts using those same credentials.</li>\n</ul>\n<p>If you need to encode credentials for API parameters, check parameters using our <a href=\"/tools/utility/url-encoder-decoder\">URL Encoder / Decoder</a>. If you need to print local device codes, build them in our <a href=\"/tools/utility/qr-code-generator\">QR Code Generator</a>.</p>\n\n<h3>Key Features of Our Generator</h3>\n<ul>\n  <li><strong>Entropy Score Indicator:</strong> Renders a live strength evaluation card displaying entropy bits (e.g. 128 bits for excellent strength) so you know exactly how secure your password is.</li>\n  <li><strong>Granular Rules Toggles:</strong> Include or exclude uppercase, lowercase, numbers, and symbols to meet different website signup constraints.</li>\n  <li><strong>100% Offline Processing:</strong> Operates locally. Your credentials never leave your machine, preventing intercept leaks.</li>\n</ul>\n\n<h3>Common Password Security Mistakes</h3>\n<ol>\n  <li><strong>Storing Passwords in Plain Text:</strong> Saving your keys in a text file on your desktop or writing them in a notepad. If your device is compromised, hackers gain access to all accounts. Use an encrypted password manager instead.</li>\n  <li><strong>Using Dictionary Combinations:</strong> Combining 3-4 common words (e.g. <code>correcthorsebatterystaple</code>). While this increases character length, dictionary attacks scan for word combinations quickly. Add numbers and symbols to break patterns.</li>\n  <li><strong>Reusing Master Keys:</strong> Using your password manager's master password on standard websites. If that site is breached, your entire vault is compromised.</li>\n</ol>\n\n<h3>Official Security Specifications</h3>\n<p>To read official guides, consult <a href=\"https://pages.nist.gov/800-63-3/\" target=\"_blank\" rel=\"noopener noreferrer\">NIST Special Publication 800-63B (Digital Identity Guidelines)</a> and review developer specs at the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues\" target=\"_blank\" rel=\"noopener noreferrer\">MDN Crypto getRandomValues API Page</a>.</p>\n    "
};

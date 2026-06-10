import { ToolItem } from "../types";

export const utilityTools: ToolItem[] = [
  {
    id: "util-qr-gen",
    slug: "qr-code-generator",
    category: "utility",
    categoryName: "Utility Tools",
    title: "QR Code Generator",
    shortDesc: "Generate standard QR codes for URLs, text, or Wi-Fi configurations.",
    metaDesc: "Create free custom QR codes online. Generate codes for links, text, emails, and Wi-Fi networks. Download as high-res images instantly.",
    instructions: [
      "Choose the data type (URL, plain text, Wi-Fi config).",
      "Enter the content or login details.",
      "The QR code renders instantly.",
      "Click 'Download QR Code' to save it as a high-quality PNG."
    ],
    features: [
      "Multi-type support: Links, text, WiFi logins.",
      "Real-time render updates.",
      "Offline browser generation."
    ],
    componentName: "QrCodeGenerator",
    faqs: [
      {
        question: "What is a QR code?",
        answer: "A QR code, or Quick Response code, is a two-dimensional barcode that stores data in a black-and-white grid. When scanned by a smartphone camera or QR reader, it instantly translates the pattern into actionable information, such as a website link, plain text, email address, contact information, or Wi-Fi network credentials."
      },
      {
        question: "How do QR codes work?",
        answer: "QR codes work by encoding alphanumeric characters into a grid of squares called modules. The scanning software analyzes the positioning markings at the corners of the code to align the image, reads the black-and-white pixel data, and decodes it back into text or links, executing the action on your smartphone in milliseconds."
      },
      {
        question: "What can I convert into a QR code?",
        answer: "You can convert various types of information into a QR code, including website URLs, plain text messages, email draft templates, contact files (vCards), SMS prompts, and Wi-Fi login credentials. This makes QR codes highly versatile for marketing campaigns, print media, shop signs, and business cards. Using standard QR codes is a great way to bridge the gap between offline prints and digital landing pages."
      },
      {
        question: "Can QR codes be printed?",
        answer: "Yes, QR codes are ideal for print media. You can download your generated QR code as a high-resolution PNG file and add it to flyers, posters, business cards, product packaging, menus, or banners. Make sure there is high contrast between the code and the background so cameras can scan it easily."
      },
      {
        question: "Are QR codes free to use?",
        answer: "Yes, generating QR codes with our tool is completely free. We do not charge subscription fees, apply scan count limits, or redirect your links through third-party ad networks. Once generated, your QR code remains active indefinitely, and you can print or display it digitally without restrictions. Using standard QR codes is a great way to bridge the gap between offline prints and digital landing pages."
      }
    ],
    seoTitle: "Free QR Code Generator - Create Custom QR Codes",
    seoHeading: "Generate Free QR Codes for Links, Wi-Fi & Texts",
    seoIntro: "Connect physical readers to your websites. Generate high-resolution, secure QR codes instantly inside your browser.",
    seoBody: `
<h3>Utilizing QR Codes in Marketing</h3>
<p>QR codes are highly effective on flyers, store displays, product tags, and presentation decks. Scanning links directly connects physical prospects to online portfolios, discount links, and menus.</p>
    `
  },
  {
    id: "util-url-encode",
    slug: "url-encoder-decoder",
    category: "utility",
    categoryName: "Utility Tools",
    title: "URL Encoder / Decoder",
    shortDesc: "Encode or decode strings to ensure safe transmission within query parameters.",
    metaDesc: "Encode or decode strings to URL safe formats online. Translate special characters and spaces instantly. Runs client-side.",
    instructions: [
      "Paste your text or encoded link parameter in the input panel.",
      "Click 'Encode' to escape special characters, or 'Decode' to convert back to standard text.",
      "Copy the converted output with one click."
    ],
    features: [
      "Instant translation of % characters.",
      "Clean double-panel layout.",
      "Handles long query strings."
    ],
    componentName: "UrlEncoderDecoder",
    faqs: [
      {
        question: "What is URL encoding?",
        answer: "URL encoding, also known as percent-encoding, is a mechanism that translates special characters inside a web address into a safe format. Because URLs can only contain specific alphanumeric characters and a few select symbols, other characters are replaced with a percent sign (%) followed by their hexadecimal code to prevent browser errors."
      },
      {
        question: "Why is URL encoding necessary?",
        answer: "URL encoding is necessary because characters like spaces, question marks, ampersands, and slashes have special meanings in URL structures. If you include these characters raw in query parameters, browsers will misinterpret them, causing broken links, database errors, or security vulnerabilities during data transmission. Performing percent encoding helps you avoid compatibility errors and keeps your web parameter data fully intact during transmission."
      },
      {
        question: "When should I decode a URL?",
        answer: "You should decode a URL when you retrieve raw tracking links or query parameters that contain encoded percent symbols (like %20 for spaces or %26 for ampersands). Decoding translates these hexadecimal strings back into human-readable text, making it easy to read tracking data or analyze website analytics parameters. Performing percent encoding helps you avoid compatibility errors and keeps your web parameter data fully intact during transmission."
      },
      {
        question: "Can encoded URLs improve compatibility?",
        answer: "Yes, encoding URLs guarantees compatibility across all browsers, web servers, database systems, and API endpoints. It ensures that complex strings containing non-English characters or mathematical symbols are transmitted securely without getting corrupted or rejected by network routers and content management platforms. Performing percent encoding helps you avoid compatibility errors and keeps your web parameter data fully intact during transmission."
      },
      {
        question: "Is URL encoding safe?",
        answer: "Yes, URL encoding is completely safe. It is a standard web protocol that does not modify the underlying data; it simply formats it for secure transmission. Additionally, our tool processes all encoding and decoding locally in your browser, keeping your text inputs and URLs completely private. Performing percent encoding helps you avoid compatibility errors and keeps your web parameter data fully intact during transmission."
      }
    ],
    seoTitle: "URL Encoder Decoder - Percent Encoding Online Tool",
    seoHeading: "Encode and Decode URL Query Strings Instantly",
    seoIntro: "Format web addresses properly. Safe-escape characters in database queries or UTM inputs using our simple encoder.",
    seoBody: `
<h3>Ensuring Safe Query Transmission</h3>
<p>If you pass raw spaces or ampersands in a URL path without encoding, browsers will parse them as parameter separators, breaking search queries. Convert them here before inserting parameters.</p>
    `
  },
  {
    id: "util-utm",
    slug: "utm-builder",
    category: "utility",
    categoryName: "Utility Tools",
    title: "UTM Campaign Builder",
    shortDesc: "Build marketing campaign links with source, medium, and term tracking codes.",
    metaDesc: "Create tracking URLs for Google Analytics. Build UTM campaign links with source, medium, name, content parameters instantly.",
    instructions: [
      "Enter your base website URL.",
      "Enter campaign parameters: Source (e.g. newsletter), Medium (email), Campaign Name (launch).",
      "Optional: set Campaign Term or Campaign Content.",
      "Copy the built tracking link from the output box."
    ],
    features: [
      "Ensures valid URL structures.",
      "Live output preview updates.",
      "Clear explanation tooltips."
    ],
    componentName: "UtmBuilder",
    faqs: [
      {
        question: "What are UTM parameters?",
        answer: "UTM parameters, or Urchin Tracking Module codes, are five specific query tags that you can append to your website URLs. When a visitor clicks a UTM link, analytics programs like Google Analytics read these tags to track the source, medium, and campaign that directed traffic to your site. Marking your links correctly enables you to perform deep conversion analysis and optimize your digital advertising returns."
      },
      {
        question: "Why should marketers use UTM links?",
        answer: "Marketers use UTM links to measure the exact return on investment of their advertising campaigns. By tracking which social media posts, email newsletters, or search ads generate clicks, marketers can see where their traffic originates and allocate their advertising budgets to the channels that drive the most sales. Marking your links correctly enables you to perform deep conversion analysis and optimize your digital advertising returns."
      },
      {
        question: "Which UTM parameters are most important?",
        answer: "The three most important UTM parameters are Campaign Source (utm_source, which identifies the traffic origin like Facebook or newsletter), Campaign Medium (utm_medium, identifying the channel type like email or CPC), and Campaign Name (utm_campaign, which labels the specific marketing campaign or product launch). Marking your links correctly enables you to perform deep conversion analysis and optimize your digital advertising returns."
      },
      {
        question: "Can UTM tracking improve campaign analysis?",
        answer: "Yes, UTM tracking greatly improves campaign analysis by providing granular data on traffic sources. Instead of seeing generic referral traffic, you can identify which specific banner ad, influencer post, or blog link drove conversions, helping you optimize your content marketing strategy. Marking your links correctly enables you to perform deep conversion analysis and optimize your digital advertising returns."
      },
      {
        question: "How do I create a trackable URL?",
        answer: "To create a trackable URL, enter your website link into our UTM builder, fill out the source, medium, and campaign name inputs, and copy the generated link. You can then use this tracking link in your social updates or email newsletters to track user engagement in Google Analytics. Marking your links correctly enables you to perform deep conversion analysis and optimize your digital advertising returns."
      }
    ],
    seoTitle: "UTM Link Builder - Campaign Tracking URL Generator",
    seoHeading: "Create Google Analytics UTM Tracking Links",
    seoIntro: "Identify which social posts or newsletters drive the most conversions. Formulate campaign tracking links in seconds.",
    seoBody: `
<h3>Measuring Marketing ROI with UTMs</h3>
<p>If you share a link on Facebook, Google Analytics lists it as 'facebook.com / referral'. Adding UTM params allows you to specify whether traffic came from a paid banner ad, an organic post, or a specific comment link, yielding clear conversion insights.</p>
    `
  },
  {
    id: "util-password",
    slug: "password-generator",
    category: "utility",
    categoryName: "Utility Tools",
    title: "Secure Password Generator",
    shortDesc: "Create cryptographically secure, random passwords with custom rules.",
    metaDesc: "Generate secure, random passwords online. Customize length, letters, numbers, symbols. Cryptographically secure client-side generation.",
    instructions: [
      "Choose your password length (recommended 12-24 characters).",
      "Toggle parameters: Uppercase, Lowercase, Numbers, and Symbols.",
      "Click 'Generate Password'.",
      "Copy the result and view the strength evaluation indicator."
    ],
    features: [
      "Uses cryptographically secure `crypto.getRandomValues`.",
      "Calculates password entropy strength scores.",
      "Privacy-first: No generation variables are saved or transmitted."
    ],
    componentName: "PasswordGenerator",
    faqs: [
      {
        question: "What makes a strong password?",
        answer: "A strong password is long, randomized, and complex. It should contain at least 12 to 16 characters and combine uppercase letters, lowercase letters, numbers, and special symbols. Strong passwords do not include common words, dictionary phrases, birthdates, or easily guessable personal details. Generating strong, unique combinations protects your personal information from security breaches and credential stuffing hackers."
      },
      {
        question: "Why should I use a password generator?",
        answer: "You should use a password generator because humans are naturally poor at creating truly random strings. Generated passwords eliminate predictable keyboard patterns and dictionary words, creating high-entropy keys that protect your email, bank, and social accounts from automated brute-force hacker attacks. Generating strong, unique combinations protects your personal information from security breaches and credential stuffing hackers."
      },
      {
        question: "How long should a secure password be?",
        answer: "A secure password should be at least 12 characters long, though 16 or more is recommended for administrator accounts. Each additional character increases the cryptographic entropy exponentially, making it virtually impossible for supercomputers to crack your passwords within a reasonable timeframe. Generating strong, unique combinations protects your personal information from security breaches and credential stuffing hackers."
      },
      {
        question: "Are generated passwords random?",
        answer: "Yes, our tool generates passwords using your browser's native Web Cryptography API (`crypto.getRandomValues`). Unlike standard random functions, this cryptographic algorithm produces cryptographically strong, non-predictable values, ensuring your passwords meet strict security standards. Generating strong, unique combinations protects your personal information from security breaches and credential stuffing hackers. This makes the generated keys extremely secure and ideal for protecting all of your online services."
      },
      {
        question: "Should I reuse passwords across websites?",
        answer: "No, you should never reuse passwords across websites. If one website suffers a security breach, hackers will try your compromised email and password combination on dozens of other platforms, including banks and social media. Using unique passwords for every site protects your accounts from credential stuffing. Generating strong, unique combinations protects your personal information from security breaches and credential stuffing hackers."
      }
    ],
    seoTitle: "Secure Password Generator - Create Strong Random Keys",
    seoHeading: "Generate Strong, Cryptographically Secure Passwords",
    seoIntro: "Keep accounts safe from dictionary attacks. Create randomized, high-entropy passwords with custom length thresholds.",
    seoBody: `
<h3>Importance of High-Entropy Passwords</h3>
<p>Weak passwords are the single largest source of security breaches. Using randomized combinations of letters, numbers, and symbols prevents automated brute-force scripts from hacking your cloud accounts, shops, and social logins.</p>
    `
  },
  {
    id: "util-case-conv",
    slug: "text-case-converter",
    category: "utility",
    categoryName: "Utility Tools",
    title: "Text Case Converter",
    shortDesc: "Convert text formats: UPPERCASE, lowercase, Title Case, Sentence Case, or slugify.",
    metaDesc: "Convert text between UPPERCASE, lowercase, Title Case, Sentence Case, camelCase, PascalCase, and url-friendly slugs instantly.",
    instructions: [
      "Paste or type your text.",
      "Select a case format button.",
      "Review the converted text and click copy."
    ],
    features: [
      "Supports 7 distinct case formats.",
      "URL Slug generator converter.",
      "Clears input in one click."
    ],
    componentName: "TextCaseConverter",
    faqs: [
      {
        question: "What is a text case converter?",
        answer: "A text case converter is a text utility that automatically changes the casing formats of your words. It allows you to transform paragraphs of text into UPPERCASE, lowercase, Sentence case, Title Case, camelCase, or URL slugs in a single click, saving you from retyping text manually. Using standard formatting converters keeps your text layouts consistent and professional for your documents, blogs, and code bases."
      },
      {
        question: "Which text case formats are supported?",
        answer: "Our text converter supports seven common case formats: UPPERCASE (ALL CAPITAL LETTERS), lowercase (all small letters), Sentence case (capitalizing the first letter of each sentence), Title Case (capitalizing major words), camelCase (used in programming), PascalCase, and URL-friendly slug format (separating words with hyphens). Using standard formatting converters keeps your text layouts consistent and professional for your documents, blogs, and code bases."
      },
      {
        question: "Can I convert large amounts of text?",
        answer: "Yes, you can convert large blocks of text instantly. Since all processing runs locally in your web browser using lightweight JavaScript, the tool processes articles, essay drafts, or code logs in milliseconds without lag, ensuring a fast experience without transferring data to external servers. Using standard formatting converters keeps your text layouts consistent and professional for your documents, blogs, and code bases."
      },
      {
        question: "Why is text formatting important?",
        answer: "Text formatting is important because it improves readability, structures content, and ensures consistency across documents and code bases. Proper capitalization makes headlines look professional, slug formats ensure links are readable by search engine spiders, and camelCase keeps programming code clean and readable for developers. Using standard formatting converters keeps your text layouts consistent and professional for your documents, blogs, and code bases."
      },
      {
        question: "Is text case conversion instant?",
        answer: "Yes, the conversion is completely instant. As soon as you paste your text and click one of the format buttons, the tool updates the content area immediately. You can copy the newly formatted text to your clipboard with one click, streamlining your editing workflow. Using standard formatting converters keeps your text layouts consistent and professional for your documents, blogs, and code bases."
      }
    ],
    seoTitle: "Text Case Converter - UPPERCASE, lowercase, Title Case",
    seoHeading: "Transform Text Format Styles Online Free",
    seoIntro: "Did you accidentally type a paragraph with caps-lock on? Convert text formatting instantly without retyping.",
    seoBody: `
<h3>Use Cases for Format Converters</h3>
<p>Bloggers can capitalize titles to standard APA guidelines, programmers can slugify raw titles to clean URLs, and editors can restore broken layouts without manual typing work.</p>
    `
  },
  {
    id: "util-word-count",
    slug: "word-counter",
    category: "utility",
    categoryName: "Utility Tools",
    title: "Word & Sentence Counter",
    shortDesc: "Measure word count, character count, keyword density, and estimated reading time.",
    metaDesc: "Word counter and keyword density analyzer online. Track character counts, sentences, paragraphs, reading speed, and vocabulary stats.",
    instructions: [
      "Type or paste your blog draft.",
      "Review density graphs showing most repeated words.",
      "Track word lists and reading time estimates."
    ],
    features: [
      "Density analytics for top keywords.",
      "Calculates paragraphs and sentences.",
      "Supports large document pastes."
    ],
    componentName: "WordCounter",
    faqs: [
      {
        question: "What does a word counter do?",
        answer: "A word counter measures the total number of words, characters, sentences, and paragraphs in your writing. It also estimates the reading and speaking times of your text and analyzes keyword density, helping you optimize your drafts for blog articles, essay assignments, or social media updates. Measuring your copy precisely helps you satisfy platform requirements and build readable content layouts for your target readers."
      },
      {
        question: "Why is word count important?",
        answer: "Word count is important because many publishing platforms, search engines, and academic guidelines enforce strict length limits. For example, SEO blogs perform best at specific word counts, and academic assignments have word targets. Tracking word counts ensures you meet these requirements. Measuring your copy precisely helps you satisfy platform requirements and build readable content layouts for your target readers."
      },
      {
        question: "Can it count characters and sentences too?",
        answer: "Yes, our word counter tracks characters (with and without spaces), total sentences, and paragraph breaks. This detailed breakdown helps you evaluate the readability of your articles and ensures your copy is within character limits for meta descriptions or social posts. Measuring your copy precisely helps you satisfy platform requirements and build readable content layouts for your target readers."
      },
      {
        question: "Is it useful for SEO writing?",
        answer: "Yes, it is highly useful for SEO writers. By tracking word counts and analyzing keyword density, you can write articles that meet search engine recommendations and avoid keyword stuffing penalties, helping your web pages rank higher in organic search results. Measuring your copy precisely helps you satisfy platform requirements and build readable content layouts for your target readers."
      },
      {
        question: "Can students and bloggers use it?",
        answer: "Absolutely! Students use it to track essay limits, bloggers use it to optimize copy length, and copywriters use it to measure newsletter drafts. Our tool runs locally in the browser, making it a fast, private, and secure option for all your writing tasks. Measuring your copy precisely helps you satisfy platform requirements and build readable content layouts for your target readers."
      }
    ],
    seoTitle: "Word Counter - Analyze Text Density and Reading Speed",
    seoHeading: "Detailed Word, Character, and Density Analysis",
    seoIntro: "Optimizing content length is vital for bloggers. Track text parameters, characters, and vocabulary density to improve reading indices.",
    seoBody: `
<h3>Avoid Keyword Stuffing</h3>
<p>Using repeated target words excessively can trigger search spam filters. Check density grids to keep target keyword ratios between 1% and 2.5% for clean SEO.</p>
    `
  },
  {
    id: "util-units",
    slug: "units-converter",
    category: "utility",
    categoryName: "Utility Tools",
    title: "Quick Units Converter",
    shortDesc: "Convert units of length, mass, temperature, area, volume, and data sizes.",
    metaDesc: "Convert metrics online. Convert lengths, weights, temperature (Celsius/Fahrenheit), area, volumes, and digital data storage sizes.",
    instructions: [
      "Select a measurement dimension category (Length, Weight, Data, Temp).",
      "Enter a value in the starting unit input box.",
      "View converted values across all target units simultaneously."
    ],
    features: [
      "Simultaneous results layout.",
      "Covers digital storage units (GB, MB, KB, Bytes).",
      "High precision calculators."
    ],
    componentName: "UnitsConverter",
    faqs: [
      {
        question: "What is a unit converter?",
        answer: "A unit converter is a math utility that converts values between different systems of measurement. It allows you to convert lengths (inches to centimeters), weights (pounds to kilograms), temperatures (Celsius to Fahrenheit), and digital data sizes (megabytes to gigabytes) instantly. Having access to quick calculators simplifies technical math tasks and ensures your values are accurate for design work."
      },
      {
        question: "Which measurement units are supported?",
        answer: "Our converter supports four main measurement categories: Length (inches, feet, yards, miles, centimeters, meters, kilometers), Mass/Weight (ounces, pounds, grams, kilograms), Temperature (Celsius, Fahrenheit, Kelvin), and Digital Data storage (bytes, kilobytes, megabytes, gigabytes, terabytes), meeting both daily and technical calculation needs. Having access to quick calculators simplifies technical math tasks and ensures your values are accurate for design work."
      },
      {
        question: "Why are unit conversions important?",
        answer: "Unit conversions are important because different countries and industries use different measurement systems. Engineers need metric values, print designers require inches, and tech teams compute data in gigabytes. A converter bridges these gaps, ensuring precision and preventing math errors in design and engineering. Having access to quick calculators simplifies technical math tasks and ensures your values are accurate for design work."
      },
      {
        question: "Is the conversion accurate?",
        answer: "Yes, all conversions are highly accurate. The calculator uses standard mathematical conversion constants and processes floating-point math locally in your browser. This ensures that whether you are converting data storage units or temperatures, you receive precise, reliable results for your projects. Having access to quick calculators simplifies technical math tasks and ensures your values are accurate for design work."
      },
      {
        question: "Can I use it on mobile devices?",
        answer: "Yes! Our unit converter is designed with responsive layouts that adapt to any screen size. You can access the tool from your mobile browser, select conversion categories, input values using the touch keyboard, and view results instantly on your smartphone or tablet. Having access to quick calculators simplifies technical math tasks and ensures your values are accurate for design work."
      }
    ],
    seoTitle: "Online Units Converter - Convert Length, mass, Data",
    seoHeading: "Quick Unit Conversions for Tech and Math",
    seoIntro: "Need to convert MB to GB or inches to centimeters? Enter your starting values to get instant equivalents.",
    seoBody: `
<h3>Solving Common Technical conversions</h3>
<p>Creators frequently need to convert dimensions (pixels to inches for print) or data parameters (calculating storage caps). Run these math operations instantly without search engines.</p>
    `
  },
  {
    id: "util-time",
    slug: "time-converter",
    category: "utility",
    categoryName: "Utility Tools",
    title: "Time & Timezone Converter",
    shortDesc: "Convert UTC to local time, convert timestamps, and translate world timezones.",
    metaDesc: "Convert timezone differences online. Translate Epoch Unix timestamps, calculate duration, and check UTC conversions.",
    instructions: [
      "Select a time utility tool: Unix Timestamp converter or Timezone calculator.",
      "Input value or select timezone offset.",
      "Read equivalent translations in local and UTC formats."
    ],
    features: [
      "Converts Unix timestamps to human readable datetimes.",
      "Calculates hours between times.",
      "Dynamic system timezone extractor."
    ],
    componentName: "TimeConverter",
    faqs: [
      {
        question: "What is a time converter?",
        answer: "A time converter is a timezone and timestamp utility. It allows you to translate human-readable dates into Unix Epoch timestamps, convert UTC times to your local timezone, and compare timezone differences across major global cities, simplifying international scheduling and database debugging. Translating date formats correctly helps keep global teams aligned and facilitates smooth coordination across multiple timezones."
      },
      {
        question: "How do time zone conversions work?",
        answer: "Timezone conversions calculate the difference in hours between Coordinated Universal Time (UTC) and different locations. The converter uses your browser's system location to identify your local offset, allowing it to translate target dates and times accurately across international time zones. Translating date formats correctly helps keep global teams aligned and facilitates smooth coordination across multiple timezones."
      },
      {
        question: "Why do remote teams use time converters?",
        answer: "Remote teams use time converters to schedule meetings, coordinate project deadlines, and manage campaign releases across different time zones. Comparing timezones helps team members find overlapping work hours, avoiding scheduling mistakes and ensuring smooth communication across international offices. Translating date formats correctly helps keep global teams aligned and facilitates smooth coordination across multiple timezones."
      },
      {
        question: "Can I compare multiple time zones?",
        answer: "Yes, you can easily compare time zone offsets using our calculator interface. It displays the current local time alongside equivalent times in UTC and standard global zones, helping you coordinate international calendar invites and launch events without timezone confusion. Translating date formats correctly helps keep global teams aligned and facilitates smooth coordination across multiple timezones."
      },
      {
        question: "Is daylight saving time considered?",
        answer: "Yes, our converter leverages the browser's native JavaScript date and time libraries, which automatically adjust for Daylight Saving Time (DST) changes based on the user's system timezone database. This ensures your timezone calculations remain accurate throughout the year. Translating date formats correctly helps keep global teams aligned and facilitates smooth coordination across multiple timezones."
      }
    ],
    seoTitle: "Time & Timezone Converter - Unix Timestamp Calculator",
    seoHeading: "Translate Global Timezones and Unix Timestamps",
    seoIntro: "Working with international clients or server logs? Convert world times or translate database Unix timestamps with our simple utility.",
    seoBody: `
<h3>Scheduling Across Timezones</h3>
<p>Working as a freelancer means coordinating calls between PST, EST, UTC, and IST. Check relative differences here to keep calendar schedules aligned.</p>
    `
  }
];

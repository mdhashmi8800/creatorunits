import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-blur",
  "slug": "blur-image",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Blur Image Utility",
  "shortDesc": "Apply adjustable Gaussian blur effects to your images or hide sensitive zones.",
  "metaDesc": "Blur images online. Adjust blur radius parameters to create soft backgrounds or hide sensitive screenshot credentials.",
  "instructions": [
    "Upload the target graphic.",
    "Adjust the blur radius slider (1px to 100px).",
    "Preview the blurred filter state.",
    "Download the output JPG or PNG."
  ],
  "features": [
    "Adjustable pixel blur levels.",
    "Real-time visual feedback.",
    "Completely private local rendering."
  ],
  "componentName": "BlurImage",
  "faqs": [
    {
      "question": "Is the blur reversible after saving?",
      "answer": "No, once exported, the pixels are merged. Keep original copies of files."
    },
    {
      "question": "How does the Blur Image Utility work?",
      "answer": "Our Blur Image Utility runs fully in your web browser. By utilizing the HTML5 Canvas API and client-side JavaScript, it reads your uploaded image file, processes the requested transformations locally in temporary memory, and triggers an immediate download. No remote servers are contacted."
    },
    {
      "question": "Will editing my images with the Blur Image Utility affect their visual quality?",
      "answer": "Our tool optimizes images dynamically to balance file size and visual fidelity. For compression, a quality setting of 78–82% provides massive size savings of 60–80% with zero human-perceivable loss in clarity. Resizing, cropping, and rotating preserve the exact pixel values within the new bounds."
    },
    {
      "question": "Are my personal pictures secure on CreatorUnits.com?",
      "answer": "Yes, absolute privacy is our standard. Because all image processing happens 100% client-side in your browser, your files are never uploaded to our servers, stored, or logged. Your private designs and photos remain strictly on your own device."
    },
    {
      "question": "Which formats can I upload and download?",
      "answer": "The Blur Image Utility supports standard modern web formats including JPEG, PNG, WebP, and SVG depending on the specific tool. WebP is highly recommended for web delivery due to its superior compression ratio and transparency support."
    },
    {
      "question": "Why should I optimize my images before publishing them online?",
      "answer": "Unoptimized images are the single largest cause of slow page loading times. By resizing and compressing your images first, you improve your site's PageSpeed scores, pass Google's Core Web Vitals audits, reduce bounce rates, and improve SEO rankings."
    },
    {
      "question": "Can I use the Blur Image Utility on my smartphone?",
      "answer": "Absolutely. The tool is designed to be fully mobile-responsive and runs efficiently on modern mobile web browsers. You can capture a photo or upload one from your camera roll, apply edits, and download the output instantly."
    },
    {
      "question": "Is there any limit to the file sizes or number of uploads?",
      "answer": "No. Unlike other tools that lock features behind monthly subscriptions, CreatorUnits.com is completely free. Since the calculations run using your browser's resources rather than our servers, we impose no usage limits or session caps."
    },
    {
      "question": "Can I undo my edits after exporting the image?",
      "answer": "No, once you click download, the changes are written directly into the exported pixels. We recommend keeping a copy of your original high-resolution files in case you need to start over."
    },
    {
      "question": "Does this tool work offline?",
      "answer": "Yes. Once the page is loaded, the core JavaScript code is cached in your browser. You can perform all image adjustments without an active internet connection."
    }
  ],
  "seoTitle": "Blur Image Online - Apply Gaussian Blur Filters",
  "seoHeading": "Apply Soft Blur and Privacy Masks to Images",
  "seoIntro": "Hide confidential details in screenshots or design aesthetic backdrops by applying custom blur levels.",
  "seoBody": "\n<h3>How the Blur Image Utility Works</h3>\n<p>Apply adjustable Gaussian blur effects to your images or hide sensitive zones.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Upload the target graphic.</li>\n  <li>Adjust the blur radius slider (1px to 100px).</li>\n  <li>Preview the blurred filter state.</li>\n  <li>Download the output JPG or PNG.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Adjustable pixel blur levels.</li>\n  <li>Real-time visual feedback.</li>\n  <li>Completely private local rendering.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

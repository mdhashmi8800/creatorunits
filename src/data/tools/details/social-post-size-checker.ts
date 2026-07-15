import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-post-sizes",
  "slug": "social-post-size-checker",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "Social Post Size Guide & Checker",
  "shortDesc": "Compare and verify your graphics against visual dimensions for Instagram, YouTube, and Facebook.",
  "metaDesc": "Check image dimensions against social media presets. View templates for IG stories, FB banners, YT channel art, and LinkedIn cards.",
  "instructions": [
    "Upload your graphic file.",
    "Choose a platform target (Instagram, Facebook, YouTube, LinkedIn, X).",
    "Check visual overlay guides showing cropping masks.",
    "Confirm if size fits within recommendations."
  ],
  "features": [
    "Up-to-date image size guides.",
    "Interactive crop line overlays.",
    "Checklist showing aspect match rates."
  ],
  "componentName": "SocialPostSizeChecker",
  "faqs": [
    {
      "question": "What is a social media post size checker?",
      "answer": "A social post size checker is an interactive layout diagnostic tool designed for graphic creators and social managers. When you upload a cover, banner, or timeline graphic, the tool reads its physical dimensions and displays interactive overlay crop masks for platforms like Instagram, YouTube, Facebook, LinkedIn, and Twitter/X. This lets you inspect whether your design fits within recommended boundaries or will be cropped."
    },
    {
      "question": "What are the standard dimensions for Instagram posts?",
      "answer": "Instagram supports three main feed image dimensions: Square posts (`1080 x 1080` pixels with a `1:1` aspect ratio), Portrait posts (`1080 x 1350` pixels with a `4:5` aspect ratio), and Landscape posts (`1080 x 566` pixels with a `1.91:1` aspect ratio). Instagram Stories and Reels use vertical layouts at `1080 x 1920` pixels (`9:16`)."
    },
    {
      "question": "What size should a YouTube channel banner be?",
      "answer": "YouTube recommends a banner size of `2560 x 1440` pixels, with a maximum file size of 6MB. However, YouTube crop masks display differently across devices. The 'safe area' for text and logos is the central region of `1546 x 423` pixels. Banners uploaded outside this safe area will have text cut off on mobile or desktop player screens."
    },
    {
      "question": "What are the recommended sizes for Twitter/X post images?",
      "answer": "For single image posts on Twitter/X, the recommended dimensions are `1200 x 675` pixels (a `16:9` aspect ratio). For Twitter card link previews, a ratio of `1.91:1` (`1200 x 628` pixels) is standard. Twitter header banners should be designed at `1500 x 500` pixels."
    },
    {
      "question": "How does our tool calculate aspect ratios?",
      "answer": "When you upload an image, our tool uses client-side JavaScript to extract the raw pixel width and height. It divides the width by the height and compares the resulting decimal value against standard aspect keys (like `1.777` for `16:9` or `1.333` for `4:3`), giving you a clear pass/fail status."
    },
    {
      "question": "Why does my Facebook link preview look small?",
      "answer": "Facebook displays link previews in two layouts. If your featured webpage image is smaller than `600 x 315` pixels, Facebook renders it as a small square thumbnail on the left of the link text. To get a large, full-width click card preview, ensure your page's Open Graph image is at least `1200 x 630` pixels."
    },
    {
      "question": "Is this post checker free and private?",
      "answer": "Yes, it is 100% free and runs client-side in your browser. We never upload your images to any remote servers, ensuring absolute privacy for your pre-release campaign graphics and templates."
    },
    {
      "question": "What is the primary purpose of the Social Post Size Guide & Checker?",
      "answer": "The Social Post Size Guide & Checker helps content creators optimize their video production and metadata workflows. It simplifies tasks like checking thumbnail sizes, generating layout ideas, and organizing metadata tags to ensure your uploads are ready for maximum search visibility."
    },
    {
      "question": "How does the Social Post Size Guide & Checker improve my YouTube search SEO?",
      "answer": "By providing direct insights into YouTube constraints, competitor tags, and optimized visual structures, the Social Post Size Guide & Checker helps you craft click-worthy titles, structured descriptions, and engaging thumbnail compositions that directly satisfy the search algorithm."
    },
    {
      "question": "Are my video details or channel credentials saved when I use this tool?",
      "answer": "No. We do not require you to link your Google/YouTube account or sign up. All data inputs, video links, or titles you enter are processed locally in your browser session and are never saved or stored."
    }
  ],
  "seoTitle": "Social Media Post Size Checker - Aspect Guides Online",
  "seoHeading": "Check and Validate Your Social Graphic Dimensions",
  "seoIntro": "Planning to launch a social marketing campaign? Don't let auto-crops ruin your designs. Our Free online Social Post Size Guide & Checker compares your graphics against current templates for Instagram, YouTube, Facebook, LinkedIn, and X (Twitter).",
  "seoBody": "\n<h3>Why You Should Use Our Social Post Size Guide & Checker</h3>\n<p>The Social Post Size Guide & Checker is a professional-grade helper designed for content creators, digital marketers, and developers looking for a fast, browser-native solution. Built directly within the CreatorUnits suite, this utility helps you bypass complex installations and avoid sending sensitive project data to external cloud hosts. Whether you are running active media campaigns, preparing design layouts, or validating parameters, the Social Post Size Guide & Checker provides real-time results instantly.</p>\n\n<h3>Key Features &amp; Technical Capabilities</h3>\n<ul>\n  <li><strong>Up-to-date image size guides.:</strong> Up-to-date image size guides.</li>\n  <li><strong>Interactive crop line overlays.:</strong> Interactive crop line overlays.</li>\n  <li><strong>Checklist showing aspect match rates.:</strong> Checklist showing aspect match rates.</li>\n</ul>\n\n<h3>100% Secure &amp; Client-Side Execution</h3>\n<p>Security is a fundamental design standard across all CreatorUnits tools. Unlike online converters or generators that upload files and details to remote databases, our Social Post Size Guide & Checker runs completely within your web browser sandbox using modern JavaScript client APIs. This on-device processing guarantees that your files, variables, and outputs remain strictly secure on your local hard drive, with zero latency or external network dependencies.</p>\n\n<h3>Pro Creator Workflows</h3>\n<p>To maximize your productivity, integrate the Social Post Size Guide & Checker with other matching tools in our directory matrix. For instance, digital media managers can run social assets through the Creator Tools and verify sizing constraints before publishing. Web managers can combine scripts with our metadata builders, sitemap generators, and keyword density validators to optimize their search authority and pass Core Web Vitals check sheets.</p>\n"
};

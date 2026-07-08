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
    }
  ],
  "seoTitle": "Social Media Post Size Checker - Aspect Guides Online",
  "seoHeading": "Check and Validate Your Social Graphic Dimensions",
  "seoIntro": "Planning to launch a social marketing campaign? Don't let auto-crops ruin your designs. Our Free online Social Post Size Guide & Checker compares your graphics against current templates for Instagram, YouTube, Facebook, LinkedIn, and X (Twitter).",
  "seoBody": "\n<h3>Why Matching Social Dimension Guidelines Matters</h3>\n<p>Each social media platform uses unique layout structures to display images on timelines and user feeds. If you upload a graphic with incorrect dimensions, the network's automatic compression systems will crop the sides, stretch the image, or add black borders. Even worse, important text or branding logos can be cut off, making your content look amateurish. Checking sizes before publishing ensures your graphics look sharp on both desktop grids and mobile feeds.</p>\n\n<h3>Standard Dimensions Cheat Sheet</h3>\n<p>Keep your campaign designs aligned with these primary platform recommendations:</p>\n<ul>\n  <li><strong>Instagram Feed (Portrait):</strong> 1080 x 1350px (4:5 ratio). This vertical layout occupies more screen space, driving higher user engagement.</li>\n  <li><strong>YouTube Thumbnail:</strong> 1200 x 720px (16:9 ratio). Verify covers with our specialized <a href=\"/tools/creator/thumbnail-size-checker\">Thumbnail Size Checker</a>.</li>\n  <li><strong>LinkedIn Post Image:</strong> 1200 x 627px (1.91:1 ratio) or 1200 x 1200px (1:1 ratio) for square card layouts.</li>\n  <li><strong>Facebook Cover Banner:</strong> 820 x 312px (Desktop display) and 640 x 360px (Mobile screen display).</li>\n</ul>\n<p>If you need to resize your images to fit these exact dimensions, use our <a href=\"/tools/image/image-resizer\">Image Resizer</a>. If you need to trim margins, use our <a href=\"/tools/image/image-cropper\">Image Cropper</a>.</p>\n\n<h3>Key Features of Our Size Checker</h3>\n<ul>\n  <li><strong>Interactive Crop Mask Overlays:</strong> Toggle platform guides to see exactly where templates will crop your image.</li>\n  <li><strong>Responsive Aspect Checks:</strong> Instantly check if your file fits the target aspect ratios with visual indicators.</li>\n  <li><strong>Client-Side Canvas Processing:</strong> Zero file uploads. Your screenshots and graphics remain private on your computer. Beautify app screenshots using our <a href=\"/tools/image/screenshot-cleaner\">Screenshot Beautifier</a>.</li>\n</ul>\n\n<h3>Common Social Graphic Layout Mistakes</h3>\n<ol>\n  <li><strong>Placing Text Near the Edges:</strong> Many networks crop background banners on mobile screens. Keep all critical copy and brand elements inside the central 'safe zone'.</li>\n  <li><strong>Using Low-Resolution Source Files:</strong> Uploading 400px images. Social platforms apply heavy compression, so low-res images look blurry. Always start with double the target size (e.g. 2400x1350px for a 1200x675px slot) to preserve details.</li>\n  <li><strong>Ignoring Open Graph Specs:</strong> Forgetting to set a high-resolution OG image for blog articles, causing link shares to display small thumbnails.</li>\n</ol>\n\n<h3>Official Design Resource Guides</h3>\n<p>For more details, check <a href=\"https://www.facebook.com/help/125379114197206\" target=\"_blank\" rel=\"noopener noreferrer\">Facebook Cover Specs</a>, refer to <a href=\"https://help.instagram.com/1631821640426723\" target=\"_blank\" rel=\"noopener noreferrer\">Instagram Image Guidelines</a>, and review formatting recommendations at the <a href=\"https://business.twitter.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Twitter/X Business Help Center</a>.</p>\n    "
};

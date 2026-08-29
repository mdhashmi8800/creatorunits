import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-post-sizes",
  "slug": "social-post-size-checker",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "Social Media Post Size Guide & Dimension Checker",
  "shortDesc": "Compare and verify your image dimensions against 2026 visual specifications for Instagram, YouTube, TikTok, Facebook, LinkedIn, and X.",
  "metaDesc": "Free Social Media Post Size Checker. Validate graphics against 2026 specs for Instagram (1080x1350, 1080x1080), YouTube Banners (2560x1440), TikTok (1080x1920), and LinkedIn.",
  "instructions": [
    "Upload or drag & drop your candidate graphic file (JPG, PNG, or WebP).",
    "Select your target platform: Instagram, TikTok, YouTube, Facebook, LinkedIn, or Twitter / X.",
    "Inspect the interactive overlay guides showing safe zones, feed crop masks, and mobile vs desktop cutoffs.",
    "Review the automated dimension scorecard to verify if pixel width, height, and aspect ratio match platform standards.",
    "If your graphic requires adjustment, use our Image Resizer or Image Cropper to fix dimensions without quality loss."
  ],
  "features": [
    "Up-to-date 2026 social media dimension standards across 6 major platforms.",
    "Interactive crop overlays illustrating mobile feed safe zones and desktop headers.",
    "Instant aspect ratio verification (1:1, 4:5, 16:9, 9:16, 1.91:1).",
    "Calculates required pixel adjustments and warns if text falls outside safe zones.",
    "100% private and client-side: your creative graphics are never uploaded to external servers."
  ],
  "componentName": "SocialPostSizeChecker",
  "faqs": [
    {
      "question": "What is the best image size for Instagram feed posts in 2026?",
      "answer": "The highest-engagement format on Instagram is Portrait (4:5 aspect ratio, 1080 x 1350 pixels). It occupies the maximum vertical screen space in the mobile feed, capturing user attention longer than square (1080 x 1080 px) or landscape (1080 x 566 px) formats."
    },
    {
      "question": "What is the YouTube channel banner safe zone?",
      "answer": "While the total recommended banner size is 2560 x 1440 pixels (16:9), the safe zone for text and logos is the central 1546 x 423 pixel box. Anything placed outside this central area will be cropped on mobile devices and tablet screens."
    },
    {
      "question": "What dimensions are required for TikTok & Instagram Reels (9:16)?",
      "answer": "Both TikTok videos and Instagram Reels use a 9:16 vertical aspect ratio at 1080 x 1920 pixels. Be sure to keep key text elements inside the safe zone (at least 220 pixels from the top and bottom) to avoid being obscured by profile usernames, captions, audio icons, and sidebar buttons."
    },
    {
      "question": "What size should LinkedIn link preview images and feed posts be?",
      "answer": "For LinkedIn feed posts, 1200 x 1200 pixels (1:1) or 1080 x 1350 pixels (4:5) are ideal. For OpenGraph link preview cards, LinkedIn requires a 1.91:1 ratio at 1200 x 627 pixels."
    },
    {
      "question": "Why do my social images look blurry after uploading?",
      "answer": "Social platforms aggressively recompress images that exceed max dimension limits or have irregular aspect ratios. If you upload a 4000x3000 photo, the platform's automated compression will blur fine details. Sizing your image to exact platform dimensions (e.g. 1080x1350 for Instagram) before uploading ensures pristine clarity."
    },
    {
      "question": "Is this post size checker free and private?",
      "answer": "Yes. The size checker operates 100% locally in your browser using the HTML5 Canvas API. No images are uploaded to any server."
    }
  ],
  "seoTitle": "Social Media Post Size Checker — 2026 Aspect Ratio & Dimensions",
  "seoHeading": "Check Your Social Media Graphic Dimensions & Safe Zones",
  "seoIntro": "Prevent awkward cropping, blurry recompression, and hidden text. Our free, browser-based Social Post Size Checker validates your graphics against current 2026 specs for Instagram, YouTube, TikTok, Facebook, LinkedIn, and X.",
  "seoBody": "\n<h3>2026 Social Media Image Dimensions Master Cheat Sheet</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Platform</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Post Type</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Recommended Pixels</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Aspect Ratio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Portrait Feed (Best)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1350 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">4:5</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Stories &amp; Reels</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1920 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">9:16</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Video Thumbnail</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1280 &times; 720 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Channel Banner</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">2560 &times; 1440 px (Safe: 1546&times;423)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>TikTok</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Video Cover &amp; Post</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1920 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">9:16</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Twitter / X</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Single Image Post</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1200 &times; 675 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>LinkedIn</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Link Preview Card</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1200 &times; 627 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1.91:1</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Why Safe Zones Matter for Video &amp; Social Feeds</h3>\n<p>Social media interfaces are dynamic. On TikTok and Instagram Reels, the bottom 25% of the screen is overlaid with creator captions, audio tags, and follow buttons, while the right side is filled with like, comment, and share icons.</p>\n<p>Always maintain a <strong>220-pixel safe buffer</strong> on the top, bottom, and right margins when placing titles, subtitles, or product logos. This guarantees that your core message is never obscured by mobile UI overlays.</p>\n\n<h3>Related Free Creator Tools</h3>\n<ul>\n  <li><a href=\"/blog/social-media-image-dimensions-2025\">2025/2026 Social Media Image Dimensions Guide</a> — Comprehensive guide to sizing and cropping.</li>\n  <li><a href=\"/tools/image/image-cropper\">Image Cropper</a> — Crop custom aspect ratios for Instagram, YouTube, and TikTok.</li>\n  <li><a href=\"/tools/image/image-resizer\">Image Resizer</a> — Resize photos to exact pixel dimensions.</li>\n  <li><a href=\"/tools/creator/thumbnail-size-checker\">YouTube Thumbnail Size Checker</a> — Validate 1280x720 and 2MB rules.</li>\n</ul>\n"
};

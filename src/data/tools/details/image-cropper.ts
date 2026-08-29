import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-cropper",
  "slug": "image-cropper",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Cropper — Crop Photos to Exact Aspect Ratios Online",
  "shortDesc": "Crop JPG, PNG, and WebP images to 16:9, 1:1, 4:5, 9:16, or custom ratios with instant client-side canvas rendering.",
  "metaDesc": "Free online image cropper. Crop photos to 16:9 widescreen, 1:1 square, 4:5 portrait, and 9:16 story formats with visual overlay guides. 100% private and browser-based.",
  "instructions": [
    "Select or drag & drop your image file (JPG, PNG, WebP, GIF) into the cropper dropzone.",
    "Choose a preset aspect ratio (16:9 YouTube/Web, 1:1 Square, 4:5 Instagram, 9:16 TikTok/Reels, 4:3) or Freeform.",
    "Drag and resize the cropping boundary box to frame your focal subject using the 3x3 rule-of-thirds grid.",
    "Click 'Crop & Download' to export your newly cropped graphic immediately with zero quality loss."
  ],
  "features": [
    "One-click aspect ratio presets: 16:9 (Widescreen), 1:1 (Square), 4:5 (IG Portrait), 9:16 (Stories/Reels), and 4:3 (Classic).",
    "Interactive draggable handles with visual rule-of-thirds grid alignment.",
    "Preserves PNG and WebP 8-bit alpha transparency for transparent logos and product cutouts.",
    "Direct browser rendering: zero lag, instantaneous export, and no cloud uploads.",
    "100% free with unlimited photo exports and no watermark stamps."
  ],
  "componentName": "ImageCropper",
  "faqs": [
    {
      "question": "What is the difference between cropping and resizing an image?",
      "answer": "Cropping trims away unwanted outer borders of a photo to alter its composition or aspect ratio without stretching pixels. Resizing scales the overall dimensions (width and height) of the entire picture up or down. The best workflow is to crop your image to the desired aspect ratio first, then use our Image Resizer to set exact pixel dimensions."
    },
    {
      "question": "Which aspect ratio should I use for Instagram and YouTube?",
      "answer": "Use 16:9 (1280x720 or 1920x1080) for YouTube thumbnails and desktop banners. Use 4:5 (1080x1350) for Instagram vertical feed posts (which delivers 30% more screen space than 1:1 square), and 9:16 (1080x1920) for TikTok, Instagram Reels, and YouTube Shorts."
    },
    {
      "question": "Does cropping reduce the resolution of my photo?",
      "answer": "Yes, because cropping discards peripheral pixels, the resulting image has a lower total pixel count than the uncropped original. To maintain maximum sharpness on high-DPI retina displays, always start with high-resolution original source photos."
    },
    {
      "question": "Can I crop transparent PNG and WebP files without losing alpha channels?",
      "answer": "Yes! Our image cropper preserves full 8-bit alpha transparency channels for PNG and WebP images. Cropped logos, badges, and cutout assets will maintain transparent backgrounds."
    },
    {
      "question": "How does the Rule of Thirds grid help improve my photos?",
      "answer": "The Rule of Thirds divides your frame into a 3x3 grid with four intersecting focal points. Positioning key elements (like a subject's eyes, a product horizon, or a headline) along these grid lines creates a more balanced, visually compelling, and professional composition."
    },
    {
      "question": "Are my photos uploaded to your servers when I crop them?",
      "answer": "No. All cropping calculations and canvas rendering execute 100% locally inside your web browser sandbox. Your private pictures are never uploaded to any remote server or third-party cloud service."
    }
  ],
  "seoTitle": "Free Image Cropper Online — Crop Photos to Aspect Ratios",
  "seoHeading": "Crop Images to Perfect Social Media Aspect Ratios Online",
  "seoIntro": "Need to frame your subject perfectly or cut out unwanted background distractions? Our free online Image Cropper lets you crop photos to standard 16:9, 1:1, 4:5, and 9:16 ratios with visual framing grids in seconds.",
  "seoBody": "\n<h3>Mastering Image Aspect Ratios for Digital Platforms</h3>\n<p>Posting an incorrectly framed image to social media often leads to automated center-cropping that cuts off vital headlines, faces, or product details. By using our <strong>Image Cropper</strong> with dedicated aspect ratio presets, you control the exact visual framing before publishing.</p>\n\n<h3>Aspect Ratio Cheat Sheet for Content Creators</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Aspect Ratio</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Standard Pixel Dimensions</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Primary Digital Channels</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Visual Characteristics</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>16:9 (Widescreen)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1280 &times; 720 / 1920 &times; 1080 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">YouTube thumbnails, X posts, website banners</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Standard landscape video format</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>4:5 (Vertical Feed)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1350 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Instagram feed, Facebook mobile timeline</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Occupies maximum vertical feed screen space</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>1:1 (Square)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1080 / 1200 &times; 1200 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Instagram grid, LinkedIn posts, avatars</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Universal classic square composition</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>9:16 (Full Screen)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1920 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">TikTok, Reels, YouTube Shorts, Stories</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Full-bleed mobile vertical experience</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>4:3 (Standard)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1600 &times; 1200 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">iPad screens, presentation slides, blog photos</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Traditional photography aspect ratio</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>3 Pro Photo Cropping Tips for Maximum Impact</h3>\n<ul>\n  <li><strong>Keep Faces &amp; Focal Points Off-Center:</strong> Use the 3x3 Rule of Thirds grid to position subjects on intersection points rather than dead-center for a dynamic feel.</li>\n  <li><strong>Maintain Breathing Room for Text Overlays:</strong> If you plan to add typography or sticker graphics later, leave ample negative space (open sky, neutral background) on one side.</li>\n  <li><strong>Crop Before You Compress:</strong> Trimming unwanted background pixels first reduces your image's pixel footprint, allowing the subsequent compression step to produce even smaller file weights.</li>\n</ul>\n\n<h3>Complementary Image Processing Tools</h3>\n<ul>\n  <li><a href=\"/tools/image/image-resizer\">Image Resizer</a> — Scale cropped photos to exact pixel targets.</li>\n  <li><a href=\"/tools/image/image-compressor\">Image Compressor</a> — Squeeze file size for fast mobile loading without quality loss.</li>\n  <li><a href=\"/tools/image/png-to-webp-converter\">PNG to WebP Converter</a> — Convert cropped graphics to next-gen WebP format for fast web delivery.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your 16:9 crop against real YouTube feeds.</li>\n</ul>\n"
};

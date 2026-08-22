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
    "Select or drag & drop your image file into the cropper canvas.",
    "Choose a preset aspect ratio (16:9 YouTube/Web, 1:1 Square, 4:5 Instagram, 9:16 TikTok/Reels) or Freeform.",
    "Drag and resize the cropping boundary box to frame your focal subject.",
    "Click 'Crop & Download' to save the newly cropped image immediately."
  ],
  "features": [
    "One-click aspect ratio presets: 16:9, 1:1, 4:5, 9:16, and 4:3.",
    "Interactive draggable handles with rule-of-thirds grid alignment.",
    "Preserves PNG/WebP alpha transparency for cutout graphics.",
    "Direct browser rendering: zero lag and no server uploads.",
    "100% free with unlimited photo exports."
  ],
  "componentName": "ImageCropper",
  "faqs": [
    {
      "question": "What is the difference between cropping and resizing an image?",
      "answer": "Cropping trims away unwanted outer areas of an image, altering its aspect ratio or focusing on a specific subject without stretching pixels. Resizing changes the overall pixel width and height dimensions of the entire image without cutting anything out. For the best visual quality, crop your composition first, then resize the file to your exact display target."
    },
    {
      "question": "Which aspect ratio should I use for Instagram and YouTube?",
      "answer": "Use 16:9 (1280x720) for YouTube video thumbnails and website banners. Use 1:1 (1080x1080) for Instagram square feed posts, 4:5 (1080x1350) for vertical Instagram feed posts, and 9:16 (1080x1920) for TikTok, YouTube Shorts, and Instagram Stories."
    },
    {
      "question": "Does cropping reduce the resolution of my photo?",
      "answer": "Yes, because cropping discards outer pixels, the resulting image has a lower total pixel count than the original. To ensure sharp results on high-DPI retina displays, always start with high-resolution original source photos."
    },
    {
      "question": "Can I crop a transparent PNG without losing transparency?",
      "answer": "Yes! Our image cropper preserves the 8-bit alpha transparency channel of PNG and WebP files, ensuring your cropped logos and stickers remain transparent."
    },
    {
      "question": "Are my cropped images uploaded to your servers?",
      "answer": "No. All cropping operations run locally in your web browser using the HTML5 Canvas API. Your pictures are never sent across the network or stored in any database."
    }
  ],
  "seoTitle": "Free Image Cropper Online — Crop Photos to Aspect Ratios",
  "seoHeading": "Crop Images to Perfect Social Media Aspect Ratios Online",
  "seoIntro": "Need to frame your subject perfectly or cut out unwanted background distractions? Our free online Image Cropper lets you crop photos to standard 16:9, 1:1, 4:5, and 9:16 ratios with visual framing grids in seconds.",
  "seoBody": "\n<h3>Mastering Image Aspect Ratios for Digital Platforms</h3>\n<p>Posting an incorrectly framed image to social media often leads to automated center-cropping that cuts off vital headlines, faces, or product details. By using our <strong>Image Cropper</strong> with dedicated aspect ratio presets, you control the exact visual framing before publishing.</p>\n\n<h3>Aspect Ratio Guide for Content Creators</h3>\n<ul>\n  <li><strong>16:9 Widescreen:</strong> YouTube thumbnails, Twitter in-stream cards, landscape hero banners.</li>\n  <li><strong>1:1 Square:</strong> Instagram feed, LinkedIn posts, profile avatars, product listings.</li>\n  <li><strong>4:5 Vertical Portrait:</strong> Maximum real-estate on Instagram mobile feeds.</li>\n  <li><strong>9:16 Full Screen Vertical:</strong> TikTok, Instagram Reels, YouTube Shorts, Snapchat.</li>\n</ul>\n\n<h3>Related Free Image Utilities</h3>\n<ul>\n  <li><a href=\"/tools/image/image-resizer\">Image Resizer</a> — Scale cropped photos to exact pixel targets.</li>\n  <li><a href=\"/tools/image/image-compressor\">Image Compressor</a> — Squeeze file size for fast mobile loading.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your 16:9 crop against real YouTube feeds.</li>\n</ul>\n"
};

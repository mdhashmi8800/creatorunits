import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-resizer",
  "slug": "image-resizer",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Resizer — Resize Photos to Exact Pixel Dimensions Online",
  "shortDesc": "Resize images to custom pixel dimensions or preset percentages with proportional aspect ratio lock.",
  "metaDesc": "Free online image resizer. Scale JPG, PNG, and WebP photos to exact dimensions or percentages with aspect ratio lock. 100% private and runs in your browser.",
  "instructions": [
    "Upload or drag & drop an image (JPG, PNG, or WebP) from your device.",
    "Enter your target width or height in pixels, or select a quick scale preset (75%, 50%, 25%).",
    "Keep the aspect ratio lock enabled to maintain proportional scaling without stretching or distortion.",
    "Click 'Download Resized Image' to export your scaled photo instantly."
  ],
  "features": [
    "Proportional Aspect Ratio Lock to prevent horizontal or vertical distortion.",
    "Percentage-based scaling presets (25%, 50%, 75%) for rapid resizing.",
    "Bicubic pixel interpolation for smooth scaling and crisp typography.",
    "Preserves PNG and WebP alpha transparency channels.",
    "100% Client-Side: zero files uploaded to remote servers."
  ],
  "componentName": "ImageResizer",
  "faqs": [
    {
      "question": "How do I resize an image without distorting its proportions?",
      "answer": "To prevent stretching or squishing, ensure the Aspect Ratio Lock (padlock icon) is turned ON. When locked, changing the width automatically calculates the mathematically exact height (and vice-versa) based on your original image ratio."
    },
    {
      "question": "What is the difference between image resizing and image compression?",
      "answer": "Resizing changes the physical pixel dimensions of an image (e.g., scaling 4000x3000 down to 1200x900 pixels). Compression optimizes the internal data and color tables of the file without changing its pixel dimensions. Downscaling an image reduces file size significantly because there are fewer total pixels to encode."
    },
    {
      "question": "What image dimensions should I use for websites and blogs?",
      "answer": "Standard web dimension guidelines: (1) Full-width hero banners: 1920x1080 px; (2) Blog article featured images: 1200x630 px (matches OpenGraph social preview specs); (3) Content inline illustrations: 800 px wide; (4) E-commerce square product photos: 1000x1000 px or 1200x1200 px."
    },
    {
      "question": "Can I upscale a low-resolution photo to high resolution?",
      "answer": "You can enter larger pixel dimensions, but upscaling a small image stretches existing pixels and will result in softness or blurriness. We recommend always starting with high-resolution source images and scaling downward to your target container size."
    },
    {
      "question": "Are my resized images kept private and secure?",
      "answer": "Yes. All resizing algorithms run entirely inside your web browser's HTML5 Canvas sandbox. Your photos are never sent over the internet or saved on our servers."
    }
  ],
  "seoTitle": "Free Image Resizer — Scale PNG, JPG, WebP Online",
  "seoHeading": "Resize Images Online to Exact Dimensions in Seconds",
  "seoIntro": "Oversized images slow down websites and get awkwardly cropped by social media platforms. Our free online Image Resizer lets you scale JPG, PNG, and WebP graphics to exact pixel widths, heights, or percentage presets with automatic aspect ratio protection.",
  "seoBody": "\n<h3>Why Proper Image Resizing Is Critical for Performance</h3>\n<p>Displaying a massive 24-megapixel camera photograph (6000×4000 pixels) inside a blog container that only spans 800 pixels is one of the most common web performance mistakes. Browsers are forced to download millions of unused pixels, wasting mobile data and slowing down page rendering.</p>\n<p>By resizing your assets to match their actual on-screen display containers with our <strong>Image Resizer</strong>, you eliminate rendering lag and dramatically reduce file sizes before publishing.</p>\n\n<h3>Standard Social Media &amp; Web Image Dimensions Guide</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Platform / Use Case</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Recommended Dimensions</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Aspect Ratio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube Thumbnail</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1280 &times; 720 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>OpenGraph / Blog Featured</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1200 &times; 630 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1.91:1</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram Square Post</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1080 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1:1</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Instagram / TikTok Story</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1080 &times; 1920 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">9:16</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Website Hero Banner</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1920 &times; 1080 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Related Free Image Utilities</h3>\n<ul>\n  <li><a href=\"/tools/image/image-compressor\">Image Compressor</a> — Squeeze file size after resizing.</li>\n  <li><a href=\"/tools/image/image-cropper\">Image Cropper</a> — Cut out specific sections or crop to 1:1, 16:9, or 4:3 ratios.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your 1280x720 thumbnail across desktop and mobile feeds.</li>\n</ul>\n"
};

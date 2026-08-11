import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-resizer",
  "slug": "image-resizer",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Resizer",
  "shortDesc": "Resize images to custom pixel dimensions or preset percentages with aspect ratio lock.",
  "metaDesc": "Resize JPG, PNG, and WebP images online. Lock aspect ratio, scale by percentage, or enter custom dimensions. Runs entirely in your browser.",
  "instructions": [
    "Select and load an image from your local device.",
    "Enter your desired width or height in pixels, or choose a percentage preset (75%, 50%, 25%).",
    "Toggle the aspect ratio lock to maintain the image's original proportions.",
    "Click 'Download Resized Image' to export the new file."
  ],
  "features": [
    "Aspect Ratio Locking: Automatically calculates height based on width to prevent stretching.",
    "Percentage Presets: Quick scaling tools for half-size or quarter-size compression.",
    "Instant Processing: Fast canvas scaling algorithms.",
    "Privacy-Centric: Completely runs in the browser."
  ],
  "componentName": "ImageResizer",
  "faqs": [
    {
      "question": "What is an image resizer?",
      "answer": "An image resizer is a simple digital utility that alters the physical width and height dimensions of an image in pixels or percentages. It allows you to scale down oversized graphics to fit layout guidelines for websites, email newsletters, blog posts, or social media platforms. Adjusting the dimensions reduces the pixel grid and overall footprint of the image. It is different from compression, which reduces file size by optimizing file bytes, although resizing also significantly shrinks the resulting file size because there are fewer total pixels to save."
    },
    {
      "question": "How do I resize an image without distortion?",
      "answer": "To resize an image without stretching or distortion, you must preserve its original aspect ratio, which is the proportional relationship between width and height. Our image resizer has an aspect ratio lock enabled by default. When you adjust the width, the height automatically updates to match the correct proportions, keeping your photo perfectly balanced. Disabling the lock allows you to enter arbitrary values, which is useful when you want to force an image into custom rectangular shapes, though it may result in visual warping."
    },
    {
      "question": "Can I resize images for social media?",
      "answer": "Yes, you can easily resize any image to fit social media platform dimensions. Whether you need a square format for Instagram posts, a specific banner width for YouTube headers, or standard dimensions for Facebook updates, our tool allows you to input custom pixel dimensions directly. This ensures your visual content looks professional and fits without cropping. Check out our related Social Post Size Guide for standard presets across popular networks."
    },
    {
      "question": "What dimensions should I use for websites?",
      "answer": "The optimal dimensions depend on where the image will be displayed. For full-width website banners, 1920 pixels wide is standard. For blog content headers, 1200 pixels wide works best. Regular inline images look sharpest at 800 pixels. Keeping image dimensions close to their display container width prevents slow page loading times. Loading a 4000px wide camera image in a 400px wide screen container wastes user bandwidth and decreases Google PageSpeed scores."
    },
    {
      "question": "Will resizing affect image quality?",
      "answer": "Downscaling an image to smaller dimensions preserves clarity, although it contains fewer pixels. However, upscaling an image beyond its original dimensions will cause pixelation and blurriness, so we recommend starting with high-resolution source files. Having the correct pixel sizes prevents layout stretching and guarantees a clean, high-quality display on websites. If you need to make the file size smaller without changing the dimensions, try our Image Compressor tool."
    },
    {
      "question": "Does this tool upload my images to a server?",
      "answer": "No, this tool does not upload your files to any external server. All operations are processed locally in your web browser using HTML5 Canvas. Your images are never sent over the internet, stored on a database, or cached remotely. This ensures 100% security and privacy for your personal photographs, design assets, and confidential screenshots."
    },
    {
      "question": "What formats does the resizer support?",
      "answer": "Our free browser image resizer supports all major web image formats, including JPEG (JPG), PNG, and WebP. You can upload any of these file formats, input your target width or height, choose to lock or unlock the aspect ratio, and download the resized file. The output format is automatically generated to match your source image, ensuring compatibility and preserving characteristics like alpha transparency in PNG and WebP files."
    },
    {
      "question": "How does the Image Resizer work?",
      "answer": "Our Image Resizer runs fully in your web browser. By utilizing the HTML5 Canvas API and client-side JavaScript, it reads your uploaded image file, processes the requested transformations locally in temporary memory, and triggers an immediate download. No remote servers are contacted."
    },
    {
      "question": "Will editing my images with the Image Resizer affect their visual quality?",
      "answer": "Our tool optimizes images dynamically to balance file size and visual fidelity. For compression, a quality setting of 78–82% provides massive size savings of 60–80% with zero human-perceivable loss in clarity. Resizing, cropping, and rotating preserve the exact pixel values within the new bounds."
    },
    {
      "question": "Are my personal pictures secure on CreatorUnits.com?",
      "answer": "Yes, absolute privacy is our standard. Because all image processing happens 100% client-side in your browser, your files are never uploaded to our servers, stored, or logged. Your private designs and photos remain strictly on your own device."
    }
  ],
  "seoTitle": "Online Image Resizer - Resize JPG, PNG, WebP Instantly",
  "seoHeading": "Quickly Resize Images to Custom Dimensions",
  "seoIntro": "Whether you need to upload a profile photo, adjust graphics for a blog layout, or scale images for a presentation, having the correct pixel dimensions is essential. Our online Image Resizer lets you scale images instantly in your browser — no uploads to external servers, no sign-up, no watermarks.",
  "seoBody": "\n<h3>Image Resizing vs Image Compression — What's the Difference?</h3>\n<p>Resizing changes the physical pixel dimensions of an image (width × height). Compression reduces the file size in bytes by optimising how pixel data is encoded. Both reduce file size, but they work differently: resizing removes pixels (so a 4000 × 3000 image becomes 1200 × 900), while compression uses algorithms to store the same pixels more efficiently.</p>\n<p>For web use, you often want to do both: resize to the display container width to eliminate wasted pixels, then compress to reduce the byte size further. Our <a href=\"/tools/image/image-compressor\">Image Compressor</a> handles compression after you resize.</p>\n\n<h3>Common Image Dimensions Reference</h3>\n<ul>\n  <li><strong>Website full-width banner:</strong> 1920 × 600 px</li>\n  <li><strong>Blog post featured image:</strong> 1200 × 628 px (also the OG image standard)</li>\n  <li><strong>Inline blog content image:</strong> 800 × auto px</li>\n  <li><strong>Instagram post (square):</strong> 1080 × 1080 px</li>\n  <li><strong>Instagram Stories / TikTok:</strong> 1080 × 1920 px (9:16)</li>\n  <li><strong>Facebook cover photo:</strong> 820 × 312 px</li>\n  <li><strong>YouTube channel art:</strong> 2560 × 1440 px</li>\n  <li><strong>YouTube thumbnail:</strong> 1280 × 720 px (16:9)</li>\n  <li><strong>LinkedIn post image:</strong> 1200 × 627 px</li>\n  <li><strong>Twitter / X post image:</strong> 1600 × 900 px</li>\n  <li><strong>Email header image:</strong> 600 × auto px</li>\n</ul>\n\n<h3>Understanding Aspect Ratios</h3>\n<p>The aspect ratio is the proportional relationship between an image's width and height, expressed as W:H. When you resize an image without locking the aspect ratio, the width and height scale independently, which can cause distortion — faces become stretched, logos become squashed.</p>\n<p>Our resizer locks the aspect ratio by default: adjust the width and the height updates automatically to maintain correct proportions. Disable the lock only when you intentionally need to force the image into a non-proportional container (like cropping a 4:3 photo to 1:1 for Instagram).</p>\n\n<h3>Tips for Resizing Images for Faster Page Load</h3>\n<ul>\n  <li><strong>Match dimensions to the display container.</strong> A 3000 px wide image in a 900 px column forces the browser to rescale it on every page load — resize it to 900 px first.</li>\n  <li><strong>Use 2× resolution for retina displays.</strong> If the display width is 600 px, export at 1200 px so the image looks sharp on high-DPI screens.</li>\n  <li><strong>Resize before compressing.</strong> Always resize first to the correct display dimensions, then compress. Compressing a 4000 px image instead of the 800 px version wastes compression effort.</li>\n  <li><strong>Never upscale raster images.</strong> Enlarging an image beyond its original dimensions adds pixels by interpolation, causing visible blurriness. Always start with the highest quality source file.</li>\n</ul>\n\n<h3>100% Browser-Based — Your Images Never Leave Your Device</h3>\n<p>All resizing is handled by the HTML5 Canvas API in your browser. Your images are never uploaded to our servers. Once you select a file, processing happens entirely in local memory, and the download is triggered directly from your browser — zero server involvement, complete privacy.</p>\n"
};

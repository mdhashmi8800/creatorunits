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
    }
  ],
  "seoTitle": "Online Image Resizer - Resize JPG, PNG, WebP Instantly",
  "seoHeading": "Quickly Resize Images to Custom Dimensions",
  "seoIntro": "Whether you need to upload a profile photo, adjust graphics for a blog layout, or scale images for a presentation, having the correct pixel dimensions is essential. Our online Image Resizer allows you to scale images instantly right inside your browser window. Read on to learn about best practices, aspect ratios, and common mistakes in image resizing.",
  "seoBody": "\n<h3>Understanding Aspect Ratio and Why It Matters</h3>\n<p>Aspect ratio is the proportional relationship between an image's width and its height, commonly expressed as two numbers separated by a colon, such as 16:9 or 4:3. If you force an image to resize without keeping this proportion, it will stretch or squash. Keeping the aspect ratio locked preserves the natural aesthetics of portraits, landscape photos, and product graphics. If you need to change the ratio of an image, you should use our <a href=\"/tools/image/image-cropper\">Image Cropper</a> first, and then resize the resulting output to fit your final pixel requirements.</p>\n\n<h3>Key Benefits of Browser-Based Image Resizing</h3>\n<ul>\n  <li><strong>Maximum Privacy & Security:</strong> Unlike other tools, your graphics never leave your device. All calculations are executed locally using client-side JavaScript APIs. This makes it perfect for business documents, internal screenshots, or personal assets.</li>\n  <li><strong>Zero Upload Time:</strong> Because there are no file uploads, processing is instantaneous. Even massive 20MB files resize in milliseconds because they are read directly from local memory.</li>\n  <li><strong>Precise Control:</strong> Lock or unlock proportions, input custom pixel values, or select fast percentage scaling benchmarks (e.g., 50% scale down).</li>\n</ul>\n\n<h3>How to Prepare Images for Different Platforms</h3>\n<p>Different web platforms require specific image sizes for optimal display. Using the wrong size can lead to automatic cropping or blurry stretching:</p>\n<ul>\n  <li><strong>Blog Post Headers:</strong> Usually 1200px wide for standard modern layouts. Refer to <a href=\"https://developers.google.com/search/docs/appearance/structured-data/article\" target=\"_blank\" rel=\"noopener noreferrer\">Google Search Article Schema Guidelines</a> which recommend images of at least 1200px wide.</li>\n  <li><strong>Email Newsletters:</strong> Around 600px to 800px width to fit nicely on mobile email clients and prevent horizontal scrollbars.</li>\n  <li><strong>Social Cover Images:</strong> Exact layouts like 1500x500px for Twitter headers or 2560x1440px for YouTube channel banners.</li>\n</ul>\n\n<h3>Common Image Resizing Mistakes to Avoid</h3>\n<p>To ensure high-quality visual results, watch out for these common optimization mistakes:</p>\n<ol>\n  <li><strong>Upscaling Low-Res Images:</strong> Trying to make a 200px image into a 1200px header will cause severe blurriness. Always start with a larger file and scale down.</li>\n  <li><strong>Stretching Profiles:</strong> Turning off the aspect ratio lock when resizing photos of people can warp facial features. Always keep the aspect ratio lock active unless you are intentionally stretching patterns.</li>\n  <li><strong>Wasting Bandwidth:</strong> Uploading raw camera photographs (typically 4000+ pixels wide) directly to WordPress or Shopify. Always resize images to their maximum display width before publishing to improve web page loading speeds and core web vitals.</li>\n</ol>\n\n<h3>Real-World Example: Preparing a Blog Header</h3>\n<p>Suppose you took a stunning high-resolution photo with your DSLR camera that is 6000 x 4000 pixels and weighs 12MB. Uploading this directly to your blog would slow down mobile visitors significantly. To optimize it:</p>\n<ol>\n  <li>Load the file into the <strong>Image Resizer</strong>.</li>\n  <li>Ensure the aspect ratio lock is active.</li>\n  <li>Enter <code>1200</code> in the width input field. The height will automatically adjust to <code>800</code>.</li>\n  <li>Download the resized image.</li>\n  <li>Next, run it through our <a href=\"/tools/image/image-compressor\">Image Compressor</a> to squeeze out unnecessary byte metadata, ensuring your blog load time is fast and SEO rankings remain high.</li>\n</ol>\n    "
};

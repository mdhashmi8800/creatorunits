import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-cropper",
  "slug": "image-cropper",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Cropper",
  "shortDesc": "Crop images to specific ratios like 16:9, 1:1, 4:3, or custom shapes instantly.",
  "metaDesc": "Crop JPG, PNG, WebP images online. Lock aspect ratios for social media posts or draw custom crops. Client-side canvas cropping.",
  "instructions": [
    "Upload your image to the crop interface.",
    "Select an aspect ratio preset or adjust the cropping frame handles manually.",
    "Drag the crop frame over your target area.",
    "Click 'Crop & Download' to export the cropped image."
  ],
  "features": [
    "Ratio Presets: 1:1 Square, 16:9 Widescreen, 4:3 Portrait.",
    "Responsive crop overlays.",
    "Zero-latency cropping using HTML5 canvas."
  ],
  "componentName": "ImageCropper",
  "faqs": [
    {
      "question": "What is the difference between cropping and resizing?",
      "answer": "Cropping and resizing are different image editing processes. Cropping cuts away the outer boundaries of an image, removing unwanted background content, changing its aspect ratio, or focusing on a specific subject. Resizing changes the overall dimensions (width and height in pixels) of the image without removing any visual elements, which can stretch or compress the graphic if proportions are not locked. Often, creators crop an image first to get the right composition, then resize it to fit standard layout sizes."
    },
    {
      "question": "Why are aspect ratio presets important?",
      "answer": "Aspect ratio presets are critical because different social media channels and web containers require specific proportions to display content without black bars or automatic cropping. For example, Instagram posts are best in 1:1 (Square) or 4:5 (Vertical) ratios, while YouTube thumbnails and desktop websites use a 16:9 (Widescreen) format. Using presets ensures your crop perfectly matches these target environments."
    },
    {
      "question": "Does cropping reduce image resolution?",
      "answer": "Yes, cropping reduces resolution because you are discarding pixels. If you start with a 1000x1000 pixel image and crop out the outer half, the resulting image will have a lower resolution (e.g., 500x500 pixels). To maintain sharp visual quality, always start with the highest resolution source image available before cropping."
    },
    {
      "question": "Are my images uploaded to any server for cropping?",
      "answer": "No, your images are never uploaded to our servers. The entire cropping process is executed locally in your web browser using HTML5 Canvas APIs. This means your private photographs, receipts, screenshots, and custom assets remain completely confidential and secure on your local device."
    },
    {
      "question": "Can I crop transparent PNG files?",
      "answer": "Yes, our image cropper supports transparent PNG and WebP files. It preserves the transparency layers (alpha channel) of your source images, allowing you to crop logos, product shots, and icons without losing their transparent borders. The output file is rendered with transparency intact."
    },
    {
      "question": "How do I crop an image for Instagram?",
      "answer": "For Instagram posts, select the 1:1 (Square) aspect ratio preset. For Instagram Stories or Reels, a vertical 9:16 layout is recommended. Once you select the preset, drag the cropping box to frame your subject, and click 'Crop & Download' to export the perfect file for upload."
    },
    {
      "question": "Is this online image cropper free?",
      "answer": "Yes, our image cropper is completely free to use. There are no registration forms, usage limits, watermark overlays, or hidden costs. You can crop as many images as you need directly from your mobile or desktop browser."
    }
  ],
  "seoTitle": "Free Image Cropper Online - Aspect Ratio Cropping Tool",
  "seoHeading": "Crop Your Images Instantly in Your Browser",
  "seoIntro": "Need to remove unwanted borders or adjust your photo's aspect ratio? Our online Image Cropper allows you to focus on the perfect subject and crop images to standard ratios like 16:9, 1:1, or 4:3 instantly. Learn how cropping works, key ratio guidelines, and how to avoid pixelation.",
  "seoBody": "\n<h3>Cropping vs. Resizing: When to Use Which</h3>\n<p>Many creators confuse cropping with resizing. If you have a panoramic landscape photo and you need to upload it as a square profile photo, resizing it directly will warp the photo, making it look squished. Instead, you must use an <strong>Image Cropper</strong> to select the square central region and discard the sides. Once cropped, you can use our <a href=\"/tools/image/image-resizer\">Image Resizer</a> to set the exact pixel width (e.g., 150px for a profile icon) without distorting the visual composition.</p>\n\n<h3>Key Social Media Aspect Ratios</h3>\n<p>To ensure your posts look clean and professional, match your crops to these industry standard ratios:</p>\n<ul>\n  <li><strong>1:1 (Square):</strong> The classic format for Instagram posts, Facebook profile photos, and website icons.</li>\n  <li><strong>16:9 (Widescreen):</strong> The standard for YouTube thumbnails, presentation slides, Twitter image posts, and web banners. Refer to <a href=\"https://support.google.com/youtube/answer/141006\" target=\"_blank\" rel=\"noopener noreferrer\">YouTube Thumbnail Guidelines</a> for detailed setup recommendations.</li>\n  <li><strong>4:3 (Standard):</strong> Popular for tablet backgrounds, retro photography, and standard blog posts.</li>\n  <li><strong>9:16 (Vertical):</strong> Essential for mobile-first formats, including TikTok videos, Instagram Stories, and YouTube Shorts.</li>\n</ul>\n\n<h3>Key Benefits of Browser-Based Client-Side Cropping</h3>\n<ul>\n  <li><strong>Absolute Data Privacy:</strong> Because all pixel manipulation happens in the local canvas memory of your browser, your private photos and sensitive documents are never sent over the internet.</li>\n  <li><strong>Instant Export Speed:</strong> Skip the network queues. Crop and download files in milliseconds without waiting for server response cycles.</li>\n  <li><strong>Visual Accuracy:</strong> Responsive guides allow you to position the frame perfectly, checking composition rules (like the rule of thirds) in real-time.</li>\n</ul>\n\n<h3>Common Cropping Pitfalls to Avoid</h3>\n<ol>\n  <li><strong>Over-Cropping Small Images:</strong> If you crop a small section of a low-resolution image, the final output will be tiny and appear pixelated when stretched on screen. Always start with high-resolution originals.</li>\n  <li><strong>Ignoring Safe Zones:</strong> In headers or banners, social platforms often place text or avatar bubbles over the bottom-left corners. When cropping background graphics, ensure your main subjects are centered and not obscured by these overlays.</li>\n  <li><strong>Losing Transparency:</strong> Some online editors fill transparent areas with black or white. Our tool preserves transparent alpha channels for PNG and WebP files. If you need to beautify screenshots, run them through our <a href=\"/tools/image/screenshot-cleaner\">Screenshot Beautifier</a>.</li>\n</ol>\n\n<h3>Real-World Use Case: Creating a YouTube Thumbnail</h3>\n<p>To create a compelling, click-worthy thumbnail that conforms to YouTube specifications:</p>\n<ol>\n  <li>Upload your screenshot or camera graphic.</li>\n  <li>Select the <code>16:9</code> aspect ratio preset.</li>\n  <li>Drag and expand the cropping handles to focus on the key subject, keeping the background balanced.</li>\n  <li>Click <code>Crop & Download</code>.</li>\n  <li>If the output file size exceeds 2MB, run it through our <a href=\"/tools/image/image-compressor\">Image Compressor</a> to meet YouTube's file weight constraints before uploading.</li>\n</ol>\n    "
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-thumbnail-checker",
  "slug": "thumbnail-size-checker",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "Thumbnail Size Checker",
  "shortDesc": "Verify if your thumbnail matches YouTube's recommended resolutions, file sizes, and format rules.",
  "metaDesc": "Upload your cover image to check if it matches the 1280x720 pixels, 16:9 ratio, and 2MB file size limits of YouTube.",
  "instructions": [
    "Upload your cover image.",
    "The tool runs instant validations on dimensions, aspect ratio, file size, and file extensions.",
    "Review the checklist indicators (green checks for pass, red for fail).",
    "Read optimization tips if any parameters fail."
  ],
  "features": [
    "Live size extraction.",
    "Calculates exact aspect ratio metrics.",
    "Validates against YouTube metadata constraints."
  ],
  "componentName": "ThumbnailSizeChecker",
  "faqs": [
    {
      "question": "What is the recommended size for a YouTube thumbnail?",
      "answer": "YouTube officially recommends a resolution of 1280 x 720 pixels, with a minimum width of 640 pixels. The image must be in a 16:9 aspect ratio (widescreen). Uploading files with these dimensions ensures your cover renders clearly on high-definition screens and matches the standard desktop and mobile player aspect ratios without black margins."
    },
    {
      "question": "What is the maximum file size limit for YouTube thumbnails?",
      "answer": "The maximum file size allowed by YouTube for custom video thumbnails is 2 Megabytes (2MB). If your design file exceeds 2MB, YouTube's video manager will reject the upload, throwing a file size error. To prevent this, you can compress your JPG, WebP, or PNG file using our Image Compressor tool before uploading."
    },
    {
      "question": "Which image formats are accepted by YouTube?",
      "answer": "YouTube accepts four main image formats for custom thumbnail uploads: JPEG (JPG), PNG, GIF (non-animated), and BMP. Modern formats like WebP are becoming supported on newer developer channels, but for standard uploads, saving your files as JPEG or PNG remains the safest choice to prevent upload rejects."
    },
    {
      "question": "How do I check if my thumbnail aspect ratio is correct?",
      "answer": "Our Thumbnail Size Checker handles this automatically. When you upload your cover image, the tool reads the image's physical width and height to calculate the exact ratio. A standard 1280x720px graphic yields a perfect 16:9 (1.777) aspect ratio, passing the check. If your ratio is incorrect (e.g. 4:3 or 1:1), you will see a warning."
    },
    {
      "question": "Why does YouTube reject my thumbnail upload?",
      "answer": "Upload rejections are almost always caused by three issues: the file size is over 2MB, the file format is unsupported (such as TIFF or raw HEIC formats from iPhones), or your Google account has not been verified yet. Custom thumbnail uploads require a verified phone number connected to your YouTube channel account."
    },
    {
      "question": "Will a high resolution like 1920x1080 work as a thumbnail?",
      "answer": "Yes, 1920x1080 (Full HD) images work perfectly because they share the exact same 16:9 aspect ratio as 1280x720. They will render beautifully on large displays. However, high-resolution graphics often exceed the 2MB file limit, so ensure you compress the file size before attempting to upload."
    },
    {
      "question": "Is this size checking tool free and secure?",
      "answer": "Yes, our checker is completely free and operates client-side inside your browser. Your images are never sent to external servers or cloud processors. The image parameters are read locally using browser File Reader APIs, keeping your pre-release content and layout designs 100% confidential."
    }
  ],
  "seoTitle": "YouTube Thumbnail Size Checker - Validate Cover Specifications",
  "seoHeading": "Validate Your Video Thumbnails Against Official Limits",
  "seoIntro": "Getting ready to publish a new video? Don't let an upload rejection slow your publish schedules down. Our Free online Thumbnail Size Checker validates your design files against YouTube's official limits for resolution, aspect ratio, file format, and file size.",
  "seoBody": "\n<h3>Understanding YouTube's Official Upload Constraints</h3>\n<p>To keep the platform looking clean and loading fast, YouTube enforces specific constraints on custom video covers. If you ignore these rules, your file will either be rejected by the creator dashboard, or scaled automatically, resulting in black bars, pixelation, or cropped text. Meeting the standard rules is crucial for high-quality visuals:</p>\n<ul>\n  <li><strong>Ideal Dimensions:</strong> 1280 x 720 pixels. This provides high-definition clarity on all screen sizes, from mobile feeds to smart TVs.</li>\n  <li><strong>Aspect Ratio:</strong> 16:9. This widescreen configuration matches the player dimensions, preventing black bars on the top, bottom, or sides of the graphic.</li>\n  <li><strong>File Size Cap:</strong> Under 2 Megabytes (2MB). Design files containing complex graphics or high quality PNGs often exceed this limit. If this occurs, use our <a href=\"/tools/image/image-compressor\">Image Compressor</a>.</li>\n  <li><strong>Supported Extensions:</strong> JPG, PNG, GIF, or BMP.</li>\n</ul>\n\n<h3>How Our Checker Helps Creators Optimize Workflow</h3>\n<p>Instead of manually checking file properties on your desktop or guessing dimensions, you can drag your final image into the <strong>Thumbnail Size Checker</strong>. In milliseconds, the tool extracts the image's height, width, size in bytes, and format type, showing green checkmarks for all passing items. This prevents workflow disruptions when saving files from design suites like Figma, Photoshop, or Canva. Before uploading, you can also test readability under actual feed conditions using our <a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> simulator.</p>\n\n<h3>Common Thumbnail Sizing Mistakes to Avoid</h3>\n<ol>\n  <li><strong>Saving High-Quality PNGs:</strong> PNG files are lossless and look sharp, but complex designs frequently exceed 2MB. Saving as a high-quality JPG (at 90% quality) keeps visual details clean while dropping file size by up to 70%.</li>\n  <li><strong>Flipping Dimensions (9:16):</strong> Uploading vertical screenshot crops meant for mobile screens to standard landscape video slots. This will cause massive black side borders. Always crop to a landscape 16:9 grid.</li>\n  <li><strong>Ignoring verified status constraints:</strong> Thinking that the size checker will fix a disabled custom upload button. If your channel is brand new, verify your phone number in Google Settings to unlock custom uploads.</li>\n</ol>\n\n<h3>Official Platform References</h3>\n<p>For official support guides, read <a href=\"https://support.google.com/youtube/answer/141006\" target=\"_blank\" rel=\"noopener noreferrer\">Google's Custom Thumbnail Requirements Page</a> and verify mobile app layout setups via the <a href=\"https://creatoracademy.youtube.com/\" target=\"_blank\" rel=\"noopener noreferrer\">YouTube Creator Hub</a>.</p>\n    "
};

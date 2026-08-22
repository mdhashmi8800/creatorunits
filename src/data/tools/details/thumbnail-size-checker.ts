import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-thumbnail-checker",
  "slug": "thumbnail-size-checker",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "YouTube Thumbnail Size Checker — Validate 1280x720 & 2MB Rules",
  "shortDesc": "Validate your thumbnail file dimensions, 16:9 aspect ratio, file size (< 2MB), and container formats against official YouTube specifications.",
  "metaDesc": "Free YouTube thumbnail size checker. Verify your video cover image meets YouTube's 1280x720 resolution, 16:9 ratio, 2MB size limit, and supported formats. 100% private.",
  "instructions": [
    "Upload or drag & drop your candidate thumbnail image file into the dropzone.",
    "The validator instantly inspects pixel width, height, aspect ratio, byte size, and MIME format.",
    "Review the automated validation scorecard (Green Pass / Red Fail indicators).",
    "If your file fails the 2MB size check, click the direct link to compress it with our Image Compressor."
  ],
  "features": [
    "Instant automated validation of all 4 official YouTube thumbnail constraints.",
    "Calculates exact aspect ratio decimals (verifies 1.777 / 16:9 compliance).",
    "Precise file size gauge flagging uploads that exceed YouTube's strict 2,000,000-byte cap.",
    "Checks for supported container codecs (JPG, PNG, WebP, GIF).",
    "100% Client-Side: files are read locally with zero server uploads."
  ],
  "componentName": "ThumbnailSizeChecker",
  "faqs": [
    {
      "question": "What are the exact official YouTube thumbnail specifications?",
      "answer": "YouTube's official upload guidelines mandate: (1) Resolution: 1280 x 720 pixels (minimum width: 640 pixels); (2) Aspect Ratio: 16:9 widescreen (1.777:1); (3) Maximum File Size: 2 MB (2,097,152 bytes); (4) Image Formats: JPG, PNG, GIF (non-animated), or WebP."
    },
    {
      "question": "What happens if my thumbnail exceeds YouTube's 2 MB limit?",
      "answer": "YouTube Studio will immediately reject the upload with the error 'File is larger than 2MB'. If your high-resolution PNG is too heavy, use our Image Compressor to reduce the file size to ~300 KB without losing visible sharpness."
    },
    {
      "question": "Can I use 1920x1080 Full HD images as a YouTube thumbnail?",
      "answer": "Yes! 1920x1080 uses the exact same 16:9 aspect ratio as 1280x720 and will scale down cleanly on all devices. Just make sure the final exported file is under the 2MB threshold."
    },
    {
      "question": "Why does YouTube reject iPhone photos (HEIC format)?",
      "answer": "Apple devices capture photos in HEIC / HEIF format by default, which YouTube Studio does not support. Convert your HEIC photo to JPG or PNG before uploading."
    },
    {
      "question": "Are my images uploaded to your servers when I run the size check?",
      "answer": "No. All checks are executed locally inside your web browser using HTML5 File API and Canvas headers. Your pre-release graphics remain strictly private on your computer."
    }
  ],
  "seoTitle": "Free YouTube Thumbnail Size Checker — Validate Cover Rules",
  "seoHeading": "Check Your Video Thumbnail Against Official YouTube Limits",
  "seoIntro": "Don't let upload rejections delay your video launch. Our free online YouTube Thumbnail Size Checker instantly inspects your image file to verify it meets YouTube's 1280×720 resolution, 16:9 aspect ratio, and 2MB file size limits.",
  "seoBody": "\n<h3>Official YouTube Thumbnail Specifications Checklist</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Specification Metric</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Official Requirement</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Why It Matters</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Ideal Resolution</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1280 &times; 720 px</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Ensures crisp display on 4K TVs and high-DPI desktop screens without blur.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Aspect Ratio</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16:9 (1.777:1)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Prevents black bars (pillarboxing) or awkward auto-cropping in video feeds.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Maximum File Size</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">2 MB (2,000 KB)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">YouTube Studio hard ceiling — uploads exceeding 2 MB are rejected immediately.</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Approved Formats</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">JPG, PNG, WebP, GIF</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Guarantees fast video CDN delivery across mobile and desktop apps.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Related Free Creator Utilities</h3>\n<ul>\n  <li><a href=\"/tools/image/image-compressor\">Image Compressor</a> — Shrink heavy thumbnails to under 2 MB.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Preview your thumbnail on simulated desktop and mobile feeds.</li>\n  <li><a href=\"/tools/image/image-resizer\">Image Resizer</a> — Scale non-standard graphics to 1280x720 px.</li>\n</ul>\n"
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-yt-preview",
  "slug": "youtube-thumbnail-preview",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "YouTube Thumbnail Previewer — Test CTR on Real Feeds",
  "shortDesc": "Preview your video thumbnail and title side-by-side inside simulated YouTube desktop, mobile feed, search, and sidebar layouts.",
  "metaDesc": "Free YouTube thumbnail preview tool. Test how your thumbnail and title look on desktop, mobile feeds, dark mode, and search results before publishing. Maximize CTR for free.",
  "instructions": [
    "Upload your draft thumbnail image (1280×720 recommended) or enter an existing YouTube video URL.",
    "Type in your proposed video title and channel name.",
    "Inspect the live rendering across Desktop Grid, Mobile Feed, Search Results, and Sidebar Recommendations.",
    "Toggle Dark/Light mode and Grayscale contrast check to ensure visual clarity at tiny mobile sizes.",
    "Verify that your critical text isn't blocked by the bottom-right timestamp badge (duration overlay)."
  ],
  "features": [
    "Accurate mockups of YouTube Desktop Home, Mobile Feed, Search Results, and Up Next Sidebar.",
    "Simulates the YouTube bottom-right video duration overlay badge.",
    "Grayscale contrast test mode to verify text readability and visual hierarchy.",
    "Dark Mode and Light Mode theme toggle matching official YouTube apps.",
    "100% private: all images and titles are processed locally in your browser."
  ],
  "componentName": "YoutubeThumbnailPreview",
  "faqs": [
    {
      "question": "Why is testing thumbnails on simulated feeds essential before uploading?",
      "answer": "Most creators design thumbnails in full screen inside Photoshop or Canva at 1080p. However, over 70% of YouTube views originate on mobile devices where thumbnails are displayed at less than 300 pixels wide. Testing on simulated mobile and sidebar feeds ensures your focal subjects stand out and your typography remains legible at small scales."
    },
    {
      "question": "What is the YouTube duration badge rule?",
      "answer": "YouTube overlays a black timestamp badge (e.g. '12:45') in the lower right-hand corner of every thumbnail. If you place important text, facial expressions, or key graphic elements in the bottom right corner, the timestamp will obscure them. Always keep your bottom right quadrant clear."
    },
    {
      "question": "What are YouTube's official thumbnail specifications?",
      "answer": "Official specs: (1) Resolution: 1280 x 720 pixels (minimum 640px wide); (2) Aspect Ratio: 16:9 widescreen; (3) File Size: Under 2 MB (use our Image Compressor if your PNG is too large); (4) Formats: JPG, PNG, or WebP."
    },
    {
      "question": "How does the Grayscale contrast check work?",
      "answer": "Toggling Grayscale removes color distractors and exposes the true luminous values of your design. If your title text disappears into the background in black and white, it lacks luminance contrast. High-converting thumbnails maintain strong tonal contrast regardless of color saturation."
    },
    {
      "question": "Are my draft thumbnails and titles uploaded to any database?",
      "answer": "No. All preview rendering happens client-side in your web browser. Your pre-launch video assets and unpublished ideas remain strictly private on your device."
    }
  ],
  "seoTitle": "Free YouTube Thumbnail Previewer — Test Video CTR Online",
  "seoHeading": "Test Your Video Thumbnail on Simulated YouTube Feeds",
  "seoIntro": "Never publish a video without previewing your cover design first. Our free YouTube Thumbnail Previewer lets you test draft thumbnails and titles on simulated desktop, mobile, search, and sidebar feeds to maximize your video's Click-Through Rate (CTR).",
  "seoBody": "\n<h3>How Thumbnail Design Dictates YouTube Algorithm Success</h3>\n<p>When the YouTube algorithm serves your video as an impression, you have less than 1.5 seconds to win the click before the user scrolls past. If your <strong>Click-Through Rate (CTR)</strong> is high, YouTube pushes your video to broader audiences. If your CTR is low, distribution stalls.</p>\n<p>By using our <strong>YouTube Thumbnail Previewer</strong>, you can spot critical design flaws (unreadable fonts, cluttered graphics, low contrast) before publishing.</p>\n\n<h3>The 4 Key YouTube Viewport Environments</h3>\n<ul>\n  <li><strong>Mobile Home Feed:</strong> The highest-volume display surface — requires bold focal points and large fonts (3&ndash;5 words maximum).</li>\n  <li><strong>Desktop Search Results:</strong> Competes directly with 4&ndash;6 other thumbnails vertically — requires distinct color palettes to stand out.</li>\n  <li><strong>Sidebar &lsquo;Up Next&rsquo; Recommendations:</strong> Scaled down to just 168&times;94 pixels — tests the extreme limits of your thumbnail's visual hierarchy.</li>\n  <li><strong>Dark Mode vs. Light Mode:</strong> Over 60% of YouTube users browse in Dark Mode — ensure your border lines and color grading look stellar on pure black backgrounds.</li>\n</ul>\n\n<h3>Explore More Free YouTube Creator Tools</h3>\n<ul>\n  <li><a href=\"/tools/creator/thumbnail-downloader\">YouTube Thumbnail Downloader</a> — Download high-res 1080p thumbnails from any public URL.</li>\n  <li><a href=\"/tools/creator/youtube-tag-extractor\">YouTube Tag Extractor</a> — Scrape competitor video SEO tags.</li>\n  <li><a href=\"/tools/image/image-compressor\">Image Compressor</a> — Squeeze your thumbnail to under YouTube's strict 2 MB limit.</li>\n</ul>\n"
};

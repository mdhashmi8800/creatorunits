import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-metadata-helper",
  "slug": "video-metadata-helper",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "Video Metadata Helper",
  "shortDesc": "Organize and optimize your video title, description, and tags with real-time character counters.",
  "metaDesc": "Format and draft your video metadata. Keep tracks of character limits (title, descriptions) and use formatting checklists.",
  "instructions": [
    "Type your video title (checked against the 100 character limit).",
    "Draft your video description, checking formatting items (links, chapters).",
    "Paste or type tags, keeping track of the 500-character cap.",
    "Copy all elements or save local text drafts."
  ],
  "features": [
    "Limit warning indicator colors.",
    "Video metadata layout checklist.",
    "Easy copy functions for tags, descriptions, titles."
  ],
  "componentName": "VideoMetadataHelper",
  "faqs": [
    {
      "question": "What is a video metadata helper?",
      "answer": "A video metadata helper is a specialized text drafting tool built for YouTube creators. It features real-time character and word counters customized for YouTube's specific character limits: 100 characters for video titles, 5000 characters for descriptions, and 500 characters for tag blocks. It also provides interactive layout checklists (e.g. tracking links, timestamp chapters, social handles) to ensure your uploads are fully optimized before publishing."
    },
    {
      "question": "Why is optimizing video metadata important?",
      "answer": "Optimizing metadata (titles, descriptions, tags, and chapters) provides the YouTube algorithm and Google search engine with direct textual context about your video. Clean metadata improves your search relevance, helps your video rank on Google Video listings, and drives higher initial CTR. It also provides viewers with structured navigation, enhancing watch times and engagement rates."
    },
    {
      "question": "What is the character limit for YouTube video titles?",
      "answer": "The maximum character limit for YouTube titles is 100 characters. However, for optimal search display and conversion, we recommend keeping titles between 50 and 70 characters. Titles longer than 70 characters are truncated (cut off with an ellipsis '...') on search feeds and homepage grids, hiding important hook words from potential viewers."
    },
    {
      "question": "How do I format video chapters in descriptions?",
      "answer": "To format video chapters (timestamps) so that YouTube automatically renders them as segments on the player bar, you must follow specific syntax rules: Start with a timestamp at `00:00` (e.g. `00:00 - Introduction`), write each timestamp on a new line, list them in chronological order, and include at least three chapters, each being at least 10 seconds long."
    },
    {
      "question": "What are the character limits for YouTube tags?",
      "answer": "YouTube allows you to write up to 500 characters in the video tags section. Adding too many tags or exceeding this limit will prevent you from saving your metadata updates in YouTube Studio. Our helper displays a character count warning as you type, helping you optimize tag lists without getting blocked. Extract tags from ranking uploads using our YouTube Tag Extractor tool."
    },
    {
      "question": "Should I write a long video description?",
      "answer": "Yes, writing a detailed description is highly beneficial for SEO. The first 150 to 200 characters act as the snippet shown in search results, so place your primary keywords and hook here. Use the remaining space to explain the video's details, write lists of resources, paste timestamps, and include call-to-action links to your website and social profiles."
    },
    {
      "question": "Is my drafted metadata secure on this site?",
      "answer": "Yes, our metadata helper is completely secure. All drafting, character counting, and local saving take place within your browser's local sandbox memory. We do not store or transmit your titles, descriptions, or tags to external servers, protecting your pre-launch strategies and confidential business documents."
    }
  ],
  "seoTitle": "YouTube Video Metadata Helper - Title and Description Builder",
  "seoHeading": "Draft and Optimize Your Video Metadata Offline",
  "seoIntro": "Want to boost your video SEO and speed up your upload times? Our Free online Video Metadata Helper provides a structured workspace with real-time character counters and interactive checklists. Draft titles, descriptions, chapters, and tag blocks that satisfy search engine rules.",
  "seoBody": "\n<h3>The Importance of Structured Metadata for Video SEO</h3>\n<p>On YouTube, search rankings and homepage recommendations are driven by algorithm calculations. The algorithm reads your video's textual metadata—titles, description text, and tags—to determine who should see your video. Structured metadata acts as search engine optimization (SEO) for video content. Without clear descriptions, timestamp chapters, and keywords, search engine spiders struggle to index your video properly, causing you to lose potential search traffic. If you want to check standard limits, use our related <a href=\"/tools/social/character-counter\">Social Character Counter</a>.</p>\n\n<h3>Guidelines for Writing High-CTR Titles and Descriptions</h3>\n<p>To maximize search traffic and viewer clicks, implement these metadata strategies:</p>\n<ol>\n  <li><strong>Keep Titles Under 70 Characters:</strong> While the absolute limit is 100 characters, search engines and mobile grids clip text after 70. Put your primary keywords at the very beginning.</li>\n  <li><strong>Write a Strong 150-Character Snippet:</strong> The very first lines of your description are shown in search listings. Use this space to write a compelling hook containing your target search term.</li>\n  <li><strong>Format Automatic Chapters:</strong> Group your video into logical sections and list chronological timestamps (starting with <code>00:00</code>) in the description. This helps users navigate and enables Google to show your video as 'Key Moments' in web search results.</li>\n  <li><strong>Include Link Disclosures:</strong> If you are promoting products or using affiliate links, write clear FTC disclosures in your description layout.</li>\n</ol>\n\n<h3>Key Features of Our Metadata Workspace</h3>\n<ul>\n  <li><strong>Real-time Count Benchmarks:</strong> Track character levels for titles, descriptions, and tags side-by-side with color indicators (green for optimal, red for over-limit warnings).</li>\n  <li><strong>Interactive Layout Checklist:</strong> A task list reminding you to add social links, website links, timestamp chapters, keyword variations, and FTC disclosures before copy-pasting to YouTube Studio.</li>\n  <li><strong>Local Security:</strong> Operates entirely client-side. We never read or store your content, keeping your launch campaigns and descriptions private. Check competitor tag setups using our <a href=\"/tools/creator/youtube-tag-extractor\">YouTube Tag Extractor</a>.</li>\n</ul>\n\n<h3>Common Metadata Formatting Mistakes</h3>\n<ul>\n  <li><strong>Misaligned Tag Character Caps:</strong> Piling on keywords until the field breaks. Keep keywords focused and under the 500-character cap.</li>\n  <li><strong>Forgetting the 00:00 Timestamp:</strong> If you do not list a <code>00:00</code> start time, YouTube will fail to render video chapters on the player bar.</li>\n  <li><strong>Ignoring Video Contrast:</strong> Creating perfect descriptions but leaving visual thumbnails un-optimized. Validate cover sizes with our <a href=\"/tools/creator/thumbnail-size-checker\">Thumbnail Size Checker</a> and preview feeds in our <a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a>.</li>\n</ul>\n\n<h3>Official Specifications & Rules</h3>\n<p>To read official guides, refer to <a href=\"https://support.google.com/youtube/answer/95280\" target=\"_blank\" rel=\"noopener noreferrer\">Google Support on Video Chapters</a> and check guidelines at <a href=\"https://support.google.com/youtube/answer/146402\" target=\"_blank\" rel=\"noopener noreferrer\">Google YouTube Metadata Requirements</a>.</p>\n    "
};

import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-yt-tags",
  "slug": "youtube-tag-extractor",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "YouTube Tag Extractor — Find Competitor Video SEO Tags",
  "shortDesc": "Extract hidden SEO tags and keyword metadata from any public YouTube video to optimize your search rankings and Suggested Video views.",
  "metaDesc": "Free YouTube tag extractor. Extract hidden keywords and SEO tags from any YouTube video URL. Analyze competitor keywords and boost your video ranking for free.",
  "instructions": [
    "Paste any public YouTube video link or Short URL into the search box.",
    "Click 'Extract Tags' to scrape the public HTML metadata.",
    "View the extracted tags displayed as individual chips or a copyable comma-separated list.",
    "Click 'Copy All' to paste the optimized keyword package directly into YouTube Studio's 500-character tag box."
  ],
  "features": [
    "Scrapes official HTML meta keywords and video topic tags in milliseconds.",
    "One-click copy to clipboard formatted for YouTube Studio's 500-character tag input.",
    "Character count tracker to ensure you stay within YouTube's 500-character allowance.",
    "Works with standard YouTube URLs, short youtu.be links, and YouTube Shorts.",
    "100% free with no browser extensions, API keys, or account logins required."
  ],
  "componentName": "YoutubeTagExtractor",
  "faqs": [
    {
      "question": "What is a YouTube tag extractor?",
      "answer": "A YouTube tag extractor is an SEO research tool that uncovers the hidden metadata tags embedded inside public YouTube videos. While YouTube no longer displays tags openly on video watch pages, they remain present in the page HTML source code. Our tool extracts these tags instantly for competitive SEO analysis and topic research."
    },
    {
      "question": "Do video tags still matter for YouTube SEO and recommendations?",
      "answer": "Yes. While titles, thumbnails, and watch time are the primary ranking factors, YouTube's algorithm explicitly uses tags as supplementary contextual signals. Tags are especially critical for clarifying ambiguous topics, capturing common misspellings (e.g. 'premiere pro' vs 'premier pro'), and helping YouTube group your video with similar uploads in the 'Suggested Videos' algorithm."
    },
    {
      "question": "How many tags should I add to my YouTube videos?",
      "answer": "YouTube allows up to 500 characters in the tag field. We recommend using 8 to 15 highly focused tags (between 250 and 400 characters total). Structure them using the 'Pyramid Method': 2–3 broad category tags (e.g., 'video editing'), 4–6 specific topic tags (e.g., 'Premiere Pro color grading tutorial'), and 1–2 branded channel tags."
    },
    {
      "question": "Is it allowed to use competitor tags on my own videos?",
      "answer": "Yes! Analyzing competitor tags is a standard industry practice. Using similar contextual tags signals to YouTube that your video belongs in the same topic cluster, increasing the likelihood that your video appears as a 'Suggested Video' next to popular uploads. Avoid copying personal creator names or trademarks you do not own."
    },
    {
      "question": "What is the difference between YouTube hashtags and video tags?",
      "answer": "YouTube video tags are hidden metadata indexed by the algorithm to classify content. Hashtags (e.g. #VideoEditing) are public clickable links displayed in your video title and description that allow viewers to browse all videos sharing that specific hashtag."
    },
    {
      "question": "Can I extract tags from private or unlisted YouTube videos?",
      "answer": "No. Only public YouTube videos have accessible metadata. Private and unlisted videos cannot be parsed by external scrapers."
    },
    {
      "question": "How do I add extracted tags into YouTube Studio?",
      "answer": "In YouTube Studio, go to Content, select your video, scroll down to the 'Show More' section, find the 'Tags' box, and paste the comma-separated keywords copied from this tool. Ensure total character count is under 500."
    }
  ],
  "seoTitle": "Free YouTube Tag Extractor — Find Competitor Video Tags Online",
  "seoHeading": "Extract SEO Keywords & Hidden Tags from Any YouTube Video",
  "seoIntro": "Want to rank higher in YouTube search and get featured in the 'Up Next' recommendation sidebar? Our free YouTube Tag Extractor lets you inspect the exact SEO tags and keyword strategies top creators use on their highest-performing uploads.",
  "seoBody": "\n<h3>How YouTube Uses Tags for Video Ranking &amp; Suggested Feeds</h3>\n<p>When you publish a video, YouTube's neural recommendation network evaluates your title, description, transcript, and <strong>video tags</strong> to understand what your content is about. Video tags serve as vital disambiguation signals — especially when your title is catchy or conceptual rather than strictly literal.</p>\n<p>By using our <strong>YouTube Tag Extractor</strong> to analyze ranking videos in your niche, you can identify high-volume search phrases and topic clusters that you might have otherwise overlooked.</p>\n\n<h3>The 3-Tier Tag Strategy for Maximum YouTube Reach</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Tag Tier</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Purpose</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Example Keywords</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Recommended Count</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Tier 1: Exact Target Keyword</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Matches main search query and title topic</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>how to edit youtube videos</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">2 &ndash; 3 tags</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Tier 2: Broad Topic Category</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Establishes niche and suggested video clusters</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>video editing tutorial</code>, <code>premiere pro</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">4 &ndash; 6 tags</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Tier 3: Variations &amp; Typos</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Captures alternate phrasing and misspellings</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>editing software free</code>, <code>video cutting</code></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">3 &ndash; 5 tags</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Common Mistakes When Tagging YouTube Videos</h3>\n<ul>\n  <li><strong>Keyword Stuffing Irrelevant Tags:</strong> Adding trending names (e.g. celebrities or unrelated video games) violates YouTube spam policies and damages viewer retention.</li>\n  <li><strong>Exceeding 500 Characters:</strong> YouTube Studio will prevent saving if your total character count exceeds 500. Aim for 300–400 characters of high-relevance tags.</li>\n  <li><strong>Single Word Overload:</strong> Single generic words like &quot;video&quot; or &quot;fun&quot; provide zero algorithmic signal. Use 2-to-4 word long-tail phrases.</li>\n</ul>\n\n<h3>Explore More Free Creator Tools</h3>\n<ul>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Previewer</a> — Test your thumbnail CTR on simulated desktop and mobile feeds.</li>\n  <li><a href=\"/tools/creator/thumbnail-downloader\">YouTube Thumbnail Downloader</a> — Download high-resolution 1080p and 720p thumbnails instantly.</li>\n  <li><a href=\"/tools/creator/video-metadata-helper\">YouTube Video Metadata Helper</a> — Format titles, descriptions, and character counters in one dashboard.</li>\n  <li><a href=\"/blog/youtube-tag-extractor-strategy\">YouTube Tag Strategy Guide</a> — In-depth guide on using competitor tags for channel growth.</li>\n</ul>\n"
};

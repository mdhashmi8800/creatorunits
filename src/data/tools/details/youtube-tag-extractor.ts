import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "creator-yt-tags",
  "slug": "youtube-tag-extractor",
  "category": "creator",
  "categoryName": "Creator Tools",
  "title": "YouTube Tag Extractor",
  "shortDesc": "Extract search tags and keywords from any public YouTube video for SEO research.",
  "metaDesc": "Extract video tags and keywords from public YouTube videos. Boost video SEO by analyzing competition keywords.",
  "instructions": [
    "Paste the YouTube video link in the text input.",
    "Click 'Extract Tags'.",
    "Copy tags as a list, comma-separated string, or individual chips."
  ],
  "features": [
    "Extracts HTML meta keywords from public YouTube videos.",
    "Easy copy buttons for tags.",
    "Privacy-focused browser scraper API."
  ],
  "componentName": "YoutubeTagExtractor",
  "faqs": [
    {
      "question": "What is a YouTube tag extractor?",
      "answer": "A YouTube tag extractor is an SEO research tool that extracts the hidden metadata keywords (tags) embedded in public YouTube videos. Although YouTube hides these tags from standard view on watch pages, they are written in the page's HTML source code. Our tool reads this public source code and pulls the tags out, presenting them in clean, copy-pasteable lists for keyword analysis."
    },
    {
      "question": "Why are video tags important for YouTube SEO?",
      "answer": "Tags help YouTube's search and recommendation algorithms understand the context, content, and category of your video. While titles and descriptions carry more weight, tags act as secondary signals. They are particularly useful for handling common misspellings or search variations related to your content, helping your video rank for related terms."
    },
    {
      "question": "Does YouTube hide video tags from the page?",
      "answer": "Yes, YouTube hides tags from the user interface because they are meant for algorithmic indexing rather than manual viewing. However, they remain publicly accessible in the webpage source code inside the `<meta name=\"keywords\">` tags. Our extractor parses this HTML segment and retrieves them without requiring you to view the raw page source."
    },
    {
      "question": "How many tags should I add to my video?",
      "answer": "YouTube allows you to write up to 500 characters in the tag input field. We recommend adding between 8 to 15 highly relevant tags. Focus on a mix of broad category tags (e.g. `web development`), specific topic tags (e.g. `Next.js SEO tutorial`), and brand terms. Overstuffing irrelevant tags can confuse the recommendation algorithm."
    },
    {
      "question": "Can I extract tags from private or unlisted videos?",
      "answer": "No, you can only extract tags from public videos. Unlisted and private videos are protected, meaning their webpage source codes are secure and cannot be accessed by external scraping scripts. Always ensure the video is public before attempting to extract tags."
    },
    {
      "question": "Is it legal to use competitor tags?",
      "answer": "Yes, studying and using similar tags to competitor videos is completely legal and a standard SEO optimization practice. It signals to the YouTube algorithm that your video covers similar subjects, which can help your video appear in the 'Up Next' recommendation sidebar. However, do not copy trademarked names or personal brand tags that do not apply to your content."
    },
    {
      "question": "Is this tag extractor free to use?",
      "answer": "Yes, our tag extraction utility is 100% free. There are no registration requirements, premium paywalls, or limits on the number of video links you can parse. You can run competitor research as much as you like directly from your browser."
    }
  ],
  "seoTitle": "YouTube Tag Extractor - Extract SEO Tags from Videos",
  "seoHeading": "Extract and Analyze Video SEO Keywords",
  "seoIntro": "Want to rank higher in YouTube search results? Competing for views is all about keyword optimization. Our Free online YouTube Tag Extractor extracts hidden tags from ranking videos, letting you analyze competitor SEO strategies in seconds.",
  "seoBody": "\n<h3>The Role of Tags in Modern YouTube SEO</h3>\n<p>While YouTube's ranking algorithms rely heavily on video titles, descriptions, and user engagement metrics, tags play an important supporting role. Google uses tags to resolve search ambiguities—for example, distinguishing between 'Apple' the tech company and 'apple' the fruit. Tags are also critical for capturing common spelling errors (e.g. 'yutub' instead of 'YouTube') and aligning your content with related categories, helping your video appear in search feeds and recommendations.</p>\n\n<h3>How to Build a High-Performing Tag List</h3>\n<p>When preparing metadata for your next upload, structure your tags systematically to provide clear context:</p>\n<ol>\n  <li><strong>Target Keyword (Primary Tag):</strong> The exact phrase you want to rank for. Place this first in your list.</li>\n  <li><strong>Secondary/Specific Keywords:</strong> Synonyms, specific sub-topics, and long-tail search phrases. Use this tool to see what keywords high-ranking videos use.</li>\n  <li><strong>Broad Category Tags:</strong> Wider niche descriptors (e.g. `marketing`, `design`, `tutorial`) to help group your content.</li>\n</ol>\n<p>Keep the list focused. Draft and structure your final tag blocks, titles, and video descriptions using our <a href=\"/tools/creator/video-metadata-helper\">Video Metadata Helper</a>.</p>\n\n<h3>Key Benefits of Our Tag Scraper</h3>\n<ul>\n  <li><strong>Instant HTML Parsing:</strong> Paste a link and extract tags in milliseconds. No need to open developer tools or manually search code lines.</li>\n  <li><strong>Multiple Copy Formats:</strong> Copy keywords as comma-separated text blocks (perfect for pasting directly into YouTube Studio) or copy individual keyword chips.</li>\n  <li><strong>Secure and Private:</strong> Operates clean browser parsing APIs without storing your queries or search history, ensuring total research privacy.</li>\n</ul>\n\n<h3>Common Keyword Optimization Mistakes</h3>\n<ul>\n  <li><strong>Tag Overstuffing:</strong> Adding 50+ tags that are barely related to your video. This dilutes focus and can confuse search crawlers.</li>\n  <li><strong>Misleading Keywords:</strong> Using names of famous creators or unrelated trending terms to steal views. This violates YouTube's community guidelines and can result in account warnings.</li>\n  <li><strong>Neglecting Widescreen Assets:</strong> Running tags optimization but leaving a pixelated thumbnail cover. Ensure your graphic size fits specs using our <a href=\"/tools/creator/thumbnail-size-checker\">Thumbnail Size Checker</a>, and test it in feeds using our <a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a>.</li>\n</ul>\n\n<h3>Official Search & SEO References</h3>\n<p>For official advice, read <a href=\"https://support.google.com/youtube/answer/146402\" target=\"_blank\" rel=\"noopener noreferrer\">Google's Support Page on Video Tags</a> and learn about SEO best practices at the <a href=\"https://support.google.com/youtube/answer/2801973\" target=\"_blank\" rel=\"noopener noreferrer\">YouTube Metadata Policy Guide</a>.</p>\n    "
};

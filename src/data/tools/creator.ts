import { ToolItem } from "../types";

export const creatorTools: ToolItem[] = [
  {
    id: "creator-yt-preview",
    slug: "youtube-thumbnail-preview",
    category: "creator",
    categoryName: "Creator Tools",
    title: "YouTube Thumbnail Preview",
    shortDesc: "Preview your video thumbnails inside simulated YouTube search, homepage, and sidebar widgets.",
    metaDesc: "Test how your thumbnails look before publishing. Preview on desktop homepage, mobile feed, search results, and sidebar side-by-side.",
    instructions: [
      "Upload your thumbnail image or enter a YouTube video URL to load its thumbnail.",
      "Enter a test video title to overlay on the widget.",
      "View how your thumbnail and title combinations appear across desktop, mobile, search, and sidebar feeds.",
      "Check contrast and readability at small sizes."
    ],
    features: [
      "Simulate Desktop Feed: Homepage grid mockup.",
      "Simulate Mobile Feed: Responsive card width simulator.",
      "Simulate Search Listing: Left thumbnail with right description text layout.",
      "Readability check: Toggle black & white mode to inspect thumbnail tone values."
    ],
    componentName: "YoutubeThumbnailPreview",
    faqs: [
      {
        question: "What is a YouTube thumbnail preview tool?",
        answer: "A YouTube thumbnail preview tool is a simulator that allows creators to upload their cover graphics and see how they appear within various YouTube page mockups. You can view your thumbnail inside simulated desktop homepages, mobile search feeds, and desktop sidebars to verify how it competes visually against surrounding content layouts."
      },
      {
        question: "Why should I preview thumbnails before publishing?",
        answer: "A thumbnail might look great at full screen, but lose detail or readability when scaled down on a mobile screen. Previewing lets you catch unreadable text, low-contrast design issues, or cluttered compositions before you publish, helping you make adjustments to maximize your video's potential click-through rate. These small fixes often make the difference between a viewer clicking or scrolling past."
      },
      {
        question: "How will my thumbnail appear on mobile devices?",
        answer: "On mobile devices, thumbnails are scaled down significantly, and titles are often truncated to just two lines. By testing your thumbnail in our mobile feed simulator, you can verify if your typography remains legible on small screens and check if vital graphic elements are cut off by overlay badges. This ensures your design communicates effectively even at the smallest display size."
      },
      {
        question: "Can thumbnail previews improve click-through rate?",
        answer: "Yes, previewing helps you optimize visual hierarchy. You can compare your draft thumbnail side-by-side with general YouTube search layouts, helping you design cover art that is more eye-catching. A high-contrast, clear thumbnail directly drives clicks, which signals search engines to recommend your video to a broader audience. Better visuals lead to better rankings over time."
      },
      {
        question: "What thumbnail size works best for YouTube?",
        answer: "YouTube recommends a resolution of 1280 by 720 pixels, with a minimum width of 640 pixels. It must be saved in JPG, GIF, or PNG format and keep under the 2MB file size limit. Standard widescreen videos should always use a 16:9 aspect ratio to avoid black bars. Staying within these specs prevents upload errors and keeps your cover looking crisp."
      }
    ],
    seoTitle: "YouTube Thumbnail Preview - Test Video Layouts Online",
    seoHeading: "Test Your Thumbnails on YouTube Home and Search Feeds",
    seoIntro: "Click-through rate (CTR) is the most critical factor for YouTube recommendations. Preview your thumbnails and titles next to simulated listings to ensure your content stands out.",
    seoBody: `
<h3>Optimizing Thumbnail CTR</h3>
<p>YouTube displays video previews in different dimensions depending on user device: search lists, desktop grids, mobile feeds, and watch next columns. Small text or busy visual components might fail to communicate in miniature forms. Test title legibility under these layouts directly.</p>
    `
  },
  {
    id: "creator-thumbnail-downloader",
    slug: "thumbnail-downloader",
    category: "creator",
    categoryName: "Creator Tools",
    title: "YouTube Thumbnail Downloader",
    shortDesc: "Retrieve and download all available resolutions of a YouTube thumbnail from its video link.",
    metaDesc: "Download high resolution YouTube video thumbnails. Extract Full HD (1080p), HD (720p), Medium, and Default resolutions instantly.",
    instructions: [
      "Copy and paste the YouTube video link (or video ID).",
      "Click 'Extract Thumbnails'.",
      "Preview the resolutions: Max Resolution, High, Medium, Default.",
      "Click the download button next to your preferred size."
    ],
    features: [
      "Support all YouTube URL variations (short URLs, watch links, embed formats).",
      "Extract Max Resolution (1280x720) when available.",
      "One-click browser downloads."
    ],
    componentName: "ThumbnailDownloader",
    faqs: [
      {
        question: "What is a thumbnail downloader?",
        answer: "A YouTube thumbnail downloader is a simple utility that extracts the cover image from any public YouTube video link. By parsing the video ID from the URL, it queries YouTube's servers to retrieve the direct file paths, allowing you to preview and download different image resolutions instantly. It's a quick way to grab high-quality covers without taking manual screenshots."
      },
      {
        question: "Can I download public video thumbnails?",
        answer: "Yes, you can retrieve the thumbnail of any public video by pasting its watch link or video ID into our search box. However, private, unlisted, or geo-restricted videos are protected, meaning their thumbnails cannot be fetched. Ensure the video is fully public before running the extraction tool. If the extraction fails, double-check that the video hasn't been set to private."
      },
      {
        question: "Why do creators analyze thumbnails?",
        answer: "Creators analyze competitor thumbnails to understand current design trends in their niche. They study color palettes, text placement, graphic styling, and facial expressions that successfully drive viewer engagement. Examining these patterns helps creators design thumbnails that stand out on search result pages and home feeds. This competitive research is essential for staying relevant in crowded niches."
      },
      {
        question: "How can thumbnails inspire new designs?",
        answer: "By downloading and reviewing high-performing thumbnails, you can gather inspiration for composition, typography, and contrast. You can import these reference images into your editor to study their color values and layout structures, helping you establish a unique visual brand identity for your own content. Building a personal reference library accelerates your creative process significantly."
      },
      {
        question: "Are downloaded thumbnails editable?",
        answer: "Yes, once downloaded, the thumbnail is saved on your device as a standard image file (usually JPG), which you can edit in any software like Photoshop, Figma, or Canva. However, please remember to use downloaded thumbnails strictly for reference, education, or review to avoid copyright issues. Always create original artwork rather than directly copying someone else's design."
      }
    ],
    seoTitle: "YouTube Thumbnail Downloader - Get High-Res Video Covers",
    seoHeading: "Download HD YouTube Thumbnails Instantly",
    seoIntro: "Need to grab a thumbnail from a video for design research or cover slides? Insert any video link to retrieve high-definition formats.",
    seoBody: `
<h3>How YouTube Thumbnail Extraction Works</h3>
<p>YouTube automatically stores thumbnail images at static endpoints on its CDN ('img.youtube.com'). By parsing the video ID from the URL, this tool queries these endpoints directly, rendering them for easy local saving.</p>
    `
  },
  {
    id: "creator-thumbnail-checker",
    slug: "thumbnail-size-checker",
    category: "creator",
    categoryName: "Creator Tools",
    title: "Thumbnail Size Checker",
    shortDesc: "Verify if your thumbnail matches YouTube's recommended resolutions, file sizes, and format rules.",
    metaDesc: "Upload your cover image to check if it matches the 1280x720 pixels, 16:9 ratio, and 2MB file size limits of YouTube.",
    instructions: [
      "Upload your cover image.",
      "The tool runs instant validations on dimensions, aspect ratio, file size, and file extensions.",
      "Review the checklist indicators (green checks for pass, red for fail).",
      "Read optimization tips if any parameters fail."
    ],
    features: [
      "Live size extraction.",
      "Calculates exact aspect ratio metrics.",
      "Validates against YouTube metadata constraints."
    ],
    componentName: "ThumbnailSizeChecker",
    faqs: [
      {
        question: "Why is thumbnail size important?",
        answer: "Thumbnail size is important because YouTube enforces strict upload rules regarding resolution, aspect ratio, and file size. If your cover image exceeds the limits, the platform's upload manager will reject the file, or compress it heavily, resulting in blurry details and a poor presentation on user feeds. Getting the size right the first time saves you from re-uploading and waiting for processing."
      },
      {
        question: "What is the recommended YouTube thumbnail size?",
        answer: "The recommended size for YouTube cover graphics is 1280 pixels wide by 720 pixels high, with a minimum width of 640 pixels. This matches the standard 16:9 widescreen aspect ratio. Keeping your image at this exact ratio ensures it displays correctly without adding unsightly black borders. Following these dimensions guarantees your thumbnail looks polished across all devices."
      },
      {
        question: "Can oversized thumbnails affect uploads?",
        answer: "Yes, uploading files that exceed YouTube's 2 megabyte limit will cause an upload error in Creator Studio. Even if the upload succeeds, the platform's automated system might compress the file aggressively, degrading text clarity. Using our checker helps you confirm compliance before saving your files. Catching oversized files early prevents frustrating upload failures."
      },
      {
        question: "How do I optimize thumbnail quality?",
        answer: "To optimize quality, design your canvas at exactly 1280x720 pixels, use high-contrast text styles, and export the file using an optimized JPG compression setting. This maintains sharp lines for text and high-fidelity colors while keeping the final file weight comfortably under the platform's 2MB file size threshold. These practices keep your thumbnails looking vibrant without sacrificing load speed."
      },
      {
        question: "What image format should I use?",
        answer: "YouTube officially supports JPG, PNG, and WebP formats for video thumbnails. JPG is the most common format due to its small file size and good color depth. PNG offers lossless quality but often generates larger file weights. Choose JPG for photographs and PNG for simple graphic design layouts. Picking the right format helps you stay under the 2MB limit without losing visual quality."
      }
    ],
    seoTitle: "YouTube Thumbnail Size Checker - Validate Cover Specifications",
    seoHeading: "Ensure Your Thumbnails Meet Platform Guidelines",
    seoIntro: "Avoid upload errors by checking if your images comply with YouTube's strict width, height, format, and file size limits.",
    seoBody: `
<h3>Why Thumbnail Formatting Matters</h3>
<p>If you upload an image over 2MB, YouTube's backend will reject it, or apply highly aggressive compression that makes your graphic blurry. Similarly, uploading an image that is not exactly 16:9 will add black bars. Check parameters here first.</p>
    `
  },
  {
    id: "creator-yt-tags",
    slug: "youtube-tag-extractor",
    category: "creator",
    categoryName: "Creator Tools",
    title: "YouTube Tag Extractor",
    shortDesc: "Extract search tags and keywords from any public YouTube video for SEO research.",
    metaDesc: "Extract video tags and keywords from public YouTube videos. Boost video SEO by analyzing competition keywords.",
    instructions: [
      "Paste the YouTube video link in the text input.",
      "Click 'Extract Tags'.",
      "Copy tags as a list, comma-separated string, or individual chips."
    ],
    features: [
      "Extracts HTML meta keywords from public YouTube videos.",
      "Easy copy buttons for tags.",
      "Privacy-focused browser scraper API."
    ],
    componentName: "YoutubeTagExtractor",
    faqs: [
      {
        question: "What is a YouTube tag extractor?",
        answer: "A YouTube tag extractor is an SEO research tool that retrieves the hidden keyword tags embedded in any public YouTube video. While these tags are not directly visible on the video page, they are stored in the page's HTML metadata source, which our extractor reads and formats. It's a fast way to reverse-engineer the optimization strategy behind any public video."
      },
      {
        question: "Why do creators analyze tags?",
        answer: "Creators analyze tags to identify the exact search terms, keyword phrases, and related topics that competitors use to optimize their uploads. This research reveals which search queries are relevant to their niche, guiding their metadata drafting and helping them discover long-tail keyword options they might have missed. This data-driven approach replaces guesswork with proven keyword choices."
      },
      {
        question: "Can tags help video discoverability?",
        answer: "Yes, tags play a role in helping YouTube understand the context of your video, especially if the target keywords are commonly misspelled. While titles and descriptions are more critical ranking factors, adding relevant tags supports search indexes and helps place your content in recommended video sidebars. Tags act as safety nets that clarify your video's topic to the algorithm."
      },
      {
        question: "How can I use extracted tags for research?",
        answer: "After extracting tags from top-performing videos in your niche, group the most relevant terms and incorporate them into your video's title, description copy, and tag field. Do not copy tags blindly; select only those that accurately represent your content to avoid misleading the search algorithm. Strategic tag selection helps you compete for relevant search terms without overstuffing metadata."
      },
      {
        question: "Are tags still relevant for YouTube SEO?",
        answer: "While YouTube's algorithms have evolved to rely heavily on video titles, description copy, and transcripts, tags remain relevant. They help clarify search intent, categorize content, and handle variations in spelling. Using tags correctly is a best practice that ensures your metadata is fully optimized. Ignoring tags entirely means leaving discoverability potential on the table."
      }
    ],
    seoTitle: "YouTube Tag Extractor - Extract SEO Tags from Videos",
    seoHeading: "Analyze competitor video tags to improve SEO",
    seoIntro: "Curious about the search tags your competitors are using to rank? Paste any YouTube video link to extract its optimization keywords instantly.",
    seoBody: `
<h3>Improving YouTube Search Optimization</h3>
<p>While YouTube states tags play a minor role in discoverability, they help resolve spelling mistakes and clarify video context. Researching the tags of top-performing videos in your niche provides keyword ideas to incorporate in your video descriptions and titles.</p>
    `
  },
  {
    id: "creator-metadata-helper",
    slug: "video-metadata-helper",
    category: "creator",
    categoryName: "Creator Tools",
    title: "Video Metadata Helper",
    shortDesc: "Organize and optimize your video title, description, and tags with real-time character counters.",
    metaDesc: "Format and draft your video metadata. Keep tracks of character limits (title, descriptions) and use formatting checklists.",
    instructions: [
      "Type your video title (checked against the 100 character limit).",
      "Draft your video description, checking formatting items (links, chapters).",
      "Paste or type tags, keeping track of the 500-character cap.",
      "Copy all elements or save local text drafts."
    ],
    features: [
      "Limit warning indicator colors.",
      "Video metadata layout checklist.",
      "Easy copy functions for tags, descriptions, titles."
    ],
    componentName: "VideoMetadataHelper",
    faqs: [
      {
        question: "What is video metadata?",
        answer: "Video metadata refers to the textual information that describes a video, including its title, description section, tags, and category. This data helps search engines index your content correctly, enabling them to match your video with user search queries and place it in recommended feeds. Strong metadata is the foundation of every successful YouTube SEO strategy."
      },
      {
        question: "Why is metadata important?",
        answer: "Metadata is important because search algorithms cannot watch or listen to video files like humans do. Instead, they scan your title, description copy, and tags to index your content. Optimizing this data increases search visibility, improves click-through rates, and helps you rank for key queries. Without strong metadata, even great videos can remain undiscovered."
      },
      {
        question: "Which metadata elements affect discoverability?",
        answer: "The video title is the most critical metadata element, as it directly impacts both search ranking and user click-through rate. The first 200 characters of your description are also highly important, followed by description keywords, video chapters, tags, and category settings. Prioritizing these elements in order helps you focus your optimization efforts where they matter most."
      },
      {
        question: "How can metadata improve organization?",
        answer: "Structuring your description with clear sections, timestamps (chapters), and social media links makes it easier for viewers to navigate your content. Clean organization improves user engagement metrics like watch time, as viewers can quickly jump to the exact sections they are interested in. Well-organized descriptions also make your channel look more professional and trustworthy."
      },
      {
        question: "Is metadata useful for creators and marketers?",
        answer: "Absolutely! Creators and digital marketers use metadata tools to write, refine, and optimize their copy before publishing. Testing title lengths and organizing tags ensures their uploads comply with platform guidelines, saving time and maximizing search performance for their promotional campaigns. Having a metadata workflow speeds up publishing and reduces costly mistakes."
      }
    ],
    seoTitle: "YouTube Video Metadata Helper - Title and Description Builder",
    seoHeading: "Draft and Optimize Video Titles and Descriptions",
    seoIntro: "Writing descriptions and title sets can be frustrating inside YouTube Studio's editor. Draft and refine your metadata here with live formatting rules.",
    seoBody: `
<h3>Structuring Video Descriptions for SEO</h3>
<p>A well-structured description boosts search indexes. Keep key links and timestamps in the top folds, followed by social links, licensing statements, and description keywords.</p>
    `
  },
  {
    id: "creator-thumbnail-idea",
    slug: "thumbnail-idea-helper",
    category: "creator",
    categoryName: "Creator Tools",
    title: "Thumbnail Idea Generator",
    shortDesc: "Get layout, contrast, text, and styling suggestions based on your video niche.",
    metaDesc: "Generate thumbnail structure and copy ideas. Choose from gaming, technology, reviews, lifestyle niches to get layout guides.",
    instructions: [
      "Select your channel's niche from the dropdown list.",
      "Select the mood or style of your video content.",
      "Read proposed design guidelines, copy setups, and contrast suggestions.",
      "Use templates to sketch your next cover graphic."
    ],
    features: [
      "Covers 8 major YouTube content niches.",
      "Visual grid styling guidelines.",
      "Generates catchy short phrase patterns."
    ],
    componentName: "ThumbnailIdeaHelper",
    faqs: [
      {
        question: "What is a thumbnail idea helper?",
        answer: "A thumbnail idea helper is a creative brainstorming tool that provides layout suggestions, copy templates, and styling guidelines based on your specific video niche. It assists creators in generating high-contrast, clickable cover designs by offering structured formulas tailored to viewer psychology. Instead of starting from a blank canvas, you get proven frameworks to build on."
      },
      {
        question: "How do good thumbnails increase engagement?",
        answer: "A good thumbnail acts as a billboard for your video. Since viewers browse feeds quickly, an eye-catching thumbnail grabs their attention and creates curiosity. Higher CTR signals the platform's algorithm that your content is engaging, which leads to increased impressions and organic reach. Thumbnails are often the single biggest factor in whether a video gets watched."
      },
      {
        question: "What makes a thumbnail attractive?",
        answer: "An attractive thumbnail features a clear focal subject, high-contrast colors that stand out, and minimal text (usually three to four words). It should convey emotion, avoid clutter, and use contrasting backgrounds to ensure all elements remain distinct and readable, even on small screens. Simple, bold designs consistently outperform busy, complicated layouts."
      },
      {
        question: "Should thumbnails include text?",
        answer: "Yes, adding short text can clarify the video's subject, but it should not simply repeat the title. Use bold, high-contrast fonts and keep the text under four words. The typography must be large enough to read easily on mobile devices without cluttering the image. Well-chosen text can dramatically increase comprehension and click-through rates."
      },
      {
        question: "How can I generate thumbnail concepts faster?",
        answer: "By using our helper, you can select your niche to view proven layout templates and text ideas. This eliminates guesswork, helping you outline high-contrast compositions, balance subject placement, and brainstorm short, punchy copy phrases in seconds to streamline your production workflow. Niche-specific guidance means you spend less time deciding and more time creating."
      }
    ],
    seoTitle: "Thumbnail Idea Helper - Generate Video Cover Formats",
    seoHeading: "Brainstorm Widescreen Cover Layouts & Copy Ideas",
    seoIntro: "Stuck on how to outline your next thumbnail? Select your niche to generate layout outlines and copy guidelines that drive clicks.",
    seoBody: `
<h3>Rules of Thumb for High-CTR Cover Designs</h3>
<p>No matter the niche, thumbnails need clean focal points. Avoid using more than 4 words, use highly contrasting colors that differ from YouTube's dark/light red themes, and show emotion.</p>
    `
  },
  {
    id: "creator-post-sizes",
    slug: "social-post-size-checker",
    category: "creator",
    categoryName: "Creator Tools",
    title: "Social Post Size Guide & Checker",
    shortDesc: "Compare and verify your graphics against visual dimensions for Instagram, YouTube, and Facebook.",
    metaDesc: "Check image dimensions against social media presets. View templates for IG stories, FB banners, YT channel art, and LinkedIn cards.",
    instructions: [
      "Upload your graphic file.",
      "Choose a platform target (Instagram, Facebook, YouTube, LinkedIn, X).",
      "Check visual overlay guides showing cropping masks.",
      "Confirm if size fits within recommendations."
    ],
    features: [
      "Up-to-date image size guides.",
      "Interactive crop line overlays.",
      "Checklist showing aspect match rates."
    ],
    componentName: "SocialPostSizeChecker",
    faqs: [
      {
        question: "Why do social platforms require different image sizes?",
        answer: "Social platforms use unique layouts, aspect ratios, and design interfaces to display content on desktop and mobile screens. A banner size that looks great on YouTube will get cropped or distorted on Instagram. Using correct dimensions ensures your graphics fit perfectly without clipping important details. Each platform's design choices reflect how its users consume content."
      },
      {
        question: "How do I check if my image size is correct?",
        answer: "Upload your graphic to our social size checker and select your target platform. The tool compares your image against official layout overlays, displaying cropping lines and aspect ratios in real time. This allows you to verify that text fits safely within visible zones. A quick check before posting saves you from reworking designs after they've been cropped awkwardly."
      },
      {
        question: "Which platforms are supported?",
        answer: "Our post size checker supports all major social media platforms, including Instagram, YouTube, Facebook, LinkedIn, TikTok, and X (formerly Twitter). You can check dimensions for profile pictures, post graphics, story layouts, landscape cards, and widescreen header banners. Having one tool for all platforms streamlines your cross-platform content workflow."
      },
      {
        question: "Can wrong dimensions affect post quality?",
        answer: "Yes, uploading images with incorrect dimensions causes social media apps to crop the edges, compress files aggressively, or add awkward black borders. This can render text unreadable and make your profiles look unprofessional. Checking sizes beforehand guarantees your layouts look crisp and complete. Properly sized images maintain their visual impact across every device type."
      },
      {
        question: "What size works best for Instagram and Facebook?",
        answer: "For standard Instagram feed posts, a square resolution of 1080x1080 pixels (1:1) or a portrait resolution of 1080x1350 pixels (4:5) works best. Facebook feeds display square images or landscape links at 1200x630 pixels. Always check dimensions to prevent stretching on mobile feeds. Matching platform-specific ratios ensures your posts look native and professional in every feed."
      }
    ],
    seoTitle: "Social Media Post Size Checker - Aspect Guides Online",
    seoHeading: "Verify Banner and Post Sizes Across Networks",
    seoIntro: "Check if your graphic assets will fit banner, header, or grid sizes for major social media platforms.",
    seoBody: `
<h3>Image Sizing Presets for Social Networks</h3>
<p>Each network uses unique layouts: YouTube banners (2560x1440), Instagram posts (1:1 square or 4:5 portrait), and Twitter cards (16:9). Check overlays to keep text away from cropping margins.</p>
    `
  }
];

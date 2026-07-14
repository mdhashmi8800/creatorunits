import { ToolItem, ToolItemLite } from "./types";
import { toolsIndex } from "./tools-index";

export { toolsIndex };

// For backwards compatibility, expose toolsIndex as tools
export const tools = toolsIndex as unknown as ToolItem[];

export interface CategoryInfo {
  slug: string;
  name: string;
  desc: string;
  seoTitle: string;
  seoDesc: string;
  seoText: string;
}

export const categories: Record<string, CategoryInfo> = {
  image: {
    slug: "image",
    name: "Image Tools",
    desc: "Compress, resize, crop, rotate, flip, and convert images instantly in your browser.",
    seoTitle: "Free Image Editing & Optimization Tools - Creators Units",
    seoDesc: "Optimize your graphics with our free browser image tools. Compress, resize, and convert JPG, PNG, WebP with zero quality losses.",
    seoText: "Images are essential for web presence, but massive file sizes slow pages down and hurt SEO. Our suite of Image Tools enables bloggers, designer portfolios, and creators to resize, crop, convert, and compress images directly in their browser. All operations are processed on-device, keeping your assets secure and private."
  },
  creator: {
    slug: "creator",
    name: "Creator Tools",
    desc: "Optimize YouTube thumbnails, check sizes, extract tags, and organize video metadata.",
    seoTitle: "YouTube Creator Tools & Optimization Utilities - Creators Units",
    seoDesc: "Boost your video CTR. Preview YouTube thumbnails, extract tag keywords, check file sizes, and organize metadata with ease.",
    seoText: "Discoverability on platforms like YouTube requires precise optimization. Creators Units helps video producers test thumbnails on simulated desktop and mobile feeds, extract SEO tags of top competitor uploads, check file constraints, and build high-converting titles and metadata packages without leaving the browser tab."
  },
  social: {
    slug: "social",
    name: "Social Media Tools",
    desc: "Generate fancy fonts, custom bios, usernames, hashtags, WhatsApp links, and Link-in-Bio pages.",
    seoTitle: "Social Media Optimization and Profile Builders - Creators Units",
    seoDesc: "Stand out on Instagram, TikTok, and Twitter. Generate custom bios, fancy Unicode text styles, WhatsApp links, and static Link-in-Bio pages.",
    seoText: "Make your profiles stand out. Use our social utilities to generate stylized text, brainstorm catchy usernames, compose optimized bios, or construct WhatsApp click-to-chat links. Plus, build a fully custom, single-file HTML Link-in-Bio landing page to direct your traffic without paying monthly subscription costs."
  },
  utility: {
    slug: "utility",
    name: "Utility Tools",
    desc: "Create QR codes, build UTM links, convert case, count words, and calculate units.",
    seoTitle: "Online Utility Tools & Formatting Calculators - Creators Units",
    seoDesc: "Daily web utilities at your fingertips. Generate secure passwords, create QR codes, build UTM links, convert case, and calculate units.",
    seoText: "Tackle standard daily office and web tasks quickly. Creators Units utility tools provide secure cryptographic password generators, URL encoders, UTM tracking link composers, text case formatters, word counter diagnostics, timezone comparisons, and basic unit calculators."
  },
  video: {
    slug: "video",
    name: "Video Tools",
    desc: "Compress video files, extract audio to MP3, grab video thumbnails, and format subtitles.",
    seoTitle: "Free Video Processing and Thumbnail Extraction Tools - Creators Units",
    seoDesc: "Extract video thumbnails, compress MP4/WebM videos, extract MP3 audio, and format subtitles on-device in your browser.",
    seoText: "Video files require precise formatting, aspect adjustments, and optimization to ensure smooth user engagement. Our Video Tools operate entirely within your local browser sandbox, enabling video editors, podcasters, and content creators to extract thumbnails, compress videos, convert to MP3, check aspect ratios, and format auto-captions with zero server latency or security risks."
  },
  pdf: {
    slug: "pdf",
    name: "PDF Tools",
    desc: "Merge, split, compress, unlock, and protect PDF files directly in your browser.",
    seoTitle: "Free PDF Utilities - Merge, Split, Protect & Convert PDFs - Creators Units",
    seoDesc: "Manage and optimize your document files. Merge PDF files, split pages, add password protections, and compress sizes locally.",
    seoText: "Manage business reports, slides, and legal drafts securely. Creators Units PDF tools operate fully client-side, allowing you to merge files, divide pages, compress sizes, encrypt PDFs with passwords, or convert images to PDFs without ever transmitting sensitive documents online."
  },
  seo: {
    slug: "seo",
    name: "SEO Tools",
    desc: "Generate meta tags, sitemaps, robots.txt, schema scripts, and analyze keyword densities.",
    seoTitle: "Free SEO Tag Generators & Site Validators - Creators Units",
    seoDesc: "Boost search engine rankings. Build sitemaps, draft robots.txt parameters, generate schema markups, and analyze keyword density.",
    seoText: "Search engine visibility requires clean code structure, rich descriptions, and search schemas. Utilize our SEO tag and schema scripts generators, XML sitemap builders, and Robots.txt generators to streamline technical website setups, and check keyword density structures on blog drafts before launching."
  },
  developer: {
    slug: "developer",
    name: "Developer Tools",
    desc: "Prettify JSON data, validate syntax, encode Base64 strings, decode JWT tokens, and minify web files.",
    seoTitle: "Developer Utilities - Format, Validate & Minify Code - Creators Units",
    seoDesc: "Essential web developer tools. Prettify JSON, validate JSON syntax, decode JSON Web Tokens, generate UUIDs, and minify code.",
    seoText: "Increase programming productivity. The Creators Units developer toolbox offers instant client-side tools to validate JSON syntax, generate UUID lists, decode JWT payloads, translate Base64 encodings, and minify HTML, CSS, or JS code sizes for faster web deployments."
  },
  business: {
    slug: "business",
    name: "Business Tools",
    desc: "Calculate YouTube/Instagram/TikTok earnings, CPM campaigns, ROI percentages, and profit margins.",
    seoTitle: "Creator Earnings & Business Formulas Calculators - Creators Units",
    seoDesc: "Track business returns and social metrics. Estimate YouTube, TikTok, IG earnings, calculate CPM/RPM, and check ROI formulas.",
    seoText: "Optimize campaigns, track affiliate earnings, and measure business profits. Creators Units business calculators help media buyers, creators, and freelancers calculate campaign CPM/RPM, ROI return rates, profit/discount margins, and estimate channel revenues easily."
  },
  "ai-creator": {
    slug: "ai-creator",
    name: "AI Creator Tools",
    desc: "Generate hooks, scripts, captions, and posts using on-device templates and AI generators.",
    seoTitle: "Free AI Content Creators & Script Generators - Creators Units",
    seoDesc: "Generate YouTube scripts, short captions, newsletter templates, hooks, and CTAs instantly in your browser.",
    seoText: "Brainstorm ideas and draft high-converting hooks, CTAs, and video scripts. Our client-side AI writing assistant uses template-driven intelligence and local prompts to draft engaging captions, re-write text blocks, and formulate video ideas, with an optional field to integrate your personal API key for custom configurations."
  }
};

export async function getToolBySlug(slug: string): Promise<ToolItem | undefined> {
  try {
    const module = await import(`./tools/details/${slug}`);
    return module.toolDetails;
  } catch (error) {
    console.error(`Error loading tool details for ${slug}:`, error);
    return undefined;
  }
}

export function getToolsByCategory(category: string): ToolItemLite[] {
  return toolsIndex.filter((tool) => tool.category === category);
}

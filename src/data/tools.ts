import { ToolItem } from "./types";
import { imageTools } from "./tools/image";
import { creatorTools } from "./tools/creator";
import { socialTools } from "./tools/social";
import { utilityTools } from "./tools/utility";

export const tools: ToolItem[] = [
  ...imageTools,
  ...creatorTools,
  ...socialTools,
  ...utilityTools
];

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
  }
};

export function getToolBySlug(slug: string): ToolItem | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): ToolItem[] {
  return tools.filter((tool) => tool.category === category);
}

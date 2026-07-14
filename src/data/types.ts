export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  category: "image" | "creator" | "social" | "utility" | "video" | "pdf" | "seo" | "developer" | "business" | "ai-creator";
  categoryName: string;
  title: string;
  shortDesc: string;
  metaDesc: string;
  instructions: string[];
  features: string[];
  componentName: string;
  faqs: FAQItem[];
  seoTitle: string;
  seoHeading: string;
  seoIntro: string;
  seoBody: string;
}

/** Lightweight version of ToolItem for listing pages — omits heavy SEO/FAQ data. */
export type ToolItemLite = Omit<ToolItem, "faqs" | "seoHeading" | "seoIntro" | "seoBody">;

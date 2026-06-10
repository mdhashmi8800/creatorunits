export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  category: "image" | "creator" | "social" | "utility";
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

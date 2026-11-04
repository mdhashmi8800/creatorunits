import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";
import { articlesIndex } from "@/data/articles-index";

// Stable truthful baseline dates reflecting real content updates
const AUDIT_UPDATE_DATE = new Date("2026-11-04T00:00:00Z");
const PREVIOUS_RELEASE_DATE = new Date("2026-08-22T00:00:00Z");
const POLICIES_UPDATE_DATE = new Date("2026-08-29T00:00:00Z");

const UPDATED_TOOL_SLUGS = new Set([
  "utm-builder",
  "fps-calculator",
  "barcode-generator",
  "character-counter",
  "username-generator",
  "xml-sitemap-generator",
  "bio-template-generator",
  "qr-code-generator",
  "whatsapp-qr-generator",
  "keyword-density-checker",
  "youtube-tag-extractor",
  "image-compressor",
]);

const UPDATED_ARTICLE_SLUGS = new Set([
  "creative-instagram-bio-ideas",
  "reduce-image-file-size-for-instagram",
  "utm-tracking-link-guide",
  "how-to-create-qr-code-free",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.creatorunits.com";

  const coreEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "daily" as const, priority: 1.0, lastModified: AUDIT_UPDATE_DATE },
    { url: `${baseUrl}/tools`, changeFrequency: "weekly" as const, priority: 0.9, lastModified: AUDIT_UPDATE_DATE },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.9, lastModified: AUDIT_UPDATE_DATE },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/author/md-hashmi`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/editorial-policy`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/privacy`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/terms`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: POLICIES_UPDATE_DATE },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: POLICIES_UPDATE_DATE },
  ];

  // Tool categories
  const categoryEntries: MetadataRoute.Sitemap = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: AUDIT_UPDATE_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog categories
  const blogCategorySlugs = [...new Set(articlesIndex.map((a) => a.category))];
  const blogCategoryEntries: MetadataRoute.Sitemap = blogCategorySlugs.map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: AUDIT_UPDATE_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Tool detail pages
  const toolEntries: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: UPDATED_TOOL_SLUGS.has(tool.slug) ? AUDIT_UPDATE_DATE : PREVIOUS_RELEASE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog detail pages
  const blogEntries: MetadataRoute.Sitemap = articlesIndex.map((article) => {
    let modDate = PREVIOUS_RELEASE_DATE;
    if (UPDATED_ARTICLE_SLUGS.has(article.slug)) {
      modDate = AUDIT_UPDATE_DATE;
    } else if (article.lastModified) {
      modDate = new Date(article.lastModified);
    } else if (article.publishDate) {
      modDate = new Date(article.publishDate);
    }

    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: modDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...coreEntries, ...categoryEntries, ...blogCategoryEntries, ...toolEntries, ...blogEntries];
}

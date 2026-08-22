import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";
import { articlesIndex } from "@/data/articles-index";

const BUILD_DATE = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.creatorunits.com";

  const coreEntries: MetadataRoute.Sitemap = [
    { url: baseUrl,             changeFrequency: "daily"  as const, priority: 1.0, lastModified: BUILD_DATE },
    { url: `${baseUrl}/tools`,  changeFrequency: "weekly" as const, priority: 0.9, lastModified: BUILD_DATE },
    { url: `${baseUrl}/blog`,   changeFrequency: "weekly" as const, priority: 0.9, lastModified: BUILD_DATE },
    { url: `${baseUrl}/about`,  changeFrequency: "monthly" as const, priority: 0.7, lastModified: BUILD_DATE },
  ];

  const categoryEntries: MetadataRoute.Sitemap = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const toolEntries: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = articlesIndex.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.lastModified || article.publishDate || BUILD_DATE),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreEntries, ...categoryEntries, ...toolEntries, ...blogEntries];
}


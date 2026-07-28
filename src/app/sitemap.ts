import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";
import { getAllPosts } from "@/lib/wordpress";

const BUILD_DATE = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.creatorunits.com";

  const coreEntries = [
    { url: baseUrl,             changeFrequency: "daily"  as const, priority: 1.0 },
    { url: `${baseUrl}/tools`,  changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`,   changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`,  changeFrequency: "monthly" as const, priority: 0.7 },
  ].map((entry) => ({ ...entry, lastModified: BUILD_DATE }));

  const categoryEntries = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    blogEntries = posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.modified || p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // WordPress API unavailable
  }

  return [...coreEntries, ...categoryEntries, ...toolEntries, ...blogEntries];
}

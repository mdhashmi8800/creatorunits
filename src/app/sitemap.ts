import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatorutils.com";

  // 1. Core pages entries
  const corePages = ["", "/tools", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];
  const coreEntries = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? (1.0 as const) : (0.8 as const)
  }));

  // 2. Categories entries
  const categoryEntries = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8 as const
  }));

  // 3. Dynamic Tool details entries
  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.64 as const
  }));

  return [...coreEntries, ...categoryEntries, ...toolEntries];
}

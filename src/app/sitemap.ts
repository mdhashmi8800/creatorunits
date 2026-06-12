import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatorunits.com";
  const now = new Date();

  // Core pages
  const corePages = ["", "/tools", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];
  const coreEntries = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category pages
  const categoryEntries = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual tool pages
  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreEntries, ...categoryEntries, ...toolEntries];
}

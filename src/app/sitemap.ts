import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";

// Use a stable build date rather than new Date() which changes every request.
// This prevents Googlebot from seeing every URL as "changed" on every crawl,
// which wastes crawl budget and dilutes change signals.
// Update this date when you make meaningful content changes.
const SITE_LAST_MODIFIED = new Date("2025-06-01T00:00:00.000Z");
const TOOLS_LAST_MODIFIED = new Date("2025-06-01T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatorunits.com";

  // Core pages — higher priority, updated more frequently
  const corePages = ["", "/tools", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];
  const coreEntries = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category pages
  const categoryEntries = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual tool pages — stable, change infrequently
  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: TOOLS_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreEntries, ...categoryEntries, ...toolEntries];
}

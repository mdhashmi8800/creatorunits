import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";
import { articlesIndex } from "@/data/articles-index";

// Stable build-time date so Googlebot sees a fresh lastModified on every
// deployment without seeing every URL as "changed" on every *request*.
// This is evaluated once at build time (static export / SSG).
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatorunits.com";

  // ── Core pages ─────────────────────────────────────────────────────────────
  const corePages = ["", "/tools", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/blog"];
  const coreEntries = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/tools" || route === "/blog" ? 0.9 : 0.8,
  }));

  // ── Category pages ─────────────────────────────────────────────────────────
  const categoryEntries = Object.keys(categories).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── Individual tool pages ──────────────────────────────────────────────────
  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Blog article pages ──────────────────────────────────────────────────────
  const articleEntries = articlesIndex.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreEntries, ...categoryEntries, ...toolEntries, ...articleEntries];
}

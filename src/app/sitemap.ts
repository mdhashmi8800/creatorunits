import { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";

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

  // ── Blog article pages — imported lazily to avoid circular deps ────────────
  // Articles are loaded here via a dynamic require so sitemap.ts stays
  // decoupled from the articles data during initial scaffolding.
  let articleEntries: MetadataRoute.Sitemap = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { articles } = require("@/data/articles") as {
      articles: Array<{ slug: string; publishDate: string }>;
    };
    articleEntries = articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // articles.ts not yet present during initial build — safe to skip
  }

  return [...coreEntries, ...categoryEntries, ...toolEntries, ...articleEntries];
}

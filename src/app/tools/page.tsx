export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toolsIndex as tools, categories } from "@/data/tools";
import ToolsFilterClient from "./ToolsFilterClient";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Free Creator & Utility Tools | Creator Units",
  description:
    "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "All Free Creator & Utility Tools | Creator Units",
    description:
      "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
    url: "https://www.creatorunits.com/tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Units - Free Creator & Utility Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Creator & Utility Tools | Creator Units",
    description:
      "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
    images: ["/og-image.png"],
  },
};

// Build-time category counts (zero runtime cost)
const categoryCounts = Object.fromEntries(
  Object.keys(categories).map((slug) => [
    slug,
    tools.filter((t) => t.category === slug).length,
  ])
);

/**
 * Tools Directory — fully Server Component.
 *
 * All 33+ tool cards with their <Link> elements are rendered as static HTML
 * so Googlebot discovers every tool page on first crawl of /tools.
 *
 * Only the search input + category tabs (ToolsFilterClient) are a client
 * component. It controls visibility of the SSR cards via CSS data attributes
 * without requiring a React re-render of the grid.
 */
const ITEM_LIST_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "All Free Creator & Utility Tools",
  description:
    "A complete directory of 33+ free browser-based tools for content creators.",
  url: "https://www.creatorunits.com/tools",
  numberOfItems: tools.length,
  itemListElement: tools.map((tool, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: tool.title,
    url: `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}`,
  })),
});

const TOOLS_PAGE_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.creatorunits.com/tools#webpage",
  "url": "https://www.creatorunits.com/tools",
  "name": "All Free Creator & Utility Tools | Creator Units",
  "description": "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.creatorunits.com/#website"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/tools#breadcrumb"
  }
});

const BREADCRUMB_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.creatorunits.com/tools#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.creatorunits.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tools",
      "item": "https://www.creatorunits.com/tools",
    },
  ],
});

export default function ToolsDirectoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA_JSON }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: TOOLS_PAGE_SCHEMA_JSON }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_SCHEMA_JSON }}
      />

      <Header />
      <main className="main-content section" id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
          <div className="text-center mb-8">
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
              All Creator Utilities
            </h1>
            <p
              className="text-muted"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              Explore our full directory of {tools.length}+ tools for image
              editing, channel optimization, social copy, and daily formatting
              calculations.
            </p>
          </div>

          {/* Interactive filter — client component (search + tabs only) */}
          <ToolsFilterClient
            totalCount={tools.length}
            categoryCounts={categoryCounts}
          />

          {/* SSR Tool Grid — all links rendered in static HTML for Googlebot */}
          <div id="tools-ssr-grid" role="list" aria-label="All creator tools">
            <div className="grid-cols-3">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="card card-hover flex flex-col gap-3"
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`Open ${tool.title} - ${tool.shortDesc}`}
                  role="listitem"
                  data-category={tool.category}
                  data-title={tool.title}
                  data-desc={tool.shortDesc}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className="badge badge-accent"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {tool.categoryName}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.2rem", margin: 0 }}>{tool.title}</h2>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "0.875rem",
                      margin: 0,
                      flexGrow: 1,
                      lineHeight: "1.4",
                    }}
                  >
                    {tool.shortDesc}
                  </p>

                  <span
                    className="text-primary-color"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                    }}
                  >
                    Open Tool &rarr;
                  </span>
                </Link>
              ))}
            </div>

            {/* Empty state — hidden by default, shown by ToolsFilterClient when no results */}
            <div
              id="tools-empty-state"
              className="card text-center"
              style={{ padding: "4rem 0", display: "none" }}
              role="status"
            >
              <p className="text-muted" style={{ margin: 0 }}>
                No tools found matching your search term. Try another query or
                clear the filter.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

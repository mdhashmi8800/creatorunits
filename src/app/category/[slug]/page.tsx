import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getToolsByCategory, categories, toolsIndex } from "@/data/tools";
import { Metadata } from "next";

// Map each category to 2-3 spotlight slugs from OTHER categories for internal linking
const crossCategoryMap: Record<string, string[]> = {
  image: ["qr-code-generator", "password-generator", "youtube-thumbnail-preview", "fancy-text-generator"],
  creator: ["image-compressor", "image-resizer", "utm-builder", "social-media-link-in-bio-helper"],
  social: ["image-compressor", "screenshot-cleaner", "qr-code-generator", "youtube-thumbnail-preview"],
  utility: ["image-compressor", "fancy-text-generator", "youtube-thumbnail-preview", "bio-template-generator"],
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "image" },
    { slug: "creator" },
    { slug: "social" },
    { slug: "utility" }
  ];
}

// Reverted dynamicParams to fix 404
// export const dynamicParams = false;


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) return {};

  return {
    title: cat.seoTitle,
    description: cat.seoDesc,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDesc,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cat.name} - Creators Units`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cat.seoTitle,
      description: cat.seoDesc,
      images: ["/og-image.png"],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) {
    notFound();
  }

  const catTools = getToolsByCategory(slug);

  // Cross-category tools for internal linking
  const crossCatSlugs = crossCategoryMap[slug] ?? [];
  const crossCatTools = crossCatSlugs
    .map((s) => toolsIndex.find((t) => t.slug === s))
    .filter(Boolean);

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.name,
    description: cat.seoDesc,
    url: `https://creatorunits.com/category/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: catTools.map((tool, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: tool.title,
        url: `https://creatorunits.com/tools/${tool.category}/${tool.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://creatorunits.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cat.name,
        "item": `https://creatorunits.com/category/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content section" id="main-content">
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.85rem" }}>
            <ol style={{ display: "flex", flexWrap: "wrap", listStyle: "none", padding: 0, margin: 0, alignItems: "center" }}>
              <li>
                <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
              </li>
              <li aria-hidden="true" style={{ margin: "0 0.5rem", color: "var(--text-muted)" }}>/</li>
              <li aria-current="page" style={{ color: "var(--text-primary)", fontWeight: "600" }}>{cat.name}</li>
            </ol>
          </nav>

          {/* Title block */}
          <div className="card" style={{ marginBottom: "2.5rem", padding: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{cat.name}</h1>
            <p className="text-muted" style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.5" }}>
              {cat.desc}
            </p>
          </div>

          {/* Grid list of tools in this category */}
          <div className="grid-cols-3" style={{ marginBottom: "3rem" }}>
            {catTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.category}/${tool.slug}`}
                className="card card-hover flex flex-col gap-3"
                style={{ textDecoration: "none", color: "inherit" }}
                aria-label={`Open ${tool.title} - ${tool.shortDesc}`}
              >
                <h2 style={{ fontSize: "1.15rem", margin: 0 }}>{tool.title}</h2>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                  {tool.shortDesc}
                </p>
                <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600", marginTop: "0.5rem" }}>
                  Open Tool &rarr;
                </span>
              </Link>
            ))}
          </div>

          {/* Category-level SEO Description copy */}
          <section className="card" style={{ backgroundColor: "var(--bg-primary)", padding: "2rem", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>About Our {cat.name} Suite</h2>
            <div
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              <p>{cat.seoText}</p>
              <p>
                All utilities operate inside the client browser. No registration is required. Bookmark this index page to speed up your daily creation, design, and posting workloads.
              </p>
            </div>
          </section>

          {/* Cross-category internal linking */}
          {crossCatTools.length > 0 && (
            <section aria-labelledby="related-cats-heading" style={{ marginBottom: "2rem" }}>
              <h2 id="related-cats-heading" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>You May Also Like</h2>
              <div className="grid-cols-4">
                {crossCatTools.map((tool) => tool && (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.category}/${tool.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    aria-label={`${tool.title} — ${tool.shortDesc}`}
                  >
                    <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start" }}>{tool.categoryName}</span>
                    <h3 style={{ fontSize: "1rem", margin: 0 }}>{tool.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>{tool.shortDesc}</p>
                    <span className="text-primary-color" style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "0.25rem" }}>Open &rarr;</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All categories nav */}
          <nav aria-label="Browse other categories" style={{ marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Browse other categories:</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {Object.values(categories)
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    className="btn btn-secondary btn-sm"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}

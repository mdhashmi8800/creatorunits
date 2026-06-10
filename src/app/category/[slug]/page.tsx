import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getToolsByCategory, categories } from "@/data/tools";
import { Metadata } from "next";

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
          alt: `${cat.name} - CreatorUtils`,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://creatorutils.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cat.name,
        "item": `https://creatorutils.com/category/${slug}`,
      },
    ],
  };

  return (
    <>
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
          <div className="card" style={{ borderStyle: "solid", marginBottom: "2.5rem", padding: "2rem" }}>
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
                style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
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
          <section className="card" style={{ borderStyle: "solid", backgroundColor: "var(--bg-primary)", padding: "2rem" }}>
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

        </div>
      </main>
      <Footer />
    </>
  );
}

export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articlesIndex } from "@/data/articles-index";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_NAMES: Record<string, string> = {
  image: "Image Optimization & Design",
  creator: "YouTube & Video Creator",
  social: "Social Media & Growth",
  utility: "Developer & Utility Tools",
  general: "Creator Guides & Workflows",
};

export function generateStaticParams() {
  const categories = [...new Set(articlesIndex.map((a) => a.category))];
  return categories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = CATEGORY_NAMES[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${categoryName} Guides & Tutorials | Creator Units Blog`,
    description: `Explore in-depth ${categoryName} tutorials, optimization workflows, and step-by-step guides for content creators.`,
    alternates: {
      canonical: `/blog/category/${slug}`,
    },
  };
}

function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const filtered = articlesIndex.filter((p) => p.category === slug);

  if (filtered.length === 0) notFound();

  const categoryName = CATEGORY_NAMES[slug] || filtered[0].categoryLabel || "Creator Guides";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `https://www.creatorunits.com/blog/category/${slug}#webpage`,
    name: `${categoryName} Guides`,
    url: `https://www.creatorunits.com/blog/category/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `https://www.creatorunits.com/blog/category/${slug}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.creatorunits.com/blog/category/${slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creatorunits.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.creatorunits.com/blog" },
      { "@type": "ListItem", position: 3, name: categoryName, item: `https://www.creatorunits.com/blog/category/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content" id="main-content">
        <div className="container" style={{ paddingTop: "1.5rem" }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: categoryName },
            ]}
          />
        </div>

        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "3rem" }}>
          <div className="container text-center">
            <span className="badge badge-accent mb-4">Blog Category</span>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>
              {categoryName}
            </h1>
            <p className="text-muted" style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.6" }}>
              {filtered.length} in-depth tutorial{filtered.length !== 1 ? "s" : ""} and guide{filtered.length !== 1 ? "s" : ""} on {categoryName.toLowerCase()}.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-cols-2">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card card-hover flex flex-col gap-3"
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`Read: ${post.title}`}
                >
                  <div>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "var(--accent-light)",
                        color: "var(--accent)",
                        fontSize: "0.65rem",
                        fontWeight: "600",
                      }}
                    >
                      {post.categoryLabel || "Creator Units"}
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.4", color: "var(--text-primary)" }}>
                    {post.title}
                  </h2>
                  <p className="text-muted" style={{ fontSize: "0.875rem", margin: 0, flexGrow: 1, lineHeight: "1.5" }}>
                    {post.metaDesc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      <span>Muhammad Hashmi</span>
                      <time dateTime={post.publishDate}>{formatDateShort(post.publishDate)}</time>
                    </div>
                    <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                      Read Guide &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <Link href="/blog" className="btn btn-secondary">
                &larr; Back to All Blog Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

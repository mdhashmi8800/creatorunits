import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Creator Tools Blog — Guides for Images, YouTube & Social Media | Creator Units",
  description:
    "In-depth guides on image optimization, YouTube SEO, social media growth, and creator productivity. All free, practical, and written for content creators.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Creator Tools Blog | Creator Units",
    description:
      "In-depth guides on image optimization, YouTube SEO, social media growth, and creator productivity.",
    url: "https://creatorunits.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Creator Units Blog" }],
  },
};

const categoryColors: Record<string, string> = {
  image: "#6366f1",
  creator: "#f59e0b",
  social: "#10b981",
  utility: "#3b82f6",
  general: "#8b5cf6",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Creator Units Blog",
  description:
    "Practical guides on image optimization, YouTube SEO, social media tools, and creator workflows.",
  url: "https://creatorunits.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Creator Units",
    url: "https://creatorunits.com",
  },
  blogPost: articles.slice(0, 10).map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.metaDesc,
    url: `https://creatorunits.com/blog/${a.slug}`,
    datePublished: a.publishDate,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://creatorunits.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://creatorunits.com/blog" },
  ],
};

// Group articles by category
const grouped = articles.reduce<Record<string, typeof articles>>((acc, a) => {
  if (!acc[a.category]) acc[a.category] = [];
  acc[a.category].push(a);
  return acc;
}, {});

const categoryOrder = ["image", "creator", "social", "utility", "general"];
const categoryLabels: Record<string, string> = {
  image: "Image Tools Guides",
  creator: "Creator Tools Guides",
  social: "Social Media Guides",
  utility: "Utility Tools Guides",
  general: "Creator Resources",
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content" id="main-content">
        {/* Hero */}
        <section
          className="section"
          style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "3rem" }}
        >
          <div className="container text-center">
            <span className="badge badge-accent mb-4">Creator Knowledge Base</span>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>
              Guides, Tips &amp; Tutorials for Creators
            </h1>
            <p
              className="text-muted"
              style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.7" }}
            >
              Practical, jargon-free guides on image optimization, YouTube SEO, social media growth,
              and free tool walkthroughs — written for creators and freelancers.
            </p>
          </div>
        </section>

        {/* Article grid by category */}
        <section className="section">
          <div className="container">
            <div className="flex flex-col gap-4" style={{ gap: "4rem" }}>
              {categoryOrder.map((cat) => {
                const catArticles = grouped[cat] ?? [];
                if (catArticles.length === 0) return null;
                return (
                  <div key={cat}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1.5rem",
                        borderBottom: "2px solid var(--border-color)",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "4px",
                          height: "1.5rem",
                          borderRadius: "2px",
                          backgroundColor: categoryColors[cat] ?? "var(--accent)",
                        }}
                      />
                      <h2 style={{ fontSize: "1.4rem", margin: 0 }}>
                        {categoryLabels[cat] ?? cat}
                      </h2>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: categoryColors[cat] + "20",
                          color: categoryColors[cat],
                          fontWeight: "600",
                        }}
                      >
                        {catArticles.length} articles
                      </span>
                    </div>

                    <div className="grid-cols-2">
                      {catArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="card card-hover flex flex-col gap-3"
                          style={{ textDecoration: "none", color: "inherit" }}
                          aria-label={`Read: ${article.title}`}
                        >
                          <div>
                            <span
                              className="badge"
                              style={{
                                backgroundColor: (categoryColors[article.category] ?? "#6366f1") + "20",
                                color: categoryColors[article.category] ?? "#6366f1",
                                fontSize: "0.65rem",
                                fontWeight: "600",
                              }}
                            >
                              {article.categoryLabel}
                            </span>
                          </div>
                          <h3
                            style={{
                              fontSize: "1.05rem",
                              margin: 0,
                              lineHeight: "1.4",
                              color: "var(--text-primary)",
                            }}
                          >
                            {article.title}
                          </h3>
                          <p
                            className="text-muted"
                            style={{
                              fontSize: "0.875rem",
                              margin: 0,
                              flexGrow: 1,
                              lineHeight: "1.5",
                            }}
                          >
                            {article.metaDesc}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <time
                              dateTime={article.publishDate}
                              style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                            >
                              {new Date(article.publishDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </time>
                            <span
                              className="text-primary-color"
                              style={{ fontSize: "0.85rem", fontWeight: "600" }}
                            >
                              Read Guide &rarr;
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools CTA */}
        <section
          className="section"
          style={{ backgroundColor: "var(--bg-primary)", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "640px" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              Ready to Try the Tools?
            </h2>
            <p className="text-muted" style={{ marginBottom: "1.5rem" }}>
              All 33 tools are free, browser-based, and require no account. Start using them
              alongside these guides today.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/tools" className="btn btn-primary">
                Browse All Tools &rarr;
              </Link>
              <Link href="/" className="btn btn-secondary">
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

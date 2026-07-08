export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug } from "@/data/articles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articlesIndex } from "@/data/articles-index";
import { toolsIndex } from "@/data/tools";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render all 50 articles at build time */
export async function generateStaticParams() {
  return articlesIndex.map((a) => ({ slug: a.slug }));
}

// Reverted dynamicParams to fix 404
// export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Creator Units",
    };
  }

  return {
    title: `${article.title} | Creator Units`,
    description: article.metaDesc,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDesc,
      url: `https://www.creatorunits.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDesc,
      images: ["/og-image.png"],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  // Find related tool objects
  const relatedTools = article.relatedToolSlugs
    .map((s) => toolsIndex.find((t) => t.slug === s))
    .filter(Boolean);

  // Find other articles in same category (up to 3)
  const relatedArticles = articlesIndex
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  // Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    url: `https://www.creatorunits.com/blog/${article.slug}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creatorunits.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.creatorunits.com/blog/${article.slug}`,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.creatorunits.com/blog/${article.slug}#webpage`,
    "url": `https://www.creatorunits.com/blog/${article.slug}`,
    "name": `${article.title} | Creator Units`,
    "description": article.metaDesc,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `https://www.creatorunits.com/blog/${article.slug}#breadcrumb`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.creatorunits.com/blog/${article.slug}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creatorunits.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.creatorunits.com/blog" },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://www.creatorunits.com/blog/${article.slug}`,
      },
    ],
  };

  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />
      <main className="main-content" id="main-content">
        {/* Article Header */}
        <section
          className="section"
          style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2rem" }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: article.categoryLabel }
              ]}
            />

            <span
              className="badge badge-accent"
              style={{ fontSize: "0.7rem", marginBottom: "1rem" }}
            >
              {article.categoryLabel}
            </span>

            <h1
              style={{
                fontSize: "2rem",
                lineHeight: "1.3",
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              {article.title}
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-secondary)",
                marginBottom: "1.25rem",
              }}
            >
              {article.metaDesc}
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>
                <strong>Creator Units</strong> — Free Tool Guides
              </span>
              <time dateTime={article.publishDate}>
                Published{" "}
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        {/* Article Body + Sidebar layout */}
        <section className="section">
          <div
            className="container"
            style={{
              maxWidth: "1200px",
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Main Article Content */}
            <article
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                color: "var(--text-secondary)",
              }}
            >
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  /* Typography enhancements for article body */
                }}
              />

              {/* Visible FAQ Accordion Section */}
              {article.faqs && article.faqs.length > 0 && (
                <section style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }} aria-labelledby="article-faq-heading">
                  <h2 id="article-faq-heading" style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {article.faqs.map((faq, idx) => (
                      <details key={idx} className="card" style={{ borderStyle: "solid" }}>
                        <summary style={{ 
                          fontSize: "1.05rem", 
                          fontWeight: "600", 
                          cursor: "pointer",
                          padding: "0.5rem 0",
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}>
                          {faq.question}
                          <span aria-hidden="true" style={{ fontSize: "1.25rem", color: "var(--accent)" }}>+</span>
                        </summary>
                        <p className="text-muted" style={{ fontSize: "0.9rem", margin: "0.5rem 0 0 0", paddingTop: "0.5rem", borderTop: "1px solid var(--border-color)", lineHeight: "1.6" }}>
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "2rem" }}>
              {/* Related Tools card */}
              {relatedTools.length > 0 && (
                <div
                  className="card"
                  style={{ marginBottom: "1.5rem", borderStyle: "solid" }}
                  aria-labelledby="related-tools-sidebar"
                >
                  <h2
                    id="related-tools-sidebar"
                    style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--text-primary)" }}
                  >
                    🔧 Featured Tools
                  </h2>
                  <div className="flex flex-col gap-3">
                    {relatedTools.map(
                      (tool) =>
                        tool && (
                          <Link
                            key={tool.id}
                            href={`/tools/${tool.category}/${tool.slug}`}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.25rem",
                              textDecoration: "none",
                              padding: "0.75rem",
                              borderRadius: "8px",
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-color)",
                              transition: "border-color 0.2s",
                            }}
                            aria-label={`Use ${tool.title} — ${tool.shortDesc}`}
                          >
                            <span
                              style={{
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                color: "var(--text-primary)",
                              }}
                            >
                              {tool.title}
                            </span>
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--text-muted)",
                                lineHeight: "1.4",
                              }}
                            >
                              {tool.shortDesc}
                            </span>
                            <span
                              className="text-primary-color"
                              style={{ fontSize: "0.75rem", fontWeight: "600", marginTop: "0.25rem" }}
                            >
                              Open Tool &rarr;
                            </span>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div
                  className="card"
                  style={{ borderStyle: "solid" }}
                  aria-labelledby="related-articles-sidebar"
                >
                  <h2
                    id="related-articles-sidebar"
                    style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--text-primary)" }}
                  >
                    📚 Related Guides
                  </h2>
                  <div className="flex flex-col gap-3">
                    {relatedArticles.map((ra) => (
                      <Link
                        key={ra.slug}
                        href={`/blog/${ra.slug}`}
                        style={{
                          display: "block",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          color: "var(--text-primary)",
                          fontWeight: "500",
                          lineHeight: "1.4",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid var(--border-color)",
                        }}
                      >
                        {ra.title} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* Bottom CTA — link to blog and tools */}
        <section
          className="section"
          style={{ backgroundColor: "var(--bg-primary)", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "640px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Try the Free Tools Mentioned Above
            </h2>
            <p className="text-muted" style={{ marginBottom: "1.5rem" }}>
              All tools run in your browser. No sign-up, no upload to servers, completely free.
            </p>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/tools" className="btn btn-primary">
                Browse All 33 Tools &rarr;
              </Link>
              <Link href="/blog" className="btn btn-secondary">
                More Guides &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

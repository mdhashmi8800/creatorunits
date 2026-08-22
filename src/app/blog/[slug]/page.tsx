export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getArticleBySlug } from "@/data/articles";
import { articlesIndex } from "@/data/articles-index";
import { toolsIndex } from "@/data/tools-index";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articlesIndex.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Creator Units" };
  }

  return {
    title: `${article.title} | Creator Units`,
    description: article.metaDesc,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Creator Units`,
      description: article.metaDesc,
      url: `https://www.creatorunits.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.lastModified || article.publishDate,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${article.title} - Creator Units`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Creator Units`,
      description: article.metaDesc,
      images: ["/og-image.png"],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function extractHeadings(html: string): { depth: number; slug: string; text: string }[] {
  const headingRegex = /<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const headings: { depth: number; slug: string; text: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    const depth = parseInt(match[1]);
    const text = match[3].replace(/<[^>]*>/g, "").trim();
    if (text) {
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
      headings.push({ depth, slug, text });
    }
  }
  return headings;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = articlesIndex
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 4);

  const relatedTools = (article.relatedToolSlugs || [])
    .map((tslug) => toolsIndex.find((t) => t.slug === tslug))
    .filter(Boolean);

  const headings = extractHeadings(article.content);
  const wordCount = article.content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    url: `https://www.creatorunits.com/blog/${article.slug}`,
    datePublished: article.publishDate,
    dateModified: article.lastModified || article.publishDate,
    image: {
      "@type": "ImageObject",
      url: "https://www.creatorunits.com/og-image.png",
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "Creator Units Editorial Team",
      url: "https://www.creatorunits.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
      logo: { "@type": "ImageObject", url: "https://www.creatorunits.com/icon.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.creatorunits.com/blog/${article.slug}`,
    },
    wordCount: wordCount,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.creatorunits.com/blog/${article.slug}#webpage`,
    url: `https://www.creatorunits.com/blog/${article.slug}`,
    name: `${article.title} | Creator Units`,
    description: article.metaDesc,
    isPartOf: { "@type": "WebSite", "@id": "https://www.creatorunits.com/#website" },
    breadcrumb: { "@type": "BreadcrumbList", "@id": `https://www.creatorunits.com/blog/${article.slug}#breadcrumb` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.creatorunits.com/blog/${article.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creatorunits.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.creatorunits.com/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://www.creatorunits.com/blog/${article.slug}` },
    ],
  };

  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Header />
      <main className="main-content" id="main-content">
        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: article.categoryLabel || "Guide" },
              ]}
            />

            <span className="badge badge-accent" style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
              {article.categoryLabel || "Creator Units"}
            </span>

            <h1 style={{ fontSize: "2rem", lineHeight: "1.3", marginBottom: "1rem", color: "var(--text-primary)" }}>
              {article.title}
            </h1>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              {article.metaDesc}
            </p>

            <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.875rem", color: "var(--text-muted)", alignItems: "center", flexWrap: "wrap" }}>
              <span><strong>Creator Units Editorial Team</strong></span>
              <time dateTime={article.publishDate}>Published {formatDate(article.publishDate)}</time>
              <span>{readingTime}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }}>
            <article style={{ fontSize: "1rem", lineHeight: "1.75", color: "var(--text-secondary)" }}>
              {headings.length > 0 && (
                <div className="card" style={{ marginBottom: "2rem", borderStyle: "solid" }}>
                  <h2 style={{ fontSize: "0.95rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>Table of Contents</h2>
                  <nav style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {headings.map((h) => (
                      <a
                        key={h.slug}
                        href={`#${h.slug}`}
                        style={{
                          fontSize: "0.85rem",
                          paddingLeft: h.depth === 3 ? "1rem" : "0",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                        }}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

              {article.faqs && article.faqs.length > 0 && (
                <section style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="card" style={{ padding: "1.25rem" }}>
                        <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                          {faq.question}
                        </h3>
                        <p style={{ margin: 0, fontSize: "0.925rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {relatedTools.length > 0 && (
                <section style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                    Recommended Free Tools
                  </h2>
                  <div className="grid-cols-2">
                    {relatedTools.map((tool) => tool && (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.category}/${tool.slug}`}
                        className="card card-hover"
                        style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                      >
                        <span className="badge badge-accent" style={{ alignSelf: "flex-start" }}>
                          {tool.categoryName}
                        </span>
                        <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>
                          {tool.title}
                        </h3>
                        <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                          {tool.shortDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {relatedArticles.length > 0 && (
                <section style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    Related Articles
                  </h2>
                  <div className="grid-cols-2">
                    {relatedArticles.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="card card-hover"
                        style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                      >
                        <span className="badge badge-accent" style={{ alignSelf: "flex-start" }}>
                          {rp.categoryLabel || "Creator Units"}
                        </span>
                        <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>
                          {rp.title}
                        </h3>
                        <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                          {rp.metaDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside style={{ position: "sticky", top: "2rem" }}>
              <div className="card" style={{ borderStyle: "solid", marginBottom: "1.5rem" }} aria-labelledby="sidebar-latest">
                <h3 id="sidebar-latest" style={{ fontSize: "0.95rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                  Popular Guides
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {articlesIndex.slice(0, 5).map((art) => (
                    <Link
                      key={art.slug}
                      href={`/blog/${art.slug}`}
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
                      {art.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              {relatedTools.length > 0 && (
                <div className="card" style={{ borderStyle: "solid" }}>
                  <h3 style={{ fontSize: "0.95rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                    Tools Mentioned
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {relatedTools.map((tool) => tool && (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.category}/${tool.slug}`}
                        className="btn btn-secondary"
                        style={{ fontSize: "0.85rem", textAlign: "center" }}
                      >
                        Try {tool.title} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: "var(--bg-primary)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "640px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Try the Free Tools
            </h2>
            <p className="text-muted" style={{ marginBottom: "1.5rem" }}>
              All tools run in your browser. No sign-up, no upload to servers, completely free.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/tools" className="btn btn-primary">
                Browse All Tools &rarr;
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

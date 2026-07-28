export const dynamic = "force-static";
export const revalidate = 3600;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPost, getRelatedPosts, formatDate } from "@/lib/wordpress";
import { getAllPosts } from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Article Not Found | Creator Units" };
  }

  return {
    title: `${post.title} | Creator Units`,
    description: post.excerpt || post.title,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `https://www.creatorunits.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: post.featuredImage
        ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.featuredImageAlt || post.title }]
        : [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: post.featuredImage ? [post.featuredImage] : ["/og-image.png"],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.title,
    url: `https://www.creatorunits.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.modified,
    image: post.featuredImage
      ? { "@type": "ImageObject", url: post.featuredImage, width: 1200, height: 630 }
      : { "@type": "ImageObject", url: "https://www.creatorunits.com/og-image.png", width: 1200, height: 630 },
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
      logo: { "@type": "ImageObject", url: "https://www.creatorunits.com/icon.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.creatorunits.com/blog/${post.slug}`,
    },
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.creatorunits.com/blog/${post.slug}#webpage`,
    "url": `https://www.creatorunits.com/blog/${post.slug}`,
    "name": `${post.title} | Creator Units`,
    "description": post.excerpt || post.title,
    "isPartOf": { "@type": "WebSite", "@id": "https://www.creatorunits.com/#website" },
    "breadcrumb": { "@type": "BreadcrumbList", "@id": `https://www.creatorunits.com/blog/${post.slug}#breadcrumb` }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.creatorunits.com/blog/${post.slug}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creatorunits.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.creatorunits.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.creatorunits.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <main className="main-content" id="main-content">
        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.categories[0] || "Blog" }
              ]}
            />

            <span className="badge badge-accent" style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
              {post.categories[0] || 'Creator Units'}
            </span>

            <h1 style={{ fontSize: "2rem", lineHeight: "1.3", marginBottom: "1rem", color: "var(--text-primary)" }}>
              {post.title}
            </h1>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              {post.excerpt}
            </p>

            <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.875rem", color: "var(--text-muted)", alignItems: "center", flexWrap: "wrap" }}>
              <span><strong>{post.author}</strong></span>
              <time dateTime={post.date}>Published {formatDate(post.date)}</time>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }}>
            <article style={{ fontSize: "1rem", lineHeight: "1.75", color: "var(--text-secondary)" }}>
              {post.featuredImage && (
                <div style={{ marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="eager"
                  />
                </div>
              )}

              {post.headings.length > 0 && (
                <div className="card" style={{ marginBottom: "2rem", borderStyle: "solid" }}>
                  <h4 style={{ fontSize: "0.95rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>Table of Contents</h4>
                  <nav style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {post.headings.filter(h => h.depth === 2 || h.depth === 3).map((h) => (
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

              <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              {relatedPosts.length > 0 && (
                <section style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    Related Articles
                  </h2>
                  <div className="grid-cols-2">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="card card-hover"
                        style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                      >
                        <span className="badge badge-accent" style={{ alignSelf: "flex-start" }}>
                          {rp.categories[0] || 'Creator Units'}
                        </span>
                        <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>
                          {rp.title}
                        </h3>
                        <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                          {rp.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside style={{ position: "sticky", top: "2rem" }}>
              {post.headings.length > 0 && (
                <div className="card" style={{ marginBottom: "1.5rem", borderStyle: "solid" }}>
                  <h4 style={{ fontSize: "0.95rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                    Table of Contents
                  </h4>
                  <nav style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {post.headings.filter(h => h.depth === 2 || h.depth === 3).map((h) => (
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

              <div className="card" style={{ borderStyle: "solid" }} aria-labelledby="sidebar-latest">
                <h4 id="sidebar-latest" style={{ fontSize: "0.95rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                  Latest Posts
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[relatedPosts[0], relatedPosts[1]].filter(Boolean).map((rp) => rp && (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
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
                      {rp.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
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

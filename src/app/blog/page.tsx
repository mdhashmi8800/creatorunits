export const dynamic = "force-static";
export const revalidate = 3600;

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPosts, formatDateShort, POSTS_PER_PAGE } from "@/lib/wordpress";

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
    url: "https://www.creatorunits.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Creator Units Blog" }],
  },
};

export default async function BlogIndexPage() {
  let posts: Awaited<ReturnType<typeof getPosts>>['posts'] = [];
  let total = 0;
  let totalPages = 0;

  try {
    const result = await getPosts(1, POSTS_PER_PAGE);
    posts = result.posts;
    total = result.total;
    totalPages = result.totalPages;
  } catch {
    // API unavailable
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Creator Units Blog",
    description:
      "Practical guides on image optimization, YouTube SEO, social media tools, and creator workflows.",
    url: "https://www.creatorunits.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
    },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `https://www.creatorunits.com/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/blog#webpage",
    "url": "https://www.creatorunits.com/blog",
    "name": "Creator Tools Blog — Guides for Images, YouTube & Social Media | Creator Units",
    "description": "In-depth guides on image optimization, YouTube SEO, social media growth, and creator productivity. All free, practical, and written for content creators.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/blog#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/blog#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creatorunits.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.creatorunits.com/blog" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
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
              { label: "Blog" }
            ]}
          />
        </div>

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

        <section className="section">
          <div className="container">
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p className="text-muted">No articles published yet. Check back soon.</p>
              </div>
            ) : (
              <>
                <div className="grid-cols-2">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="card card-hover flex flex-col gap-3"
                      style={{ textDecoration: "none", color: "inherit" }}
                      aria-label={`Read: ${post.title}`}
                    >
                      {post.featuredImage && (
                        <div
                          style={{
                            width: "100%",
                            height: "200px",
                            overflow: "hidden",
                            borderRadius: "8px 8px 0 0",
                            margin: "-1.5rem -1.5rem 0 -1.5rem",
                          }}
                        >
                          <img
                            src={post.featuredImage}
                            alt={post.featuredImageAlt || post.title}
                            loading="lazy"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      )}
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
                          {post.categories[0] || 'Creator Units'}
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
                        {post.title}
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
                        {post.excerpt}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          <span>{post.author}</span>
                          <time dateTime={post.date}>
                            {formatDateShort(post.date)}
                          </time>
                          <span>{post.readingTime}</span>
                        </div>
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

                {totalPages > 1 && (
                  <nav
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "0.5rem",
                      marginTop: "3rem",
                      alignItems: "center",
                    }}
                    aria-label="Blog pagination"
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        href={p === 1 ? '/blog' : `/blog/page/${p}`}
                        className="btn"
                        style={{
                          backgroundColor: p === 1 ? "var(--accent)" : "var(--bg-primary)",
                          color: p === 1 ? "var(--bg-primary)" : "var(--text-primary)",
                          border: "1px solid var(--border-color)",
                          minWidth: "40px",
                        }}
                        aria-current={p === 1 ? "page" : undefined}
                      >
                        {p}
                      </Link>
                    ))}
                    {totalPages > 1 && (
                      <Link
                        href="/blog/page/2"
                        className="btn btn-secondary"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        Next &rarr;
                      </Link>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>

        <section
          className="section"
          style={{ backgroundColor: "var(--bg-primary)", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "640px" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              Ready to Try the Tools?
            </h2>
            <p className="text-muted" style={{ marginBottom: "1.5rem" }}>
              All tools are free, browser-based, and require no account. Start using them
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

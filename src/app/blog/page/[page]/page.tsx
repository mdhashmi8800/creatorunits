export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articlesIndex } from "@/data/articles-index";

const POSTS_PER_PAGE = 10;

interface PageProps {
  params: Promise<{ page: string }>;
}

export function generateStaticParams() {
  const totalPages = Math.max(1, Math.ceil(articlesIndex.length / POSTS_PER_PAGE));
  const pages: { page: string }[] = [];
  for (let i = 2; i <= totalPages; i++) {
    pages.push({ page: String(i) });
  }
  return pages;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageNum = parseInt((await params).page);
  return {
    title: `Blog – Page ${pageNum} | Creator Units`,
    description: `Page ${pageNum} of creator tools guides, tutorials, and resources.`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: "/blog",
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

export default async function BlogPagePage({ params }: PageProps) {
  const pageNum = parseInt((await params).page);
  const totalPages = Math.ceil(articlesIndex.length / POSTS_PER_PAGE);

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) notFound();

  const startIndex = (pageNum - 1) * POSTS_PER_PAGE;
  const posts = articlesIndex.slice(startIndex, startIndex + POSTS_PER_PAGE);

  if (posts.length === 0) notFound();

  return (
    <>
      <Header />
      <main className="main-content" id="main-content">
        <div className="container" style={{ paddingTop: "1.5rem" }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: `Page ${pageNum}` }
            ]}
          />
        </div>

        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "3rem" }}>
          <div className="container text-center">
            <span className="badge badge-accent mb-4">Page {pageNum} of {totalPages}</span>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>
              Guides, Tips &amp; Tutorials for Creators
            </h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-cols-2">
              {posts.map((post) => (
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
                  <h2
                    style={{
                      fontSize: "1.05rem",
                      margin: 0,
                      lineHeight: "1.4",
                      color: "var(--text-primary)",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "0.875rem",
                      margin: 0,
                      flexGrow: 1,
                      lineHeight: "1.5",
                    }}
                  >
                    {post.metaDesc}
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
                      <span>Muhammad Hashmi</span>
                      <time dateTime={post.publishDate}>
                        {formatDateShort(post.publishDate)}
                      </time>
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
              <Link
                href={pageNum === 2 ? "/blog" : `/blog/page/${pageNum - 1}`}
                className="btn btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                &larr; Previous
              </Link>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/blog" : `/blog/page/${p}`}
                  className="btn"
                  style={{
                    backgroundColor: p === pageNum ? "var(--accent)" : "var(--bg-primary)",
                    color: p === pageNum ? "var(--bg-primary)" : "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                    minWidth: "40px",
                  }}
                  aria-current={p === pageNum ? "page" : undefined}
                >
                  {p}
                </Link>
              ))}
              {pageNum < totalPages && (
                <Link
                  href={`/blog/page/${pageNum + 1}`}
                  className="btn btn-secondary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  Next &rarr;
                </Link>
              )}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

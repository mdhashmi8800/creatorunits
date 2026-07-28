export const dynamic = "force-static";
export const revalidate = 3600;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getAllPosts, formatDateShort } from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    const slugs = [...new Set(posts.flatMap(p => p.categories.map(c => c.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''))))];
    return slugs.map(slug => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${categoryName} Guides & Articles | Creator Units`,
    description: `Explore ${categoryName} guides, tutorials, and resources for content creators.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = await getAllPosts();

  const filtered = allPosts
    .filter(p => {
      const catSlugs = p.categories.map(c => c.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''));
      return catSlugs.includes(slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (filtered.length === 0) notFound();

  const categoryName = filtered[0].categories[0] || 'Blog';

  return (
    <>
      <Header />
      <main className="main-content" id="main-content">
        <div className="container" style={{ paddingTop: "1.5rem" }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: categoryName }
            ]}
          />
        </div>

        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "3rem" }}>
          <div className="container text-center">
            <span className="badge badge-accent mb-4">Category</span>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>
              {categoryName}
            </h1>
            <p className="text-muted" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {filtered.length} article{filtered.length !== 1 ? 's' : ''} in this category.
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
                  {post.featuredImage && (
                    <div style={{ width: "100%", height: "200px", overflow: "hidden", borderRadius: "8px 8px 0 0", margin: "-1.5rem -1.5rem 0 -1.5rem" }}>
                      <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                  <div>
                    <span className="badge" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)", fontSize: "0.65rem", fontWeight: "600" }}>
                      {post.categories[0] || 'Creator Units'}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.4", color: "var(--text-primary)" }}>
                    {post.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: "0.875rem", margin: 0, flexGrow: 1, lineHeight: "1.5" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      <span>{post.author}</span>
                      <time dateTime={post.date}>{formatDateShort(post.date)}</time>
                      <span>{post.readingTime}</span>
                    </div>
                    <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                      Read Guide &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

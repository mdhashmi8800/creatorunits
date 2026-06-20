import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toolsIndex as tools, categories } from "@/data/tools";
import HomeSearch from "./HomeSearch";
import styles from "./page.module.css";

// Lazy-load articles for blog teaser — gracefully skips if not yet present
let latestArticles: Array<{ slug: string; title: string; metaDesc: string; category: string }> = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { articles } = require("@/data/articles");
  latestArticles = articles.slice(0, 3);
} catch { /* articles not yet generated */ }

export const metadata: Metadata = {
  title: "Free Web Tools for Creators & Social Media | Creator Units",
  description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Web Tools for Creators & Social Media | Creator Units",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    url: "https://creatorunits.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Units - Free Web Tools for Creators & Social Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Web Tools for Creators & Social Media | Creator Units",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    images: ["/og-image.png"],
  },
};

// Build-time constants — no client JS needed
const featuredTools = tools.filter((t) =>
  ["image-compressor", "youtube-thumbnail-preview", "social-media-link-in-bio-helper", "password-generator"].includes(t.slug)
);

const faqs = [
  {
    q: "Are the tools on Creators Units really free?",
    a: "Yes, every tool on Creators Units is completely free with no hidden costs. You get unlimited access to all 30+ tools including image compression, QR code generation, thumbnail previews, and text formatting — no account creation, no trial periods, and no premium tiers required.",
  },
  {
    q: "Do my files get uploaded to your servers?",
    a: "No. All processing happens entirely within your browser using JavaScript and Canvas APIs. Your images, text, and documents never leave your device. There is no server upload, no cloud storage, and no third-party processing — your data stays private and secure on your own machine.",
  },
  {
    q: "What browsers and devices are supported?",
    a: "Creators Units works on all modern browsers including Chrome, Firefox, Safari, and Edge on desktop, tablet, and mobile. The tools use standard web APIs that have been supported since 2018, so even slightly older devices will run most tools without issues.",
  },
  {
    q: "How do I report a bug or request a new tool?",
    a: "Visit our Contact page and send us a message describing the issue or feature you would like to see. We review every submission and prioritize tools based on creator demand. Include as much detail as possible about the problem or use case you have in mind.",
  },
];

/**
 * Home page — fully Server Component.
 *
 * Only HomeSearch is a client component (for the interactive search input).
 * All other sections are static HTML with zero client-side JavaScript.
 * This dramatically improves LCP, FCP, and reduces JS bundle size.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content" id="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container text-center">
            <span className="badge badge-accent mb-4" aria-hidden="true">All-in-one Toolkit</span>
            <h1 className={styles.title}>
              Free Web Tools to <span className="text-primary-color">Optimize Images, Preview Videos &amp; Grow Socials</span>
            </h1>
            <p className={styles.subtitle}>
              Fast, private browser tools to compress JPG/PNG/WebP, extract YouTube tags, generate QR codes, build Link-in-Bio pages, and format text.
            </p>

            {/* Search Widget — only client component on this page */}
            <HomeSearch />
          </div>
        </section>

        {/* Categories Section */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="container">
            <h2 className="text-center mb-2">Browse Tools by Category</h2>
            <p className="text-center text-muted mb-8">
              Explore our organized collections of tools designed for creators and web professionals.
            </p>

            <div className="grid-cols-4">
              {Object.values(categories).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="card card-hover flex flex-col gap-3"
                  style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
                  aria-label={`Browse ${cat.name} - ${cat.desc}`}
                >
                  <div className={styles.catIcon} aria-hidden="true">
                    {cat.slug === "image" && "🖼️"}
                    {cat.slug === "creator" && "📹"}
                    {cat.slug === "social" && "📱"}
                    {cat.slug === "utility" && "⚙️"}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{cat.name}</h3>
                  <p className="text-muted" style={{ fontSize: "0.875rem", margin: 0, flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600", marginTop: "0.5rem" }}>
                    View Tools &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Grid */}
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-2">Popular Tools</h2>
            <p className="text-center text-muted mb-8">
              Quickly access the most popular tools used by creators every day.
            </p>

            <div className="grid-cols-2">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="card card-hover flex justify-between items-center"
                  style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
                  aria-label={`Open ${tool.title} - ${tool.shortDesc}`}
                >
                  <div className="flex flex-col gap-1" style={{ maxWidth: "75%" }}>
                    <span className="badge badge-accent" style={{ fontSize: "0.65rem", alignSelf: "flex-start" }}>
                      {tool.categoryName}
                    </span>
                    <h3 style={{ fontSize: "1.15rem", margin: "0.25rem 0 0 0" }}>{tool.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                      {tool.shortDesc}
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Creators Units Section */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="container">
            <h2 className="text-center mb-2">Why Use Creators Units?</h2>
            <p className="text-center text-muted mb-8">
              A premium, lightweight, privacy-focused experience built for the modern web.
            </p>

            <div className="grid-cols-3">
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">🔒</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>100% Private &amp; Safe</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  All code runs locally inside your browser. Your images and documents never touch our servers, protecting your brand assets.
                </p>
              </div>

              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">⚡</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>Ultra Fast Performance</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  Built on static loading pipelines. Pages load instantly with no heavy frameworks or loading delays.
                </p>
              </div>

              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">💻</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>No Installation</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  Use any tool on demand. Completely responsive for desktops, iPads, and mobile smartphones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Introduction & Info Section */}
        <section className="section" style={{ borderTop: "1px solid var(--border-color)" }} aria-labelledby="seo-info-heading">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 id="seo-info-heading" className="text-center mb-6">
              Creator Units: Free Online Tools for Creators &amp; Social Media
            </h2>
            <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
              <p>
                In the digital era, content creators, freelancers, and small businesses need fast, reliable utilities to optimize their workflow and assets. <strong>Creator Units</strong> is a premium, privacy-first suite of free online tools built to address your daily production needs without compromising your data security.
              </p>
              <p>
                Unlike generic platforms that require uploading files to remote servers, Creator Units operates entirely in your browser. Utilizing advanced client-side JavaScript, Canvas, and Web Cryptography APIs, your images, text inputs, and files never leave your device. This guarantees absolute privacy, instantaneous execution times, and zero bandwidth waste.
              </p>

              <h3 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
                What Can You Do on Creator Units?
              </h3>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>
                  <strong>Local Image Optimization:</strong> Compress, convert, and resize JPG, PNG, and WebP graphics on-device using our client-side image compressor. Speed up your web performance and enhance SEO.
                </li>
                <li>
                  <strong>YouTube SEO Tools:</strong> Extract tags from top-performing competitor uploads, preview YouTube thumbnails on mock mobile/desktop feeds to maximize CTR, and structure video metadata.
                </li>
                <li>
                  <strong>Social Profile Builders:</strong> Compose stylized Unicode text, craft engaging bio scripts for Instagram and TikTok, and generate customized WhatsApp direct click-to-chat link strings.
                </li>
                <li>
                  <strong>Security &amp; Utility Generators:</strong> Create dynamic, offline-first QR codes, generate highly secure cryptographic passwords, count words/characters, and format text case layout strings.
                </li>
              </ul>

              <p>
                Whether you are optimizing a blog portfolio, refining video descriptions, or managing brand links, Creator Units provides the technical foundation you need. Bookmark this homepage for instant access to over 30+ browser utilities.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 id="faq-heading" className="text-center mb-6">Frequently Asked Questions</h2>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="card" style={{ borderStyle: "solid" }}>
                  <summary style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: "0.5rem 0",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    {faq.q}
                    <span aria-hidden="true" style={{ fontSize: "1.25rem", color: "var(--accent)" }}>+</span>
                  </summary>
                  <p className="text-muted" style={{ fontSize: "0.9rem", margin: "0.5rem 0 0 0", paddingTop: "0.5rem", borderTop: "1px solid var(--border-color)" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* All Tools Directory — SSR links so Googlebot indexes every tool */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }} aria-labelledby="all-tools-heading">
          <div className="container">
            <h2 id="all-tools-heading" className="text-center mb-2">All {tools.length} Free Tools</h2>
            <p className="text-center text-muted mb-8">
              Every tool is free, runs in your browser, and requires no sign-up.
            </p>
            <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="card card-hover flex flex-col gap-2"
                  style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                  aria-label={`${tool.title} — ${tool.shortDesc}`}
                >
                  <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start" }}>{tool.categoryName}</span>
                  <h3 style={{ fontSize: "1rem", margin: 0 }}>{tool.title}</h3>
                  <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, lineHeight: "1.4", flexGrow: 1 }}>{tool.shortDesc}</p>
                  <span className="text-primary-color" style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "0.25rem" }}>Open &rarr;</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tools" className="btn btn-primary">Browse All Tools &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Blog Teaser — shown only when articles data exists */}
        {latestArticles.length > 0 && (
          <section className="section" aria-labelledby="blog-teaser-heading">
            <div className="container">
              <h2 id="blog-teaser-heading" className="text-center mb-2">Latest from the Blog</h2>
              <p className="text-center text-muted mb-8">
                In-depth guides on image optimization, YouTube SEO, and creator workflows.
              </p>
              <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
                {latestArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.5rem" }}
                  >
                    <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start", textTransform: "capitalize" }}>{article.category}</span>
                    <h3 style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.4" }}>{article.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, lineHeight: "1.5" }}>{article.metaDesc}</p>
                    <span className="text-primary-color" style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "0.5rem" }}>Read Guide &rarr;</span>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link href="/blog" className="btn btn-secondary">View All Articles &rarr;</Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

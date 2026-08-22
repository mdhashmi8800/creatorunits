export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toolsIndex as tools, categories } from "@/data/tools";
import HomeSearch from "./HomeSearch";
import styles from "./page.module.css";
import { articlesIndex } from "@/data/articles-index";

export const metadata: Metadata = {
  title: "Free Web Tools for Creators & Social Media | Creator Units",
  description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Web Tools for Creators & Social Media | Creator Units",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    url: "https://www.creatorunits.com",
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

// Build-time constants for lists — no client JS needed
const popularToolSlugs = [
  "image-compressor",
  "youtube-thumbnail-preview",
  "password-generator",
  "qr-code-generator",
  "social-media-link-in-bio-helper",
  "whatsapp-link-generator"
];

const trendingSlugs = [
  "youtube-earnings-calculator",
  "video-to-mp3",
  "image-to-pdf",
  "character-counter",
  "ai-hook-generator",
  "url-encoder-decoder"
];

const latestSlugs = [
  "ai-caption-generator",
  "tiktok-earnings-calculator",
  "base64-encoder-decoder",
  "instagram-earnings-calculator",
  "split-pdf",
  "word-counter"
];

const featuredSlugs = [
  "youtube-tag-extractor",
  "merge-pdf",
  "xml-sitemap-generator",
  "fancy-text-generator",
  "cpm-calculator",
  "aspect-ratio-calculator"
];

const recentlyAddedSlugs = [
  "jwt-decoder",
  "meta-tag-generator",
  "robots-txt-generator",
  "video-compressor",
  "ai-script-generator",
  "json-formatter"
];

const popularTools = popularToolSlugs
  .map(slug => tools.find(t => t.slug === slug))
  .filter((t): t is typeof tools[number] => !!t);

const trendingTools = trendingSlugs
  .map(slug => tools.find(t => t.slug === slug))
  .filter((t): t is typeof tools[number] => !!t);

const latestTools = latestSlugs
  .map(slug => tools.find(t => t.slug === slug))
  .filter((t): t is typeof tools[number] => !!t);

const featuredToolsList = featuredSlugs
  .map(slug => tools.find(t => t.slug === slug))
  .filter((t): t is typeof tools[number] => !!t);

const recentlyAddedTools = recentlyAddedSlugs
  .map(slug => tools.find(t => t.slug === slug))
  .filter((t): t is typeof tools[number] => !!t);

// Compute tool counts per category at build time
const toolCounts = tools.reduce((acc, tool) => {
  acc[tool.category] = (acc[tool.category] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const faqs = [
  {
    q: "Are the tools on Creator Units really free?",
    a: "Yes, every tool on Creator Units is completely free with no hidden costs. You get unlimited access to all 100+ tools including image compression, QR code generation, thumbnail previews, and text formatting — no account creation, no trial periods, and no premium tiers required.",
  },
  {
    q: "Do my files get uploaded to your servers?",
    a: "No. All processing happens entirely within your browser using JavaScript and Canvas APIs. Your images, text, and documents never leave your device. There is no server upload, no cloud storage, and no third-party processing — your data stays private and secure on your own machine.",
  },
  {
    q: "What browsers and devices are supported?",
    a: "Creator Units works on all modern browsers including Chrome, Firefox, Safari, and Edge on desktop, tablet, and mobile. The tools use standard web APIs that have been supported since 2018, so even slightly older devices will run most tools without issues.",
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
export default async function Home() {
  const latestArticles = articlesIndex.slice(0, 6);
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/#webpage",
    "url": "https://www.creatorunits.com/",
    "name": "Free Web Tools for Creators & Social Media | Creator Units",
    "description": "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://www.creatorunits.com/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <span className={styles.trustBadge}>
                <span className={styles.badgeIcon}>🛠️</span> 100+ Free Tools
              </span>
              <span className={styles.trustBadge}>
                <span className={styles.badgeIcon}>⚡</span> Ultra Fast
              </span>
              <span className={styles.trustBadge}>
                <span className={styles.badgeIcon}>🔒</span> Secure Sandbox
              </span>
              <span className={styles.trustBadge}>
                <span className={styles.badgeIcon}>🛡️</span> Privacy First
              </span>
              <span className={styles.trustBadge}>
                <span className={styles.badgeIcon}>🚫</span> No Login
              </span>
            </div>
          </div>
        </section>

        {/* Popular Tools Grid */}
        <section className="section" style={{ paddingTop: "1rem" }}>
          <div className="container">
            <h2 className="text-center mb-2">Popular Tools</h2>
            <p className="text-center text-muted mb-6">
              Quickly access the most popular tools used by creators every day.
            </p>

            {/* Quick Category Jump Links */}
            <div className={styles.quickCategoryLinks}>
              <span>Jump to category:</span>
              {Object.values(categories).map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className={styles.quickCategoryLink}>
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="grid-cols-3">
              {popularTools.map((tool) => {
                let catClass = styles.toolCardUtility;
                if (tool.category === "image") catClass = styles.toolCardImage;
                else if (tool.category === "creator") catClass = styles.toolCardCreator;
                else if (tool.category === "social") catClass = styles.toolCardSocial;
                else if (tool.category === "video") catClass = styles.toolCardVideo;
                else if (tool.category === "pdf") catClass = styles.toolCardPdf;
                else if (tool.category === "seo") catClass = styles.toolCardSeo;
                else if (tool.category === "developer") catClass = styles.toolCardDeveloper;
                else if (tool.category === "business") catClass = styles.toolCardBusiness;
                else if (tool.category === "ai-creator") catClass = styles.toolCardAiCreator;

                return (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.category}/${tool.slug}`}
                    className={`${styles.toolCard} ${catClass}`}
                    aria-label={`Open ${tool.title} - ${tool.shortDesc}`}
                  >
                    <span className="badge badge-accent mb-2" style={{ fontSize: "0.65rem", alignSelf: "flex-start" }}>
                      {tool.categoryName}
                    </span>
                    <h3 style={{ fontSize: "1.1rem", margin: "0.25rem 0 0.5rem 0", fontWeight: "600" }}>{tool.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                      {tool.shortDesc}
                    </p>
                    <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600", marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      Open Tool &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
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
              {Object.values(categories).map((cat) => {
                const count = toolCounts[cat.slug] || 0;
                return (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className={styles.categoryCard}
                    aria-label={`Browse ${cat.name} - ${count} tools - ${cat.desc}`}
                  >
                    <div className={styles.categoryHeader}>
                      <div className={`${styles.categoryIconBg} ${styles[`categoryIconBg-${cat.slug}`]}`}>
                        <span className={styles.categoryIcon} aria-hidden="true">
                          {cat.slug === "image" && "🖼️"}
                          {cat.slug === "creator" && "📹"}
                          {cat.slug === "social" && "📱"}
                          {cat.slug === "utility" && "⚙️"}
                          {cat.slug === "video" && "🎥"}
                          {cat.slug === "pdf" && "📄"}
                          {cat.slug === "seo" && "📈"}
                          {cat.slug === "developer" && "💻"}
                          {cat.slug === "business" && "📊"}
                          {cat.slug === "ai-creator" && "🤖"}
                        </span>
                      </div>
                      <span className={styles.categoryCount}>{count} Tools</span>
                    </div>
                    <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.25rem 0", fontWeight: "600" }}>{cat.name}</h3>
                    <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                      {cat.desc}
                    </p>
                    <span className={styles.categoryLink}>
                      Explore Category &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Split Utility Directory Dashboard */}
        <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container">
            <h2 className="text-center mb-2">Explore Utilities by Activity</h2>
            <p className="text-center text-muted mb-8">
              Discover recently added, popular, and trending on-device web tools.
            </p>

            <div className={styles.directoryLayout}>
              {/* Trending Column */}
              <div className={styles.directoryColumn}>
                <div className={styles.columnHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={styles.columnIcon}>🔥</span>
                    <h3 className={styles.columnTitle}>Trending Tools</h3>
                  </div>
                  <Link href="/tools" className={styles.columnViewAll}>View all &rarr;</Link>
                </div>
                <div className={styles.denseList}>
                  {trendingTools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.category}/${tool.slug}`}
                      className={styles.denseListItem}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", maxWidth: "85%" }}>
                        <span className={styles.itemTitle}>{tool.title}</span>
                        <span className={styles.itemDesc}>{tool.shortDesc}</span>
                      </div>
                      <span className={styles.itemArrow}>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Column */}
              <div className={styles.directoryColumn}>
                <div className={styles.columnHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={styles.columnIcon}>✨</span>
                    <h3 className={styles.columnTitle}>Featured Tools</h3>
                  </div>
                  <Link href="/tools" className={styles.columnViewAll}>View all &rarr;</Link>
                </div>
                <div className={styles.denseList}>
                  {featuredToolsList.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.category}/${tool.slug}`}
                      className={styles.denseListItem}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", maxWidth: "85%" }}>
                        <span className={styles.itemTitle}>{tool.title}</span>
                        <span className={styles.itemDesc}>{tool.shortDesc}</span>
                      </div>
                      <span className={styles.itemArrow}>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Latest Column */}
              <div className={styles.directoryColumn}>
                <div className={styles.columnHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={styles.columnIcon}>⚡</span>
                    <h3 className={styles.columnTitle}>Latest Tools</h3>
                  </div>
                  <Link href="/tools" className={styles.columnViewAll}>View all &rarr;</Link>
                </div>
                <div className={styles.denseList}>
                  {latestTools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.category}/${tool.slug}`}
                      className={styles.denseListItem}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", maxWidth: "85%" }}>
                        <span className={styles.itemTitle}>{tool.title}</span>
                        <span className={styles.itemDesc}>{tool.shortDesc}</span>
                      </div>
                      <span className={styles.itemArrow}>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recently Added Column */}
              <div className={styles.directoryColumn}>
                <div className={styles.columnHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={styles.columnIcon}>🆕</span>
                    <h3 className={styles.columnTitle}>Recently Added</h3>
                  </div>
                  <Link href="/tools" className={styles.columnViewAll}>View all &rarr;</Link>
                </div>
                <div className={styles.denseList}>
                  {recentlyAddedTools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.category}/${tool.slug}`}
                      className={styles.denseListItem}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", maxWidth: "85%" }}>
                        <span className={styles.itemTitle}>{tool.title}</span>
                        <span className={styles.itemDesc}>{tool.shortDesc}</span>
                      </div>
                      <span className={styles.itemArrow}>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Creator Units Section */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }} aria-labelledby="why-us-heading">
          <div className="container">
            <h2 id="why-us-heading" className="text-center mb-2">Why Use Creator Units?</h2>
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
                  <strong>Social Profile Builders:</strong> Compose stylized Unicode text, brainstorm creative handles with our <Link href="/tools/social/username-generator" style={{ color: "var(--accent)", textDecoration: "underline" }}>Username Generator</Link> (read our checklist of <Link href="/blog/instagram-username-ideas" style={{ color: "var(--accent)", textDecoration: "underline" }}>Instagram Username Ideas</Link> for professional branding tips), craft engaging bio scripts, and generate customized WhatsApp links.
                </li>
                <li>
                  <strong>Security &amp; Utility Generators:</strong> Create dynamic, offline-first <Link href="/tools/utility/qr-code-generator" style={{ color: "var(--accent)", textDecoration: "underline" }}>QR codes</Link> (learn the steps in our guide on <Link href="/blog/how-to-create-qr-code-free" style={{ color: "var(--accent)", textDecoration: "underline" }}>how to create a QR code for free</Link>), generate highly secure cryptographic passwords, count words, and convert text case.
                </li>
              </ul>

              <p>
                Whether you are tracking analytics using our <Link href="/tools/utility/utm-builder" style={{ color: "var(--accent)", textDecoration: "underline" }}>UTM Campaign Builder</Link> (see our beginner&apos;s <Link href="/blog/utm-tracking-link-guide" style={{ color: "var(--accent)", textDecoration: "underline" }}>UTM Tracking Link Guide</Link> for Google Analytics), optimizing a blog portfolio, refining video descriptions, or managing brand links, Creator Units provides the technical foundation you need. Bookmark this homepage for instant access to over 100 browser utilities.
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
                <details key={idx} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    {faq.q}
                    <span className={styles.faqIcon} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.faqAnswer}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* All Tools Directory Map */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }} aria-labelledby="all-tools-heading">
          <div className="container">
            <h2 id="all-tools-heading" className="text-center mb-2">All {tools.length} Free Tools</h2>
            <p className="text-center text-muted mb-8">
              Every tool is free, runs in your browser, and requires no sign-up.
            </p>

            <div className={styles.allToolsDirectory}>
              {Object.values(categories).map((cat) => {
                const catTools = tools.filter((t) => t.category === cat.slug);
                return (
                  <div key={cat.slug} className={styles.directoryGroup}>
                    <h3 className={styles.directoryGroupTitle}>
                      <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
                    </h3>
                    <ul className={styles.directoryGroupList}>
                      {catTools.map((tool) => (
                        <li key={tool.id}>
                          <Link href={`/tools/${tool.category}/${tool.slug}`}>
                            {tool.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link href="/tools" className="btn btn-primary">Explore All Tools Dashboard &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        {latestArticles.length > 0 && (
          <section className="section" aria-labelledby="blog-teaser-heading">
            <div className="container">
              <h2 id="blog-teaser-heading" className="text-center mb-2">Latest from the Blog</h2>
              <p className="text-center text-muted mb-8">
                In-depth guides on image optimization, YouTube SEO, and creator workflows.
              </p>
              <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
                {latestArticles.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.5rem" }}
                  >
                    <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start" }}>{post.categoryLabel || "Blog"}</span>
                    <h3 style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.4" }}>{post.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, lineHeight: "1.5" }}>{post.metaDesc}</p>
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

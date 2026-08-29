export const dynamic = "force-static";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articlesIndex } from "@/data/articles-index";
import { toolsIndex } from "@/data/tools-index";

export const metadata: Metadata = {
  title: "Muhammad Hashmi (Md Hashmi) — Founder & Lead Developer | Creator Units",
  description: "Muhammad Hashmi (Md Hashmi) is the founder, full-stack engineer, and content strategist behind CreatorUnits.com. Specializing in browser-side utilities, technical SEO, and privacy-first web architecture.",
  alternates: {
    canonical: "/author/md-hashmi",
  },
  openGraph: {
    title: "Muhammad Hashmi (Md Hashmi) — Creator Units",
    description: "Founder & Lead Developer of Creator Units. Building 100% free, private, client-side tools for creators, freelancers, and marketers.",
    url: "https://www.creatorunits.com/author/md-hashmi",
    type: "profile",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hashmi — Founder & Lead Developer | Creator Units",
    description: "Founder & Lead Developer of Creator Units. Building 100% free, private, client-side tools for creators.",
    images: ["/og-image.png"],
    creator: "@Oye_hasmi",
  },
};

export default function AuthorMdHashmiPage() {
  const authorArticles = articlesIndex.slice(0, 12);
  const featuredTools = toolsIndex
    .filter((t) =>
      [
        "utm-builder",
        "image-compressor",
        "qr-code-generator",
        "xml-sitemap-generator",
        "youtube-tag-extractor",
        "username-generator",
      ].includes(t.slug)
    )
    .slice(0, 6);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.creatorunits.com/author/md-hashmi#person",
    name: "Muhammad Hashmi",
    alternateName: "Md Hashmi",
    url: "https://www.creatorunits.com/author/md-hashmi",
    jobTitle: "Founder & Lead Full-Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Creator Units",
      url: "https://www.creatorunits.com",
    },
    description:
      "Full-stack software engineer and creator tools architect with a focus on client-side web technologies, high-performance browser applications, and technical SEO.",
    sameAs: [
      "https://instagram.com/oye_hasmi",
      "https://twitter.com/Oye_hasmi",
      "https://github.com/mdhashmi8800",
    ],
    knowsAbout: [
      "Technical SEO",
      "Client-Side Web Architecture",
      "JavaScript / TypeScript",
      "HTML5 Canvas API",
      "Web Cryptography API",
      "Content Strategy & Web Optimization",
      "Digital Marketing & UTM Analytics",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/author/md-hashmi#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creatorunits.com/" },
      { "@type": "ListItem", position: 2, name: "Authors", item: "https://www.creatorunits.com/about" },
      { "@type": "ListItem", position: 3, name: "Muhammad Hashmi", item: "https://www.creatorunits.com/author/md-hashmi" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content" id="main-content">
        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2.5rem" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Authors", href: "/about" },
                { label: "Muhammad Hashmi" },
              ]}
            />

            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
                marginTop: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-light, #f0f4ff)",
                  color: "var(--accent, #0070f3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  flexShrink: 0,
                  border: "2px solid var(--border-color)",
                }}
                aria-hidden="true"
              >
                MH
              </div>

              <div style={{ flex: 1, minWidth: "260px" }}>
                <span className="badge badge-accent mb-2">Founder &amp; Author</span>
                <h1 style={{ fontSize: "2.25rem", lineHeight: "1.25", margin: "0.25rem 0 0.5rem 0" }}>
                  Muhammad Hashmi
                </h1>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: "0 0 1rem 0" }}>
                  Lead Full-Stack Developer, Creator Tools Architect &amp; Technical Writer
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.9rem" }}>
                  <a
                    href="https://twitter.com/Oye_hasmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}
                  >
                    Twitter / X @Oye_hasmi &rarr;
                  </a>
                  <a
                    href="https://instagram.com/oye_hasmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}
                  >
                    Instagram @oye_hasmi &rarr;
                  </a>
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                    style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}
                  >
                    Contact Author &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  About Muhammad Hashmi
                </h2>
                <p>
                  Muhammad Hashmi (known online as <strong>Md Hashmi</strong>) is a full-stack web developer, technical SEO engineer, and digital creator. He founded <strong>CreatorUnits.com</strong> with a clear mission: to eliminate the friction, privacy risks, and subscription paywalls of everyday creator utilities.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Frustrated by slow online converters that upload sensitive personal photos and graphics to unknown cloud servers, Muhammad engineered Creator Units to operate <strong>100% client-side</strong> in the visitor&apos;s browser using modern JavaScript, HTML5 Canvas, and Web Cryptography APIs.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Areas of Expertise
                </h2>
                <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Client-Side Web Architecture:</strong> Engineering high-performance browser tools that process media on-device without cloud server round-trips.</li>
                  <li><strong>Technical SEO &amp; Web Standards:</strong> Schema.org structured data, Core Web Vitals optimization, XML sitemaps, canonicalization, and crawl budget hygiene.</li>
                  <li><strong>Campaign Analytics &amp; UTM Tracking:</strong> Designing tracking architectures for Google Analytics 4 (GA4), marketing attribution, and link campaign optimization.</li>
                  <li><strong>Creator &amp; Social Workflows:</strong> YouTube video SEO, thumbnail CTR optimization, social media dimensions, and digital publishing.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Editorial Standards &amp; Content Review
                </h2>
                <p>
                  Every technical guide, calculator formula, and tool workflow published on Creator Units is authored, verified, and periodically updated by Muhammad. Calculations, code snippets, and platform specifications are tested directly against official platform documentation (Google Search Central, YouTube Creator Studio, Meta for Developers, and W3C web standards).
                </p>
                <p style={{ marginTop: "0.75rem" }}>
                  Read our full <Link href="/editorial-policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Editorial Policy</Link> to learn more about our verification protocols.
                </p>
              </div>

              {/* Featured Tools Developed */}
              <div style={{ marginTop: "1.5rem" }}>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                  Featured Tools Built by Muhammad
                </h2>
                <div className="grid-cols-3">
                  {featuredTools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.category}/${tool.slug}`}
                      className="card card-hover flex flex-col gap-2"
                      style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    >
                      <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start" }}>
                        {tool.categoryName}
                      </span>
                      <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>{tool.title}</h3>
                      <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                        {tool.shortDesc}
                      </p>
                      <span className="text-primary-color" style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "0.25rem" }}>
                        Try Tool &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Articles Authored */}
              <div style={{ marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                  Recent Guides Authored
                </h2>
                <div className="grid-cols-2">
                  {authorArticles.map((art) => (
                    <Link
                      key={art.slug}
                      href={`/blog/${art.slug}`}
                      className="card card-hover flex flex-col gap-2"
                      style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    >
                      <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start" }}>
                        {art.categoryLabel}
                      </span>
                      <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>{art.title}</h3>
                      <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                        {art.metaDesc}
                      </p>
                      <span className="text-primary-color" style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "0.25rem" }}>
                        Read Guide &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

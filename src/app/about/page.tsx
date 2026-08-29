export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { toolsIndex } from "@/data/tools-index";

export const metadata: Metadata = {
  title: "About Creator Units — Free Privacy-First Tools for Content Creators",
  description: "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, developers, freelancers, and small businesses. 103+ tools, no sign-up, 100% client-side.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Creator Units — Free Privacy-First Tools for Content Creators",
    description: "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, developers, freelancers, and small businesses.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Is Creator Units really 100% free?",
    answer: "Yes — every tool on Creator Units is completely free with no hidden subscription tiers, no premium upgrades, and no pay-per-use limits. We sustain the platform through non-intrusive advertising. You get full, unlimited access to all 103+ tools at zero cost.",
  },
  {
    question: "Do my files get uploaded to your servers?",
    answer: "No. Every tool on Creator Units runs entirely inside your web browser using modern JavaScript, HTML5 Canvas, and Web Cryptography APIs. Your images, text, and documents are never transmitted to any server — they stay on your device from start to finish. This is our core architectural promise.",
  },
  {
    question: "Who is Creator Units designed for?",
    answer: "Creator Units is built for YouTube creators, Instagram influencers, social media managers, web developers, freelancers, bloggers, small business owners, students, and anyone who needs fast, reliable web utilities without installing software or creating accounts.",
  },
  {
    question: "How many tools are available on Creator Units?",
    answer: "We currently offer 103+ tools across 10 specialized categories: Image Tools, Creator Tools, Social Media Tools, Utility Tools, Video Tools, PDF Tools, SEO Tools, Developer Tools, Business Calculators, and AI Creator Helpers.",
  },
  {
    question: "Who founded and maintains Creator Units?",
    answer: "Creator Units was founded and is actively developed by Muhammad Hashmi (Md Hashmi), a full-stack web engineer and creator tools architect dedicated to building fast, privacy-respecting software.",
  },
  {
    question: "How do I suggest a new tool or report a bug?",
    answer: "Visit our Contact page and submit a message describing the tool you need or the issue you encountered. We review every submission personally and prioritize new features based on creator community demand.",
  },
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.creatorunits.com/about#webpage",
    url: "https://www.creatorunits.com/about",
    name: "About Creator Units — Free Privacy-First Tools for Content Creators",
    description: "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, developers, freelancers, and small businesses. 103+ tools, no sign-up, 100% client-side.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/about#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/about#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creatorunits.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.creatorunits.com/about" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="main-content" id="main-content">
        {/* Hero */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <span className="badge badge-accent mb-4">Our Mission &amp; Story</span>
            <h1 style={{ fontSize: "2.25rem", lineHeight: "1.3", marginBottom: "1rem" }}>
              About Creator Units
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
              Creator Units is a free, privacy-first suite of {toolsIndex.length}+ browser-based tools designed for content creators, freelancers, developers, and digital professionals who need fast, reliable utilities without sign-ups, subscriptions, or cloud uploads.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Why We Built Creator Units
                </h2>
                <p>
                  If you have ever tried to compress an image, generate a UTM tracking link, or extract YouTube video tags online, you have almost certainly encountered the same frustrating experience: you visit a &quot;free&quot; tool website, upload your file, wait for it to process on a remote server, navigate through intrusive pop-ups, only to discover the tool is locked behind a paid subscription.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Your assets — which may contain private client media, unreleased creative assets, or proprietary marketing campaigns — are transmitted to third-party cloud servers you know nothing about.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  We built Creator Units to solve this problem at the architectural level. Every single tool on this platform runs <strong>entirely inside your web browser</strong> using JavaScript, the HTML5 Canvas API, and the Web Cryptography API. No file ever leaves your device. No server ever receives your data. No upload ever happens.
                </p>
              </div>

              {/* Founder Section */}
              <div className="card" style={{ padding: "2rem", borderStyle: "solid" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-light, #f0f4ff)",
                      color: "var(--accent, #0070f3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    MH
                  </div>
                  <div style={{ flex: 1, minWidth: "220px" }}>
                    <h3 style={{ fontSize: "1.25rem", margin: "0 0 0.25rem 0", color: "var(--text-primary)" }}>
                      Muhammad Hashmi (Md Hashmi)
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 0.75rem 0" }}>
                      Founder &amp; Lead Engineer, Creator Units
                    </p>
                    <p style={{ fontSize: "0.925rem", lineHeight: "1.6", margin: "0 0 1rem 0" }}>
                      Muhammad is a full-stack engineer and digital creator specializing in client-side web architecture, technical SEO, and creator productivity tooling. He writes our in-depth guides and maintains all 103+ tool algorithms.
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <Link href="/author/md-hashmi" className="btn btn-secondary btn-sm">
                        View Author Profile &rarr;
                      </Link>
                      <Link href="/editorial-policy" className="btn btn-secondary btn-sm">
                        Editorial Standards &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Our Core Philosophy: Private, Fast, Free
                </h2>
                <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li>
                    <strong>Privacy by Default:</strong> On-device processing means your graphics, passwords, text, and documents stay strictly in your browser memory. We cannot see them, and no third-party cloud service can access them.
                  </li>
                  <li>
                    <strong>Instant Execution:</strong> Zero server round-trips mean instantaneous execution. Image compression, QR generation, text minification, and cryptographic hashing run in milliseconds.
                  </li>
                  <li>
                    <strong>Permanently Free:</strong> By keeping compute client-side, we eliminate heavy backend server costs, allowing us to provide all 103+ tools 100% free, supported by non-intrusive display ads.
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Explore Our 10 Tool Categories
                </h2>
                <p>
                  Creator Units features 103+ dedicated tools across 10 specialized categories:
                </p>

                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong><Link href="/category/image" style={{ color: "var(--accent)" }}>Image Tools</Link>:</strong> Compress, resize, crop, rotate, flip, and convert JPG, PNG, and WebP graphics locally.</li>
                  <li><strong><Link href="/category/creator" style={{ color: "var(--accent)" }}>Creator Tools</Link>:</strong> YouTube thumbnail previewer, tag extractor, metadata organizer, and thumbnail downloader.</li>
                  <li><strong><Link href="/category/social" style={{ color: "var(--accent)" }}>Social Media Tools</Link>:</strong> Bio generators, Unicode fancy fonts, WhatsApp click-to-chat links, username generators, and hashtag helpers.</li>
                  <li><strong><Link href="/category/utility" style={{ color: "var(--accent)" }}>Utility Tools</Link>:</strong> Offline QR code generators, UTM campaign builders, secure password generators, and text case converters.</li>
                  <li><strong><Link href="/category/video" style={{ color: "var(--accent)" }}>Video Tools</Link>:</strong> Video compressor, thumbnail extractor, video-to-MP3 audio converter, and subtitle cleaners.</li>
                  <li><strong><Link href="/category/pdf" style={{ color: "var(--accent)" }}>PDF Tools</Link>:</strong> Merge, split, compress, protect, and unlock PDF documents client-side.</li>
                  <li><strong><Link href="/category/seo" style={{ color: "var(--accent)" }}>SEO Tools</Link>:</strong> XML sitemap generator, robots.txt builder, Schema.org generator, OpenGraph tag creator, and keyword density checker.</li>
                  <li><strong><Link href="/category/developer" style={{ color: "var(--accent)" }}>Developer Tools</Link>:</strong> JSON formatter, validator, JWT decoder, Base64 encoder/decoder, UUID generator, and HTML/CSS/JS minifiers.</li>
                  <li><strong><Link href="/category/business" style={{ color: "var(--accent)" }}>Business Tools</Link>:</strong> YouTube, TikTok, and Instagram earnings calculators, CPM/RPM formulas, ROI estimators, and profit margin calculators.</li>
                  <li><strong><Link href="/category/ai-creator" style={{ color: "var(--accent)" }}>AI Creator Tools</Link>:</strong> AI hook generator, script writer, caption creator, video idea generator, and content rewriters.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Technical Infrastructure
                </h2>
                <p>
                  Creator Units is built with <strong>Next.js 16</strong>, TypeScript, and modern CSS, deployed globally on Vercel&apos;s edge network. Pages are pre-rendered at build time (SSG) for sub-100ms response times worldwide. We adhere strictly to Google&apos;s Core Web Vitals standards with near-zero CLS and lightning-fast LCP metrics.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2rem", marginTop: "1rem" }}>
                <p style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "1.1rem" }}>
                  Connect with Creator Units
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  Have questions, tool requests, or partnership inquiries? Reach out via our{" "}
                  <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    Contact Page
                  </Link>
                  . Explore our{" "}
                  <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    Blog &amp; Guides
                  </Link>{" "}
                  for in-depth tutorials on video SEO, image optimization, and creator growth.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section style={{ marginTop: "4rem" }} aria-labelledby="about-faq-heading">
              <h2 id="about-faq-heading" style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                Frequently Asked Questions
              </h2>
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
                      {faq.question}
                      <span aria-hidden="true" style={{ fontSize: "1.25rem", color: "var(--accent)" }}>+</span>
                    </summary>
                    <p className="text-muted" style={{ fontSize: "0.9rem", margin: "0.5rem 0 0 0", paddingTop: "0.5rem", borderTop: "1px solid var(--border-color)", lineHeight: "1.65" }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/tools" className="btn btn-primary">Browse All Tools &rarr;</Link>
              <Link href="/blog" className="btn btn-secondary">Read Creator Guides &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

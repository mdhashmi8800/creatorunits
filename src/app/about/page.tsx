export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Creator Units — Free Browser-Based Tools for Content Creators",
  description: "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, freelancers, and small businesses. 33+ tools, no sign-up, no server upload.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Creator Units — Free Browser-Based Tools for Content Creators",
    description: "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, freelancers, and small businesses.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Is Creator Units really 100% free?",
    answer: "Yes — every tool on Creator Units is completely free with no hidden subscription tiers, no premium upgrades, and no pay-per-use charges. We sustain the platform through non-intrusive advertising. You get full, unlimited access to all 33+ tools at no cost.",
  },
  {
    question: "Do my files get uploaded to your servers?",
    answer: "No. Every tool on Creator Units runs entirely inside your web browser using JavaScript, Canvas, and Web Cryptography APIs. Your images, text, and documents are never transmitted to any server — they stay on your device from start to finish. This is our core architectural promise.",
  },
  {
    question: "Who is Creator Units designed for?",
    answer: "Creator Units is built for YouTube creators, Instagram influencers, social media managers, freelancers, bloggers, small business owners, students, and anyone who needs fast, reliable web utilities without installing software or creating accounts.",
  },
  {
    question: "How many tools are available on Creator Units?",
    answer: "We currently offer 33+ tools across four categories: Image Tools (compress, resize, crop, convert images), Creator Tools (YouTube thumbnail preview, tag extractor, metadata helper), Social Media Tools (fancy text, bio generators, hashtag helpers, WhatsApp link generators), and Utility Tools (QR codes, UTM builders, password generators, text case converters, word counters).",
  },
  {
    question: "How do I suggest a new tool or report a bug?",
    answer: "Visit our Contact page and submit a message describing the tool you need or the issue you encountered. We review every submission personally and prioritize tools based on creator community demand.",
  },
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.creatorunits.com/about#webpage",
    "url": "https://www.creatorunits.com/about",
    "name": "About Creator Units — Free Browser-Based Tools for Content Creators",
    "description": "Learn about Creator Units — the free, privacy-first toolkit built for YouTubers, Instagram creators, freelancers, and small businesses. 33+ tools, no sign-up, no server upload.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/about#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/about#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creatorunits.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.creatorunits.com/about" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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
            <span className="badge badge-accent mb-4">Our Story</span>
            <h1 style={{ fontSize: "2.25rem", lineHeight: "1.3", marginBottom: "1rem" }}>
              About Creator Units
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
              Creator Units is a free, privacy-first suite of 33+ browser-based tools designed for content creators, freelancers, and digital professionals who need fast, reliable utilities without the hassle of sign-ups, subscriptions, or cloud uploads.
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
                  If you have ever tried to compress an image online, you have almost certainly encountered the same frustrating experience: you visit a "free" tool website, upload your file, wait for it to process on a remote server, navigate through multiple pop-ups, only to discover the tool is limited unless you pay. Your file — which may contain private marketing assets, unreleased designs, or personal photos — has now been transmitted to a server you know nothing about.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  We built Creator Units to solve this problem at the architectural level. Every single tool on this platform runs <strong>entirely inside your web browser</strong> using JavaScript, the HTML5 Canvas API, and the Web Cryptography API. No file ever leaves your device. No server ever receives your data. No upload ever happens. This is not a privacy policy promise — it is a technical reality.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Our Core Philosophy: Private, Fast, Free
                </h2>
                <p>
                  Three principles guide every decision we make at Creator Units:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li>
                    <strong>Privacy by default.</strong> Browser-side processing means your images, passwords, text, and documents stay on your own machine. We cannot see them. No third-party storage provider can access them. This is especially important for creators who handle unreleased content, brand assets, and sensitive client files.
                  </li>
                  <li>
                    <strong>Instant performance.</strong> Because there is no server round-trip, tools execute in milliseconds. Image compression completes before you can blink. QR codes generate the moment you type a URL. Text formatting is instantaneous. The user experience feels like a desktop app, not a web service.
                  </li>
                  <li>
                    <strong>Permanently free.</strong> By eliminating backend infrastructure costs (no servers to maintain, no storage to pay for), we can offer the entire toolkit at zero cost — forever. We sustain Creator Units through non-intrusive display advertising, not paywalls.
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  What You Can Do on Creator Units
                </h2>
                <p>
                  Our 33+ tools span four focused categories, each designed to solve real problems that digital creators face every day:
                </p>

                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
                  🖼️ Image Tools
                </h3>
                <p>
                  Compress JPG, PNG, and WebP images with a real-time quality slider. Resize images to pixel-perfect dimensions while maintaining aspect ratio. Convert between image formats (JPG ↔ PNG ↔ WebP) in a single click. Crop images to exact social media aspect ratios. Extract HEX, RGB, and HSL color codes from any image using the Color Picker. Beautify screenshots for app stores and pitch decks with the Screenshot Beautifier. All operations are client-side and instantaneous.
                </p>

                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
                  📹 Creator Tools
                </h3>
                <p>
                  Preview how your YouTube thumbnails appear on desktop and mobile feeds before uploading — catching design problems before they cost you clicks. Extract tags from any public YouTube video to reverse-engineer competitor SEO strategy. Check thumbnail file specifications against YouTube&apos;s requirements. Build structured video metadata packages with our Video Metadata Helper. Generate thumbnail concept ideas with our AI-assisted Thumbnail Idea Helper.
                </p>

                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
                  📱 Social Media Tools
                </h3>
                <p>
                  Generate stylized Unicode text for Instagram bios, YouTube channel names, and Twitter profiles — no app required. Build a customized bio template with formatting suggestions. Create a WhatsApp click-to-chat link with pre-filled messages for business or creator use. Generate a fully custom Link-in-Bio HTML page you can host for free. Brainstorm creative, available username ideas for any niche. Find the right hashtags for Instagram and TikTok posts. Check your post character counts against platform-specific limits.
                </p>

                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
                  ⚙️ Utility Tools
                </h3>
                <p>
                  Generate cryptographically secure passwords with configurable length and character sets. Create QR codes for URLs, email addresses, WhatsApp numbers, and WiFi credentials — downloadable as PNG. Build UTM tracking links for Google Analytics campaigns. Encode and decode URLs. Convert text between Title Case, Sentence case, UPPERCASE, camelCase, and snake_case. Count words, characters, sentences, and estimated reading time. Convert units (pixels, bytes, time zones) used in digital production workflows.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Who Is Creator Units Built For?
                </h2>
                <p>
                  Creator Units serves a wide range of digital professionals:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>YouTube creators</strong> optimizing thumbnails, tags, and metadata to improve search rankings and CTR.</li>
                  <li><strong>Instagram influencers</strong> formatting bios, compressing images for feed quality, and building link-in-bio pages.</li>
                  <li><strong>Freelance designers</strong> who need quick image format conversions and compression without Photoshop.</li>
                  <li><strong>Small business owners</strong> generating QR codes for print materials, creating WhatsApp business links, and tracking campaign traffic with UTM parameters.</li>
                  <li><strong>Bloggers and content writers</strong> counting words, formatting text, and optimizing images for page speed.</li>
                  <li><strong>Students and educators</strong> who need accessible, no-cost tools for academic and creative projects.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Technical Architecture
                </h2>
                <p>
                  Creator Units is built on <strong>Next.js</strong> with static site generation, hosted on Vercel&apos;s global edge network. Pages are pre-rendered at build time and served from edge locations worldwide — delivering sub-200ms page loads globally. Interactive tool components are lazy-loaded only when needed, keeping the initial JavaScript bundle minimal.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Core Web Vitals are a primary design concern: our Largest Contentful Paint (LCP) consistently scores under 1.5s, Cumulative Layout Shift (CLS) is near-zero, and Interaction to Next Paint (INP) stays below 100ms on most devices. This technical quality directly supports our SEO performance and user experience goals.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2rem", marginTop: "1rem" }}>
                <p style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "1.1rem" }}>
                  Thank you for using Creator Units.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  If you have tool suggestions, bug reports, or partnership inquiries, please reach out through our{" "}
                  <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    contact page
                  </Link>
                  . We read every message and actively shape our roadmap based on creator feedback. You can also browse{" "}
                  <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    our blog
                  </Link>{" "}
                  for in-depth guides on using our tools, YouTube SEO, image optimization, and social media growth.
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
              <Link href="/tools" className="btn btn-primary">Browse All Tools →</Link>
              <Link href="/blog" className="btn btn-secondary">Read Our Blog →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

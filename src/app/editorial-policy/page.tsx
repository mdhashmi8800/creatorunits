export const dynamic = "force-static";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy & Content Standards — Creator Units",
  description: "Read our Editorial Policy. Learn how Creator Units creates, fact-checks, audits, and maintains its technical guides, formulas, calculators, and free web utilities.",
  alternates: {
    canonical: "/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy & Content Standards — Creator Units",
    description: "Learn how Creator Units creates, fact-checks, audits, and maintains its technical guides, formulas, calculators, and free web utilities.",
    url: "https://www.creatorunits.com/editorial-policy",
    images: ["/og-image.png"],
  },
};

export default function EditorialPolicyPage() {
  const policyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/editorial-policy#webpage",
    url: "https://www.creatorunits.com/editorial-policy",
    name: "Editorial Policy & Content Standards — Creator Units",
    description: "Learn how Creator Units creates, fact-checks, audits, and maintains its technical guides, formulas, calculators, and free web utilities.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/editorial-policy#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/editorial-policy#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creatorunits.com/" },
      { "@type": "ListItem", position: 2, name: "Editorial Policy", item: "https://www.creatorunits.com/editorial-policy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policyPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content" id="main-content">
        <section className="section" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "2.5rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Editorial Policy" },
              ]}
            />
            <span className="badge badge-accent mb-4">Integrity &amp; Standards</span>
            <h1 style={{ fontSize: "2.25rem", lineHeight: "1.3", marginBottom: "1rem" }}>
              Editorial Policy &amp; Content Standards
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              At Creator Units, we are committed to delivering original, fact-checked, and technically rigorous web utilities and educational guides. Here is how we research, build, and maintain our content.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  1. Our Editorial Mission
                </h2>
                <p>
                  Creator Units was established to provide content creators, marketers, developers, and small business owners with free, reliable, and privacy-first web utilities paired with actionable educational resources. Our goal is to answer real technical questions clearly — without fluff, deceptive claims, or generic filler.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  2. Tool Development &amp; Technical Accuracy
                </h2>
                <p>
                  Every interactive tool and calculator available on Creator Units is engineered and tested using client-side web standards (ECMAScript, HTML5 Canvas API, Web Cryptography API, and W3C specifications).
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Client-Side Guarantee:</strong> We verify that image processors, QR generators, and password builders execute locally within the browser sandbox without transmitting data to remote servers.</li>
                  <li><strong>Mathematical Verification:</strong> Formulas for business calculators (CPM, RPM, ROI, profit margins) are validated against standard financial and ad tech accounting definitions.</li>
                  <li><strong>Platform Constraint Auditing:</strong> Video dimensions, thumbnail file sizes, and character limits are checked against current official API guidelines for YouTube, Instagram, TikTok, LinkedIn, and X.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  3. Content Creation &amp; Authorship
                </h2>
                <p>
                  All articles, tutorials, and tool instructions published on Creator Units are authored and reviewed by our lead developer and creator, <Link href="/author/md-hashmi" style={{ color: "var(--accent)", textDecoration: "underline" }}>Muhammad Hashmi</Link>.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  We do not publish mass-produced, unverified automated content. Every guide must provide practical utility, concrete step-by-step instructions, real-world examples, and troubleshooting solutions.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  4. Independence, Advertising &amp; Commercial Transparency
                </h2>
                <p>
                  Creator Units is 100% free to access. We sustain our operations through display advertising (Google AdSense).
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>We do not accept paid reviews or covert endorsements.</li>
                  <li>Our recommendations for file formats, naming conventions, and SEO practices are based purely on empirical technical performance.</li>
                  <li>Advertisements are clearly demarcated from editorial content and tool interfaces.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  5. Corrections and Updates
                </h2>
                <p>
                  Web standards, social platform dimensions, and SEO best practices evolve continuously. We regularly audit our articles and tool algorithms. When platform specifications change or errors are detected, we revise the affected content promptly and update the <code>lastModified</code> timestamp.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  If you discover an inaccuracy or have a suggestion for improving a tool, please notify us via our <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>Contact Page</Link>.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2rem", marginTop: "1rem" }}>
                <p style={{ fontWeight: "600", color: "var(--text-primary)" }}>Related Information</p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <Link href="/about" className="btn btn-secondary btn-sm">About Creator Units &rarr;</Link>
                  <Link href="/author/md-hashmi" className="btn btn-secondary btn-sm">Author Profile &rarr;</Link>
                  <Link href="/privacy" className="btn btn-secondary btn-sm">Privacy Policy &rarr;</Link>
                  <Link href="/contact" className="btn btn-secondary btn-sm">Contact Support &rarr;</Link>
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

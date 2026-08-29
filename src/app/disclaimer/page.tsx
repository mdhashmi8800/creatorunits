export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Creator Units",
  description: "Read the Creator Units Website & Tool Disclaimer. Learn how our calculators, SEO generators, and creator utilities provide estimates and informational guidance.",
  alternates: {
    canonical: "/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer — Creator Units",
    description: "Read the Creator Units Website & Tool Disclaimer.",
    url: "https://www.creatorunits.com/disclaimer",
    images: ["/og-image.png"],
  },
};

export default function DisclaimerPage() {
  const disclaimerPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/disclaimer#webpage",
    url: "https://www.creatorunits.com/disclaimer",
    name: "Disclaimer — Creator Units",
    description: "Read the Creator Units Website & Tool Disclaimer.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/disclaimer#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/disclaimer#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.creatorunits.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Disclaimer",
        item: "https://www.creatorunits.com/disclaimer",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Disclaimer" },
            ]}
          />
          <h1 className="mb-6">Disclaimer</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              The information and browser tools provided on <strong>Creator Units</strong> (<Link href="/" style={{ color: "var(--accent)" }}>creatorunits.com</Link>) are published for general educational, technical, and productivity purposes only.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              1. Calculator &amp; Revenue Estimates
            </h2>
            <p>
              Earnings calculators (including YouTube Earnings Calculator, TikTok Earnings Calculator, and Instagram Calculator) generate estimates based on standard industry RPM and CPM benchmarks. Actual revenue varies widely depending on viewer demographics, niche monetization, seasonal ad demand, viewer retention, and platform policy changes. Creator Units does not guarantee specific earnings.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              2. Technical &amp; SEO Tools
            </h2>
            <p>
              SEO utilities (such as Schema Generator, Meta Tag Generator, and Robots.txt Generator) produce code compliant with current web specifications. However, search engine ranking algorithms consider hundreds of factors beyond on-page tags. Use of our tools does not guarantee specific search positions or indexing timelines.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              3. Client-Side Data Safety
            </h2>
            <p>
              While all image processing, PDF operations, and text conversions execute client-side in your web browser, users are advised to maintain backups of original master files before applying irreversible compression or formatting.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              4. External Links &amp; Third-Party Services
            </h2>
            <p>
              Creator Units may reference external documentation or social networks (e.g. YouTube, Google Analytics, Instagram). We do not control or assume responsibility for the content, privacy policies, or practices of third-party websites.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              5. Contact Us
            </h2>
            <p>
              If you require further information or have questions about our disclaimer, please contact us via our <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>Contact Page</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

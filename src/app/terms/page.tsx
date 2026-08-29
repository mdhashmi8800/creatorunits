export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Creator Units",
  description: "Read the Creator Units Terms of Service. Clear, transparent guidelines for using our free browser tools for personal and commercial projects.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service — Creator Units",
    description: "Read our Terms of Service. Clear, transparent rules for using our free creator utilities.",
    url: "https://www.creatorunits.com/terms",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  const termsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/terms#webpage",
    url: "https://www.creatorunits.com/terms",
    name: "Terms of Service — Creator Units",
    description: "Read the Creator Units Terms of Service. Clear, transparent guidelines for using our free browser tools for personal and commercial projects.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/terms#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/terms#breadcrumb",
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
        name: "Terms of Service",
        item: "https://www.creatorunits.com/terms",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
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
              { label: "Terms of Service" },
            ]}
          />
          <h1 className="mb-6">Terms of Service</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              Welcome to Creator Units (<Link href="/" style={{ color: "var(--accent)" }}>creatorunits.com</Link>). By accessing and utilizing our website, educational articles, and browser-based software tools, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing Creator Units, you agree to these Terms of Service, applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              2. Free Personal &amp; Commercial Use License
            </h2>
            <p>
              Permission is granted to use all 103+ tools on Creator Units free of charge for both personal and commercial purposes (e.g. compressing graphics for client websites, formatting social media text, generating business QR codes, calculating advertising CPM/RPM formulas).
            </p>
            <p style={{ marginTop: "0.5rem" }}>You may not:</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li>Decompile, reverse-engineer, or attempt to extract source code for illicit redistribution.</li>
              <li>Re-host our tools in deceptive third-party iframe frames designed to impersonate Creator Units.</li>
              <li>Use our utilities to generate or transmit malicious code, illegal materials, or harmful automation attacks.</li>
            </ul>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              3. Disclaimer of Warranty
            </h2>
            <p>
              The tools, calculators, and articles on Creator Units are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we verify algorithmic accuracy, Creator Units makes no express or implied warranties regarding uninterrupted service, fitness for specific commercial endeavors, or third-party platform API changes.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall Creator Units or Muhammad Hashmi be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our tools or calculators.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              5. Modifications to Service &amp; Terms
            </h2>
            <p>
              Creator Units reserves the right to improve, modify, or update tools and these Terms of Service at any time without prior notice.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              6. Governing Law &amp; Inquiries
            </h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact us via our <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>Contact Page</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

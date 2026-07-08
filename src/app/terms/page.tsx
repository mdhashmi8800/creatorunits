export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service - Creators Units",
  description: "Read our Terms of Service. Simple, straightforward rules for using our free creator utilities.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service - Creators Units",
    description: "Read our Terms of Service. Simple, straightforward rules for using our free creator utilities.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  const termsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/terms#webpage",
    "url": "https://www.creatorunits.com/terms",
    "name": "Terms of Service - Creators Units",
    "description": "Read our Terms of Service. Simple, straightforward rules for using our free creator utilities.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/terms#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/terms#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.creatorunits.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://www.creatorunits.com/terms",
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
              { label: "Terms of Service" }
            ]}
          />
          <h1 className="mb-6">Terms of Service</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              Welcome to Creators Units. By accessing and using our website (creatorunits.com) and our browser tools, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>2. Use License</h2>
            <p>
              Permission is granted to utilize the tools on Creators Units free of charge for personal and commercial use cases (e.g. compressing graphics for your shop, generating secure codes for your business, exporting Link-in-Bio single pages). You may not:
            </p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li>Attempt to decompile, reverse-engineer, or crack the Javascript logic files of Creators Units.</li>
              <li>Re-host our tools iframe layouts or embed them in separate commercial portals without our authorization.</li>
              <li>Use the tools for any illegal purpose or to transmit malicious scripts or viruses.</li>
            </ul>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>3. Disclaimer &amp; Warranty</h2>
            <p>
              The materials and tools on Creators Units are provided &quot;as is&quot;. Creators Units makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>4. Limitations of Liability</h2>
            <p>
              In no event shall Creators Units or its maintainers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the tools on Creators Units, even if Creators Units has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>5. Revisions and Errata</h2>
            <p>
              The materials appearing on Creators Units could include technical, typographical, or photographic errors. Creators Units does not warrant that any of the materials on its website are accurate, complete, or current. Creators Units may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

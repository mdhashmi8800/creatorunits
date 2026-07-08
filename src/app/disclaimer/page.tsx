export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer - Creators Units",
  description: "Read our Disclaimer. Creators Units is not affiliated with YouTube, Instagram, WhatsApp, or Facebook.",
  alternates: {
    canonical: "/disclaimer",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer - Creators Units",
    description: "Read our Disclaimer. Creators Units is not affiliated with YouTube, Instagram, WhatsApp, or Facebook.",
    images: ["/og-image.png"],
  },
};

export default function DisclaimerPage() {
  const disclaimerPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/disclaimer#webpage",
    "url": "https://www.creatorunits.com/disclaimer",
    "name": "Disclaimer - Creators Units",
    "description": "Read our Disclaimer. Creators Units is not affiliated with YouTube, Instagram, WhatsApp, or Facebook.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/disclaimer#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/disclaimer#breadcrumb",
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
        "name": "Disclaimer",
        "item": "https://www.creatorunits.com/disclaimer",
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
              { label: "Disclaimer" }
            ]}
          />
          <h1 className="mb-6">Disclaimer</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              Please read this disclaimer carefully before using Creators Units (creatorunits.com).
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>1. Third-Party Brand Affiliation</h2>
            <p>
              Creators Units is an independent development entity. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with any of the following platforms or corporations, or any of their subsidiaries or affiliates:
            </p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li><strong>YouTube:</strong> Owned by Google LLC / Alphabet Inc.</li>
              <li><strong>Instagram, WhatsApp, Facebook:</strong> Owned by Meta Platforms, Inc.</li>
              <li><strong>TikTok:</strong> Owned by ByteDance Ltd.</li>
              <li><strong>Twitter / X:</strong> Owned by X Corp.</li>
              <li><strong>LinkedIn:</strong> Owned by Microsoft Corporation.</li>
            </ul>
            <p>
              The names, logos, and brands of these corporations are utilized solely for descriptive, comparative, and formatting utility purposes. All trademarks and registered trademarks remain the property of their respective owners.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>2. Content &amp; Output Limitations</h2>
            <p>
              The text formats, usernames, bio templates, and keyword tags generated on Creators Units are intended for creative brainstorming and layout optimization. We do not guarantee search volume rankings, discoverability boosts, account approvals, or trademark availability for names generated using our utilities. Users are solely responsible for verifying the legal availability of any handle or logo cover.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>3. Security &amp; Utility Limitations</h2>
            <p>
              Our Secure Password Generator uses native cryptographic methods to generate keys locally. While these codes are mathematically secure and generated offline, we are not responsible for the security of accounts where these keys are deployed, nor are we liable for damages resulting from credential breaches or configuration issues on external web hosts.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const dynamic = "force-static";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy — Creator Units",
  description: "Learn how CreatorUnits.com uses cookies, local storage, analytics, and advertising technologies, and how you can manage your preferences.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy — Creator Units",
    description: "Learn how CreatorUnits.com uses cookies, local storage, analytics, and advertising technologies.",
    url: "https://www.creatorunits.com/cookie-policy",
    images: ["/og-image.png"],
  },
};

export default function CookiePolicyPage() {
  const cookiePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/cookie-policy#webpage",
    url: "https://www.creatorunits.com/cookie-policy",
    name: "Cookie Policy — Creator Units",
    description: "Learn how CreatorUnits.com uses cookies, local storage, analytics, and advertising technologies.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/cookie-policy#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/cookie-policy#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creatorunits.com/" },
      { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://www.creatorunits.com/cookie-policy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePageSchema) }}
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
                { label: "Cookie Policy" },
              ]}
            />
            <span className="badge badge-accent mb-4">Privacy &amp; Compliance</span>
            <h1 style={{ fontSize: "2.25rem", lineHeight: "1.3", marginBottom: "1rem" }}>
              Cookie Policy
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              This policy explains how Creator Units uses cookies, local browser storage, and related technologies, and how you can manage your preferences.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  1. What Are Cookies &amp; Local Storage?
                </h2>
                <p>
                  Cookies are small text files placed on your device by websites you visit. Local storage (HTML5 Web Storage) allows web applications to store preference data locally within your browser without sending it back to servers with every HTTP request.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  2. How Creator Units Uses Cookies and Storage
                </h2>
                <p>We utilize cookies and local browser storage for the following specific purposes:</p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>
                    <strong>Essential &amp; Functional Preferences (Local Storage):</strong> We save your theme preference (Dark Mode / Light Mode) and recent tool history directly in your browser&apos;s <code>localStorage</code>. This data never leaves your computer.
                  </li>
                  <li>
                    <strong>Analytics (Google Analytics 4 / GA4):</strong> We use anonymous aggregated analytics to understand total traffic volume, popular tool categories, and page performance to improve our platform.
                  </li>
                  <li>
                    <strong>Advertising (Google AdSense):</strong> Google uses cookies (including the DoubleClick DART cookie) to serve relevant advertisements to visitors based on visits to this and other websites across the internet.
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  3. Managing and Disabling Cookies
                </h2>
                <p>
                  You have full control over cookie settings. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Google Ad Settings:</strong> You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>Google Ads Settings</a>.</li>
                  <li><strong>Network Advertising Initiative:</strong> Opt out of third-party vendor cookies by visiting <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>NAI Consumer Opt-Out</a>.</li>
                  <li><strong>Browser Settings:</strong> You can clear or block cookies directly in Chrome, Safari, Firefox, or Edge settings under Privacy &amp; Security.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  4. Contact Us
                </h2>
                <p>
                  If you have any questions regarding our cookie practices, please contact us via our{" "}
                  <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    Contact Page
                  </Link>{" "}
                  or review our{" "}
                  <Link href="/privacy" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

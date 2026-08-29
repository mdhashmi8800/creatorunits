export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Creator Units Data Protection & Security",
  description: "Read our Privacy Policy. All Creator Units tools run 100% client-side in your browser. We never collect, transmit, inspect, or store your uploaded images or private data.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy — Creator Units Data Protection & Security",
    description: "Read our Privacy Policy. All Creator Units tools run 100% client-side in your browser. We never collect or store your uploaded images or data.",
    url: "https://www.creatorunits.com/privacy",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
  const privacyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.creatorunits.com/privacy#webpage",
    url: "https://www.creatorunits.com/privacy",
    name: "Privacy Policy — Creator Units Data Protection & Security",
    description: "Read our Privacy Policy. All Creator Units tools run 100% client-side in your browser. We never collect, transmit, inspect, or store your uploaded images or private data.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/privacy#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/privacy#breadcrumb",
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
        name: "Privacy Policy",
        item: "https://www.creatorunits.com/privacy",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
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
              { label: "Privacy Policy" },
            ]}
          />
          <h1 className="mb-6">Privacy Policy</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              Last Updated: August 2026. At <strong>Creator Units</strong> (accessible from <Link href="/" style={{ color: "var(--accent)" }}>creatorunits.com</Link>), one of our primary commitments is ensuring the absolute privacy, confidentiality, and data autonomy of our visitors.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              1. 100% Client-Side Processing Architecture
            </h2>
            <p>
              Unlike traditional web utility platforms that upload your media to remote cloud servers for rendering, Creator Units operates <strong>entirely inside your local web browser</strong>.
            </p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Images and Graphic Files:</strong> Images manipulated via our Image Compressor, Resizer, Cropper, or Format Converters are processed locally using the HTML5 Canvas API. No image bytes are sent across the network.</li>
              <li><strong>Documents &amp; PDFs:</strong> Files processed via our PDF tools (merge, split, compress, protect) are manipulated locally in JavaScript memory using client-side WebAssembly and PDF libraries.</li>
              <li><strong>Passwords &amp; Cryptography:</strong> Password generation and UUID creation utilize the browser&apos;s native <code>crypto.getRandomValues()</code> Web Cryptography API. Passwords and hashes are generated entirely in RAM and never logged or stored.</li>
              <li><strong>Tracking Links &amp; UTM URLs:</strong> Campaign parameters generated in the UTM Builder are assembled locally in your browser address bar and clipboard.</li>
            </ul>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              2. Log Files &amp; Hosting Analytics
            </h2>
            <p>
              Like all websites hosted on global content delivery networks (Vercel Edge Network), standard server access logs may temporarily record non-personally identifiable technical information such as browser type, operating system, referring URL, time stamp, and anonymized IP addresses. This data is used exclusively to maintain edge network uptime, detect DDoS attacks, and monitor infrastructure health.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              3. Cookies and Web Storage
            </h2>
            <p>
              Creator Units utilizes browser <code>localStorage</code> to store your theme preference (Dark Mode / Light Mode) and recent tool history for your convenience. This data remains on your physical device. For full details, please review our dedicated <Link href="/cookie-policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Cookie Policy</Link>.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              4. Google DoubleClick DART &amp; Advertising Cookies
            </h2>
            <p>
              Google is a third-party advertising vendor on Creator Units. Google uses cookies, including DART cookies, to serve relevant ads based on visits to this and other websites across the web. You can manage personalized ad settings or opt out at any time by visiting <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>Google Ad Policies</a>.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              5. GDPR, CCPA &amp; User Privacy Rights
            </h2>
            <p>
              Because Creator Units does not collect, sell, rent, or store personal user accounts, uploaded media, or identity databases, your private information is intrinsically protected. If you have questions regarding data privacy rights under GDPR or CCPA, please contact us.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>
              6. Contact Support
            </h2>
            <p>
              For questions regarding this Privacy Policy, contact Muhammad Hashmi and our team via our <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>Contact Page</Link> or email <code>mdhashmi8800@gmail.com</code>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

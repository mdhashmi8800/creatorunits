export const dynamic = "force-static";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import EmailCard from "./EmailCard";
import styles from "./contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Creator Units Support & Inquiries",
  description: "Have a question, feedback, tool suggestion, or partnership inquiry? Reach out to Muhammad Hashmi and the Creator Units team via email, contact form, Instagram, or Twitter/X.",
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us — Creator Units Support & Inquiries",
    description: "Have a question, feedback, tool suggestion, or partnership inquiry? Reach out to Muhammad Hashmi and the Creator Units team.",
    url: "https://www.creatorunits.com/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Creator Units",
    description: "Get in touch with the Creator Units team for tool requests, technical questions, and partnerships.",
    images: ["/og-image.png"],
    creator: "@Oye_hasmi",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.creatorunits.com/contact#webpage",
    url: "https://www.creatorunits.com/contact",
    name: "Contact Us — Creator Units Support & Inquiries",
    description: "Have a question, feedback, tool suggestion, or partnership inquiry? Reach out to Muhammad Hashmi and the Creator Units team.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.creatorunits.com/contact#breadcrumb",
    },
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "mdhashmi8800@gmail.com",
      availableLanguage: "English",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.creatorunits.com/contact#breadcrumb",
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
        name: "Contact",
        item: "https://www.creatorunits.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="main-content" id="main-content">
        <div className={styles.contactContainer}>
          <div style={{ marginBottom: "1.5rem" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Contact" },
              ]}
            />
          </div>
          <div className={styles.grid}>
            {/* Left Column: Hero & Cards */}
            <div>
              <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Get In Touch.</h1>
                <p className={styles.heroDesc}>
                  Have a question, tool suggestion, bug report, or partnership inquiry? Reach out directly to Muhammad Hashmi and the Creator Units team. We review every submission personally and respond promptly.
                </p>
              </section>

              <div className={styles.cardsList}>
                {/* Email Card */}
                <EmailCard email="mdhashmi8800@gmail.com" />

                {/* Instagram Card */}
                <a
                  href="https://instagram.com/oye_hasmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.card} ${styles.instagramCard}`}
                  aria-label="Visit @oye_hasmi on Instagram (opens in a new tab)"
                >
                  <div className={styles.mStripe}>
                    <div className={styles.mStripeLightBlue}></div>
                    <div className={styles.mStripeDarkBlue}></div>
                    <div className={styles.mStripeRed}></div>
                  </div>

                  <div className={styles.cardLeft}>
                    <div className={styles.iconContainer}>
                      <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div className={styles.cardDetails}>
                      <span className={styles.cardLabel}>Instagram</span>
                      <strong className={styles.cardValue}>@oye_hasmi</strong>
                      <span className={styles.cardSub}>Follow or direct message</span>
                    </div>
                  </div>

                  <span className={styles.arrow} aria-hidden="true">&rarr;</span>
                </a>

                {/* Twitter / X Card */}
                <a
                  href="https://twitter.com/Oye_hasmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.card} ${styles.twitterCard}`}
                  aria-label="Visit @Oye_hasmi on Twitter/X (opens in a new tab)"
                >
                  <div className={styles.mStripe}>
                    <div className={styles.mStripeLightBlue}></div>
                    <div className={styles.mStripeDarkBlue}></div>
                    <div className={styles.mStripeRed}></div>
                  </div>

                  <div className={styles.cardLeft}>
                    <div className={styles.iconContainer}>
                      <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    </div>
                    <div className={styles.cardDetails}>
                      <span className={styles.cardLabel}>Twitter / X</span>
                      <strong className={styles.cardValue}>@Oye_hasmi</strong>
                      <span className={styles.cardSub}>Tweet or message us</span>
                    </div>
                  </div>

                  <span className={styles.arrow} aria-hidden="true">&rarr;</span>
                </a>
              </div>

              {/* Helpful Resources Section */}
              <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                  Helpful Resources &amp; Guides
                </h2>
                <p className="text-muted" style={{ fontSize: "0.875rem", marginBottom: "1rem", lineHeight: "1.5" }}>
                  Before sending a support request, explore our popular guides and tools:
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    paddingLeft: "1.25rem",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>
                    Guide: <Link href="/blog/how-to-create-qr-code-free" style={{ color: "var(--accent)", textDecoration: "underline" }}>How to Create a QR Code for Free</Link>
                  </li>
                  <li>
                    Guide: <Link href="/blog/utm-tracking-link-guide" style={{ color: "var(--accent)", textDecoration: "underline" }}>Beginner&apos;s Guide to UTM Tracking</Link>
                  </li>
                  <li>
                    Guide: <Link href="/blog/how-to-compress-images-without-losing-quality" style={{ color: "var(--accent)", textDecoration: "underline" }}>Image Compression Without Quality Loss</Link>
                  </li>
                  <li>
                    Tool: <Link href="/tools/utility/utm-builder" style={{ color: "var(--accent)", textDecoration: "underline" }}>UTM Campaign Link Builder</Link>
                  </li>
                  <li>
                    Tool: <Link href="/tools/utility/qr-code-generator" style={{ color: "var(--accent)", textDecoration: "underline" }}>Offline QR Code Generator</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

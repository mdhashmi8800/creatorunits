export const dynamic = "force-static";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";
import EmailCard from "./EmailCard";
import styles from "./contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Creators Units",
  description: "Have a question, suggestion, partnership opportunity, or found an issue? Feel free to reach out to Creators Units via email, Instagram, or Twitter/X.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Creators Units",
    description: "Have a question, suggestion, partnership opportunity, or found an issue? Feel free to reach out to Creators Units via email, Instagram, or Twitter/X.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="main-content" id="main-content">
        <div className={styles.contactContainer}>
          <div className={styles.grid}>
            
            {/* Left Column: Hero & Cards */}
            <div>
              <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Get In Touch.</h1>
                <p className={styles.heroDesc}>
                  Have a question, suggestion, partnership opportunity, or found an issue? Feel free to reach out. We usually respond as soon as possible.
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

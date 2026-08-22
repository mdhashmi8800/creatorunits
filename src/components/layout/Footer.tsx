import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Creator Units - Go to homepage">
              <svg
                className={styles.logoIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="8" height="18" rx="2" />
                <rect x="13" y="3" width="8" height="8" rx="2" />
                <rect x="13" y="13" width="8" height="8" rx="2" />
              </svg>
              <span className={styles.logoText}>Creator Units</span>
            </Link>
            <p className={styles.tagline}>
              Free, fast, and private online tools for creators, freelancers, and small businesses. All operations run directly in your browser.
            </p>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className={styles.colTitle}>Categories</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/category/image" className={styles.link}>
                  Image Tools
                </Link>
              </li>
              <li>
                <Link href="/category/creator" className={styles.link}>
                  Creator Tools
                </Link>
              </li>
              <li>
                <Link href="/category/social" className={styles.link}>
                  Social Media Tools
                </Link>
              </li>
              <li>
                <Link href="/category/utility" className={styles.link}>
                  Utility Tools
                </Link>
              </li>
              <li>
                <Link href="/category/seo" className={styles.link}>
                  SEO Tools
                </Link>
              </li>
              <li>
                <Link href="/category/video" className={styles.link}>
                  Video Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className={styles.colTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/tools" className={styles.link}>
                  All Tools Directory
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  Creator Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className={styles.colTitle}>Legal &amp; Privacy</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={styles.link}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Creator Units. All rights reserved. Free browser tools for content creators.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              Terms
            </Link>
            <Link href="/disclaimer" className={styles.bottomLink}>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

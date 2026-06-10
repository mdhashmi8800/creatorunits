import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>C</div>
              <span className={styles.logoText}>CreatorUtils</span>
            </Link>
            <p className={styles.tagline}>
              Free, fast, and secure online tools that help you design, optimize, and grow your digital presence. No installation required.
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
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className={styles.colTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/tools" className={styles.link}>
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className={styles.colTitle}>Legal</h3>
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
            &copy; {currentYear} CreatorUtils. All rights reserved. Built for creators, bloggers, and small businesses.
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

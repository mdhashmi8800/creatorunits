"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    if (path === "/tools" && pathname?.startsWith("/tools")) return true;
    return pathname === path;
  };

  const navLinks = [
    { name: "Explore Tools", path: "/tools" },
    { name: "Image Tools", path: "/category/image" },
    { name: "Creator Tools", path: "/category/creator" },
    { name: "Social Tools", path: "/category/social" },
    { name: "Utility Tools", path: "/category/utility" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen, closeMobileMenu]);

  // Close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLElement;
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header} role="banner">
      <div className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo} aria-label="Creators Units - Go to homepage">
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
          <span className={styles.logoText}>Creators Units</span>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.menu} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.link} ${isActive(link.path) ? styles.linkActive : ""}`}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Toggle to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.menuToggle}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className={styles.overlay}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div 
            id="mobile-nav"
            ref={menuRef}
            className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={styles.mobileLink}
                aria-current={isActive(link.path) ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
}

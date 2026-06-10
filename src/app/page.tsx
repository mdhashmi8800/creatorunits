"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { tools, categories } from "@/data/tools";
import styles from "./page.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = searchQuery.trim()
    ? tools.filter(
        (tool) =>
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const featuredTools = tools.filter((t) =>
    ["image-compressor", "youtube-thumbnail-preview", "social-media-link-in-bio-helper", "password-generator"].includes(t.slug)
  );

  const faqs = [
    {
      q: "Are the tools on CreatorUtils really free?",
      a: "Yes! All tools on CreatorUtils are 100% free to use. There are no hidden subscription tiers, trial limits, or account registration requirements."
    },
    {
      q: "Are my files secure when uploading them?",
      a: "Absolutely. CreatorUtils values your privacy. All image processing, compression, conversions, and calculations run locally in your web browser. Your images and data are never uploaded to any servers."
    },
    {
      q: "Do I need to install any software or plugins?",
      a: "No installation is required. Everything runs in standard web browsers on both desktop and mobile devices."
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container text-center">
            <span className="badge badge-accent mb-4">All-in-one Toolkit</span>
            <h1 className={styles.title}>
              Free creator tools that help you <span className="text-primary-color">design, optimize, and grow</span> faster.
            </h1>
            <p className={styles.subtitle}>
              Attract traffic, boost CTR, generate resources, and format metadata with 30+ lightning-fast browser tools. 100% private.
            </p>

            {/* Live Search Bar */}
            <div className={styles.searchContainer}>
              <div className={styles.searchWrapper}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 30+ tools (e.g. compressor, password, tags...)"
                  className={styles.searchInput}
                  aria-label="Search tools"
                />
                {searchQuery && (
                  <button className={styles.searchClear} onClick={() => setSearchQuery("")}>
                    ×
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className={styles.searchResults}>
                  {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.category}/${tool.slug}`}
                        className={styles.searchItem}
                      >
                        <div>
                          <strong className={styles.searchItemTitle}>{tool.title}</strong>
                          <p className={styles.searchItemDesc}>{tool.shortDesc}</p>
                        </div>
                        <span className="badge badge-accent" style={{ fontSize: "0.65rem" }}>
                          {tool.categoryName}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <div className={styles.searchNoResults}>
                      No tools found matching &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="container">
            <h2 className="text-center mb-2">Browse Tools by Category</h2>
            <p className="text-center text-muted mb-8">
              Explore our organized collections of tools designed for creators and web professionals.
            </p>

            <div className="grid-cols-4">
              {Object.values(categories).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="card card-hover flex flex-col gap-3"
                  style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
                >
                  <div className={styles.catIcon}>
                    {cat.slug === "image" && "🖼️"}
                    {cat.slug === "creator" && "📹"}
                    {cat.slug === "social" && "📱"}
                    {cat.slug === "utility" && "⚙️"}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{cat.name}</h3>
                  <p className="text-muted" style={{ fontSize: "0.875rem", margin: 0, flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600", marginTop: "0.5rem" }}>
                    View Tools &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Grid */}
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-2">Popular Tools</h2>
            <p className="text-center text-muted mb-8">
              Quickly access the most popular tools used by creators every day.
            </p>

            <div className="grid-cols-2">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="card card-hover flex justify-between items-center"
                  style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
                >
                  <div className="flex flex-col gap-1" style={{ maxWidth: "75%" }}>
                    <span className="badge badge-accent" style={{ fontSize: "0.65rem", alignSelf: "flex-start" }}>
                      {tool.categoryName}
                    </span>
                    <h3 style={{ fontSize: "1.15rem", margin: "0.25rem 0 0 0" }}>{tool.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                      {tool.shortDesc}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: "bold"
                    }}
                  >
                    &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why CreatorUtils Section */}
        <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="container">
            <h2 className="text-center mb-2">Why Use CreatorUtils?</h2>
            <p className="text-center text-muted mb-8">
              A premium, lightweight, privacy-focused experience built for the modern web.
            </p>

            <div className="grid-cols-3">
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔒</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>100% Private & Safe</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  All code runs locally inside your browser. Your images and documents never touch our servers, protecting your brand assets.
                </p>
              </div>

              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>⚡</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>Ultra Fast Performance</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  Built on static loading pipelines. Pages load instantly with no heavy frameworks or loading delays.
                </p>
              </div>

              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💻</div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>No Installation</h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  Use any tool on demand. Completely responsive for desktops, iPads, and mobile smartphones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 className="text-center mb-6">Frequently Asked Questions</h2>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card" style={{ borderStyle: "solid" }}>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem", margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

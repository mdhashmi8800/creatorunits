"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toolsIndex as tools } from "@/data/tools";
import styles from "./page.module.css";

/**
 * HomeSearch — the ONLY client component on the home page.
 *
 * All other home page sections (hero copy, categories, featured tools,
 * why-us cards, SEO intro, FAQs) are rendered as a Server Component in
 * page.tsx and arrive as static HTML with zero client JS required.
 *
 * This component is dynamically imported in page.tsx with ssr:true so the
 * search input is part of the SSR HTML (for accessibility + SEO), but
 * the interactivity hydrates asynchronously.
 */
export default function HomeSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = searchQuery.trim()
    ? tools.filter(
        (tool) =>
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon} aria-hidden="true">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search 100+ tools (e.g. compressor, password, tags...)"
          className={styles.searchInput}
          aria-label="Search tools by name or description"
          role="searchbox"
          autoComplete="off"
        />
        {searchQuery && (
          <button
            className={styles.searchClear}
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            type="button"
          >
            ×
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {searchQuery && (
        <div className={styles.searchResults} role="listbox" aria-label="Search results">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.category}/${tool.slug}`}
                className={styles.searchItem}
                role="option"
                aria-selected="false"
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
            <div className={styles.searchNoResults} role="status">
              No tools found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}

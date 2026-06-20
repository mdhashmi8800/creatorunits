"use client";

import React, { useState, useEffect, useRef } from "react";
import { categories } from "@/data/tools";

interface ToolsFilterClientProps {
  /** Called by parent when filter/search changes so the SSR grid can be hidden/shown via CSS */
  onFilterChange: (category: string, query: string) => void;
  totalCount: number;
  categoryCounts: Record<string, number>;
}

/**
 * ToolsFilterClient — the ONLY client component on the /tools page.
 *
 * This handles search input and category tab state.
 * The full tool link grid is rendered as static HTML in the Server Component
 * (page.tsx), ensuring Googlebot sees all tool links in the initial HTML.
 *
 * On the client side, this component dispatches a custom event that a thin
 * inline script (also rendered SSR) uses to show/hide tool cards via CSS
 * data attributes — no React re-render needed for the grid.
 */
export default function ToolsFilterClient({
  totalCount,
  categoryCounts,
}: {
  totalCount: number;
  categoryCounts: Record<string, number>;
}) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Whenever filter state changes, update CSS visibility of SSR tool cards
  useEffect(() => {
    const grid = document.getElementById("tools-ssr-grid");
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-category][data-title][data-desc]");
    let visibleCount = 0;

    cards.forEach((card) => {
      const cat = card.dataset.category ?? "";
      const title = (card.dataset.title ?? "").toLowerCase();
      const desc = (card.dataset.desc ?? "").toLowerCase();
      const q = searchQuery.toLowerCase();

      const matchesTab = activeTab === "all" || cat === activeTab;
      const matchesSearch = q === "" || title.includes(q) || desc.includes(q);
      const visible = matchesTab && matchesSearch;

      card.style.display = visible ? "" : "none";
      if (visible) visibleCount++;
    });

    // Update empty-state visibility
    const emptyState = document.getElementById("tools-empty-state");
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "" : "none";
    }
  }, [activeTab, searchQuery]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="card flex flex-col gap-4" style={{ marginBottom: "2.5rem", padding: "1.5rem" }}>
      {/* Search bar */}
      <div className="form-group" style={{ marginBottom: 0, width: "100%" }}>
        <label htmlFor="tools-search" className="sr-only">Search tools</label>
        <input
          id="tools-search"
          ref={inputRef}
          type="text"
          defaultValue=""
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tools by name or description..."
          className="form-control"
          aria-label="Search tools by name or description"
        />
      </div>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Filter tools by category"
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          borderBottom: "1px solid var(--border-color)",
          paddingBottom: "0.75rem",
        }}
      >
        <button
          role="tab"
          aria-selected={activeTab === "all"}
          aria-controls="tools-ssr-grid"
          id="tab-all"
          className={`btn ${activeTab === "all" ? "btn-primary" : "btn-secondary"} btn-sm`}
          onClick={() => handleTabChange("all")}
        >
          All Tools ({totalCount})
        </button>
        {Object.values(categories).map((cat) => (
          <button
            key={cat.slug}
            role="tab"
            aria-selected={activeTab === cat.slug}
            aria-controls="tools-ssr-grid"
            id={`tab-${cat.slug}`}
            className={`btn ${activeTab === cat.slug ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => handleTabChange(cat.slug)}
          >
            {cat.name} ({categoryCounts[cat.slug] ?? 0})
          </button>
        ))}
      </div>
    </div>
  );
}

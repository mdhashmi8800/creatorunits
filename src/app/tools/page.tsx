"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { tools, categories } from "@/data/tools";

export default function ToolsDirectory() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTools = tools.filter((tool) => {
    const matchesTab = activeTab === "all" || tool.category === activeTab;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container">
          <div className="text-center mb-8">
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>All Creator Utilities</h1>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Explore our full directory of 30+ tools for image editing, channel optimization, social copy, and daily formatting calculations.
            </p>
          </div>

          {/* Filtering controls bar */}
          <div className="card flex flex-col gap-4" style={{ borderStyle: "solid", marginBottom: "2.5rem", padding: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              {/* Search bar */}
              <div className="form-group" style={{ marginBottom: 0, width: "100%" }}>
                <label htmlFor="tools-search" className="sr-only">Search tools</label>
                <input
                  id="tools-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tools by name or description..."
                  className="form-control"
                  aria-label="Search tools by name or description"
                />
              </div>

              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Filter tools by category"
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "0.75rem"
                }}
              >
                <button
                  role="tab"
                  aria-selected={activeTab === "all"}
                  aria-controls="tools-panel"
                  id="tab-all"
                  className={`btn ${activeTab === "all" ? "btn-primary" : "btn-secondary"} btn-sm`}
                  onClick={() => setActiveTab("all")}
                >
                  All Tools ({tools.length})
                </button>
                {Object.values(categories).map((cat) => {
                  const count = tools.filter((t) => t.category === cat.slug).length;
                  return (
                    <button
                      key={cat.slug}
                      role="tab"
                      aria-selected={activeTab === cat.slug}
                      aria-controls="tools-panel"
                      id={`tab-${cat.slug}`}
                      className={`btn ${activeTab === cat.slug ? "btn-primary" : "btn-secondary"} btn-sm`}
                      onClick={() => setActiveTab(cat.slug)}
                    >
                      {cat.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div id="tools-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {filteredTools.length > 0 ? (
              <div className="grid-cols-3">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.category}/${tool.slug}`}
                    className="card card-hover flex flex-col gap-3"
                    style={{ textDecoration: "none", color: "inherit", borderStyle: "solid" }}
                    aria-label={`Open ${tool.title} - ${tool.shortDesc}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="badge badge-accent" style={{ fontSize: "0.65rem" }}>
                        {tool.categoryName}
                      </span>
                    </div>
                    
                    <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{tool.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.875rem", margin: 0, flexGrow: 1, lineHeight: "1.4" }}>
                      {tool.shortDesc}
                    </p>

                    <span className="text-primary-color" style={{ fontSize: "0.85rem", fontWeight: "600", marginTop: "0.5rem" }}>
                      Open Tool &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="card text-center" style={{ padding: "4rem 0", borderStyle: "solid" }} role="status">
                <p className="text-muted" style={{ margin: 0 }}>
                  No tools found matching your search term. Try another query or clear the filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

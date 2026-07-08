import React from "react";
import Link from "next/link";
import { toolsIndex, categories } from "@/data/tools";

interface ToolsDirectoryMatrixProps {
  currentSlug?: string;
}

export default function ToolsDirectoryMatrix({ currentSlug }: ToolsDirectoryMatrixProps) {
  const categoriesList = Object.values(categories);
  
  return (
    <section className="directory-section" aria-label="Creator units tools directory">
      <div className="container" style={{ padding: 0 }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", textAlign: "center" }}>Explore Our Creator Tools</h2>
        <p className="text-muted" style={{ textAlign: "center", marginBottom: "3rem", fontSize: "0.95rem" }}>
          Instant, browser-local utilities to streamline your digital workflows.
        </p>
        
        <div className="directory-grid">
          {categoriesList.map((cat) => {
            const catTools = toolsIndex.filter((t) => t.category === cat.slug);
            return (
              <div key={cat.slug} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 className="directory-col-title">
                  <span style={{ fontSize: "1.1rem" }}>
                    {cat.slug === "image" && "🖼️"}
                    {cat.slug === "creator" && "📹"}
                    {cat.slug === "social" && "📱"}
                    {cat.slug === "utility" && "⚙️"}
                  </span>
                  <Link href={`/category/${cat.slug}`}>
                    {cat.name}
                  </Link>
                </h3>
                <ul className="directory-list">
                  {catTools.map((t) => {
                    const isCurrent = t.slug === currentSlug;
                    return (
                      <li key={t.id}>
                        <Link 
                          href={`/tools/${t.category}/${t.slug}`} 
                          style={{ 
                            color: isCurrent ? "var(--success)" : undefined, 
                            fontWeight: isCurrent ? "600" : undefined,
                            fontSize: "0.85rem",
                          }}
                          className="directory-grid-link"
                        >
                          {t.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

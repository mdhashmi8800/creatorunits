/**
 * loading.tsx — Instant loading skeleton for tool detail pages.
 *
 * This static shell renders immediately while the dynamic tool widget chunk
 * is being downloaded and hydrated. Because this file is static HTML, it is
 * included in the prerendered shell and shown to users with zero wait time.
 */
export default function ToolLoading() {
  return (
    <main className="main-content section" id="main-content" aria-label="Loading tool">
      <div className="container">
        {/* Breadcrumb skeleton */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            alignItems: "center",
          }}
          aria-hidden="true"
        >
          <div className="skeleton" style={{ width: "3rem", height: "0.875rem", borderRadius: "4px" }} />
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>/</span>
          <div className="skeleton" style={{ width: "5rem", height: "0.875rem", borderRadius: "4px" }} />
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>/</span>
          <div className="skeleton" style={{ width: "8rem", height: "0.875rem", borderRadius: "4px" }} />
        </div>

        {/* Title skeleton */}
        <div style={{ marginBottom: "2rem" }} aria-hidden="true">
          <div className="skeleton" style={{ width: "60%", height: "2.25rem", borderRadius: "6px", marginBottom: "0.75rem" }} />
          <div className="skeleton" style={{ width: "80%", height: "1.05rem", borderRadius: "4px" }} />
        </div>

        {/* Tool widget skeleton */}
        <div
          className="skeleton card"
          style={{ minHeight: "420px", marginBottom: "3rem", border: "none" }}
          aria-hidden="true"
        />

        {/* How-to + Features grid skeleton */}
        <div className="grid-cols-2" style={{ gap: "2rem", marginBottom: "3rem" }} aria-hidden="true">
          <div className="skeleton card" style={{ height: "200px", border: "none" }} />
          <div className="skeleton card" style={{ height: "200px", border: "none" }} />
        </div>
      </div>

      <style>{`
        .skeleton {
          background: linear-gradient(
            90deg,
            var(--bg-tertiary) 25%,
            var(--bg-secondary) 50%,
            var(--bg-tertiary) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .skeleton { animation: none; background: var(--bg-tertiary); }
        }
      `}</style>
    </main>
  );
}

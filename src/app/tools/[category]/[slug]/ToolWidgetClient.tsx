"use client";

import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// ssr: false must live in a Client Component (not a Server Component)
const ToolWidget = dynamic(() => import("@/components/ToolWidget"), { ssr: false });

const toolErrorFallback = (
  <div
    className="card text-center"
    style={{
      padding: "3rem 2rem",
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
    }}
  >
    <div style={{ fontSize: "2.5rem" }} aria-hidden="true">⚠️</div>
    <h2 style={{ fontSize: "1.25rem", marginBottom: 0 }}>Tool failed to load</h2>
    <p className="text-muted" style={{ fontSize: "0.9rem", margin: 0, maxWidth: "400px" }}>
      This tool encountered an error. Please try refreshing the page. The rest of the page — including the usage guide and FAQ — is still available below.
    </p>
    <button
      className="btn btn-secondary btn-sm"
      onClick={() => window.location.reload()}
    >
      Reload Page
    </button>
  </div>
);

export default function ToolWidgetClient({ componentName }: { componentName: string }) {
  return (
    <ErrorBoundary fallback={toolErrorFallback}>
      <ToolWidget componentName={componentName} />
    </ErrorBoundary>
  );
}

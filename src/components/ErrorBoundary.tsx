"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "var(--border-radius-lg)",
          border: "1px solid var(--border-color)",
          margin: "1rem",
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚠️</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Something went wrong</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "var(--accent)",
              color: "white",
              border: "none",
              borderRadius: "var(--border-radius-sm)",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

"use client";

import React, { useEffect, useRef } from "react";
import { useHistory } from "@/context/HistoryContext";
import { useToast } from "@/context/ToastContext";
import styles from "./HistoryDrawer.module.css";

export default function HistoryDrawer() {
  const { history, isDrawerOpen, setIsDrawerOpen, deleteHistoryEntry, clearHistory } = useHistory();
  const { showToast } = useToast();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen, setIsDrawerOpen]);

  // Trap focus to close button upon drawer mount
  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      const closeBtn = drawerRef.current.querySelector("button") as HTMLElement;
      closeBtn?.focus();
    }
  }, [isDrawerOpen]);

  // Disable scroll behind drawer overlay
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    showToast("Copied to clipboard!", "success");
  };

  const formatTime = (ts: number) => {
    const diffMs = Date.now() - ts;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsDrawerOpen(false)} aria-hidden="true" />
      <div
        ref={drawerRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Recent activity history drawer"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Recent History</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className={styles.closeBtn}
            aria-label="Close history drawer"
          >
            &times;
          </button>
        </div>

        <div className={styles.content}>
          {history.length === 0 ? (
            <div className={styles.emptyState}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }} aria-hidden="true">🕰️</div>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Your local generation history is empty. Generate a password, QR code, or link to see it here!
              </p>
            </div>
          ) : (
            <div className={styles.historyList}>
              {history.map((entry) => (
                <div key={entry.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className="flex flex-col gap-0.5">
                      <span className={styles.toolName}>{entry.toolName}</span>
                      {entry.label && (
                        <span className={styles.badge}>{entry.label}</span>
                      )}
                    </div>
                    <span className={styles.timestamp}>{formatTime(entry.timestamp)}</span>
                  </div>

                  <div className={styles.cardValueContainer}>
                    <code className={styles.code}>{entry.value}</code>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleCopy(entry.value)}
                      style={{ padding: "0.25rem 0.6rem" }}
                    >
                      📋 Copy
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        deleteHistoryEntry(entry.id);
                        showToast("History entry deleted.", "info");
                      }}
                      style={{ padding: "0.25rem 0.6rem", background: "none", color: "var(--error)", borderColor: "transparent" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div className={styles.footer}>
            <button
              className="btn btn-outline btn-sm w-full"
              onClick={() => {
                clearHistory();
                showToast("History cleared successfully.", "success");
              }}
            >
              🧹 Clear All History
            </button>
          </div>
        )}
      </div>
    </>
  );
}

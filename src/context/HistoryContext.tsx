"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface HistoryEntry {
  id: string;
  toolSlug: string;
  toolName: string;
  timestamp: number;
  value: string;
  label?: string; // Optional metadata context description (e.g. "UTM Link", "16 characters")
}

interface HistoryContextType {
  history: HistoryEntry[];
  addHistoryEntry: (toolSlug: string, toolName: string, value: string, label?: string) => void;
  deleteHistoryEntry: (id: string) => void;
  clearHistory: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage safely on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("creatorunits_history");
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when history shifts
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("creatorunits_history", JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save history to localStorage:", e);
    }
  }, [history, isLoaded]);

  const addHistoryEntry = useCallback((toolSlug: string, toolName: string, value: string, label?: string) => {
    if (!value || !value.trim()) return;
    // Guard against storing massive base64 strings
    if (value.startsWith("data:") && value.length > 5000) return;

    setHistory((prev) => {
      // Remove any redundant identical value logs for the same tool
      const filtered = prev.filter((item) => !(item.toolSlug === toolSlug && item.value === value));
      
      const newEntry: HistoryEntry = {
        id: Math.random().toString(36).substring(2, 9),
        toolSlug,
        toolName,
        timestamp: Date.now(),
        value: value.trim(),
        label,
      };

      // Restrict history cache list size to last 20 generated utilities
      return [newEntry, ...filtered].slice(0, 20);
    });
  }, []);

  const deleteHistoryEntry = useCallback((id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        history,
        addHistoryEntry,
        deleteHistoryEntry,
        clearHistory,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
}

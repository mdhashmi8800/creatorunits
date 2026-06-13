"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialise from the data-theme already set by the inline <script> in <head>
  // so the React state matches the DOM from the very first render — no FOUC, no hidden flash.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    }
    return "light";
  });

  useEffect(() => {
    // Sync in case localStorage was updated by another tab / first load
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    if (initialTheme !== theme) {
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  // Children are rendered immediately — no visibility:hidden.
  // The inline <head> script already sets data-theme before first paint,
  // so CSS variables resolve correctly with zero FOUC.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="page-wrapper">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

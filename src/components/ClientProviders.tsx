"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { HistoryProvider } from "@/context/HistoryContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <HistoryProvider>
          {children}
        </HistoryProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}


"use client";

import React, { Suspense } from "react";
import ToolRenderer from "@/components/tools/ToolRenderer";

function ToolLoading() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "300px",
      color: "var(--text-muted)",
      fontSize: "0.95rem",
    }}>
      Loading tool...
    </div>
  );
}

export default function ToolWidget({ componentName }: { componentName: string }) {
  return (
    <Suspense fallback={<ToolLoading />}>
      <ToolRenderer componentName={componentName} />
    </Suspense>
  );
}

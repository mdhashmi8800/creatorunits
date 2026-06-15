"use client";

import dynamic from "next/dynamic";

// ssr: false must live in a Client Component (not a Server Component)
const ToolWidget = dynamic(() => import("@/components/ToolWidget"), { ssr: false });

export default function ToolWidgetClient({ componentName }: { componentName: string }) {
  return <ToolWidget componentName={componentName} />;
}

export const dynamic = "force-static";

import { permanentRedirect, notFound } from "next/navigation";
import { categories } from "@/data/tools";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export default async function ToolCategoryRedirectPage({ params }: PageProps) {
  const { category } = await params;
  if (categories[category]) {
    permanentRedirect(`/category/${category}`);
  }
  notFound();
}


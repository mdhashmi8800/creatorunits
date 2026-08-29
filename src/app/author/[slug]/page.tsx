export const dynamic = "force-static";

import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "md-hashmi" }];
}

export default async function AuthorDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "md-hashmi") {
    redirect("/author/md-hashmi");
  }
  notFound();
}

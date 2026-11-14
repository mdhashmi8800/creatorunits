export const dynamic = "force-static";

import { notFound, permanentRedirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "md-hashmi" }];
}

export default async function AuthorDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "md-hashmi") {
    permanentRedirect("/author/md-hashmi");
  }
  notFound();
}

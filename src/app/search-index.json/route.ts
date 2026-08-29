import { toolsIndex } from "@/data/tools-index";
import { articlesIndex } from "@/data/articles-index";

export async function GET() {
  const toolItems = toolsIndex.map((t) => ({
    title: t.title,
    desc: t.shortDesc,
    url: `/tools/${t.category}/${t.slug}`,
    category: t.categoryName,
    type: "tool" as const,
  }));

  const articleItems = articlesIndex.map((p) => ({
    title: p.title,
    desc: p.metaDesc,
    url: `/blog/${p.slug}`,
    category: p.categoryLabel || "Creator Guides",
    type: "article" as const,
  }));

  const searchItems = [...toolItems, ...articleItems];

  return new Response(JSON.stringify(searchItems), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

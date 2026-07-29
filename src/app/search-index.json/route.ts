import { getAllPosts } from "@/lib/wordpress";

export async function GET() {
  let wpPosts: Array<{ title: string; excerpt: string; slug: string; categories: string[] }> = [];

  try {
    wpPosts = await getAllPosts();
  } catch {
    // WordPress API unavailable
  }

  const searchItems = wpPosts.map(p => ({
    title: p.title,
    desc: p.excerpt || p.title,
    url: `/blog/${p.slug}/`,
    category: p.categories[0] || 'Creator Units',
    type: 'article' as const,
  }));

  return new Response(JSON.stringify(searchItems), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

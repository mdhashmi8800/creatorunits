const CMS_URL = process.env.CMS_URL || 'https://cms.bestfinancetool.com';
const CATEGORY_SLUG = process.env.WP_CATEGORY_SLUG || 'creator-units';
const WP_API_BASE = `${CMS_URL}/wp-json/wp/v2`;

const cache = new Map<string, { data: unknown; headers?: Headers; expiry: number }>();
const CACHE_TTL = 10 * 60 * 1000;

interface WPRawEmbeddedAuthor {
  name: string;
  avatar_urls?: Record<string, string>;
}

interface WPRawEmbeddedTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

interface WPRawEmbeddedMedia {
  source_url: string;
  alt_text: string;
  media_details?: { width: number; height: number };
}

interface WPRawPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  link: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPRawEmbeddedAuthor[];
    'wp:term'?: WPRawEmbeddedTerm[][];
    'wp:featuredmedia'?: WPRawEmbeddedMedia[];
  };
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface WPTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface WPPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  featuredImage: string | null;
  featuredImageAlt: string;
  author: string;
  categories: string[];
  tags: string[];
  link: string;
  headings: WPHeading[];
  readingTime: string;
}

let cachedCategoryId: number | null = null;

async function fetchWP<T>(url: string, skipCache = false): Promise<{ data: T; headers?: Headers }> {
  if (!skipCache) {
    const cached = cache.get(url);
    if (cached && cached.expiry > Date.now()) {
      return { data: cached.data as T, headers: cached.headers };
    }
  }

  const response = await fetch(url, {
    headers: { 'User-Agent': 'creatorunits.com', 'Accept': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error ${response.status}: ${response.statusText} for ${url}`);
  }

  const data = await response.json();
  cache.set(url, { data, headers: response.headers, expiry: Date.now() + CACHE_TTL });
  return { data, headers: response.headers };
}

async function getCategoryId(): Promise<number> {
  if (cachedCategoryId) return cachedCategoryId;
  const url = `${WP_API_BASE}/categories?slug=${CATEGORY_SLUG}&_fields=id`;
  const { data } = await fetchWP<Array<{ id: number }>>(url);
  if (!data || data.length === 0) {
    throw new Error(`WordPress category "${CATEGORY_SLUG}" not found`);
  }
  cachedCategoryId = data[0].id;
  return cachedCategoryId;
}

let categoriesCache: WPCategory[] | null = null;

async function getCategories(): Promise<WPCategory[]> {
  if (categoriesCache) return categoriesCache;
  const catData = await fetchWP<WPCategory[]>(`${WP_API_BASE}/categories?per_page=100&_fields=id,name,slug,count`);
  categoriesCache = catData.data;
  return categoriesCache;
}

let tagsCache: WPTag[] | null = null;

async function getTags(): Promise<WPTag[]> {
  if (tagsCache) return tagsCache;
  const tagData = await fetchWP<WPTag[]>(`${WP_API_BASE}/tags?per_page=100&_fields=id,name,slug,count`);
  tagsCache = tagData.data;
  return tagsCache;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractHeadings(html: string): WPHeading[] {
  const headingRegex = /<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const headings: WPHeading[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    const depth = parseInt(match[1]);
    const text = match[3].replace(/<[^>]*>/g, '').trim();
    if (text) {
      headings.push({ depth, slug: slugify(text), text });
    }
  }
  return headings;
}

function calculateReadingTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, '').trim();
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

function mapPost(post: WPRawPost, categories: WPCategory[], tags: WPTag[]): WPPost {
  const catNames = post.categories
    .map(id => categories.find(c => c.id === id)?.name)
    .filter(Boolean) as string[];
  const tagNames = post.tags
    .map(id => tags.find(t => t.id === id)?.name)
    .filter(Boolean) as string[];
  const name = post._embedded?.author?.[0]?.name || 'Creator Units';
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || '';
  const contentHtml = post.content.rendered;

  return {
    slug: post.slug,
    title: post.title.rendered,
    content: contentHtml,
    excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim() || '',
    date: post.date,
    modified: post.modified,
    featuredImage: image,
    featuredImageAlt: imageAlt,
    author: name,
    categories: catNames.length > 0 ? catNames : ['Creator Units'],
    tags: tagNames,
    link: post.link,
    headings: extractHeadings(contentHtml),
    readingTime: calculateReadingTime(contentHtml),
  };
}

export const POSTS_PER_PAGE = 9;

export async function getPosts(page = 1, perPage = POSTS_PER_PAGE): Promise<{ posts: WPPost[]; total: number; totalPages: number; page: number }> {
  const catId = await getCategoryId();
  const [categories, tags] = await Promise.all([getCategories(), getTags()]);
  const url = `${WP_API_BASE}/posts?categories=${catId}&_embed&page=${page}&per_page=${perPage}&_fields=id,slug,title,content,excerpt,date,modified,link,author,featured_media,categories,tags,_embedded`;

  const { data, headers } = await fetchWP<WPRawPost[]>(url);
  const total = parseInt(headers?.get('X-WP-Total') || '0');
  const totalPages = parseInt(headers?.get('X-WP-TotalPages') || '0');

  return {
    posts: data.map(p => mapPost(p, categories, tags)),
    total,
    totalPages,
    page,
  };
}

export async function getAllPosts(): Promise<WPPost[]> {
  const catId = await getCategoryId();
  const [categories, tags] = await Promise.all([getCategories(), getTags()]);
  const allPosts: WPPost[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `${WP_API_BASE}/posts?categories=${catId}&per_page=100&page=${page}&_embed=1&_fields=id,slug,title,content,excerpt,date,modified,link,author,featured_media,categories,tags,_embedded`;
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'creatorunits.com' },
    });
    if (!res.ok) break;
    totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
    const raw: WPRawPost[] = await res.json();
    allPosts.push(...raw.map(p => mapPost(p, categories, tags)));
    page++;
  }

  return allPosts;
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const catId = await getCategoryId();
    const [categories, tags] = await Promise.all([getCategories(), getTags()]);
    const url = `${WP_API_BASE}/posts?categories=${catId}&slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,content,excerpt,date,modified,link,author,featured_media,categories,tags,_embedded`;
    const { data } = await fetchWP<WPRawPost[]>(url);
    if (!data || data.length === 0) return null;
    return mapPost(data[0], categories, tags);
  } catch {
    return null;
  }
}

export async function getLatestPosts(count = 5): Promise<WPPost[]> {
  try {
    const { posts } = await getPosts(1, count);
    return posts;
  } catch {
    return [];
  }
}

export async function getRelatedPosts(currentSlug: string, count = 4): Promise<WPPost[]> {
  try {
    const all = await getAllPosts();
    const current = all.find(p => p.slug === currentSlug);
    if (!current) return all.filter(p => p.slug !== currentSlug).slice(0, count);

    return all
      .filter(p => p.slug !== currentSlug)
      .map(p => {
        let score = 0;
        const sharedCategories = p.categories.filter(c => current.categories.includes(c));
        score += sharedCategories.length * 3;
        const sharedTags = p.tags.filter(t => current.tags.includes(t));
        score += sharedTags.length;
        return { post: p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
      })
      .slice(0, count)
      .map(item => item.post);
  } catch {
    return [];
  }
}

export async function getTotalPosts(): Promise<number> {
  try {
    const catId = await getCategoryId();
    const url = `${WP_API_BASE}/posts?categories=${catId}&per_page=1&_fields=id`;
    const { headers } = await fetchWP<unknown[]>(url);
    return parseInt(headers?.get('X-WP-Total') || '0');
  } catch {
    return 0;
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

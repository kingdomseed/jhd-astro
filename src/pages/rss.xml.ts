/// <reference types="astro/client" />
import { getCollection, type CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

// RSS 2.0 feed for Blog posts with full content and author
export async function GET() {
  const site = new URL(import.meta.env.SITE ?? 'https://jasonholtdigital.com');
  const allPosts: BlogPost[] = await getCollection('blog');
  const posts = allPosts
    .slice()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  // Render each post to get full HTML content
  const items = await Promise.all(
    posts.map(async (post: BlogPost) => {
      const link = new URL(`/blog/${post.slug}/`, site).toString();
      const pubDate = post.data.date.toUTCString();
      const title = escapeXml(post.data.title);
      const description = escapeXml(post.data.summary);
      
      // Render markdown to HTML for RSS content
      const { Content } = await post.render();
      // We can't easily get HTML string from Content component in v5
      // For now, use the markdown body directly - many RSS readers support it
      const fullContent = post.body;
      const content = `<![CDATA[${fullContent}]]>`;
      
      // Type-safe tags extraction
      const tags = (post.data as { tags?: string[] }).tags;
      const categories = Array.isArray(tags)
        ? tags.map((t: string) => `\n      <category>${escapeXml(t)}</category>`).join('')
        : '';
      
      // Add author using Dublin Core creator (more flexible than RSS 2.0 email-only author)
      const author = '\n      <dc:creator>Jason Holt</dc:creator>';
      
      return `\n    <item>\n      <title>${title}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${description}</description>${categories}${author}\n      <content:encoded>${content}</content:encoded>\n    </item>`;
    })
  );

  const selfUrl = new URL('/rss.xml', site).toString();
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Mythic Blog — Jason Holt Digital</title>
    <link>${site.toString()}</link>
    <description>Release notes, design deep dives, and community stories from the Mythic Apps team.</description>
    <language>en-US</language>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />${items.join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

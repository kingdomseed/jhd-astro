import { getCollection } from 'astro:content';

// Minimal RSS 2.0 feed for Blog posts
export async function GET() {
  const site = new URL(import.meta.env.SITE ?? 'https://jasonholtdigital.com');
  const posts = (await getCollection('blog'))
    .slice()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = posts
    .map((post) => {
      const link = new URL(`/blog/${post.slug}/`, site).toString();
      const pubDate = post.data.date.toUTCString();
      const title = escapeXml(post.data.title);
      const description = escapeXml(post.data.summary);
      const content = `<![CDATA[<p>${description}</p>]]>`; // simple content:encoded using summary
      const categories = Array.isArray((post as any)?.tags)
        ? (post as any).tags.map((t: string) => `\n      <category>${escapeXml(t)}</category>`).join('')
        : '';
      return `\n    <item>\n      <title>${title}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${description}</description>${categories}\n      <content:encoded>${content}</content:encoded>\n    </item>`;
    })
    .join('');

  const selfUrl = new URL('/rss.xml', site).toString();
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Mythic Blog — Jason Holt Digital</title>
    <link>${site.toString()}</link>
    <description>Release notes, design deep dives, and community stories from the Mythic Apps team.</description>
    <language>en-US</language>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />${items}
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

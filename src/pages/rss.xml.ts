import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sorted = posts
    .slice()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Mythic Blog — Jason Holt Digital',
    description: 'Release notes, design deep dives, and community stories from the Mythic Apps team.',
    site: context.site!,
    customData: '<language>en-US</language>',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
      author: 'Jason Holt',
    })),
  });
}

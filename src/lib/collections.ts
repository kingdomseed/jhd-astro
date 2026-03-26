import { getCollection, type CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;
type ResourceEntry = CollectionEntry<'resources'>;

export async function getBlogPostsByLang(lang: 'en' | 'pt' = 'en'): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang || data.lang === undefined);
  return posts.slice().sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getResourcesByLang(lang: 'en' | 'pt' = 'en'): Promise<ResourceEntry[]> {
  const resources = await getCollection('resources', ({ data }) => data.lang === lang);
  return resources.slice().sort((a, b) => a.data.order - b.data.order);
}

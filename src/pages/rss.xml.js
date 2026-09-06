import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../site.config';

export async function GET(context) {
  const readingEntries = await getCollection('reading', ({ data }) => !data.private);
  const digestEntries = await getCollection('digest', ({ data }) => !data.private);

  const items = [
    ...readingEntries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      pubDate: entry.data.date,
      link: `/reading/${entry.slug}/`,
    })),
    ...digestEntries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      pubDate: entry.data.date,
      link: `/notes/${entry.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${siteConfig.name}｜${siteConfig.tagline}`,
    description: siteConfig.tagline,
    site: context.site,
    items,
  });
}

import { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}

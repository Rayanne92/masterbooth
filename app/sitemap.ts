import type { MetadataRoute } from 'next';
import { business } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { return business.siteUrl ? ['', '/mentions-legales', '/confidentialite'].map(path => ({url: `${business.siteUrl}${path}`})) : []; }

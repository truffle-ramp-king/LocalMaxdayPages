export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { seoSlugs } from '@/lib/site-data';
export default function sitemap(): MetadataRoute.Sitemap { const lastModified = new Date('2026-09-07'); return [{ url: 'https://maxday.ai', lastModified }, ...seoSlugs.map(slug => ({ url: `https://maxday.ai/${slug}`, lastModified }))]; }

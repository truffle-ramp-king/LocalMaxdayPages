export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return [
  { url: 'https://www.maxday.ai/', lastModified: new Date('2026-09-30') },
  { url: 'https://www.maxday.ai/pricing', lastModified: new Date('2026-09-30') },
  { url: 'https://www.maxday.ai/privacy-policy', lastModified: new Date('2026-09-08') },
  { url: 'https://www.maxday.ai/terms-of-use', lastModified: new Date('2026-09-08') },
]; }

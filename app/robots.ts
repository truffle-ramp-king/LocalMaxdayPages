export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
// Allow crawling so search engines can read the noindex metadata.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' } };
}

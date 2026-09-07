# Maxday SEO page prototype

A local, App Router-compatible implementation of Maxday's public marketing site and its first search-focused page cluster.

## Routes

| Route | Primary search intent |
| --- | --- |
| `/` | AI content workflow platform |
| `/ai-workflow-builder` | Visual AI content workflow builder |
| `/ai-social-video-generator` | AI social video generator |
| `/ai-video-for-agencies` | AI video tools for creative agencies |
| `/ecommerce-video-generator` | AI ecommerce video generator |
| `/product-to-video` | Product-to-video AI workflow |
| `/batch-video-generation` | Batch AI video generation |
| `/ai-ugc-video-generator` | AI UGC video generator |
| `/ai-influencer-generator` | AI influencer generator and content workflow |

The project also generates `/robots.txt` and `/sitemap.xml`.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## Integration notes

- Page content and targeting live in `lib/site-data.ts`, making copy review and route expansion straightforward.
- The seven landing pages share `components/seo-page.tsx`; each route receives unique metadata and FAQ structured data through `app/[slug]/page.tsx`.
- Shared visual primitives are isolated in `components/site-header.tsx`, `components/site-footer.tsx`, and `components/workflow-canvas.tsx`.
- Canonical URLs deliberately point at the intended future `maxday.ai` production paths. Change `metadataBase` and sitemap URLs for a staging deployment.
- Calls to action point to the existing Maxday login instead of simulating product functionality.
- The Open Graph image reuses Maxday's current production social asset; replace it if the brand team updates the campaign visual.

This starter uses Vinext's App Router-compatible runtime for local portability. The source follows Next.js App Router conventions so the `app`, `components`, and `lib` changes can be transplanted into the production Next.js repository with minimal adaptation.

## GitHub Pages coworker preview

All pages inherit `noindex, nofollow` metadata. Crawling stays allowed so engines can read the tag. Noindex does not enforce access restrictions.

Run `npm run build:pages` to export the site into `out/` with Next.js. Regular Vinext development and build commands remain available. The Pages build defaults to `/LocalMaxdayPages`; set `PAGES_BASE_PATH` to override it.

The GitHub repository and Pages preview are public. Under Settings → Pages, select GitHub Actions as the source. The included workflow publishes pushes to main and supports manual runs.

The expected URL after deployment is https://truffle-ramp-king.github.io/LocalMaxdayPages/. A private repository does not make the Pages website private.

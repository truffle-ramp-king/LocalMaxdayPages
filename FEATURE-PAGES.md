# Feature pages — October 30, 2026

## Routes

- `/workflows` — visual workflows, collaboration, Copy as app, API runs
- `/api` — Claude Code / Codex prompts and a documented App Runs request
- `/video-cloning` — Quick clone, Mosaic/inpaint (pixelate + blur), Clay figure, Depth Map
- `/content-scout` — link, keyword, and account research
- `/ai-tag-remover` — embedded AI metadata removal for images/video
- `/video-downloader` — Instagram/TikTok video downloads without watermarks
- `/ecommerce-clone` — Shopify content imports for campaign work

The desktop Features menu, mobile menu, homepage cards, and footer link to all seven routes. Pricing remains at `/pricing`, with its existing plan content unchanged.

## Live-site baseline and Templates

The live `https://maxday.ai/` homepage was inspected on October 30, 2026. It differs from the older landing page in this repository: its main content is the video-template gallery. The new homepage preserves that gallery and adds the feature discovery sections below it.

`lib/template-showcase.json` contains the 50 public template records returned by the live homepage at that time, including original IDs, titles, categories, poster URLs, and preview-video URLs. The first row favors commercial examples; Show more exposes the rest. Category filters operate on this showcase, not the entire production catalog. Video previews load on demand. Browser-compatible H.264/AAC MP4 excerpts (up to 12 seconds, 480px wide) are stored in `public/template-previews`; the original full-length and poster URLs remain in the manifest. Local posters are extracted from these previews so expired CDN thumbnails cannot break the gallery. These replace QuickTime sources that did not play reliably in browser verification.

**The full Templates application remains at `https://maxday.ai/templates`.** Header and gallery links deliberately point there. This repository does not contain the production Templates application, authentication, or import/clone backend; the release does not replace those systems. When integrating into the production app, keep its existing `/templates` route and live template data loader. The local snapshot can seed the showcase or be replaced with the production gallery component.

## Product evidence

- Existing fashion workflow and Content Scout screenshots are retained.
- The four supplied MP4s are stored in `public/cloning`. Posters are extracted from those videos.
- Original is labeled as the source, not a Quick clone result. Mosaic, blur, and clay are real supplied outputs.
- Depth Map uses the actual supplied Video Remake menu screenshot. No depth output was supplied, and no simulated output is presented as a product result.
- The API contract was checked against `https://maxday.ai/openapi/docs/get-start`. The API base is `https://api.maxday.ai/bio/dramas/v1`, with `/openapi/v1/apps/{appId}` and `/openapi/v1/app-runs` paths. The code example requires a published app and server-side credentials; it does not make calls from the marketing page.
- Login CTAs open the existing MaxDay login flow. No marketing page simulates an upload, download, scraping, or generation job.

## Feature interest measurement

Feature links carry `data-feature` and `data-placement`. `FeatureAnalytics` emits this non-personal event to the existing page's `dataLayer` and as a `maxday:feature-click` browser event:

```json
{
  "event": "maxday_feature_click",
  "feature": "video-cloning",
  "placement": "home-features",
  "destination": "/video-cloning"
}
```

Feature CTA URLs also carry `utm_source=maxday`, `utm_medium=website`, `utm_campaign=feature-discovery`, and `utm_content=<feature>` for login attribution.

**Connect `maxday_feature_click` to the production analytics container to persist/report clicks.** This repo has no configured analytics account or collection endpoint, so the event bridge alone does not store a dashboard or transmit visitor data. No third-party SDK has been added.

## Release and verification

- `npm run lint`
- `npm run build:pages` (the GitHub Pages production export)
- Browser checks: feature menu and mobile navigation; template filters and previews; cloning playback and treatments; API tabs/copy; responsive layouts and image loading.

GitHub Pages uses `/LocalMaxdayPages` as its base path, including the supplied video sources and posters. Pushing this branch does not deploy `maxday.ai`. The existing GitHub Actions workflow deploys the repository preview when changes are merged into `main`; production integration remains in the live application's deployment pipeline.

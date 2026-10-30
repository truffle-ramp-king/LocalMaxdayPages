# MaxDay AI marketing website

The homepage and seven feature pages for social media and ecommerce teams. The design follows the live MaxDay site, preserving its template showcase and adding Workflows & Apps, API, Video Cloning, Content Scout, AI Tag Remover, Video Downloader, and Ecommerce Clone.

Pricing, Support, Privacy Policy, and Terms of Service remain available. The full Templates application stays at [maxday.ai/templates](https://maxday.ai/templates). Marketing CTAs lead to the live MaxDay login flow.

See [FEATURE-PAGES.md](FEATURE-PAGES.md) for the route map, live-site integration notes, media provenance, and analytics event setup.

## Develop

```bash
npm ci
npm run dev
```

## Check and export

```bash
npm run lint
npm run build:pages
```

`build:pages` exports to `out/` for the existing GitHub Pages workflow. The preview uses the `/LocalMaxdayPages` base path by default and is marked `noindex`; the production build is indexable. The production canonical URL is `https://www.maxday.ai/`.

The GitHub Actions workflow publishes pushes to `main`. The preview repository is `truffle-ramp-king/LocalMaxdayPages`; merging the landing page branch into `main` updates its GitHub Pages preview.

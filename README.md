# MaxDay AI landing page

A landing page for MaxDay AI, focused on three capabilities for marketing teams:

- AI content generation with leading models in one workspace
- Content Scout for finding and importing Instagram Reels and TikToks
- Shared projects, collaborative workflows, reusable apps, and API access

The page uses actual MaxDay product screenshots supplied by the team. Model marks and model names match the original MaxDay page. The public `/pricing` page includes monthly and annual plans. Plan buttons lead to MaxDay login.

The existing Privacy Policy and Terms & Conditions pages from the GitHub repository are preserved as local routes.

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

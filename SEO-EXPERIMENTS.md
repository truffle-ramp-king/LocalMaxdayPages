# Maxday SEO and AI visibility experiments

Research date: September 7, 2026. Working audience assumption: English-speaking agencies and ecommerce creative teams. Start with US/English search measurements; change this if the actual sales market differs.

## Recommendation

Launch a small, evidence-rich cluster around repeatable AI video production. Start with batch ad variations and product-to-video, supported by one platform page. Prove what the product does with actual workflows, outputs, measured costs, and failure cases. Expand only after these pages generate relevant discovery signals.

This is an experiment backlog, not a ranking forecast. Search volume, keyword difficulty, backlink counts, Google rankings, GSC data, and AI citation baselines have not been measured. Web search results used here are directional discovery, not a fixed-location Google top-ten audit. No production changes or external publication were performed.

## What was reviewed

- Live [maxday.ai](https://maxday.ai/) presents a connected content-marketing workflow product spanning ideation through iteration. Its retrieved public text contains little detailed product evidence.
- Viewed localhost:3000 and its batch-video-generation page in the browser; read the source for all eight landing pages, shared template, metadata, robots, and sitemap.
- The local pages have distinct URLs, titles, descriptions, canonical tags, linked navigation, FAQs, and structured data. These are a useful foundation.
- The shared canvas is the same illustrative product-launch workflow on every landing page. The three-step sections remain conceptual. Feature lists are labeled as proof but are not demonstrations or customer evidence.
- Every landing page includes an influencer section, even where the primary task is ecommerce or batch production. Make supporting sections specific to the page's audience and use case.
- Titles often emphasize a benefit without clearly naming the category. For example, test “Batch AI Video Generation for Ad Variations | Maxday AI” against the existing “Generate video variations without repeating the setup.”
- The product-to-video page promises a concept and production assets. Do not target finished-video intent with copy that implies an automatic finished export unless that behavior is verified.
- Local robots rules explicitly allow AI search bots. They do not establish production access. Live robots and sitemap could not be retrieved through the research tools; this is an unresolved check, not evidence that either is missing.
- The folder already has a Git repository; the current project files are untracked. Its runtime is Vinext with Cloudflare integration, not an already-exported static website.

## Competitors to track

These are inferred competitors based on product overlap, not verified market-share leaders or customer-reported alternatives.

| Competitor | Overlap | What to study |
| --- | --- | --- |
| [FLORA](https://flora.ai/) | Multi-model creative canvas, reusable workflows, creative teams | Technique library, examples, industry pages, and links from tutorials to usable workflows |
| [Figma Weave, formerly Weavy](https://weave.figma.com/) | Node-based creative workflows | Documentation and how it explains controllable generation |
| [Runway Workflows](https://help.runwayml.com/hc/en-us/articles/45763528999699-Introduction-to-Workflows) | Node-based media generation | Task documentation and workflow education |
| [Creatify](https://creatify.ai/) | Product URLs, ad variants, creative workflows | Commercial-intent pages and the journey from an example to generating an ad |
| [Arcads](https://www.arcads.ai/) | AI advertising | Creative proof and messaging for performance advertisers |
| [Topview](https://www.topview.ai/) | AI video agent for marketing videos | Task-specific positioning and demonstration of outputs |

Also watch search competitors for individual queries: [DUTO](https://www.duto.ai/batch-ai-video-generator) for batch generation, [Wireflow](https://www.wireflow.ai/features/ai-video-ad-creator-for-agencies) for agency ad workflows, and [AI Photo](https://aiphoto.ai/blog/how-to-create-a-consistent-ai-influencer) for character consistency. Smaller specialist publishers appearing in the sampled results justify investigation; they do not prove low competition. The underlying model providers are also alternatives, but Maxday's proposed positioning is orchestration across a repeatable production process.

## Keyword opportunities to validate

Priorities below reflect product fit and ability to offer distinct evidence, not measured keyword difficulty. Publish only for workflows the product can currently perform.

| Priority | Candidate query family | Existing page | Evidence needed to compete |
| --- | --- | --- | --- |
| First | batch AI video generation; generate video ad variations | /batch-video-generation | One input set, actual batch outputs, controlled variables, retries, cost per accepted output |
| First | product image to video ad workflow; product to video AI workflow | /product-to-video | Source image or page, script, intermediate steps, final deliverable, explicit manual steps |
| Supporting | AI content workflow builder; visual AI video workflow | /ai-workflow-builder | Actual canvas and a reproducible multi-model workflow |
| Next | AI video workflow for agencies; client brief to storyboard AI | /ai-video-for-agencies | A sample brief, revision, approval, and handoff with a real example |
| Conditional | consistent AI influencer workflow; same AI character across videos | /ai-influencer-generator | Reference pack, several outputs, drift examples, rejection criteria |
| Later | AI UGC ad workflow; multiple video ad hooks from one product | /ai-ugc-video-generator | Clearly synthetic creator example and actual hook variants |
| Later | ecommerce video generator | /ecommerce-video-generator | A distinct catalog/team buying intent, separate from the task tutorial |
| Later | AI social video generator | /ai-social-video-generator | A specific social production use case; avoid an unfocused list of all formats |

The sampled results already include specialist pages for batch workflows, product-photo ads, agency workflows, and influencer consistency. Therefore, a definition plus generic steps will not be a defensible advantage. Broad “AI video generator” and “AI workflow builder” targeting should not consume the first sprint; assess the exact search intent before investing.

Use the [free keyword generator](https://ahrefs.com/keyword-generator) to expand these into 20–30 candidate phrases. Inspect each finalist using the [SERP checker](https://ahrefs.com/serp-checker) for the same country. Record intent, top pages, format, page-level referring domains where available, freshness, and a specific evidence gap Maxday can fill. Score product fit, obtainable original evidence, buyer relevance, and SERP opportunity from 0–2 each. Investigate candidates scoring 6/8 or better; this is a prioritization heuristic, not a ranking model. A missing or zero volume estimate is not proof of zero demand.

## Experiment backlog

Effort is approximate person-days, excluding deployment review and the cost of generating product examples. Observation windows start after publication and indexing. Success gates are operating decisions, not statistical significance thresholds.

| ID / priority | Hypothesis and intervention | Effort / window | Metric and decision rule |
| --- | --- | --- | --- |
| E0 — prerequisite | Discovery is constrained by technical access. Verify production HTTP status, crawl/rendered text, canonicals, sitemap, snippet eligibility, CDN access, and GSC URL Inspection for the first three pages. Test the landing-page-to-signup path and attach source-page attribution. | 1 day; inspect at launch, 7 and 14 days | Each intended URL is accessible and eventually indexed with the expected canonical. Diagnose excluded URLs before treating zero impressions as a content failure. Do not call this a ranking experiment. |
| E1 — first | A demonstrated batch workflow attracts more relevant discovery than a generic landing page. Enrich /batch-video-generation with one real batch, inputs, outputs, settings, timings, retries, and downloadable input template. | 2–3 days; 6–8 weeks | Weekly nonbrand impressions for the batch/ad-variation query family, relevant query diversity, template use, and attributed activations. Expand when relevant impressions recur for 3 consecutive weeks or a qualified organic activation occurs; record raw counts. |
| E2 — first | A complete product-to-video walkthrough meets task intent. Enrich /product-to-video with one concrete product, all intermediate steps, finished outputs where supported, and explicit manual finishing. | 2–3 days; 6–8 weeks | Same measures as E1 for the product-to-video family. Compare directionally with E1, acknowledging different demand. If impressions target the wrong deliverable, revise intent and title. |
| E3 — next | Published failure-aware measurements are more useful to cite than marketing claims. Run a small benchmark, e.g. three product assets with four requested variants each. Predefine acceptance criteria and include rejected results, model versions, spend, human editing, and time. | 3–5 days; 8–12 weeks | Relevant independent references, referring domains, citations in the fixed AI prompt panel, and benchmark-to-product visits. After 8 weeks with no pickup, improve the finding or distribution before producing another benchmark. The benchmark's 12 outputs are illustrative, not population-level evidence. |
| E4 — next | A task-specific video helps people discover and trust the workflow. Publish a screen-recorded tutorial based on E1 or E2, with a substantive HTML transcript and link to the exact landing page. | 1–2 days; 6–8 weeks | Search-led video discovery, tagged referral visits, and resulting template use or activations. Evaluate channel discovery separately from website ranking. |
| E5 — next | Clear product facts reduce ambiguity in AI answers and buyer research. Add verified supported inputs, outputs, integrations, limits, availability, company identity, author/reviewer, and pricing or an honest access explanation. Use dates and sources where facts change. | 1–2 days; 4–8 weeks | Correctness and supporting citations for branded prompts in the AI panel. Track unsolicited nonbrand mentions separately. Improved branded accuracy is not proof of wider discovery. |
| E6 — next | A genuinely useful reusable asset earns relevant independent references. Package E1's template and E3's findings for a small set of relevant educators, customers, and workflow communities. Seek honest testing; disclose affiliations. | 1–2 days preparation; 8–12 weeks | Relevant referring domains, referral engagement, and third-party explanations of Maxday. A first legitimate editorial reference is progress. Do not buy links or manufacture testimonials. Outreach is proposed, not sent. |
| E7 — conditional | Character consistency is a distinct discoverable problem if Maxday can demonstrate it. Publish reference inputs, six scenes, accepted/rejected outputs, and a reproducible workflow on /ai-influencer-generator. | 2–3 days; 6–8 weeks | Consistency-related nonbrand impressions and qualified template use. Run only after actual capability is verified and the first cluster has shipped. |
| E8 — later | An honest task-specific comparison helps evaluators choose. Compare Maxday and one direct alternative on the same task, documenting settings, dates, cost, limitations, and where each is preferable. | 2–4 days; 8–12 weeks | Comparison-intent impressions, citations, and qualified product visits. Publish after hands-on evidence; no invented feature tables or automatic claims that Maxday wins. |
| E9 — later | Clearer titles improve relevance and search click-through. Change the title and aligned H1 on an indexed page once it has stable relevant impressions; keep the rest stable. | 0.5 day; at least two 28-day periods | Compare the same query, country, device, and similar ranking range. At tiny impression counts, report inconclusive instead of a CTR win. Avoid percentage claims from a handful of clicks. |

## Measurement with very little traffic

Use staged launches and a dated change log, not visitor-split A/B tests. These are observational experiments: search demand, ranking updates, competitors, and page age confound comparisons. Keep other page changes stable during each observation window where practical.

Maintain one weekly row per page: index state, canonical, nonbrand impressions, clicks, relevant queries, organic visits, CTA clicks, completed signup, first successful workflow, referring domains, and AI citation observations. Record unavailable values as unknown rather than zero. Exclude internal testers and separate colleague-review traffic from organic discovery. CTA clicks are not activations.

GSC is still useful before it has much traffic: inspect indexing and emerging query/page matches. Do not assume its visible query rows are a complete census. Google's AI-feature visits are included in the Web performance report, so that report alone does not isolate AI Overviews or AI Mode. [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

For an affordable AI panel, freeze six unbranded prompts and two branded diagnostic prompts. Run each twice per engine per week in fresh conversations on two engines with web search enabled: 32 observations weekly. Record engine/model, date, locale, exact prompt, search mode, answer, cited URLs, brand mention, and accuracy. No instruction to mention Maxday in the unbranded set. A citation requires an actual supporting link; a bare name is only a mention. This is a small reproducibility panel, not an estimate of all AI demand.

Suggested fixed prompts:

1. How can a small ecommerce team generate several video ad variations from one product image?
2. What tools let an agency reuse an AI video workflow across different client briefs?
3. How do I batch-generate product videos while keeping branding consistent?
4. What is a practical workflow for turning a product page into a video ad?
5. Which tools connect image, video, voice, and music generation in one workflow?
6. How can I keep the same virtual character consistent across a series of videos?
7. What does Maxday AI do, and who is it for?
8. What are Maxday AI's supported inputs, outputs, and limitations?

Save a baseline before launch. Report linked citation counts and mention counts with their denominators, split branded/unbranded and by engine. Look for citations recurring across at least two weekly rounds; isolated results remain anecdotal. Also track observable AI referral traffic, recognizing that missing referrers do not prove zero AI influence.

## First month

- Week 1: verify product capabilities; choose the target audience; capture GSC and AI baselines; validate candidate SERPs; complete E0; prepare the three-page launch consisting of the platform page and E1/E2.
- Week 2: publish the approved pages on maxday.ai; submit/inspect their production URLs; record publication dates and events. Start E1/E2 observation windows.
- Week 3: create E4's walkthrough and prepare E3's benchmark from actual product runs. Add E5's factual material.
- Week 4: review indexing and early query relevance; publish the benchmark if sound; prepare E6 distribution. Avoid a ranking verdict this early. Reserve weeks 6–8 for the first continue/revise decision and weeks 8–12 for authority/citation review.

If the site cannot be public yet, use the first month for evidence, technical readiness, and colleague review. Public ranking and AI retrieval experiments begin only when the relevant content is accessible on the production domain.

## Free tools and what they can establish

- [Keyword generator](https://ahrefs.com/keyword-generator): candidate phrases and available demand estimates; not proof of attainable rankings.
- [SERP checker](https://ahrefs.com/serp-checker): inspect actual competing pages for the selected country and intent.
- [Backlink checker](https://ahrefs.com/backlink-checker): discover who references competitors' individual tutorials and studies. Prioritize editorial relevance over raw link totals.
- [Website authority checker](https://ahrefs.com/website-authority-checker): a vendor-defined backlink comparison metric. DR is not a Google score or a campaign success criterion.
- GSC: production indexing, canonical diagnostics, query/page impressions, and clicks. Connect event analytics to understand downstream outcomes.

The tools' public availability was checked; site-specific metric reports were not run. Keep tooling spend at zero initially; the constrained resource is useful first-hand evidence.

## GitHub and colleague review

Put the source and this plan in the team's GitHub repository for review, then merge selected pages into the production website. A preview helps colleagues review; SEO benefits need the intended pages published on maxday.ai.

GitHub Pages serves static files. The current Vinext/Cloudflare project requires a verified static export/adaptation before it can use that hosting; uploading the source is not sufficient. See [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Use authenticated preview access when material is private, or crawlable noindex HTML for a publicly accessible review copy. Noindex is not access control. Do not rely on a canonical pointing to future production URLs to hide a preview. Keep preview URLs out of the production sitemap, and verify removal of preview-only noindex at production launch. Existing hardcoded maxday.ai canonicals and sitemap entries need environment-aware review. No repository upload or preview publication has been performed.

## Avoid low-value work

Do not expand into dozens of near-identical landing pages before one cluster earns discovery. Retain useful visible FAQs, but do not make FAQ markup a growth project: Google ended FAQ rich results in May 2026. Google also says llms.txt does not affect its visibility or rankings. [Google documentation updates](https://developers.google.com/search/updates).

Google requires no special AI schema beyond normal search eligibility. Clear text, internal links, supporting evidence, and accurate structured data remain useful. [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features). For ChatGPT search access, check OAI-SearchBot and infrastructure rules using [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots); crawler access is eligibility, not a citation guarantee.

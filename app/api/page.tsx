import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleDot, Code2, Layers3, RefreshCw, ScanLine, Sparkles, TrendingUp } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ApiModelCatalog } from '@/components/api-model-catalog';

const docsUrl = 'https://www.maxday.ai/openapi/docs/get-start';
const description = 'Find relevant viral posts with the MaxDay Social Trend API and create content at scale with image, video, speech, and music models through the Models API.';

export const metadata: Metadata = {
  title: 'Social Trend & Models API | MaxDay AI',
  description,
  alternates: { canonical: 'https://www.maxday.ai/api' },
  openGraph: { title: 'Social Trend & Models API | MaxDay AI', description, url: 'https://www.maxday.ai/api', images: [] },
  twitter: { card: 'summary', title: 'Social Trend & Models API | MaxDay AI', description, images: [] },
};

function TrendDiscovery() {
  return <figure className="api-discovery" aria-labelledby="discovery-caption">
    <div className="api-diagram-heading"><span className="live-dot" /><span>YOUR DAILY TREND FEED</span><TrendingUp size={16} aria-hidden="true" /></div>
    <ol className="api-discovery-steps">
      <li><span>01</span><strong>Competitor accounts in your niche</strong></li>
      <li><span>02</span><strong>AI finds similar accounts</strong></li>
      <li><span>03</span><strong>Automatically collect content every day</strong></li>
      <li><span>04</span><strong>Sort by performance</strong></li>
    </ol>
    <figcaption id="discovery-caption"><RefreshCw size={15} aria-hidden="true" /> Fresh content. Ranked by performance.</figcaption>
  </figure>;
}

export default function ApiPage() {
  return <><SiteHeader /><main className="api-page">
    <section className="api-hero section-container" aria-labelledby="api-title">
      <div className="api-hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> MAXDAY / API</p><h1 id="api-title">Find what&apos;s next.<br /><em>Create at scale.</em></h1><p className="api-lede">Bring social trend discovery and leading AI models into your own workflows. Find relevant viral posts faster, then turn inspiration into your next creation.</p><div className="hero-actions"><a className="button button-primary" href={docsUrl}>Explore API docs <ArrowUpRight size={18} aria-hidden="true" /></a><a className="button button-text" href="#api-offerings">Discover the APIs <ArrowDownRight size={18} aria-hidden="true" /></a></div></div>
      <div className="api-hero-visual" aria-label="Discover social trends, then create with AI models"><div className="api-visual-label"><Code2 size={16} aria-hidden="true" /><span>BUILD WITH MAXDAY</span></div><div className="api-visual-card"><div className="api-visual-icon"><TrendingUp size={24} aria-hidden="true" /></div><div><small>01 / DISCOVER</small><strong>Social Trend API</strong><p>Social signals → creative inspiration</p></div></div><div className="api-visual-connector"><span /><ArrowDownRight size={20} aria-hidden="true" /><span>Put inspiration to work</span></div><div className="api-visual-card api-visual-create"><div className="api-visual-icon"><Sparkles size={24} aria-hidden="true" /></div><div><small>02 / CREATE</small><strong>Models API</strong><p>AI models → your next creation</p></div></div><div className="api-visual-foot"><span>Image</span><span>Video</span><span>Speech</span><span>Music</span></div></div>
    </section>

    <nav className="api-offerings section-container" id="api-offerings" aria-label="Explore API categories"><a href="#social-trend"><span>01</span><div><strong>Social Trend API</strong><p>Discover relevant viral content faster.</p></div><ArrowDownRight size={22} aria-hidden="true" /></a><a href="#models-api"><span>02</span><div><strong>Models API</strong><p>Create through the models you choose.</p></div><ArrowDownRight size={22} aria-hidden="true" /></a></nav>

    <section className="api-trend-section section-container" id="social-trend" aria-labelledby="api-trend-title"><div className="api-section-copy"><p className="section-label"><span>01</span> SOCIAL TREND API</p><h2 id="api-trend-title">Find the posts<br />that <em>move people.</em></h2><p>Discover trends and viral posts that matter to your business. Start with competitor accounts in your niche, collect fresh content daily, and sort posts by performance.</p><p>The Social Trend API brings this discovery into your own workflows, giving your team a faster way to find inspiration for content at scale.</p><ul className="api-benefits"><li><Check size={16} aria-hidden="true" /> Discover beyond the accounts you already know</li><li><Check size={16} aria-hidden="true" /> Focus on content relevant to your business</li><li><Check size={16} aria-hidden="true" /> Keep finding fresh creative starting points</li></ul></div><TrendDiscovery /></section>

    <section className="api-bridge section-container" aria-labelledby="api-bridge-title"><span className="api-bridge-icon"><Layers3 size={27} aria-hidden="true" /></span><div><p className="section-label">FROM DISCOVERY TO CREATION</p><h2 id="api-bridge-title">Turn a trend into your next idea.</h2><p>Take the viral posts you discover into the MaxDay platform. Use them as a starting point to recreate content, explore variations, and build a process you can run again.</p></div><Link href="/#platform" className="api-inline-link">Explore the platform <ArrowUpRight size={17} aria-hidden="true" /></Link></section>

    <section className="api-models-section" id="models-api" aria-labelledby="api-models-title"><div className="section-container"><div className="api-models-intro"><div><p className="section-label"><span>02</span> MODELS API</p><h2 id="api-models-title">Your workflow.<br /><em>Your choice of model.</em></h2></div><p>Access AI models through MaxDay and use them in your own content creation workflows. Generate images, edit with inpainting, create panoramas, and produce video, speech, and music.</p></div><ApiModelCatalog /><div className="api-models-note"><ScanLine size={16} aria-hidden="true" /><p>Choose a capability to see the models offered for that task.</p><a href={docsUrl}>Read the documentation <ArrowUpRight size={15} aria-hidden="true" /></a></div></div></section>

    <section className="api-closing section-container" aria-labelledby="api-closing-title"><div><p className="section-label"><CircleDot size={13} aria-hidden="true" /> BUILT FOR YOUR NEXT CREATION</p><h2 id="api-closing-title">Connect discovery.<br /><em>Scale creation.</em></h2><p>Bring MaxDay into the tools and workflows your team already uses.</p></div><div className="api-closing-actions"><a className="button button-primary" href={docsUrl}>Explore API documentation <ArrowUpRight size={18} aria-hidden="true" /></a><a href="https://www.maxday.ai/login" className="api-inline-link">Open the MaxDay workspace <ArrowRight size={17} aria-hidden="true" /></a></div></section>
  </main><SiteFooter /></>;
}

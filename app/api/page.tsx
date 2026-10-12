import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleDot, Code2, Layers3, ScanLine, Sparkles, TrendingUp } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ApiModelCatalog } from '@/components/api-model-catalog';
import scoutScreenshot from '@/public/content-scout-fashion.webp';
import codexMark from '@/public/model-marks/openai.svg';
import claudeMark from '@/public/model-marks/claude.svg';

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
  return <figure className="api-discovery api-scout-figure" aria-labelledby="discovery-caption">
    <div className="api-diagram-heading"><span className="live-dot" /><span>CONTENT SCOUT / FASHION</span><span className="api-scout-real">REAL PRODUCT VIEW</span></div>
    <a className="api-scout-screen" href={scoutScreenshot.src} target="_blank" rel="noopener noreferrer" aria-label="View the full Content Scout fashion screenshot">
      <Image src={scoutScreenshot} alt="Content Scout results from fashion accounts, showing clothing, bags, shoes, and outfit posts with views and engagement metrics" sizes="(max-width: 800px) 100vw, 760px" />
    </a>
    <div className="api-scout-source"><span>Fashion inspiration, found by Content Scout</span><a href={scoutScreenshot.src} target="_blank" rel="noopener noreferrer">View full screenshot <ArrowUpRight size={13} aria-hidden="true" /></a></div>
    <div className="api-scout-connection" aria-label="Connect Social Trend API research to workflows built with Codex and Claude Code">
      <div className="api-scout-api"><Code2 size={17} aria-hidden="true" /><span>MAXDAY SOCIAL TREND API</span></div>
      <div className="api-scout-clients"><div><Image src={codexMark} alt="" width={23} height={23} unoptimized /><strong>Codex</strong></div><div><Image src={claudeMark} alt="" width={23} height={23} unoptimized /><strong>Claude Code</strong></div></div>
    </div>
    <figcaption id="discovery-caption"><span>Bring trend research into your AI workflow.</span><small>Integration concept · MCP and Codex plugin access planned.</small></figcaption>
  </figure>;
}

export default function ApiPage() {
  return <><SiteHeader /><main className="api-page">
    <section className="api-hero section-container" aria-labelledby="api-title">
      <div className="api-hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> MAXDAY / API</p><h1 id="api-title">Find trending posts<br /><em>Create with AI</em></h1><p className="api-lede">Bring social trend discovery and leading AI models into your own workflows. Find relevant viral posts faster, then turn inspiration into your next creation.</p><div className="hero-actions"><a className="button button-primary" href={docsUrl}>Explore API docs <ArrowUpRight size={18} aria-hidden="true" /></a><a className="button button-text" href="#api-offerings">Discover the APIs <ArrowDownRight size={18} aria-hidden="true" /></a></div></div>
      <div className="api-hero-visual" aria-label="Discover social trends, then create with AI models"><div className="api-visual-label"><Code2 size={16} aria-hidden="true" /><span>BUILD WITH MAXDAY</span></div><div className="api-visual-card"><div className="api-visual-icon"><TrendingUp size={24} aria-hidden="true" /></div><div><small>01 / DISCOVER</small><strong>Social Trend API</strong><p>Social signals → creative inspiration</p></div></div><div className="api-visual-connector"><span /><ArrowDownRight size={20} aria-hidden="true" /><span>Put inspiration to work</span></div><div className="api-visual-card api-visual-create"><div className="api-visual-icon"><Sparkles size={24} aria-hidden="true" /></div><div><small>02 / CREATE</small><strong>Models API</strong><p>AI models → your next creation</p></div></div><div className="api-visual-foot"><span>Image</span><span>Video</span><span>Speech</span><span>Music</span></div></div>
    </section>

    <nav className="api-offerings section-container" id="api-offerings" aria-label="Explore API categories"><a href="#social-trend"><span>01</span><div><strong>Social Trend API</strong><p>Discover relevant viral content faster.</p></div><ArrowDownRight size={22} aria-hidden="true" /></a><a href="#models-api"><span>02</span><div><strong>Models API</strong><p>Create through the models you choose.</p></div><ArrowDownRight size={22} aria-hidden="true" /></a></nav>

    <section className="api-trend-section section-container" id="social-trend" aria-labelledby="api-trend-title"><div className="api-section-copy"><p className="section-label"><span>01</span> SOCIAL TREND API</p><h2 id="api-trend-title">Find viral trends in<br /><em>your niche</em></h2><p>Discover trends and viral posts that matter to your business. Start with competitor accounts in your niche, collect fresh content daily, and sort posts by performance.</p><p>Bring this research into workflows you build with Codex or Claude Code through the Social Trend API. Go from discovering relevant posts to creating your own content with AI.</p><ul className="api-benefits"><li><Check size={16} aria-hidden="true" /> Discover beyond the accounts you already know</li><li><Check size={16} aria-hidden="true" /> Focus on content relevant to your business</li><li><Check size={16} aria-hidden="true" /> Keep finding fresh creative starting points</li></ul></div><TrendDiscovery /></section>

    <section className="api-bridge section-container" aria-labelledby="api-bridge-title"><span className="api-bridge-icon"><Layers3 size={27} aria-hidden="true" /></span><div><p className="section-label">FROM DISCOVERY TO CREATION</p><h2 id="api-bridge-title">Turn a trend into your next idea.</h2><p>Take the viral posts you discover into the MaxDay platform. Use them as a starting point to recreate content, explore variations, and build a process you can run again.</p></div><Link href="/#platform" className="api-inline-link">Explore the platform <ArrowUpRight size={17} aria-hidden="true" /></Link></section>

    <section className="api-models-section" id="models-api" aria-labelledby="api-models-title"><div className="section-container"><div className="api-models-intro"><div><p className="section-label"><span>02</span> MODELS API</p><h2 id="api-models-title">Use top AI models<br />with <em>Codex and Claude Code</em></h2></div><p>Use the MaxDay Models API in content creation workflows you build with Codex and Claude Code. Generate images, edit with inpainting, create panoramas, and produce video, speech, and music.</p></div><ApiModelCatalog /><div className="api-models-note"><ScanLine size={16} aria-hidden="true" /><p>Choose a capability to see the models offered for that task.</p><a href={docsUrl}>Read the documentation <ArrowUpRight size={15} aria-hidden="true" /></a></div></div></section>

    <section className="api-closing section-container" aria-labelledby="api-closing-title"><div><p className="section-label"><CircleDot size={13} aria-hidden="true" /> BUILT FOR YOUR NEXT CREATION</p><h2 id="api-closing-title">Connect discovery.<br /><em>Scale creation.</em></h2><p>Bring MaxDay into the tools and workflows your team already uses.</p></div><div className="api-closing-actions"><a className="button button-primary" href={docsUrl}>Explore API documentation <ArrowUpRight size={18} aria-hidden="true" /></a><a href="https://www.maxday.ai/login" className="api-inline-link">Open the MaxDay workspace <ArrowRight size={17} aria-hidden="true" /></a></div></section>
  </main><SiteFooter /></>;
}

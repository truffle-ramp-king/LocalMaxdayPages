import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, X } from 'lucide-react';
import { seoPages, type SeoSlug } from '@/lib/site-data';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { WorkflowCanvas } from './workflow-canvas';

export function SeoPage({ slug }: { slug: SeoSlug }) {
  const page = seoPages[slug]; const Icon = page.icon;
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main><div className="top-glow" /><SiteHeader /><article>
    <section className={`seo-hero accent-${page.accent}`}><div className="seo-hero-copy"><p className="eyebrow"><Icon size={15} /> {page.eyebrow}</p><h1>{page.title}</h1><p className="lede">{page.description}</p><div className="hero-actions"><a className="button button-primary" href="https://maxday.ai/login">Start building <ArrowRight size={17} /></a><Link className="text-link" href="/#workflows">Explore workflows <ChevronRight size={16} /></Link></div><ul className="proof-row">{page.proof.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></div><WorkflowCanvas compact /></section>
    <section className="answer-section section-pad"><p className="section-kicker">The direct answer</p><h2>What is {page.intent}?</h2><p>{page.faqs[0][1]} Maxday makes the steps visible on a collaborative canvas, so creative teams can combine specialized AI models without losing control of the process.</p></section>
    <section className="steps-section section-pad"><div className="section-heading"><p className="section-kicker">How it works</p><h2>From first input to repeatable output</h2></div><div className="step-grid">{page.steps.map(([title, body], index) => <div className="step-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="influencer-section section-pad"><div><p className="section-kicker">For AI influencer creators</p><h2>{page.influencerAngle[0]}</h2></div><div><p>{page.influencerAngle[1]}</p><Link className="text-link" href="/ai-influencer-generator">Explore the AI influencer workflow <ChevronRight size={16} /></Link></div></section>
    <section className="fit-section section-pad"><div><p className="section-kicker">Best fit</p><h2>Built for professionals with a process to scale</h2></div><div className="fit-list">{page.bestFor.map(item => <p key={item}><Check size={17} />{item}</p>)}<p className="not-fit"><X size={17} />Not ideal for: {page.notFor}</p></div></section>
    <section className="faq-section section-pad"><div className="section-heading"><p className="section-kicker">Questions, answered</p><h2>Frequently asked questions</h2></div><div className="faq-list">{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="final-cta section-pad"><p className="eyebrow">Ideation → Creation → Publication → Evaluation → Iteration</p><h2>Make your best creative process repeatable.</h2><a className="button button-light" href="https://maxday.ai/login">Build with Maxday <ArrowRight size={17} /></a></section>
  </article><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></main>;
}

import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PricingPlans } from '@/components/pricing-plans';

export const metadata: Metadata = {
  title: 'Pricing | MaxDay AI',
  description: 'Compare Free, Starter, Pro, Scale, and Enterprise plans. Choose monthly or annual billing and explore model credit usage.',
  alternates: { canonical: 'https://www.maxday.ai/pricing' },
  openGraph: { title: 'Pricing | MaxDay AI', url: 'https://www.maxday.ai/pricing', description: 'Find the right MaxDay plan for your creative team.' },
  twitter: { title: 'Pricing | MaxDay AI', description: 'Find the right MaxDay plan for your creative team.' },
};

const creditTables = [
  { title: 'Image Model', rows: [
    ['Nano Banana Pro', '1K', '4.8 credits'],
    ['GPT Image 2', 'Any', '0.2 credits'],
    ['Midjourney', '1K', '3.4 credits'],
  ] },
  { title: 'Video Model', rows: [
    ['Seedance 2.0 Pro', 'Ref Image, Ref Audio, 720p, 4s', '24 credits'],
    ['Seedance 2.0 Fast', 'Ref Image, Ref Audio, 720p, 4s', '18.6 credits'],
    ['Kling 3.0', '2K, 3s', '20.5 credits'],
  ] },
  { title: 'LLM Model', rows: [
    ['Google: Gemini 3.5 Flash', '1M tokens', 'Input 49.2 / Output 295.3 credits'],
  ] },
];

export default function PricingPage() {
  return <><SiteHeader /><main className="pricing-page">
    <header className="pricing-heading"><p className="section-label">MAXDAY / PRICING</p><h1>Upgrade your plan</h1><p>Choose monthly or annual workspace billing powered by Stripe Checkout. Credits are granted monthly after payment is confirmed.</p></header>
    <PricingPlans />
    <section className="credit-topup" aria-labelledby="topup-title"><div><h2 id="topup-title">Need more credits?</h2><p>Buy credits through Stripe without changing your subscription.</p></div><div className="topup-actions"><span className="credit-package">1,000 credits · $60</span><span className="credit-rate">$0.060 / credit</span><a className="pricing-button" href="https://www.maxday.ai/login">Buy credits</a></div></section>
    <section className="credit-reference" aria-labelledby="reference-title"><div className="credit-reference-heading"><div><h2 id="reference-title">Model credit reference</h2><p>Estimated credit usage by model and configuration. Actual usage is based on each generation task.</p></div><span className="reference-badge">For reference</span></div>
      {creditTables.map(group => <div className="credit-table-wrap" key={group.title}><table className="credit-table"><caption>{group.title}</caption><thead><tr><th scope="col">Model</th><th scope="col">Config</th><th scope="col">Credits</th></tr></thead><tbody>{group.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div>)}
    </section>
  </main><SiteFooter /></>;
}

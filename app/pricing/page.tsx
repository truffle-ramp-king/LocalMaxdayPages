import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PricingPlans } from '@/components/pricing-plans';

export const metadata: Metadata = {
  title: 'Pricing | MaxDay AI',
  description: 'Compare Free, Starter, Pro, Scale, and Enterprise plans. Choose monthly or annual billing for your social media team.',
  alternates: { canonical: 'https://www.maxday.ai/pricing' },
  openGraph: { title: 'Pricing | MaxDay AI', url: 'https://www.maxday.ai/pricing', description: 'Find the right MaxDay plan for your social media team.' },
  twitter: { title: 'Pricing | MaxDay AI', description: 'Find the right MaxDay plan for your social media team.' },
};

export default function PricingPage() {
  return <><SiteHeader /><main className="pricing-page">
    <header className="pricing-heading"><p className="section-label">MAXDAY / PRICING</p><h1>Upgrade your plan</h1><p>Choose monthly or annual workspace billing powered by Stripe Checkout. Credits are granted monthly after payment is confirmed.</p></header>
    <PricingPlans />
  </main><SiteFooter /></>;
}

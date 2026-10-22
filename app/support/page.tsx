import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code2, Layers3, Mail, Wallet } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const description = 'Contact the MaxDay team for help with your workspace, Content Scout, AI content creation, plans, or API workflows. Email team@maxday.ai.';

export const metadata: Metadata = {
  title: 'Support | MaxDay AI',
  description,
  alternates: { canonical: 'https://www.maxday.ai/support' },
  openGraph: { title: 'Support | MaxDay AI', description, url: 'https://www.maxday.ai/support', images: [] },
  twitter: { card: 'summary', title: 'Support | MaxDay AI', description, images: [] },
};

const resources = [
  { href: '/#platform', icon: Layers3, label: 'THE PLATFORM', title: 'Explore MaxDay', description: 'Discover social inspiration, create with leading AI models, and collaborate in shared projects.' },
  { href: '/pricing', icon: Wallet, label: 'PLANS & BILLING', title: 'Find your plan', description: 'Compare plans and see which option fits your team and the content you want to create.' },
  { href: '/api', icon: Code2, label: 'BUILD WITH MAXDAY', title: 'Explore the APIs', description: 'Learn about the Social Trend API and models for image, video, speech, music, and more.' },
];

export default function SupportPage() {
  return <><SiteHeader /><main className="support-page">
    <section className="support-hero section-container" aria-labelledby="support-title">
      <div><p className="eyebrow"><span className="eyebrow-dot" /> MAXDAY / SUPPORT</p><h1 id="support-title">A little help.<br /><em>Keep creating.</em></h1><p className="support-lede">Have a question about MaxDay or need a hand with your workspace? Get in touch with our team. We can help you find your way around the platform, understand your plan, or work through an issue.</p></div>
      <aside className="support-contact" aria-labelledby="support-contact-title"><span className="support-mail-icon"><Mail size={26} aria-hidden="true" /></span><p className="section-label">LET’S TALK</p><h2 id="support-contact-title">Email the MaxDay team</h2><p>For product questions, account help, or feedback about your experience, reach us at:</p><a href="mailto:team@maxday.ai" className="support-email">team@maxday.ai <ArrowUpRight size={22} aria-hidden="true" /></a><span className="support-contact-note">Tell us what you’re working on. We’ll take it from there.</span></aside>
    </section>

    <section className="support-details section-container" aria-labelledby="support-details-title"><div><p className="section-label">HELP US HELP YOU</p><h2 id="support-details-title">A few details<br />go a <em>long way.</em></h2><p>Whether you’re setting up your first project or building a repeatable creative process, a little context helps us understand your question.</p></div><ol className="support-checklist"><li><span>01</span><div><h3>Your account</h3><p>Include the email address you use for MaxDay so we can understand which account your question relates to.</p></div></li><li><span>02</span><div><h3>What you’re trying to do</h3><p>Tell us which part of MaxDay you’re using and what you want to achieve, from finding social references to creating content or running an API workflow.</p></div></li><li><span>03</span><div><h3>What happened</h3><p>If something isn’t working as expected, describe what you saw and the steps that led to it. A screenshot or the exact error message can help explain the issue.</p></div></li></ol></section>

    <section className="support-explore section-container" aria-labelledby="support-explore-title"><div className="support-explore-heading"><div><p className="section-label">GET TO KNOW MAXDAY</p><h2 id="support-explore-title">Your next step<br /><em>starts here.</em></h2></div><p>MaxDay brings social research, AI content generation, and team collaboration into one workspace. Find inspiration with Content Scout, create images and videos with top AI models, and keep your campaign assets and repeatable processes together.</p></div><div className="support-resources">{resources.map(({ href, icon: Icon, label, title, description: detail }) => <Link className="support-resource" href={href} key={href}><span className="support-resource-icon"><Icon size={22} aria-hidden="true" /></span><p className="section-label">{label}</p><h3>{title}</h3><p>{detail}</p><span className="support-resource-link">Take a look <ArrowRight size={17} aria-hidden="true" /></span></Link>)}</div></section>
  </main><SiteFooter /></>;
}

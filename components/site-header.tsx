import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';

export function Mark({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}><path fill="currentColor" d="M24 24C13.635 13.635 10.365 13.635 0 24 10.365 13.635 10.365 10.365 0 0c10.365 10.365 13.635 10.365 24 0-10.365 10.365-10.365 13.635 0 24" /></svg>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" aria-label="MaxDay AI home"><Mark className="brand-mark" /><span>MaxDay AI</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#platform">Platform</Link><Link href="/#scout">Content Scout</Link><Link href="/#teams">Teamwork</Link><a href="https://www.maxday.ai/openapi/docs/get-start">API</a><Link href="/pricing">Pricing</Link></nav>
    <div className="header-actions"><a className="login-link" href="https://www.maxday.ai/login">Login</a><a className="header-cta" href="https://www.maxday.ai/login">Get started <ArrowUpRight size={16} aria-hidden="true" /></a></div>
    <details className="mobile-nav"><summary aria-label="Open navigation"><Menu size={21} /></summary><nav aria-label="Mobile navigation"><Link href="/#platform">Platform</Link><Link href="/#scout">Content Scout</Link><Link href="/#teams">Teamwork</Link><a href="https://www.maxday.ai/openapi/docs/get-start">API</a><Link href="/pricing">Pricing</Link><a href="https://www.maxday.ai/login">Login</a></nav></details>
  </div></header>;
}

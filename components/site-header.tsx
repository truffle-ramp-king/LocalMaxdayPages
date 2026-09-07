import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { navPages } from '@/lib/site-data';

export function Mark({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}><path fill="currentColor" d="M24 24C13.635 13.635 10.365 13.635 0 24 10.365 13.635 10.365 10.365 0 0c10.365 10.365 13.635 10.365 24 0-10.365 10.365-10.365 13.635 0 24" /></svg>;
}

export function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Maxday AI home"><Mark className="brand-mark" /><span>Maxday AI</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <a className="button button-light header-cta" href="https://maxday.ai/login">Log in <ArrowUpRight size={16} /></a>
    <details className="mobile-nav"><summary aria-label="Open navigation"><Menu size={20} /></summary><nav>{navPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
  </header>;
}

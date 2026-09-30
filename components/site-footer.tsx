import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Mark } from './site-header';

export function SiteFooter() {
  return <footer className="site-footer"><div className="section-container footer-grid"><div className="footer-about"><Link href="/" className="brand" aria-label="MaxDay AI home"><Mark className="brand-mark" /><span>MaxDay AI</span></Link><p>Research, create, and collaborate on your next social campaign.</p></div><div className="footer-links"><div><strong>Explore</strong><Link href="/#platform">Platform</Link><Link href="/#scout">Content Scout</Link><Link href="/#teams">Teamwork</Link></div><div><strong>MaxDay</strong><Link href="/pricing">Pricing</Link><a href="https://www.maxday.ai/openapi/docs/get-start">API documentation <ArrowUpRight size={13} /></a><a href="https://www.maxday.ai/login">Login</a></div><div><strong>Legal</strong><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-of-use">Terms of service</Link></div></div><div className="footer-bottom"><span>© 2026 MaxDay PTE LTD.</span><span>Built for social media teams.</span></div></div></footer>;
}

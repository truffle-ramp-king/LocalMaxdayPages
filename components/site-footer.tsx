import Link from 'next/link';
import { Mark } from './site-header';
export function SiteFooter() { return <footer className="site-footer">
  <div className="footer-brand"><Mark className="brand-mark" /><span>Maxday AI</span></div><p>One connected workspace for AI content production.</p>
  <nav aria-label="Footer navigation"><Link href="/ai-workflow-builder">Platform</Link><Link href="/product-to-video">Workflows</Link><a href="https://maxday.ai/privacy-policy">Privacy</a><a href="https://maxday.ai/terms-of-use">Terms</a></nav>
  <small>© 2026 MaxDay PTE LTD.</small>
</footer>; }

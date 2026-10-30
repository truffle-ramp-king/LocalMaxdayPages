import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Mark } from './site-header';
import { featurePages, templatesUrl, docsUrl } from '@/lib/features';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div className="footer-about">
          <Link href="/" className="brand" aria-label="MaxDay AI home">
            <Mark className="brand-mark" />
            <span>MaxDay AI</span>
          </Link>
          <p>
            Find the reference. Create the campaign. Make the process
            repeatable.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Features</strong>
            {featurePages.map((f) => (
              <Link
                href={`/${f.slug}`}
                key={f.slug}
                data-feature={f.slug}
                data-placement="footer"
              >
                {f.name}
              </Link>
            ))}
          </div>
          <div>
            <strong>MaxDay</strong>
            <a href={templatesUrl}>Templates</a>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Support</Link>
            <a href={docsUrl}>
              API documentation <ArrowUpRight size={13} />
            </a>
            <a href="https://maxday.ai/login">Login</a>
          </div>
          <div>
            <strong>Legal</strong>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms-of-use">Terms of service</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MaxDay PTE LTD.</span>
          <span>Built for social media teams.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import type { LegalDocument } from '@/lib/legal-content';

export function LegalPage({ document }: { document: LegalDocument }) {
  return <><SiteHeader /><main id="legal-content" className="legal-page">
    <header className="legal-heading"><p className="eyebrow">MAXDAY / LEGAL</p><h1>{document.title}</h1><p className="legal-description">{document.description}</p><p className="legal-date">Last updated: September 8, 2026</p>
      <nav className="legal-tabs" aria-label="Legal documents"><Link href="/privacy-policy" aria-current={document.kind === 'privacy' ? 'page' : undefined}>Privacy Policy</Link><Link href="/terms-of-use" aria-current={document.kind === 'terms' ? 'page' : undefined}>Terms &amp; Conditions</Link></nav>
    </header>
    <div className="legal-layout"><aside className="legal-contents"><nav aria-label="On this page"><p>On this page</p><ol>{document.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav></aside>
      <article className="legal-body"><p className="legal-intro">{document.introduction}</p>{document.sections.map((section, index) => <section id={section.id} key={section.id}><h2><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<a className="legal-back" href="#legal-content">Back to top ↑</a></article>
    </div></main><SiteFooter /></>;
}

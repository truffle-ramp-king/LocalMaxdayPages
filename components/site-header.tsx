'use client';

import Link from 'next/link';
import { useEffect, useRef, type MouseEvent } from 'react';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import { featurePages, templatesUrl } from '@/lib/features';

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M24 24C13.635 13.635 10.365 13.635 0 24 10.365 13.635 10.365 10.365 0 0c10.365 10.365 13.635 10.365 24 0-10.365 10.365-10.365 13.635 0 24"
      />
    </svg>
  );
}

export function SiteHeader() {
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    function closeMenus(event: PointerEvent | KeyboardEvent) {
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      if (
        event instanceof PointerEvent &&
        header.current?.contains(event.target as Node)
      )
        return;
      header.current?.querySelectorAll('details[open]').forEach((el) => {
        (el as HTMLDetailsElement).open = false;
        if (event instanceof KeyboardEvent)
          (el.querySelector('summary') as HTMLElement)?.focus();
      });
    }
    document.addEventListener('pointerdown', closeMenus);
    document.addEventListener('keydown', closeMenus);
    return () => {
      document.removeEventListener('pointerdown', closeMenus);
      document.removeEventListener('keydown', closeMenus);
    };
  }, []);
  function closeMobile(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest('details')?.removeAttribute('open');
  }
  return (
    <header className="site-header" ref={header}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="MaxDay AI home">
          <Mark className="brand-mark" />
          <span>MaxDay AI</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <details className="feature-menu">
            <summary>
              Features <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="feature-menu-panel">
              <p className="section-label">FROM REFERENCE TO REPEATABLE</p>
              <div className="feature-menu-grid">
                {featurePages.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/${f.slug}`}
                    data-feature={f.slug}
                    data-placement="header"
                    onClick={(e) => {
                      e.currentTarget
                        .closest('details')
                        ?.removeAttribute('open');
                    }}
                  >
                    <strong>
                      {f.name}
                      <ArrowUpRight size={15} />
                    </strong>
                    <span>{f.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </details>
          <a href={templatesUrl}>Templates</a>
          <Link href="/api" data-feature="api" data-placement="header">
            API
          </Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="https://maxday.ai/login">
            Login
          </a>
          <a className="header-cta" href="https://maxday.ai/login">
            Get started <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Menu size={21} />
          </summary>
          <nav aria-label="Mobile navigation">
            <span className="section-label">EXPLORE MAXDAY</span>
            {featurePages.map((f) => (
              <Link
                key={f.slug}
                href={`/${f.slug}`}
                data-feature={f.slug}
                data-placement="mobile-header"
                onClick={closeMobile}
              >
                {f.name}
                <ArrowUpRight size={14} />
              </Link>
            ))}
            <a href={templatesUrl} onClick={closeMobile}>
              Templates
            </a>
            <Link href="/pricing" onClick={closeMobile}>
              Pricing
            </Link>
            <Link href="/support" onClick={closeMobile}>
              Support
            </Link>
            <a href="https://maxday.ai/login" onClick={closeMobile}>
              Login
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

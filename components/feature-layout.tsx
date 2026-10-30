import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Code2,
  Clapperboard,
  ScanSearch,
  Tags,
  Download,
  ShoppingBag,
  Check,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { featurePages, loginUrl, type FeatureSlug } from '@/lib/features';

const icons = {
  workflow: Workflow,
  code: Code2,
  video: Clapperboard,
  scout: ScanSearch,
  tag: Tags,
  download: Download,
  shop: ShoppingBag,
};
export function featureMetadata(
  title: string,
  description: string,
  slug: string,
): Metadata {
  return {
    title: `${title} | MaxDay AI`,
    description,
    alternates: { canonical: `https://maxday.ai/${slug}` },
    openGraph: {
      title: `${title} | MaxDay AI`,
      description,
      url: `https://maxday.ai/${slug}`,
      images: ['/fashion-campaign-workspace.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | MaxDay AI`,
      description,
      images: ['/fashion-campaign-workspace.jpg'],
    },
  };
}
export function FeatureLayout({
  children,
  slug,
}: {
  children: ReactNode;
  slug: FeatureSlug;
}) {
  return (
    <main className={`feature-page page-${slug}`}>
      <SiteHeader />
      {children}
      <FeatureFooter slug={slug} />
      <SiteFooter />
    </main>
  );
}
export function FeatureHero({
  eyebrow,
  title,
  accent,
  description,
  slug,
  cta,
  secondary,
  children,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  slug: FeatureSlug;
  cta: string;
  secondary?: { label: string; href: string };
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <section
      className={`feature-hero section-container ${wide ? 'feature-hero-wide' : ''}`}
    >
      <div className="feature-hero-copy">
        <Link href="/#features" className="feature-breadcrumb">
          MAXDAY <span>/</span> {eyebrow}
        </Link>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p className="feature-lede">{description}</p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={loginUrl(slug)}
            data-feature={slug}
            data-placement="hero-cta"
          >
            {cta}
            <ArrowUpRight size={18} />
          </a>
          {secondary ? (
            <a className="button button-text" href={secondary.href}>
              {secondary.label}
              <ArrowRight size={17} />
            </a>
          ) : null}
        </div>
      </div>
      {children ? <div className="feature-hero-art">{children}</div> : null}
    </section>
  );
}
export function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="feature-section-intro">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="feature-steps">
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="step-number">0{i + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
export function Benefits({ items }: { items: string[] }) {
  return (
    <ul className="feature-benefits">
      {items.map((x) => (
        <li key={x}>
          <Check size={17} aria-hidden="true" />
          {x}
        </li>
      ))}
    </ul>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section-container feature-faq">
      <div>
        <p className="section-label">A FEW MORE DETAILS</p>
        <h2>Good to know.</h2>
      </div>
      <div>
        {items.map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function FeatureGrid({ exclude }: { exclude?: FeatureSlug }) {
  return (
    <div className="feature-discovery-grid">
      {featurePages
        .filter((f) => f.slug !== exclude)
        .map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <Link
              key={f.slug}
              className="feature-discovery-card"
              href={`/${f.slug}`}
              data-feature={f.slug}
              data-placement={exclude ? 'related-features' : 'home-features'}
            >
              <div className="discovery-card-top">
                <Icon size={24} strokeWidth={1.5} />
                <span>0{i + 1}</span>
              </div>
              <h3>{f.name}</h3>
              <p>{f.description}</p>
              <span className="discovery-card-link">
                Explore feature
                <ArrowUpRight size={17} />
              </span>
            </Link>
          );
        })}
    </div>
  );
}
export function FeatureFooter({ slug }: { slug: FeatureSlug }) {
  const next = featurePages.filter((f) => f.slug !== slug).slice(0, 3);
  return (
    <>
      <section className="feature-final section-container">
        <p className="section-label">MAKE IT PART OF YOUR NEXT CAMPAIGN</p>
        <h2>
          Less setup.
          <br />
          <em>More content in motion.</em>
        </h2>
        <a
          className="button button-primary"
          href={loginUrl(slug)}
          data-feature={slug}
          data-placement="footer-cta"
        >
          Get started with MaxDay
          <ArrowUpRight size={18} />
        </a>
      </section>
      <section className="section-container related-features">
        <p className="section-label">KEEP EXPLORING</p>
        <div>
          {next.map((f) => (
            <Link
              href={`/${f.slug}`}
              key={f.slug}
              data-feature={f.slug}
              data-placement="related-features"
            >
              {f.name}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

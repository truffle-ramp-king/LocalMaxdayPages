import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { TemplateShowcase } from '@/components/template-showcase';
import { ModelStrip } from '@/components/model-strip';
import dress from '@/public/fashion-demo/dress.webp';
import jacket from '@/public/fashion-demo/jacket.webp';
import editorial from '@/public/fashion-demo/styled.webp';
import outfit from '@/public/fashion-demo/outfit.webp';
import workspace from '@/public/fashion-campaign-workspace.jpg';

const campaignTools = [
  {
    slug: 'content-scout',
    name: 'Content Scout',
    title: 'Find a reference',
    text: 'Search Instagram and TikTok by keyword. Compare views and engagement, then bring a clip into your project.',
  },
  {
    slug: 'video-cloning',
    name: 'Video Cloning',
    title: 'Adapt a format',
    text: 'Recreate a trend for a client, try a new outfit for an AI influencer, or turn a reference clip into an ad for your store.',
  },
  {
    slug: 'workflows',
    name: 'Workflows & Apps',
    title: 'Save the setup',
    text: 'Copy your workflow as an app. Work on the same canvas simultaneously, then run the app with new inputs for each client or microdrama episode.',
  },
];

export default function Home() {
  return (
    <main className="marketing-home">
      <SiteHeader />
      <section className="hero home-hero" aria-labelledby="hero-title">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-inner campaign-hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> For agencies, brands & video
              creators
            </div>
            <h1 id="hero-title">
              Build a video workflow. <span>Run it for every brief.</span>
            </h1>
            <p className="hero-lede">
              Plan and produce videos together in one shared workspace. Keep the
              steps your team trusts, then swap the brief, cast or product for
              the next client, episode or launch.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#video-templates"
                data-feature="templates"
                data-placement="hero"
              >
                Choose a video template <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#fashion-shoot">
                See a workflow in action
              </a>
            </div>
          </div>
          <figure className="fashion-proof">
            <div className="fashion-proof-images">
              <div className="product-photos">
                <Image src={dress} alt="Yellow floral dress" loading="eager" />
                <Image
                  src={jacket}
                  alt="Cropped denim jacket"
                  loading="eager"
                />
                <span>Product photos</span>
              </div>
              <div className="campaign-photo">
                <Image
                  src={editorial}
                  alt="Model wearing the yellow dress and denim jacket on location"
                  preload
                />
                <span>Styled campaign look</span>
              </div>
            </div>
            <figcaption>
              Luxury Fashion Campaign <small>Recreated from our demo</small>
            </figcaption>
          </figure>
        </div>
      </section>
      <TemplateShowcase />
      <section className="home-workflow-band" id="fashion-shoot">
        <div className="section-container">
          <div className="home-workflow-heading">
            <h2>How we built the fashion shoot</h2>
            <p>
              We paired the dress and jacket with a character reference, checked
              the outfit from three angles, then connected the styled character
              to the location and storyboard.
            </p>
          </div>
          <div className="shoot-details">
            <figure>
              <Image
                src={outfit}
                alt="Character sheet showing the dress and jacket from the front, side and back"
              />
              <figcaption>Recreated outfit check</figcaption>
            </figure>
            <div>
              <h3>For the next item in your catalog</h3>
              <p>
                Keep the character, location and storyboard. Replace the garment
                photos and run the workflow again. Copy the finished setup as an
                app so a teammate can supply the next product.
              </p>
            </div>
          </div>
          <Link
            className="home-workspace"
            href="/workflows"
            data-feature="workflows"
            data-placement="home-canvas"
          >
            <Image
              src={workspace}
              alt="Full Luxury Fashion Campaign canvas with the source garments, character sheet, location and connected campaign output"
              sizes="(max-width: 800px) 100vw, 1240px"
            />
            <span>
              Explore Workflows and Apps <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </section>
      <section className="section-container campaign-tools" id="features">
        <h2>How teams scale video production</h2>
        <div>
          {campaignTools.map((tool) => (
            <Link
              key={tool.slug}
              href={'/' + tool.slug}
              data-feature={tool.slug}
              data-placement="home-features"
            >
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
              <span>
                {tool.name} <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ModelStrip />
      <section className="closing-section">
        <div className="section-container closing-inner">
          <h2>What are you starting with?</h2>
          <div className="starting-links">
            <a
              href="#video-templates"
              className="button button-primary"
              data-feature="templates"
              data-placement="closing"
            >
              Choose a video template <ArrowRight size={16} />
            </a>
            <Link
              href="/content-scout"
              className="button button-outline"
              data-feature="content-scout"
              data-placement="closing"
            >
              An Instagram or TikTok clip <ArrowRight size={16} />
            </Link>
            <Link
              href="/ecommerce-clone"
              className="button button-outline"
              data-feature="ecommerce-clone"
              data-placement="closing"
            >
              A Shopify product link <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

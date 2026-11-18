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
    title: 'Put your product in the shot',
    text: 'Use Quick Clone to keep a reference video’s format and swap in your own model and outfit.',
  },
  {
    slug: 'workflows',
    name: 'Workflows & Apps',
    title: 'Save the setup',
    text: 'Copy your workflow as an app. For the next product, supply new photos and run the same steps again.',
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
              <span className="eyebrow-dot" /> For social media & ecommerce
              teams
            </div>
            <h1 id="hero-title">
              Turn a video reference into an ad <span>for your product.</span>
            </h1>
            <p className="hero-lede">
              Start with a clip you like. Add your product photos to make
              campaign images and videos, then reuse the setup for your next
              launch.
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
                See the fashion workflow
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
                <span>Made in MaxDay</span>
              </div>
            </div>
            <figcaption>
              Luxury Fashion Campaign <small>MaxDay internal demo</small>
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
              <figcaption>The outfit check from our project</figcaption>
            </figure>
            <div>
              <h3>For the next item in your catalog</h3>
              <p>
                Keep the character, location and storyboard. Replace the garment
                photos and run the workflow again. Copy the finished setup as an
                app so a teammate can supply the next product.
              </p>
              <Link
                className="text-link"
                href="/workflows"
                data-feature="workflows"
                data-placement="home-workspace"
              >
                See how to reuse a workflow <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <a
            className="home-workspace"
            href={workspace.src}
            target="_blank"
            rel="noopener"
          >
            <Image
              src={workspace}
              alt="Full Luxury Fashion Campaign canvas with the source garments, character sheet, location and connected campaign output"
              sizes="(max-width: 800px) 100vw, 1240px"
            />
            <span>
              Inspect the full canvas <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </section>
      <section className="section-container campaign-tools" id="features">
        <h2>Tools for your next product video</h2>
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

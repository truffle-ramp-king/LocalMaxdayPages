import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Workflow,
  UsersRound,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { TemplateShowcase } from '@/components/template-showcase';
import { ModelStrip } from '@/components/model-strip';
import { FeatureGrid, SectionIntro } from '@/components/feature-layout';
import workspace from '@/public/fashion-campaign-workspace.jpg';

export default function Home() {
  return (
    <main className="marketing-home">
      <SiteHeader />
      <section className="hero home-hero" aria-labelledby="hero-title">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> For social media & ecommerce
              teams
            </div>
            <h1 id="hero-title">
              Find the trend.
              <br />
              <span>Make it your next campaign.</span>
            </h1>
            <p className="hero-lede">
              Scout Instagram and TikTok, adapt video formats for your brand,
              and create product content with AI. Save the process that works,
              then run it again for every campaign.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://maxday.ai/login"
              >
                Start creating
                <ArrowUpRight size={18} />
              </a>
              <a className="button button-text" href="#video-templates">
                Explore video templates
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-note">
            <span>01 / Find your angle</span>
            <span>02 / Make your version</span>
            <span>03 / Run it again</span>
          </div>
        </div>
      </section>
      <TemplateShowcase />
      <section className="section-container home-features" id="features">
        <SectionIntro
          label="ONE WORKSPACE. EVERY STEP OF THE CAMPAIGN."
          title="From “we should try this” to something your team can run again."
          description="Discover the reference, create the content, and build a repeatable process. Explore the tools that fit the way you work."
        />
        <FeatureGrid />
      </section>
      <section className="home-workflow-band">
        <div className="section-container">
          <div className="home-workflow-heading">
            <div>
              <p className="section-label">BUILD YOUR NEXT CAMPAIGN TOGETHER</p>
              <h2>
                Keep the idea, the assets,
                <br />
                and the team <em>connected.</em>
              </h2>
            </div>
            <p>
              Work together on a live visual canvas. Try different directions,
              compare outputs, and turn the process you like into a reusable
              app.
            </p>
          </div>
          <Link
            href="/workflows"
            className="home-workspace"
            data-feature="workflows"
            data-placement="home-workspace"
          >
            <Image
              src={workspace}
              alt="MaxDay's real visual canvas for a luxury fashion campaign with product assets, character sheets, and connected generation steps"
              sizes="(max-width: 800px) 100vw, 1240px"
            />
            <span>
              Explore Workflows & Apps
              <ArrowUpRight size={18} />
            </span>
          </Link>
          <div className="home-workflow-foot">
            <span>
              <UsersRound size={18} /> Share projects and work together in real
              time
            </span>
            <span>
              <Workflow size={18} /> Copy a proven workflow as an app
            </span>
            <Link
              href="/api"
              data-feature="api"
              data-placement="home-workspace"
            >
              Run it with the API
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <ModelStrip />
      <section className="closing-section">
        <div className="section-container closing-inner">
          <p className="section-label">MAKE ROOM FOR YOUR NEXT CAMPAIGN</p>
          <h2>
            Your next post starts here.
            <br />
            <em>Your next process, too.</em>
          </h2>
          <p>
            Start with a template, a social video, or a product link. Build the
            rest in MaxDay.
          </p>
          <a className="button button-primary" href="https://maxday.ai/login">
            Get started with MaxDay
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

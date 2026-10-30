import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Link2,
  ArrowRight,
  Images,
  Workflow,
  Clapperboard,
} from 'lucide-react';
import {
  FeatureLayout,
  FeatureHero,
  SectionIntro,
  Steps,
  Benefits,
  FAQ,
  featureMetadata,
} from '@/components/feature-layout';
import workspace from '@/public/fashion-campaign-workspace.jpg';

export const metadata = featureMetadata(
  'Ecommerce Clone — Import from a Shopify Link',
  'Turn a Shopify link into a starting point for product content. Scrape storefront content into MaxDay and bring it into your campaign workflow.',
  'ecommerce-clone',
);
export default function EcommerceClonePage() {
  return (
    <FeatureLayout slug="ecommerce-clone">
      <FeatureHero
        eyebrow="ECOMMERCE CLONE"
        title="Your store is the brief."
        accent="Start with the link."
        description="Bring content from a Shopify link into MaxDay. Give your team a starting point for product visuals, social posts, and campaign variations without collecting everything by hand."
        slug="ecommerce-clone"
        cta="Import a Shopify link"
        secondary={{ label: 'See the process', href: '#store-to-campaign' }}
      >
        <div className="commerce-visual">
          <div className="commerce-link">
            <ShoppingBag size={25} />
            <span>
              <small>SHOPIFY STOREFRONT</small>
              <strong>Your store. Your next campaign.</strong>
            </span>
            <Link2 size={19} />
          </div>
          <div className="commerce-connect">
            <span />
            <ArrowRight size={18} />
            <span />
          </div>
          <div className="commerce-workspace">
            <Image
              src={workspace}
              alt="Product assets connected in a real MaxDay fashion campaign workspace"
              priority
              sizes="(max-width: 800px) 100vw, 650px"
            />
            <span>Build on your product assets in MaxDay</span>
          </div>
          <div className="commerce-stages">
            <span>
              <Images size={16} /> Import content
            </span>
            <ArrowRight size={14} />
            <span>
              <Workflow size={16} /> Build a workflow
            </span>
          </div>
        </div>
      </FeatureHero>
      <section
        className="section-container feature-content"
        id="store-to-campaign"
      >
        <SectionIntro
          label="FROM STOREFRONT TO STARTING POINT"
          title="Less gathering. More campaign building."
          description="Start with the content on your Shopify store, then bring the imported material into the way your team works."
        />
        <Steps
          items={[
            {
              title: 'Bring a Shopify link',
              text: 'Choose the store link you want to use as the source for your campaign.',
            },
            {
              title: 'Import the content',
              text: 'MaxDay scrapes the accessible storefront content so you can use it as your starting material.',
            },
            {
              title: 'Build your campaign',
              text: 'Use the imported content in a workflow. Explore product imagery, video ideas, and variations with AI.',
            },
          ]}
        />
      </section>
      <section className="feature-band">
        <div className="section-container feature-split">
          <div>
            <p className="section-label">
              FOR PRODUCT LAUNCHES AND ALWAYS-ON SOCIAL
            </p>
            <h2>
              From one product story
              <br />
              <em>to the next.</em>
            </h2>
            <p>
              Bring store content and social references into the same project.
              Test a direction, keep the steps that work, and make the process
              reusable for your next launch.
            </p>
            <Benefits
              items={[
                'Start from a Shopify storefront link.',
                'Keep imported material alongside campaign references.',
                'Connect product content to your generation workflow.',
              ]}
            />
          </div>
          <div className="commerce-output-list">
            <div>
              <Images size={28} />
              <h3>Product content</h3>
              <p>Start your next visual with the store as the source.</p>
            </div>
            <div>
              <Clapperboard size={28} />
              <h3>Social video ideas</h3>
              <p>Connect your product to a format or reference.</p>
            </div>
            <div>
              <Workflow size={28} />
              <h3>A reusable process</h3>
              <p>Turn the workflow you like into an app.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container feature-content">
        <SectionIntro
          label="ADD A FORMAT TO YOUR PRODUCT STORY"
          title="Find the reference that fits your campaign."
          description="Explore video templates or scout social content to pair a strong format with your product material."
        />
        <div className="commerce-next">
          <a
            href="https://maxday.ai/templates"
            className="button button-outline"
          >
            Explore video templates
            <ArrowRight size={17} />
          </a>
          <Link href="/content-scout" className="text-link">
            Try Content Scout
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <FAQ
        items={[
          {
            q: 'What does Ecommerce Clone do?',
            a: 'It scrapes content from a Shopify link and makes it available as starting material for your work in MaxDay.',
          },
          {
            q: 'Does it create a functioning copy of a Shopify store?',
            a: 'This feature imports storefront content for campaign work. It does not duplicate a store’s checkout, payment setup, or customer data.',
          },
          {
            q: 'Can I combine imported content with other campaign assets?',
            a: 'Yes. Use it alongside references and generated assets in your project, and connect the material through a visual workflow.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

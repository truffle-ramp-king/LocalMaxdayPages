import Image from 'next/image';
import Link from 'next/link';
import {
  AtSign,
  Link2,
  ScanSearch,
  ArrowRight,
  Heart,
  Eye,
  ChartNoAxesCombined,
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
import scout from '@/public/content-scout-fashion.webp';

export const metadata = featureMetadata(
  'Content Scout for Instagram & TikTok',
  'Find Instagram Reels and TikTok videos by link, keyword, or account. Sort by engagement and bring a reference straight into your MaxDay workflow.',
  'content-scout',
);
export default function ContentScoutPage() {
  return (
    <FeatureLayout slug="content-scout">
      <FeatureHero
        eyebrow="CONTENT SCOUT"
        title="Less scrolling."
        accent="More starting points."
        description="Find the videos behind your next campaign. Search Instagram and TikTok by keyword, explore an account, or bring a specific link straight into your workspace."
        slug="content-scout"
        cta="Open Content Scout"
        secondary={{ label: 'See the three ways in', href: '#scout-inputs' }}
      >
        <figure className="scout-feature-screen">
          <div className="screen-label">
            <span>
              <ScanSearch size={15} /> CONTENT SCOUT
            </span>
            <span>INSIDE MAXDAY</span>
          </div>
          <Image
            src={scout}
            alt="Real Content Scout results for a fashion search, showing videos and engagement metrics"
            priority
            sizes="(max-width: 800px) 100vw, 620px"
          />
          <figcaption>Research your next campaign inside MaxDay.</figcaption>
        </figure>
      </FeatureHero>
      <section className="section-container feature-content" id="scout-inputs">
        <SectionIntro
          label="THREE WAYS IN"
          title="A link, a topic, or an account."
          description="Start with what you know. Scout helps you find the reference worth building on."
        />
        <div className="scout-methods">
          {[
            {
              icon: Link2,
              input: 'A video you saved',
              title: 'Paste a link',
              text: 'Bring an Instagram Reel or TikTok into your project, downloaded and ready to use in a workflow.',
            },
            {
              icon: ScanSearch,
              input: 'A topic you are exploring',
              title: 'Search a keyword',
              text: 'Explore videos around a product, niche, or campaign angle. Sort the results by likes, views, or engagement.',
            },
            {
              icon: AtSign,
              input: 'An account you follow',
              title: 'Explore an account',
              text: 'Pull the latest videos from a specific Instagram or TikTok account and find a new starting point.',
            },
          ].map(({ icon: Icon, input, title, text }) => (
            <article key={title}>
              <Icon size={27} strokeWidth={1.5} />
              <small>{input}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="feature-band">
        <div className="section-container feature-split">
          <div>
            <p className="section-label">RESEARCH WITH A REASON</p>
            <h2>
              Find the signal
              <br />
              <em>behind the scroll.</em>
            </h2>
            <p>
              Use engagement to narrow your research, then study the video
              itself: the hook, the structure, the product angle. Bring the
              reference into a workflow while the idea is fresh.
            </p>
            <Benefits
              items={[
                'Sort by the metric that matters to your research.',
                'Keep the source alongside the work it inspires.',
                'Move from research to a video remake in the same project.',
              ]}
            />
          </div>
          <div className="scout-metrics">
            {[
              {
                icon: Eye,
                name: 'Views',
                description: 'Find videos getting seen.',
              },
              {
                icon: Heart,
                name: 'Likes',
                description: 'Explore what audiences respond to.',
              },
              {
                icon: ChartNoAxesCombined,
                name: 'Engagement',
                description: 'Compare the response around a video.',
              },
            ].map(({ icon: Icon, name, description }) => (
              <div key={name}>
                <Icon size={23} />
                <span>
                  <strong>{name}</strong>
                  <p>{description}</p>
                </span>
                <ArrowRight size={17} />
              </div>
            ))}
            <span className="diagram-caption">
              Your research, sorted your way.
            </span>
          </div>
        </div>
      </section>
      <section className="section-container feature-content">
        <SectionIntro
          label="FROM FIND TO FIRST DRAFT"
          title="Don't let a good reference disappear into a saved folder."
        />
        <Steps
          items={[
            {
              title: 'Find the reference',
              text: 'Search a topic, browse an account, or paste the video you already have in mind.',
            },
            {
              title: 'Bring it into the project',
              text: 'Keep the video ready to use alongside your campaign assets.',
            },
            {
              title: 'Build on the idea',
              text: 'Use the reference as the start of a workflow or explore a video cloning mode.',
            },
          ]}
        />
        <Link className="text-link" href="/video-cloning">
          Explore Video Cloning
          <ArrowRight size={17} />
        </Link>
      </section>
      <FAQ
        items={[
          {
            q: 'Which platforms does Content Scout support?',
            a: 'Content Scout works with Instagram Reels and TikTok. You can start from a video link, search by keyword, or specify an account.',
          },
          {
            q: 'Can I download a video I find?',
            a: 'Yes. Bring the video into your project so it is ready to use in your workflow.',
          },
          {
            q: 'Does Scout automatically publish posts for me?',
            a: 'This page covers research and bringing video references into your workspace. Use the results to develop and review your own campaign content.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

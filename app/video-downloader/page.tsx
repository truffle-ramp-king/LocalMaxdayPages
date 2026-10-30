import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  Music2,
  Link2,
  Download,
  ArrowRight,
  Check,
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
import source from '@/public/cloning/original.jpg';

export const metadata = featureMetadata(
  'Download Instagram & TikTok Videos Without Watermarks',
  'Download Instagram Reels and TikTok videos without watermarks in MaxDay. Save a social video and bring it straight into your content workflow.',
  'video-downloader',
);
export default function VideoDownloaderPage() {
  return (
    <FeatureLayout slug="video-downloader">
      <FeatureHero
        eyebrow="SOCIAL VIDEO DOWNLOADER"
        title="Save the reference."
        accent="Skip the watermark."
        description="Download Instagram Reels and TikTok videos without watermarks. Bring a link into MaxDay and keep the video ready for your next content workflow."
        slug="video-downloader"
        cta="Download a social video"
        secondary={{ label: 'See how it works', href: '#download-steps' }}
      >
        <div className="download-visual">
          <div className="download-platforms">
            <span>
              <Camera size={19} /> Instagram
            </span>
            <span>
              <Music2 size={19} /> TikTok
            </span>
          </div>
          <div className="download-path">
            <div className="download-source">
              <Link2 size={22} />
              <small>START WITH A LINK</small>
              <h3>
                A video worth
                <br />
                building on.
              </h3>
              <ArrowRight size={26} />
              <p>Save it to your workspace.</p>
            </div>
            <figure>
              <Image
                src={source}
                alt="Example video ready to use as a workflow reference"
                priority
                sizes="240px"
              />
              <figcaption>
                <Check size={14} /> Ready for your workflow
              </figcaption>
            </figure>
          </div>
          <div className="download-visual-foot">
            <Download size={17} />
            <span>From social link to a usable video asset.</span>
          </div>
        </div>
      </FeatureHero>
      <section
        className="section-container feature-content"
        id="download-steps"
      >
        <SectionIntro
          label="FROM A SOCIAL LINK TO YOUR WORKSPACE"
          title="A useful reference shouldn't get lost in your feed."
          description="Save the clip where your team can use it, then move straight into the next step."
        />
        <Steps
          items={[
            {
              title: 'Copy the video link',
              text: 'Start with an Instagram Reel or TikTok you want to bring into your project.',
            },
            {
              title: 'Download in MaxDay',
              text: 'Paste the supported social link and get the video without the watermark.',
            },
            {
              title: 'Put it to work',
              text: 'Keep it as a reference, bring it into a workflow, or use it to start a video remake.',
            },
          ]}
        />
      </section>
      <section className="feature-band">
        <div className="section-container feature-split">
          <div>
            <p className="section-label">MORE THAN ANOTHER DOWNLOAD FOLDER</p>
            <h2>
              Keep the reference
              <br />
              <em>next to the work.</em>
            </h2>
            <p>
              Your team can find the source clip alongside the campaign it
              inspired. Connect it to a visual workflow and keep the whole
              process together.
            </p>
            <Link href="/workflows" className="text-link">
              Explore Workflows & Apps
              <ArrowRight size={17} />
            </Link>
          </div>
          <div>
            <Benefits
              items={[
                'Download from Instagram Reels and TikTok links.',
                'Get a video without the social platform watermark.',
                'Use the asset inside your MaxDay workflow.',
              ]}
            />
            <Link href="/content-scout" className="text-link">
              Still looking for a reference? Try Content Scout
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <FAQ
        items={[
          {
            q: 'Which links can I use?',
            a: 'Use a supported Instagram Reel or TikTok video link. Availability depends on the source video being accessible.',
          },
          {
            q: 'What if I do not have a specific video in mind?',
            a: 'Use Content Scout to search a keyword or explore the latest videos from a specific account, then bring your chosen reference into a project.',
          },
          {
            q: 'Can I use downloaded videos in a MaxDay workflow?',
            a: 'Yes. Downloaded videos can be the starting point for your workflow, including video remake steps. Use source material you have permission to work with.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

import {
  FeatureLayout,
  FeatureHero,
  SectionIntro,
  Steps,
  FAQ,
  featureMetadata,
} from '@/components/feature-layout';
import { CloneDemo, RemakeTools } from '@/components/clone-demo';

export const metadata = featureMetadata(
  'Video Cloning — Quick, Mosaic, Clay & Depth',
  'Remake a video in MaxDay with Quick clone, mosaic or blur, clay figure, and depth map modes. Compare real examples and build on a reference.',
  'video-cloning',
);
export default function VideoCloningPage() {
  return (
    <FeatureLayout slug="video-cloning">
      <FeatureHero
        wide
        eyebrow="VIDEO CLONING"
        title="Keep the idea moving."
        accent="Make the next version yours."
        description="A reference video is a starting point. Choose how much to carry forward: the format, a covered figure, the motion, or the depth of the scene. Then build your next version in MaxDay."
        slug="video-cloning"
        cta="Clone a video"
        secondary={{ label: 'Compare the modes', href: '#clone-demo' }}
      />
      <section className="section-container clone-demo-section">
        <CloneDemo />
      </section>
      <section className="section-container feature-content">
        <SectionIntro
          label="A FORMAT YOU LIKE. A NEW DIRECTION."
          title="Four ways to start your remake."
          description="Choose the reference that fits the job, then keep building in the same workspace."
        />
        <div className="clone-mode-grid">
          {[
            {
              name: 'Quick clone',
              text: 'Start directly from a reference video when you want a fast route into a new variation.',
            },
            {
              name: 'Mosaic / inpaint',
              text: 'Mask or blur the figure before an inpaint step in your workflow.',
            },
            {
              name: 'Clay figure',
              text: 'Extract a simplified motion video so you can work from the movement of the figure.',
            },
            {
              name: 'Depth Map',
              text: 'Extract a depth reference to carry the scene’s spatial structure into your next step.',
            },
          ].map((m, i) => (
            <article key={m.name}>
              <span>0{i + 1}</span>
              <h3>{m.name}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="feature-band">
        <div className="section-container feature-content">
          <SectionIntro
            label="PART OF YOUR WORKFLOW"
            title="Take the remake into your next step."
            description="Bring the source into a workflow, choose a Video Remake tool, and connect the result to the next step in your campaign."
          />
          <div className="remake-product-grid">
            <Steps
              items={[
                {
                  title: 'Bring a source video',
                  text: 'Use your own clip or bring a reference into your project with Content Scout.',
                },
                {
                  title: 'Choose a treatment',
                  text: 'Quick clone, cover a figure, or extract a clay or depth reference.',
                },
                {
                  title: 'Build your version',
                  text: 'Connect the result to the rest of your workflow, try variations, and review your output.',
                },
              ]}
            />
            <RemakeTools />
          </div>
        </div>
      </section>
      <FAQ
        items={[
          {
            q: 'Which modes can I preview here?',
            a: 'The comparison shows the supplied original video alongside actual mosaic, blur, and clay outputs. Quick clone and Depth Map explain the other available approaches; the workspace screenshot shows the depth extraction option.',
          },
          {
            q: 'Can I bring a video from Instagram or TikTok?',
            a: 'Yes. Use Content Scout or the Video Downloader to bring a supported video link into MaxDay, then use it as the starting point for your workflow.',
          },
          {
            q: 'Can I use the result in a bigger workflow?',
            a: 'Yes. The remake tools work inside the MaxDay canvas so you can connect references, prompts, and generation steps in one project.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

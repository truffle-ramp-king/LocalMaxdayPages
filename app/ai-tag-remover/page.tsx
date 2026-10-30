import {
  ImageIcon,
  Film,
  Tags,
  ArrowDown,
  Check,
  FileCheck2,
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

export const metadata = featureMetadata(
  'AI Tag Remover for Images & Videos',
  'Remove embedded AI metadata from generated images and videos in MaxDay. Prepare your files for the next step in your content workflow.',
  'ai-tag-remover',
);
export default function AiTagRemoverPage() {
  return (
    <FeatureLayout slug="ai-tag-remover">
      <FeatureHero
        eyebrow="AI TAG REMOVER"
        title="Your content is ready."
        accent="Clean up the metadata."
        description="Remove embedded AI metadata from generated images and videos before handing files to your team or moving them into the next part of your campaign."
        slug="ai-tag-remover"
        cta="Open AI Tag Remover"
        secondary={{ label: 'How it works', href: '#metadata-process' }}
      >
        <div
          className="metadata-visual"
          aria-label="Illustration of AI metadata removal"
        >
          <div className="screen-label">
            <span>
              <Tags size={16} /> FILE PREPARATION
            </span>
            <span>IMAGES + VIDEO</span>
          </div>
          <div className="metadata-file">
            <div className="file-type-icons">
              <ImageIcon size={35} strokeWidth={1.3} />
              <Film size={35} strokeWidth={1.3} />
            </div>
            <h3>Your generated asset</h3>
            <span className="metadata-tag">
              <Tags size={14} /> Embedded AI metadata
            </span>
          </div>
          <div className="metadata-connector">
            <ArrowDown size={21} />
            <span>AI Tag Remover</span>
          </div>
          <div className="metadata-result">
            <FileCheck2 size={28} strokeWidth={1.5} />
            <span>
              <strong>Ready for the next step</strong>
              <small>Embedded AI metadata removed</small>
            </span>
            <Check size={20} />
          </div>
          <p className="diagram-caption">
            Metadata cleanup · your image or video remains the content
          </p>
        </div>
      </FeatureHero>
      <section
        className="section-container feature-content"
        id="metadata-process"
      >
        <SectionIntro
          label="A SMALL STEP IN A BUSY WORKFLOW"
          title="Prepare the file. Keep the work moving."
          description="Handle metadata cleanup alongside the rest of your campaign work, instead of adding another disconnected step."
        />
        <Steps
          items={[
            {
              title: 'Bring your generated file',
              text: 'Start with the AI-generated image or video you want to prepare.',
            },
            {
              title: 'Remove AI metadata',
              text: 'Use AI Tag Remover to clean the embedded AI metadata from the file.',
            },
            {
              title: 'Continue your campaign',
              text: 'Use the processed asset in the next stage of your workflow or team handoff.',
            },
          ]}
        />
      </section>
      <section className="feature-band">
        <div className="section-container feature-split">
          <div>
            <p className="section-label">FOR SOCIAL AND ECOMMERCE TEAMS</p>
            <h2>
              One more task
              <br />
              <em>off the handoff.</em>
            </h2>
            <p>
              You&apos;ve already made the content. Prepare the asset in the
              same workspace your team uses for research, generation, and
              repeatable workflows.
            </p>
          </div>
          <div>
            <Benefits
              items={[
                'Prepare both generated images and generated videos.',
                'Remove embedded AI metadata from the file.',
                'Keep asset preparation connected to your campaign.',
              ]}
            />
            <p className="scope-note">
              AI Tag Remover cleans file metadata. It does not remove visible
              watermarks or determine how a platform labels your content.
            </p>
          </div>
        </div>
      </section>
      <FAQ
        items={[
          {
            q: 'What does AI Tag Remover remove?',
            a: 'It removes AI metadata embedded in generated image and video files. It is a file preparation tool, rather than a visual editing tool.',
          },
          {
            q: 'Does it remove a visible watermark from an image or video?',
            a: 'No. A visible watermark is part of the image or video itself. This feature is for embedded metadata.',
          },
          {
            q: 'Will a social platform still label my content as AI-generated?',
            a: 'It may. Platforms can use their own signals and disclosure rules. Removing file metadata does not guarantee that a platform will change or omit an AI label.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

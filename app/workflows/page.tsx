import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  AppWindow,
  Code2,
  UsersRound,
  Rocket,
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
  'Visual Workflows & Reusable Apps',
  'Build a visual campaign workflow, turn it into a MaxDay app, and run it again with new inputs through the API.',
  'workflows',
);
export default function WorkflowsPage() {
  return (
    <FeatureLayout slug="workflows">
      <FeatureHero
        wide
        eyebrow="WORKFLOWS & APPS"
        title="Find the process that works."
        accent="Then put it on repeat."
        description="Connect references, prompts, and AI models on one visual canvas. When you land on a process your team loves, turn it into an app and run it again with new campaign inputs."
        slug="workflows"
        cta="Build your first workflow"
        secondary={{ label: 'See how it works', href: '#workflow-to-app' }}
      >
        <figure className="workflow-hero-screen">
          <div className="screen-label">
            <span>
              <span className="live-dot" /> INSIDE MAXDAY
            </span>
            <span>Luxury Fashion Campaign</span>
          </div>
          <Image
            src={workspace}
            alt="Real MaxDay fashion workflow connecting outfit assets, character sheets, a location, and a storyboard to a campaign video"
            priority
            sizes="(max-width: 800px) 100vw, 1240px"
          />
          <figcaption>
            One project. Every reference, variation, and generation connected.
          </figcaption>
        </figure>
      </FeatureHero>
      <section
        className="section-container feature-content"
        id="workflow-to-app"
      >
        <SectionIntro
          label="FROM EXPERIMENT TO EVERYDAY TOOL"
          title="A workflow is where you figure it out. An app is how you run it again."
          description="Keep the flexibility while you're exploring. Keep the process once it's proven."
        />
        <div className="workflow-lifecycle">
          <div>
            <Workflow size={28} />
            <small>01 / DESIGN</small>
            <h3>Workflow</h3>
            <p>
              Connect steps, compare alternatives, and refine your output on a
              shared canvas.
            </p>
          </div>
          <ArrowRight className="lifecycle-arrow" />
          <div className="lifecycle-highlight">
            <AppWindow size={28} />
            <small>02 / MAKE REUSABLE</small>
            <h3>Copy as app</h3>
            <p>
              Turn the steps into a reusable app with inputs for the next
              campaign.
            </p>
            <span className="diagram-chip">
              <Rocket size={14} /> Copy as app
            </span>
          </div>
          <ArrowRight className="lifecycle-arrow" />
          <div>
            <Code2 size={28} />
            <small>03 / RUN</small>
            <h3>Use the API</h3>
            <p>
              Send new inputs, run the published app, and collect the results
              from your own tools.
            </p>
          </div>
        </div>
      </section>
      <section className="feature-band">
        <div className="section-container feature-split">
          <div>
            <p className="section-label">BUILT FOR THE WHOLE SOCIAL TEAM</p>
            <h2>
              Keep the campaign
              <br />
              <em>in context.</em>
            </h2>
            <p>
              Stop rebuilding the setup every time a new product, brief, or
              teammate arrives. A shared project keeps assets, workflows, and
              apps together.
            </p>
            <Benefits
              items={[
                'Work together in the same project, in real time.',
                'Try different models and directions before choosing a process.',
                'Reuse the app with new inputs for the next brief.',
              ]}
            />
          </div>
          <div className="campaign-project">
            <div className="campaign-project-heading">
              <UsersRound size={23} />
              <strong>Summer launch</strong>
              <span className="team-avatars">
                <i>A</i>
                <i>M</i>
                <i>J</i>
              </span>
            </div>
            {[
              ['Assets', 'Product images, references, and generated videos'],
              ['Workflows', 'Explore, compare, and refine your campaign'],
              ['Apps', 'The processes your team can use again'],
            ].map(([title, text]) => (
              <div className="project-line" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </div>
            ))}
            <p className="diagram-caption">Shared project structure</p>
          </div>
        </div>
      </section>
      <section className="section-container feature-content">
        <SectionIntro
          label="YOUR WORKFLOW, CONNECTED"
          title="Run your best process from your own tools."
          description="Have Claude Code or Codex call your published MaxDay app. Or connect the API to a script your team already uses."
        />
        <Steps
          items={[
            {
              title: 'Publish your app',
              text: 'Start with a workflow you have tested and copy it as an app. Publish the app you want to run.',
            },
            {
              title: 'Send the inputs',
              text: 'Use your API key, project ID, and app ID. Read the app’s input requirements before creating a run.',
            },
            {
              title: 'Collect the results',
              text: 'Check the run status and retrieve the generated outputs when it finishes.',
            },
          ]}
        />
        <Link href="/api" className="text-link">
          Explore the MaxDay API
          <ArrowUpRight size={18} />
        </Link>
      </section>
      <FAQ
        items={[
          {
            q: 'What is the difference between a project, a workflow, and an app?',
            a: 'A project holds the work your team shares: assets, workflows, and apps. A workflow is the visual canvas where you design and test the steps. An app is a reusable version of a workflow that can be run with new inputs.',
          },
          {
            q: 'Does running the same app produce an identical video every time?',
            a: 'The app makes the process repeatable. AI-generated results can vary, so you should review each output before publishing it.',
          },
          {
            q: 'Can my team work on a project together?',
            a: 'Yes. Share a project with your teammates so they can collaborate in real time and work from the same assets, workflows, and apps.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

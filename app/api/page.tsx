import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  AppWindow,
  Terminal,
  FileVideo,
  KeyRound,
} from 'lucide-react';
import {
  FeatureLayout,
  FeatureHero,
  SectionIntro,
  Steps,
  FAQ,
  featureMetadata,
} from '@/components/feature-layout';
import { ApiPlayground } from '@/components/api-playground';
import { docsUrl } from '@/lib/features';
import openai from '@/public/model-marks/openai.svg';
import claude from '@/public/model-marks/claude.svg';

export const metadata = featureMetadata(
  'Run MaxDay Apps with Claude Code, Codex & the API',
  'Give Claude Code or Codex access to your published MaxDay apps through the API. Submit campaign inputs, run workflows, and retrieve generated assets.',
  'api',
);
export default function ApiPage() {
  return (
    <FeatureLayout slug="api">
      <FeatureHero
        eyebrow="MAXDAY API"
        title="Your AI assistant."
        accent="Your content engine."
        description="Let Claude Code or Codex run your MaxDay apps. Turn a tested workflow into an API your assistant can call—with new inputs for every product, post, or campaign."
        slug="api"
        cta="Start with MaxDay"
        secondary={{ label: 'Read the docs', href: docsUrl }}
      >
        <ApiPlayground />
      </FeatureHero>
      <section
        className="section-container api-run-flow"
        aria-label="How a coding assistant runs MaxDay apps"
      >
        <div>
          <Terminal size={22} />
          <strong>Claude Code / Codex</strong>
          <span>Prepare your campaign inputs</span>
        </div>
        <ArrowRight />
        <div>
          <AppWindow size={22} />
          <strong>Your MaxDay app</strong>
          <span>Run your published workflow</span>
        </div>
        <ArrowRight />
        <div>
          <FileVideo size={22} />
          <strong>Generated assets</strong>
          <span>Get the output URLs</span>
        </div>
      </section>
      <section className="section-container feature-content">
        <SectionIntro
          label="FROM INSTRUCTION TO OUTPUT"
          title="You choose the process. Your assistant handles the run."
          description="Give your coding assistant the API docs and the campaign brief. It can discover your published apps, prepare a request, and retrieve the results."
        />
        <div className="agent-cards">
          {[
            {
              name: 'Claude Code',
              image: claude,
              prompt:
                'Use my product-video app to create a new version for this week’s launch.',
              text: 'Bring MaxDay into the same conversation where you plan and build your campaign tooling.',
            },
            {
              name: 'Codex',
              image: openai,
              prompt:
                'Read the app’s inputs, run it for this campaign, and save the output URLs.',
              text: 'Let Codex connect the app to your scripts and keep track of the results.',
            },
          ].map((agent) => (
            <article key={agent.name}>
              <Image src={agent.image} alt="" width={32} height={32} />
              <h3>{agent.name}</h3>
              <blockquote>“{agent.prompt}”</blockquote>
              <p>{agent.text}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          Connect through standard HTTP API calls. Your assistant uses the
          credentials and app access you provide.
        </p>
      </section>
      <section className="feature-band">
        <div className="section-container feature-content">
          <SectionIntro
            label="A REAL API FOR REPEATABLE WORK"
            title="One app. New inputs. Another run."
            description="Build the workflow visually in MaxDay, then call it from your own code. Every run belongs to a project and returns a run ID you can track."
          />
          <Steps
            items={[
              {
                title: 'Choose a published app',
                text: 'List your projects and apps. Read the app details for its current inputs, outputs, steps, and release.',
              },
              {
                title: 'Create an App Run',
                text: 'Send the app ID, project ID, and inputJson to the App Runs endpoint. Save the returned run ID.',
              },
              {
                title: 'Retrieve the output',
                text: 'Poll the run status with backoff. When it reaches a terminal state, collect outputs or inspect errors.',
              },
            ]}
          />
          <div className="endpoint-list">
            <div>
              <span>GET</span>
              <code>/openapi/v1/apps/&#123;appId&#125;</code>
              <p>Read the app’s input contract</p>
            </div>
            <div>
              <span className="method-post">POST</span>
              <code>/openapi/v1/app-runs</code>
              <p>Create an asynchronous run</p>
            </div>
            <div>
              <span>GET</span>
              <code>/openapi/v1/app-runs/&#123;runId&#125;</code>
              <p>Check status and retrieve outputs</p>
            </div>
          </div>
          <div className="api-docs-row">
            <p>
              <KeyRound size={17} /> Keep your API key in a server-side
              environment variable.
            </p>
            <a className="text-link" href={docsUrl}>
              Authentication & full examples
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section-container feature-split feature-content">
        <div>
          <p className="section-label">START ON THE CANVAS</p>
          <h2>
            Build it once.
            <br />
            <em>Call it whenever you need it.</em>
          </h2>
        </div>
        <div>
          <p>
            Your team can experiment visually before anyone writes integration
            code. Once the workflow works, copy it as an app and publish the
            version you want to use.
          </p>
          <Link href="/workflows" className="text-link">
            See Workflows & Apps
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <FAQ
        items={[
          {
            q: 'Do I need a separate Claude Code or Codex plugin?',
            a: 'No separate plugin is required for the HTTP API approach shown here. Your coding assistant can write and run API requests using the MaxDay documentation and credentials you configure in your development environment.',
          },
          {
            q: 'What do I need before I make a request?',
            a: 'An active MaxDay API key, a project ID, and a published app. Read the app details first: each app declares its own inputs. Keep your key server-side and never include it in browser code.',
          },
          {
            q: 'How do I know when an app has finished?',
            a: 'Creating a run returns a run ID. Query that run to check progress and status. Stop polling at succeeded, partial_success, failed, or canceled, and inspect the outputs or error details.',
          },
          {
            q: 'Can I safely repeat the same creation request?',
            a: 'Do not automatically retry a POST that creates an App Run. It may create another run. Use the returned run ID to check the existing run; retry status queries with backoff when needed.',
          },
        ]}
      />
    </FeatureLayout>
  );
}

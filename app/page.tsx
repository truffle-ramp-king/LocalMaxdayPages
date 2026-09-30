import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, AudioLines, Blocks, Film, FolderOpen, ImageIcon, Link2, Search, UsersRound } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import workspaceScreenshot from '@/public/product-workspace.png';
import workflowDetail from '@/public/workflow-detail.png';
import seedanceMark from '@/public/model-marks/seedance.svg';
import klingMark from '@/public/model-marks/kling.svg';
import googleMark from '@/public/model-marks/google.svg';
import happyHorseMark from '@/public/model-marks/happy-horse.svg';
import openaiMark from '@/public/model-marks/openai.svg';
import elevenlabsMark from '@/public/model-marks/elevenlabs.svg';
import sunoMark from '@/public/model-marks/suno.svg';

const models = [
  { name: 'Seedance 2.5', mark: seedanceMark },
  { name: 'Kling 3.0', mark: klingMark },
  { name: 'VEO 3.1', mark: googleMark },
  { name: 'Happy Horse', mark: happyHorseMark },
  { name: 'Nano Banana Pro', mark: googleMark },
  { name: 'GPT Image 2', mark: openaiMark },
  { name: 'Seedream 5.0', mark: seedanceMark },
  { name: 'Elevenlab', mark: elevenlabsMark },
  { name: 'Suno', mark: sunoMark },
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> The creative workspace for marketing teams</div>
            <h1 id="hero-title">Your whole creative team.<br /><span>One AI workspace.</span></h1>
            <p className="hero-lede">Find the references that move people. Create with leading AI models. Give your whole team one place to explore ideas and turn the best ones into repeatable work.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://www.maxday.ai/login">Start creating <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="button button-text" href="#platform">Explore the platform <ArrowDownRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-note" aria-label="Platform capabilities"><span>01 / Discover</span><span>02 / Create</span><span>03 / Make it repeatable</span></div>
        </div>
        <figure className="product-figure">
          <div className="product-frame">
            <div className="product-frame-top"><span className="live-dot" /><strong>Inside MaxDay</strong><span className="frame-divider" /> A real project workspace <span className="frame-right">WORKFLOW VIEW</span></div>
            <Image src={workspaceScreenshot} alt="Actual Maxday workspace showing a shared project, a visual canvas, media assets, and connected creative steps" priority sizes="(max-width: 900px) 100vw, 1240px" className="workspace-image" />
          </div>
          <figcaption><span>Real product view. The canvas stays open as your ideas take shape.</span><a href="./product-workspace.png" target="_blank" rel="noopener noreferrer">View full size <ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
        </figure>
      </section>

      <section className="model-section" aria-labelledby="model-title">
        <div className="section-container">
          <div className="model-heading"><p className="section-label">ALL YOUR CREATIVE MODELS, ONE WORKSPACE</p><h2 id="model-title">More ways to make it <em>great.</em></h2></div>
          <ul className="model-list" aria-label="Models available in Maxday">
            {models.map(model => <li key={model.name}><Image src={model.mark} alt="" width={22} height={22} unoptimized /><span>{model.name}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="platform-intro section-container" id="platform" aria-labelledby="platform-title">
        <p className="section-label">THE PLATFORM</p>
        <div className="intro-grid"><h2 id="platform-title">The whole creative process, finally in one place.</h2><p>Move from a promising reference to original work without scattering assets, models, and decisions across tabs. MaxDay connects discovery, generation, and your team&apos;s process in a single project.</p></div>
        <div className="chapter-links">
          <a href="#create"><span>01</span><strong>Create across models</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="#scout"><span>02</span><strong>Find your starting point</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="#teams"><span>03</span><strong>Build it together</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="feature-section section-container feature-create" id="create" aria-labelledby="create-title">
        <div className="feature-copy"><p className="section-label"><span>01</span> CONTENT GENERATION</p><h2 id="create-title">One idea can go <em>anywhere.</em></h2><p>Make images, video, sound, and more with leading AI models in one connected workspace. See the possibilities, keep the strongest outputs, and build on them without losing your creative thread.</p><div className="feature-tags"><span><ImageIcon size={16} /> Image</span><span><Film size={16} /> Video</span><span><AudioLines size={16} /> Audio</span></div></div>
        <figure className="detail-figure"><div className="detail-viewport"><Image src={workflowDetail} alt="Real MaxDay workflow with image, video, and prompt nodes connected across a visual canvas" sizes="(max-width: 850px) 100vw, 650px" /></div><figcaption>A closer look at a real MaxDay canvas</figcaption></figure>
      </section>

      <section className="scout-section" id="scout" aria-labelledby="scout-title"><div className="section-container scout-grid">
        <div className="feature-copy"><p className="section-label"><span>02</span> CONTENT SCOUT</p><h2 id="scout-title">Start with what&apos;s <em>working.</em></h2><p>Great creative often starts with a sharp reference. Content Scout finds the videos worth studying and brings them into your project, ready to use in a workflow.</p><p className="feature-aside">Explore Instagram Reels and TikToks your way. Bring a specific video, search a topic, or follow a creator&apos;s latest work.</p></div>
        <div className="scout-panel" aria-label="Three ways to use Content Scout"><div className="scout-panel-head"><span className="panel-orbit"><Search size={19} /></span><div><small>MAXDAY / DISCOVER</small><strong>Content Scout</strong></div><span className="panel-caption">THREE WAYS IN</span></div><div className="scout-option"><span className="option-icon"><Link2 size={21} /></span><div><strong>Paste a video link</strong><p>Download an Instagram Reel or TikTok into your project, ready for a workflow.</p></div><span className="option-index">01</span></div><div className="scout-option"><span className="option-icon"><Search size={21} /></span><div><strong>Explore a keyword</strong><p>Browse results and sort by likes, views, or engagement.</p></div><span className="option-index">02</span></div><div className="scout-option"><span className="option-icon"><AtSign size={21} /></span><div><strong>Follow an account</strong><p>Pull in the latest videos from a specific Instagram or TikTok creator.</p></div><span className="option-index">03</span></div><div className="scout-panel-foot"><span className="status-pulse" /> From inspiration to an asset in your workflow <ArrowRight size={17} /></div></div>
      </div></section>

      <section className="team-section section-container" id="teams" aria-labelledby="teams-title"><div className="team-top"><div><p className="section-label"><span>03</span> COLLABORATION</p><h2 id="teams-title">The best work is always a <em>team effort.</em></h2></div><p>Share a project with your team and create together in real time. Keep every asset, workflow, and app in one place so the whole team can see what exists and build on it.</p></div><div className="team-grid"><div className="project-card"><div className="project-card-head"><span className="project-mark"><FolderOpen size={22} /></span><div><small>SHARED PROJECT</small><strong>Your next campaign</strong></div><span className="team-avatars" aria-label="Shared with team members"><i>A</i><i>M</i><i>J</i></span></div><div className="project-items"><div><ImageIcon size={19} /><span><strong>Assets</strong><small>Images, videos, and everything you make</small></span><ArrowUpRight size={17} /></div><div><Blocks size={19} /><span><strong>Workflows</strong><small>Explore steps and compare alternatives</small></span><ArrowUpRight size={17} /></div><div><UsersRound size={19} /><span><strong>Apps</strong><small>Run your proven process again and again</small></span><ArrowUpRight size={17} /></div></div><div className="project-card-foot"><UsersRound size={16} /> Everyone works from the same project</div></div><div className="scale-card"><span className="scale-kicker">FROM EXPERIMENT TO SYSTEM</span><h3>When it works, make it repeatable.</h3><p>Find the steps that get the result you want. Copy that workflow as an app, then run it again with an API key when it&apos;s time to scale.</p><div className="scale-steps"><span>Explore</span><ArrowRight size={15} /><span>Copy as app</span><ArrowRight size={15} /><span>Run at scale</span></div><a href="https://www.maxday.ai/openapi/docs/get-start" target="_blank" rel="noopener noreferrer">Explore API documentation <ArrowUpRight size={17} /></a></div></div></section>

      <section className="closing-section"><div className="section-container closing-inner"><p className="section-label">THE NEXT IDEA STARTS HERE</p><h2>Make the work.<br /><em>Keep the momentum.</em></h2><p>One place to discover, create, and collaborate on what comes next.</p><a className="button button-primary" href="https://www.maxday.ai/login">Start creating with Maxday <ArrowUpRight size={18} /></a></div></section>
      <SiteFooter />
    </main>
  );
}

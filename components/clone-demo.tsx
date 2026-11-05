'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Play, Pause, ArrowRight, Layers, Box } from 'lucide-react';
import { publicAsset } from '@/lib/features';
import optionsScreenshot from '@/public/cloning/remake-options.png';

const modes = [
  {
    id: 'quick',
    name: 'Quick Clone',
    title: 'Try a new look in the same shot.',
    description:
      'Watch how to remake a fashion clip with a different model and outfit. Pick a reference video, add your photos, and describe what you want to change.',
  },
  {
    id: 'mosaic',
    name: 'Mosaic',
    title: 'Change the figure. Keep the scene.',
    description:
      'Cover the figure with a mosaic or blur treatment before continuing your workflow. Compare both treatments on the same source video.',
  },
  {
    id: 'clay',
    name: 'Clay figure',
    title: 'Let the movement lead.',
    description:
      'Extract motion into a clay figure video. Use that simplified motion reference to guide the next version of your content.',
  },
  {
    id: 'depth',
    name: 'Depth Map',
    title: 'Work from the shape of the scene.',
    description:
      'Extract a depth video from your connected source. Use depth as the structural reference for your next generation step.',
  },
] as const;

export function CloneDemo() {
  const [mode, setMode] = useState<(typeof modes)[number]['id']>('quick');
  const [treatment, setTreatment] = useState<'mosaic' | 'blur'>('mosaic');
  const [playing, setPlaying] = useState(false);
  const source = useRef<HTMLVideoElement>(null);
  const output = useRef<HTMLVideoElement>(null);
  const active = modes.find((m) => m.id === mode)!;
  const result = mode === 'clay' ? 'clay' : treatment;
  function pause() {
    source.current?.pause();
    output.current?.pause();
    setPlaying(false);
  }
  async function togglePlayback() {
    if (playing) {
      pause();
      return;
    }
    const players = [source.current, output.current].filter(
      (x): x is HTMLVideoElement => Boolean(x),
    );
    players.forEach((v) => {
      v.currentTime = 0;
    });
    const results = await Promise.allSettled(players.map((v) => v.play()));
    if (results.some((r) => r.status === 'rejected')) {
      pause();
      return;
    }
    setPlaying(true);
  }
  return (
    <div className="clone-demo" id="clone-demo">
      <fieldset className="clone-tabs" aria-label="Cloning mode">
        {modes.map((m, i) => (
          <button
            type="button"
            key={m.id}
            aria-pressed={mode === m.id}
            onClick={() => {
              pause();
              setMode(m.id);
            }}
          >
            <span>0{i + 1}</span>
            {m.name}
          </button>
        ))}
      </fieldset>
      <div className="clone-demo-body">
        <div className="clone-demo-copy">
          <p className="section-label">ONE SOURCE. FOUR STARTING POINTS.</p>
          <h2>{active.title}</h2>
          <p>{active.description}</p>
          {mode === 'mosaic' ? (
            <fieldset className="clone-treatment" aria-label="Mosaic treatment">
              <button
                type="button"
                aria-pressed={treatment === 'mosaic'}
                onClick={() => {
                  pause();
                  setTreatment('mosaic');
                }}
              >
                Pixelate
              </button>
              <button
                type="button"
                aria-pressed={treatment === 'blur'}
                onClick={() => {
                  pause();
                  setTreatment('blur');
                }}
              >
                Blur
              </button>
            </fieldset>
          ) : null}
          {mode !== 'quick' && (
            <>
              <button
                type="button"
                className="button button-outline clone-play"
                onClick={togglePlayback}
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
                {playing
                  ? 'Pause preview'
                  : mode === 'mosaic' || mode === 'clay'
                    ? 'Play comparison'
                    : 'Play source video'}
              </button>
              <span className="demo-footnote">
                Real MaxDay example · 10-second source
              </span>
            </>
          )}
        </div>
        <div className="clone-preview">
          {mode === 'quick' ? (
            <figure className="quick-clone-demo">
              <video
                src={publicAsset('/cloning/quick-clone.mp4')}
                poster={publicAsset('/cloning/quick-clone.jpg')}
                width={1280}
                height={656}
                preload="none"
                playsInline
                controls
                aria-label="Quick Clone walkthrough"
              >
                <track
                  kind="captions"
                  src={publicAsset('/cloning/quick-clone.en.vtt')}
                  srcLang="en"
                  label="English walkthrough"
                />
              </video>
              <figcaption>Quick Clone walkthrough · 27 seconds</figcaption>
            </figure>
          ) : (
            <figure>
              <div className="clip-frame">
                <video
                  ref={source}
                  src={publicAsset('/cloning/original.mp4')}
                  poster={publicAsset('/cloning/original.jpg')}
                  preload="none"
                  muted
                  playsInline
                  controls
                  onEnded={() => setPlaying(false)}
                  aria-label="Original source video"
                />
              </div>
              <figcaption>
                <span>01</span> Original source
              </figcaption>
            </figure>
          )}
          {mode === 'mosaic' || mode === 'clay' ? (
            <figure key={result}>
              <div className="clip-frame">
                <video
                  ref={output}
                  src={publicAsset(`/cloning/${result}.mp4`)}
                  poster={publicAsset(`/cloning/${result}.jpg`)}
                  preload="none"
                  muted
                  playsInline
                  controls
                  onEnded={() => setPlaying(false)}
                  aria-label={`${mode === 'clay' ? 'Clay figure' : treatment === 'blur' ? 'Blurred figure' : 'Pixelated figure'} output`}
                />
              </div>
              <figcaption>
                <span>02</span>{' '}
                {mode === 'clay'
                  ? 'Clay figure'
                  : treatment === 'blur'
                    ? 'Blur treatment'
                    : 'Mosaic treatment'}
              </figcaption>
            </figure>
          ) : mode === 'depth' ? (
            <div className="clone-mode-explainer depth-option">
              <Layers size={33} strokeWidth={1.2} />
              <small>DEPTH MAP</small>
              <h3>
                A structural reference
                <br />
                for your next video.
              </h3>
              <Box size={65} strokeWidth={0.65} />
              <p>
                Choose “Extract Motion to Depth Video” in the Video Remake menu.
              </p>
              <a className="text-link" href="#remake-tools">
                See the product menu
                <ArrowRight size={16} />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export function RemakeTools() {
  return (
    <figure className="remake-tools" id="remake-tools">
      <div>
        <Image
          src={optionsScreenshot}
          alt="MaxDay Video Remake menu with Extract Motion to Clay Video, Extract Motion to Depth Video, Smart Cover, and Replace Characters and Outfits"
          sizes="(max-width: 800px) 100vw, 760px"
        />
      </div>
      <figcaption>The Video Remake tools in the MaxDay workspace.</figcaption>
    </figure>
  );
}

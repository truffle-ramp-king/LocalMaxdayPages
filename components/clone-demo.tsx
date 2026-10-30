'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  ArrowRight,
  Layers,
  WandSparkles,
  Box,
} from 'lucide-react';
import { publicAsset } from '@/lib/features';
import optionsScreenshot from '@/public/cloning/remake-options.png';

const modes = [
  {
    id: 'quick',
    name: 'Quick clone',
    title: 'Start with the whole idea.',
    description:
      'Use a reference video as the starting point for your remake. A direct route from a format you like to a new version for your brand.',
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
  const [mode, setMode] = useState<(typeof modes)[number]['id']>('mosaic');
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
        </div>
        <div className="clone-preview">
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
          ) : mode === 'quick' ? (
            <div className="clone-mode-explainer">
              <WandSparkles size={33} strokeWidth={1.2} />
              <small>QUICK CLONE</small>
              <h3>
                Your reference.
                <br />
                Your next version.
              </h3>
              <span>
                Reference video
                <ArrowRight size={17} />
              </span>
              <span>
                Your direction
                <ArrowRight size={17} />
              </span>
              <span>A new generation</span>
              <p>Start a Quick clone in MaxDay.</p>
            </div>
          ) : (
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
          )}
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

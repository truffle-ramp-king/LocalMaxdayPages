'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, X, Plus } from 'lucide-react';
import templates from '@/lib/template-showcase.json';
import { templatesUrl, publicAsset } from '@/lib/features';

const categories = [
  'All templates',
  'Viral Now',
  'Fashion',
  'Advertising',
  'UGC',
  'E-commerce',
  'Hook',
  'Dance',
];
type Template = (typeof templates)[number];

export function TemplateShowcase() {
  const [category, setCategory] = useState('All templates');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Template | null>(null);
  const [mediaError, setMediaError] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const items =
    category === 'All templates'
      ? templates
      : templates.filter((t) => t.categories.includes(category));
  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [selected]);
  return (
    <section
      className="template-showcase section-container"
      id="video-templates"
      aria-labelledby="template-wall-title"
    >
      <div className="template-intro">
        <div>
          <p className="section-label">A HEAD START FOR YOUR NEXT POST</p>
          <h2 id="template-wall-title">Start with a format you love.</h2>
        </div>
        <a href={templatesUrl} className="text-link">
          All templates
          <ArrowUpRight size={17} />
        </a>
      </div>
      <fieldset
        className="template-categories"
        aria-label="Template categories"
      >
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setExpanded(false);
            }}
          >
            {c}
          </button>
        ))}
      </fieldset>
      <div className="template-wall">
        {(expanded ? items : items.slice(0, 10)).map((t) => (
          <button
            type="button"
            className="template-tile"
            key={t.id}
            onClick={() => {
              setMediaError(false);
              setSelected(t);
            }}
            aria-label={`Preview ${t.title}`}
          >
            <Image
              src={publicAsset(t.poster)}
              alt=""
              width={360}
              height={640}
              sizes="(max-width: 560px) 50vw, (max-width: 1080px) 25vw, 20vw"
              unoptimized
              loading="lazy"
            />
            <span className="template-play">
              <Play size={17} fill="currentColor" />
            </span>
            <span className="template-tile-caption">
              <small>{t.categories[0] || 'Video template'}</small>
              <strong>{t.title}</strong>
            </span>
          </button>
        ))}
      </div>
      <div className="template-wall-actions">
        {!expanded && items.length > 10 ? (
          <button
            className="button button-outline"
            type="button"
            onClick={() => setExpanded(true)}
          >
            Show more templates
            <Plus size={16} />
          </button>
        ) : null}
        <a href={templatesUrl} className="text-link">
          Explore the full template library
          <ArrowUpRight size={17} />
        </a>
      </div>
      <dialog
        ref={dialog}
        className="template-dialog"
        aria-label={selected ? `Preview ${selected.title}` : 'Template preview'}
        onClose={() => setSelected(null)}
      >
        <div className="template-dialog-inner">
          <button
            type="button"
            className="dialog-close"
            aria-label="Close preview"
            onClick={() => dialog.current?.close()}
          >
            <X size={20} />
          </button>
          {selected ? (
            <>
              <video
                key={selected.id}
                src={
                  selected.preview.startsWith('/')
                    ? publicAsset(selected.preview)
                    : selected.preview
                }
                poster={publicAsset(selected.poster)}
                controls
                playsInline
                autoPlay
                muted
                preload="metadata"
                aria-label={selected.title}
                onError={() => setMediaError(true)}
              />
              <div className="template-dialog-copy">
                <p className="section-label">
                  FROM THE MAXDAY TEMPLATE LIBRARY
                </p>
                <h3>{selected.title}</h3>
                {mediaError ? (
                  <output className="template-media-error">
                    This preview could not load. Open the template library to
                    view it in MaxDay.
                  </output>
                ) : (
                  <p className="template-preview-note">
                    Up to 12 seconds · full template in the library
                  </p>
                )}
                <p>
                  Use a reference as the starting point for your own video.
                  Explore the full library to clone a format or send it to a
                  workflow.
                </p>
                <a href={templatesUrl} className="button button-primary">
                  Open template library
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </>
          ) : null}
        </div>
      </dialog>
    </section>
  );
}

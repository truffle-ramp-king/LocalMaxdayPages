'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, X, Plus } from 'lucide-react';
import { recordMarketingEvent } from '@/components/feature-analytics';
import templates from '@/lib/template-showcase.json';
import { templatesUrl, publicAsset } from '@/lib/features';

const categories = [
  'All templates',
  'E-commerce',
  'Fashion',
  'Advertising',
  'UGC',
];
const featuredCount = 5;
type Template = (typeof templates)[number];

export function TemplateShowcase() {
  const [category, setCategory] = useState('All templates');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Template | null>(null);
  const [mediaError, setMediaError] = useState(false);
  const gallery = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!gallery.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        recordMarketingEvent({
          event: 'maxday_gallery_view',
          placement: 'home',
        });
        observer.disconnect();
      }
    });
    observer.observe(gallery.current);
    return () => observer.disconnect();
  }, []);
  const dialog = useRef<HTMLDialogElement>(null);
  const items =
    category === 'All templates'
      ? templates
      : templates.filter((t) => t.categories.includes(category));
  useEffect(() => {
    function readSelection() {
      const id = window.location.hash.slice('#template-'.length);
      const item = templates.find((template) => template.id === id);
      if (window.location.hash.startsWith('#template-') && item) {
        setMediaError(false);
        setSelected(item);
      } else {
        dialog.current?.close();
      }
    }
    readSelection();
    window.addEventListener('hashchange', readSelection);
    return () => window.removeEventListener('hashchange', readSelection);
  }, []);
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
      ref={gallery}
      className="template-showcase section-container"
      id="video-templates"
      aria-labelledby="template-wall-title"
    >
      <div className="template-intro">
        <div>
          <h2 id="template-wall-title">Pick a format for your product</h2>
        </div>
        <a href={templatesUrl} className="text-link">
          Open template library
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
        {(expanded ? items : items.slice(0, featuredCount)).map((t) => (
          <a
            className="template-tile"
            key={t.id}
            href={`#template-${t.id}`}
            data-feature="template-selection"
            data-template-id={t.id}
            data-placement="gallery"
            aria-label={`Use this template: ${t.title}`}
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
              <strong>{t.title}</strong>
              <small>{t.categories[0] || 'Video template'}</small>
              <span className="use-template">
                Use this template <ArrowUpRight size={14} />
              </span>
            </span>
          </a>
        ))}
      </div>
      <div className="template-wall-actions">
        {!expanded && items.length > featuredCount ? (
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
        onClose={() => {
          if (window.location.hash.startsWith('#template-')) {
            window.history.replaceState(
              window.history.state,
              '',
              window.location.pathname +
                window.location.search +
                '#video-templates',
            );
          }
          setSelected(null);
        }}
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
                  Save this reference clip, then upload it to your MaxDay
                  workflow. Add your product photos and describe what to
                  replace.
                </p>
                <a
                  href={publicAsset(selected.preview)}
                  download={`maxday-${selected.id}.mp4`}
                  className="button button-primary"
                  data-feature="template-download"
                  data-template-id={selected.id}
                  data-placement="template-preview"
                >
                  Download reference clip <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://maxday.ai/login"
                  target="_blank"
                  rel="noopener"
                  className="text-link workspace-entry"
                  data-feature="workspace-login"
                  data-template-id={selected.id}
                  data-placement="template-preview"
                >
                  Log in to your workspace <ArrowUpRight size={15} />
                </a>
              </div>
            </>
          ) : null}
        </div>
      </dialog>
    </section>
  );
}

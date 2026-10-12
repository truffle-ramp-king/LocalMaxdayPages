'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AudioLines, Film, ImageIcon, Music2, ScanLine, Scaling, WandSparkles } from 'lucide-react';
import { apiCapabilities, type ApiCapability } from '@/lib/api-models';
import googleMark from '@/public/model-marks/google.svg';
import openaiMark from '@/public/model-marks/openai.svg';
import seedanceMark from '@/public/model-marks/seedance.svg';
import klingMark from '@/public/model-marks/kling.svg';
import elevenlabsMark from '@/public/model-marks/elevenlabs.svg';
import sunoMark from '@/public/model-marks/suno.svg';

const capabilityIcons = { images: ImageIcon, inpainting: WandSparkles, panoramas: ScanLine, upscale: Scaling, video: Film, speech: AudioLines, music: Music2 };

function ModelMark({ name }: { name: string }) {
  const mark = name.startsWith('nano-banana') || name === 'lyria' ? googleMark
    : name.startsWith('gpt-image') ? openaiMark
    : name.startsWith('seedream') || name.startsWith('seedance') ? seedanceMark
    : name.startsWith('kling') ? klingMark
    : name === 'elevenlabs' ? elevenlabsMark
    : name === 'suno' ? sunoMark : null;
  return <span className="api-model-mark" aria-hidden="true">{mark ? <Image src={mark} alt="" width={22} height={22} unoptimized /> : <span>{name === 'Upscale' ? 'U' : name.startsWith('wan') ? 'W' : 'M'}</span>}</span>;
}

export function ApiModelCatalog() {
  const [selected, setSelected] = useState<ApiCapability>('images');
  const capability = apiCapabilities.find(item => item.id === selected)!;

  return <div className="api-catalog">
    <div className="api-catalog-filters" role="group" aria-label="Model capability">
      {apiCapabilities.map(item => {
        const Icon = capabilityIcons[item.id];
        return <button type="button" key={item.id} aria-pressed={selected === item.id} aria-controls="api-catalog-results" onClick={() => setSelected(item.id)}><Icon size={17} aria-hidden="true" /><span>{item.label}</span><small>{item.models.length}</small></button>;
      })}
    </div>
    <section className="api-catalog-results" id="api-catalog-results" aria-labelledby="api-capability-title">
      <div className="api-catalog-heading" aria-live="polite" aria-atomic="true"><div><h3 id="api-capability-title">{capability.label}</h3><p>{capability.description}</p></div><span>{capability.models.length} {capability.models.length === 1 ? 'model' : 'models'}</span></div>
      <ul className="api-model-grid">{capability.models.map(name => <li key={name}><ModelMark name={name} /><code>{name}</code></li>)}</ul>
    </section>
  </div>;
}

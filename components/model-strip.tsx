import Image from 'next/image';
import seedanceMark from '@/public/model-marks/seedance.svg';
import klingMark from '@/public/model-marks/kling.svg';
import googleMark from '@/public/model-marks/google.svg';
import happyHorseMark from '@/public/model-marks/happy-horse.svg';
import openaiMark from '@/public/model-marks/openai.svg';
import elevenlabsMark from '@/public/model-marks/elevenlabs.svg';
import sunoMark from '@/public/model-marks/suno.svg';
import claudeMark from '@/public/model-marks/claude.svg';
import geminiMark from '@/public/model-marks/gemini.svg';

const models = [
  { name: 'OpenAI GPT 6 Astra', mark: openaiMark },
  { name: 'Claude Opus 5.5', mark: claudeMark },
  { name: 'Gemini 3.8 Flash', mark: geminiMark },
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

export function ModelStrip() {
  return (
    <section className="model-section section-container">
      <div className="model-heading">
        <h2>All the Top AI Models in One Workspace</h2>
      </div>
      <ul className="model-list">
        {models.map((model) => (
          <li key={model.name}>
            <Image src={model.mark} alt="" width={26} height={26} />
            <span>{model.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

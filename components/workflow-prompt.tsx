'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
export function WorkflowPrompt() {
  const [prompt, setPrompt] = useState(''); const [result, setResult] = useState<string | null>(null);
  function submit(event: { preventDefault(): void }) { event.preventDefault(); const value = prompt.trim(); setResult(value ? `Workflow outline ready for “${value}”` : 'Add a creative goal to generate a workflow outline.'); }
  return <div className="prompt-shell"><form onSubmit={submit} className="workflow-prompt"><label htmlFor="workflow-goal" className="sr-only">Describe the content workflow you want to build</label><input id="workflow-goal" value={prompt} onChange={event => setPrompt(event.target.value)} placeholder="Turn product photos into five vertical ad concepts…" /><button type="submit">Build workflow <ArrowRight size={17} /></button></form>{result && <output className="prompt-result">{prompt.trim() ? <CheckCircle2 size={15} /> : <Sparkles size={15} />}{result}</output>}</div>;
}

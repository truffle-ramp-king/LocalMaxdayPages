import { ArrowRight, Film, ImageIcon, MessageSquareText, Music2, Sparkles } from 'lucide-react';
export function WorkflowCanvas({ compact = false }: { compact?: boolean }) {
  const nodes = [[MessageSquareText, 'Brief', 'Campaign input'], [Sparkles, 'Script', 'GPT'], [ImageIcon, 'Frames', 'GPT Image'], [Film, 'Video', 'Seedance'], [Music2, 'Sound', 'Suno']] as const;
  return <div className={`workflow-canvas ${compact ? 'workflow-compact' : ''}`} aria-label="Example connected content workflow">
    <div className="canvas-toolbar"><span /><span /><span /><b>Workflow · Product launch</b></div>
    <div className="canvas-grid">{nodes.map(([Icon, title, detail], index) => <div className="node-wrap" key={title}><div className="workflow-node"><span className="node-icon"><Icon size={17} /></span><span><b>{title}</b><small>{detail}</small></span></div>{index < nodes.length - 1 && <ArrowRight className="node-arrow" size={17} aria-hidden="true" />}</div>)}</div>
    <div className="canvas-status"><span className="status-dot" /> Ready to run <span>5 connected steps</span></div>
  </div>;
}

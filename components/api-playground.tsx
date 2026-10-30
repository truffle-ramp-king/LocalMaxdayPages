'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

const agentPrompt = `Use the MaxDay API documentation at\nhttps://maxday.ai/openapi/docs/get-start.\n\nUse MAXDAY_API_KEY from my server environment.\nList my projects and published apps. Read the\nselected app's inputs before preparing a run.\n\nRun the app with my campaign inputs, then poll\nuntil it reaches a terminal state. Return the\noutput URLs and report any errors.\n\nKeep my API key out of code, logs, and output.\nDo not automatically retry run creation.`;
const request = `// Server-side JavaScript · Node.js 18+\nconst base = 'https://api.maxday.ai/bio/dramas/v1';\nconst response = await fetch(\n  base + '/openapi/v1/app-runs',\n  {\n    method: 'POST',\n    headers: {\n      Authorization: 'Bearer ' + process.env.MAXDAY_API_KEY,\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      appId: process.env.MAXDAY_APP_ID,\n      projectId: process.env.MAXDAY_PROJECT_ID,\n      // Set inputs to match GET /openapi/v1/apps/{appId}\n      inputJson: JSON.parse(process.env.MAXDAY_APP_INPUTS || '{}'),\n    }),\n  },\n);\nif (!response.ok) throw new Error('Run creation failed');\nconst result = await response.json();\nif (result.code !== 200) throw new Error(result.message);\nconst runId = result.data.runId;\n// Poll GET /openapi/v1/app-runs/{runId} for status and outputs.`;

export function ApiPlayground() {
  const [tab, setTab] = useState<'Claude Code' | 'Codex' | 'JavaScript'>(
    'Claude Code',
  );
  const [status, setStatus] = useState('');
  const code = tab === 'JavaScript' ? request : agentPrompt;
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus('Copied');
    } catch {
      setStatus('Select the text below to copy');
    }
  }
  return (
    <div className="api-playground">
      <div className="code-window-top">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>MAXDAY / APP RUNS</span>
        <Terminal size={16} />
      </div>
      <fieldset className="code-tabs" aria-label="API example">
        {(['Claude Code', 'Codex', 'JavaScript'] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={t === tab}
            onClick={() => {
              setTab(t);
              setStatus('');
            }}
          >
            {t}
          </button>
        ))}
      </fieldset>
      <div className="code-label">
        <span>
          {tab === 'JavaScript'
            ? 'CREATE A RUN · REQUEST EXAMPLE'
            : `A STARTING PROMPT FOR ${tab.toUpperCase()}`}
        </span>
        <button type="button" onClick={copy} aria-label="Copy example">
          {status === 'Copied' ? <Check size={14} /> : <Copy size={14} />}{' '}
          {status === 'Copied' ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
      <output className="code-status">
        {status && status !== 'Copied'
          ? status
          : tab === 'JavaScript'
            ? 'Use the inputs declared by your selected published app.'
            : 'Your coding assistant calls the API with your app and project.'}
      </output>
    </div>
  );
}

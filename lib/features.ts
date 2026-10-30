export const featurePages = [
  {
    slug: 'workflows',
    name: 'Workflows & Apps',
    label: 'Build once. Run again.',
    description:
      'Turn the process behind your best campaign into a reusable app.',
    icon: 'workflow',
  },
  {
    slug: 'api',
    name: 'API',
    label: 'Put your apps to work.',
    description: 'Run MaxDay apps from Claude Code, Codex, or your own tools.',
    icon: 'code',
  },
  {
    slug: 'video-cloning',
    name: 'Video Cloning',
    label: 'A new take on a great format.',
    description:
      'Quick clone, mosaic, clay, or depth. Choose how you remake a video.',
    icon: 'video',
  },
  {
    slug: 'content-scout',
    name: 'Content Scout',
    label: 'Find your next angle.',
    description: 'Explore Instagram and TikTok by link, keyword, or account.',
    icon: 'scout',
  },
  {
    slug: 'ai-tag-remover',
    name: 'AI Tag Remover',
    label: 'Clean up your files.',
    description:
      'Remove embedded AI metadata from generated images and videos.',
    icon: 'tag',
  },
  {
    slug: 'video-downloader',
    name: 'Video Downloader',
    label: 'Keep the video. Skip the watermark.',
    description: 'Download Instagram and TikTok videos without watermarks.',
    icon: 'download',
  },
  {
    slug: 'ecommerce-clone',
    name: 'Ecommerce Clone',
    label: 'From store link to starting point.',
    description:
      'Import content from a Shopify link for your next product campaign.',
    icon: 'shop',
  },
] as const;

export type FeatureSlug = (typeof featurePages)[number]['slug'];
export function loginUrl(feature: string) {
  return `https://maxday.ai/login?utm_source=maxday&utm_medium=website&utm_campaign=feature-discovery&utm_content=${encodeURIComponent(feature)}`;
}
export const docsUrl = 'https://maxday.ai/openapi/docs/get-start';
export const templatesUrl = 'https://maxday.ai/templates';
export function publicAsset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}

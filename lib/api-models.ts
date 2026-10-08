export const apiCapabilities = [
  { id: 'images', label: 'Images', description: 'Generate images for campaigns, creative concepts, and social content.', models: ['nano-banana-pro', 'nano-banana-2', 'nano-banana', 'gpt-image-2.5-sunburst', 'gpt-image-2.5-flare', 'gpt-image-2', 'seedream-5-pro', 'seedream-5-lite', 'seedream-4.5', 'seedream-4', 'M Uncensored', 'wan-2.7', 'midjourney 8', 'midjourney'] },
  { id: 'inpainting', label: 'Inpainting', description: 'Edit selected areas of an image as part of your creative process.', models: ['nano-banana-pro', 'nano-banana-2'] },
  { id: 'panoramas', label: '720 panoramas', description: 'Create panoramic imagery with a choice of image models.', models: ['nano-banana-pro', 'nano-banana-2', 'nano-banana', 'gpt-image-2.5-sunburst', 'gpt-image-2.5-flare', 'gpt-image-2', 'seedream-5-pro', 'seedream-5-lite', 'seedream-4.5', 'seedream-4', 'M Uncensored'] },
  { id: 'video', label: 'Video', description: 'Generate video for social content, campaign concepts, and creative variations.', models: ['seedance2.5', 'seedance2', 'seedance2-mini', 'seedance2-fast', 'wan3.0', 'wan-2.7', 'Minimax H3', 'kling-03'] },
  { id: 'speech', label: 'Speech', description: 'Generate speech and voiceovers for your content.', models: ['elevenlabs'] },
  { id: 'music', label: 'Music', description: 'Generate music for your next video or campaign.', models: ['lyria', 'suno'] },
] as const;

export type ApiCapability = typeof apiCapabilities[number]['id'];

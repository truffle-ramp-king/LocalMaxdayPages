import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SeoPage } from '@/components/seo-page';
import { seoPages, seoSlugs, type SeoSlug } from '@/lib/site-data';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return seoSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const page = seoPages[slug as SeoSlug]; if (!page) return {};
  const url = `https://maxday.ai/${slug}`; const image = 'https://static-sz.drfun.cn/resource/image/39609afe757e20cbd038223ce5c69eec.jpg';
  return { title: page.title, description: page.description, alternates: { canonical: url }, openGraph: { title: page.title, description: page.description, url, type: 'website', images: [{ url: image, width: 1200, height: 630, alt: 'Maxday AI content workflow workspace' }] }, twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: [image] } };
}
export default async function Page({ params }: Props) { const { slug } = await params; if (!seoSlugs.includes(slug as SeoSlug)) notFound(); return <SeoPage slug={slug as SeoSlug} />; }

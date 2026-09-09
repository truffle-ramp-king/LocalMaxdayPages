import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { privacyPolicy } from '@/lib/legal-content';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'Read about personal information, AI workflows, service providers, and privacy choices at MaxDay.', alternates: { canonical: 'https://maxday.ai/privacy-policy' }, openGraph: { title: 'Privacy Policy | Maxday AI', description: 'Read about personal information, AI workflows, service providers, and privacy choices at MaxDay.', url: 'https://maxday.ai/privacy-policy' }, twitter: { title: 'Privacy Policy | Maxday AI', description: 'Read about personal information, AI workflows, service providers, and privacy choices at MaxDay.' } };
export default function Page() { return <LegalPage document={privacyPolicy} />; }

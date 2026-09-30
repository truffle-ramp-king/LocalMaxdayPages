import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { privacyPolicy } from '@/lib/legal-content';
export const metadata: Metadata = { title: 'Privacy Policy | MaxDay AI', description: 'Read about personal information, service providers, and privacy choices at MaxDay.', alternates: { canonical: 'https://www.maxday.ai/privacy-policy' }, openGraph: { title: 'Privacy Policy | MaxDay AI', description: 'Read about personal information, service providers, and privacy choices at MaxDay.', url: 'https://www.maxday.ai/privacy-policy' }, twitter: { title: 'Privacy Policy | MaxDay AI', description: 'Read about personal information, service providers, and privacy choices at MaxDay.' } };
export default function Page() { return <LegalPage document={privacyPolicy} />; }

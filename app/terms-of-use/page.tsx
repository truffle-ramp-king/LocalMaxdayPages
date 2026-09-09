import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { termsOfUse } from '@/lib/legal-content';
export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Read the terms for MaxDay accounts, AI content workflows, acceptable use, and purchases.', alternates: { canonical: 'https://maxday.ai/terms-of-use' }, openGraph: { title: 'Terms & Conditions | Maxday AI', description: 'Read the terms for MaxDay accounts, AI content workflows, acceptable use, and purchases.', url: 'https://maxday.ai/terms-of-use' }, twitter: { title: 'Terms & Conditions | Maxday AI', description: 'Read the terms for MaxDay accounts, AI content workflows, acceptable use, and purchases.' } };
export default function Page() { return <LegalPage document={termsOfUse} />; }

import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { termsOfUse } from '@/lib/legal-content';
export const metadata: Metadata = { title: 'Terms & Conditions | MaxDay AI', description: 'Read the terms for MaxDay accounts, acceptable use, and purchases.', alternates: { canonical: 'https://www.maxday.ai/terms-of-use' }, openGraph: { title: 'Terms & Conditions | MaxDay AI', description: 'Read the terms for MaxDay accounts, acceptable use, and purchases.', url: 'https://www.maxday.ai/terms-of-use' }, twitter: { title: 'Terms & Conditions | MaxDay AI', description: 'Read the terms for MaxDay accounts, acceptable use, and purchases.' } };
export default function Page() { return <LegalPage document={termsOfUse} />; }

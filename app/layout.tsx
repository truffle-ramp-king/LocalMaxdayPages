import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: new URL('https://maxday.ai'),
  title: { default: 'Maxday AI — Build winning AI content workflows', template: '%s | Maxday AI' },
  description: 'Build repeatable AI workflows for video, social, advertising, virtual influencers, storyboards, and creative production in one connected workspace.',
  applicationName: 'Maxday AI',
  alternates: { canonical: 'https://maxday.ai' },
  openGraph: { title: 'Maxday AI — Build winning AI content workflows', description: 'The connected AI workspace for creative professionals—from first idea to repeatable production.', url: 'https://maxday.ai', siteName: 'Maxday AI', type: 'website', images: [{ url: 'https://static-sz.drfun.cn/resource/image/39609afe757e20cbd038223ce5c69eec.jpg', width: 1200, height: 630, alt: 'Maxday AI content workflow workspace' }] },
  twitter: { card: 'summary_large_image', title: 'Maxday AI — Build winning AI content workflows', description: 'The connected AI workspace for creative professionals—from first idea to repeatable production.', images: ['https://static-sz.drfun.cn/resource/image/39609afe757e20cbd038223ce5c69eec.jpg'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Maxday AI', url: 'https://maxday.ai', applicationCategory: 'MultimediaApplication', operatingSystem: 'Web', description: 'Maxday AI is a visual AI workflow builder for professional video, marketing, and virtual influencer content production.', audience: { '@type': 'BusinessAudience', audienceType: 'Creative studios, marketing teams, agencies, and professional creators' }, offers: { '@type': 'Offer', availability: 'https://schema.org/OnlineOnly' } }) }} />
      </body>
    </html>
  );
}

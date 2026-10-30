import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './features.css';
import { FeatureAnalytics } from '@/components/feature-analytics';

const geistSans = localFont({
  src: './fonts/geist-latin.woff2',
  variable: '--font-geist-sans',
  display: 'swap',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/geist-mono-latin.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  robots:
    process.env.GITHUB_PAGES === 'true'
      ? { index: false, follow: false }
      : { index: true, follow: true },
  metadataBase: new URL('https://www.maxday.ai'),
  title: 'MaxDay AI — Turn social trends into your next campaign.',
  description:
    'Scout social trends, clone video formats, and create product content with AI. Turn your best campaign workflow into a reusable MaxDay app.',
  applicationName: 'MaxDay AI',
  alternates: { canonical: 'https://www.maxday.ai/' },
  openGraph: {
    title: 'MaxDay AI — Turn social trends into your next campaign.',
    description:
      'Discover, create, and collaborate in one AI workspace for social media managers.',
    url: 'https://www.maxday.ai/',
    siteName: 'MaxDay AI',
    type: 'website',
    images: [
      {
        url: '/fashion-campaign-workspace.jpg',
        width: 2521,
        height: 1280,
        alt: 'MaxDay luxury fashion campaign workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaxDay AI — Turn social trends into your next campaign.',
    description:
      'Discover, create, and collaborate in one AI workspace for social media managers.',
    images: ['/fashion-campaign-workspace.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FeatureAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'MaxDay AI',
              url: 'https://www.maxday.ai/',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web',
              description:
                'A shared workspace for social media managers to discover social video references, generate content with AI models, and turn proven processes into reusable apps.',
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Social media managers and marketing teams',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
  robots: process.env.GITHUB_PAGES === 'true' ? { index: false, follow: false } : { index: true, follow: true },
  metadataBase: new URL('https://www.maxday.ai'),
  title: 'MaxDay AI — Your whole creative team. One AI workspace.',
  description: 'Discover Instagram and TikTok inspiration with Content Scout, create with leading AI models, and collaborate in one shared workspace for marketing teams.',
  applicationName: 'MaxDay AI',
  alternates: { canonical: 'https://www.maxday.ai/' },
  openGraph: { title: 'MaxDay AI — Your whole creative team. One AI workspace.', description: 'Discover, create, and collaborate in one AI workspace for marketing teams.', url: 'https://www.maxday.ai/', siteName: 'MaxDay AI', type: 'website', images: [{ url: '/product-workspace.png', width: 3452, height: 1808, alt: 'A real MaxDay project workspace' }] },
  twitter: { card: 'summary_large_image', title: 'MaxDay AI — Your whole creative team. One AI workspace.', description: 'Discover, create, and collaborate in one AI workspace for marketing teams.', images: ['/product-workspace.png'] },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'MaxDay AI', url: 'https://www.maxday.ai/', applicationCategory: 'MultimediaApplication', operatingSystem: 'Web', description: 'A shared workspace for marketing teams to discover social video references, generate content with AI models, and turn proven processes into reusable apps.', audience: { '@type': 'BusinessAudience', audienceType: 'Marketing teams and creative professionals' } }) }} />
      </body>
    </html>
  );
}

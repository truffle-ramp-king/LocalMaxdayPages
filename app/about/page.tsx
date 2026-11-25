import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import styles from './about.module.css';

const title = 'About MaxDay Studios | MaxDay AI';
const description =
  'Meet MaxDay Studios PTE. LTD., the AI-native video production platform for micro-dramas and commercials, and contact the team for investment inquiries.';
const url = 'https://www.maxday.ai/about';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary', title, description },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <article className={`section-container ${styles.profile}`}>
          <h1 className={styles.heading}>
            About <em>MaxDay Studios</em>
          </h1>
          <div className={styles.story}>
            <p className={styles.intro}>
              MaxDay Studios PTE. LTD. is an AI-native video production platform
              powering in-house and third-party micro-dramas and commercials for
              audiences in the United States and Europe.
            </p>
            <p>
              Operating from Singapore and Hong Kong, our team of veteran tech
              entrepreneurs, creative producers, product managers, and AI engineers
              combines deep technical expertise with proven consumer scale. Our
              core leadership previously built Asia’s largest online dating
              platform, reaching over 250 million registered users.
            </p>
            <p>
              The core members of our team are educated at leading universities in
              the United States (Cornell, Columbia, Stanford, and Princeton) as
              well as in Asia.
            </p>
          </div>
          <section className={styles.contact} aria-labelledby="investment-title">
            <h2 id="investment-title">Investment inquiries</h2>
            <a href="mailto:team@maxday.ai">
              team@maxday.ai <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

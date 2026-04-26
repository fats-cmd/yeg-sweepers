import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Edmonton (YEG) Sweepers | Litter Removal & Power Sweeping',
    template: '%s | Edmonton (YEG) Sweepers',
  },
  description:
    'Professional litter removal, power sweeping, and lot cleaning services in Edmonton, AB. Keep your commercial property clean, safe, and inviting. Get a free quote today!',
  keywords: [
    'litter removal Edmonton',
    'power sweeping Edmonton',
    'lot cleaning Edmonton',
    'parking lot sweeping',
    'commercial cleaning Edmonton',
    'YEG sweepers',
    'property maintenance Edmonton',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Edmonton (YEG) Sweepers',
    title: 'Edmonton (YEG) Sweepers | Litter Removal & Power Sweeping',
    description:
      'Professional litter removal, power sweeping, and lot cleaning services in Edmonton, AB.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://yegsweepers.ca' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

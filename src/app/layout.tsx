import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/data';
import '../styles/globals.css';

import { Bebas_Neue, Inter } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFED00',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — Maringá, PR`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'agência de marketing digital maringá',
    'tráfego pago maringá',
    'criação de sites maringá',
    'gestão de redes sociais',
    'SEO maringá',
    'publicidade digital paraná',
    'marketing para pequenas empresas',
    'FLIP marketing publicidade',
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE.fullName,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: SITE.fullName,
              url: SITE.url,
              logo: `${SITE.url}/logo.png`,
              description: SITE.description,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Maringá',
                addressRegion: 'PR',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE.phone,
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
              sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook],
            }),
          }}
        />
      </head>

      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
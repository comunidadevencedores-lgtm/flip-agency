import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/data';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2952FF',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — Curitiba, PR`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.seoDescription,
  keywords: [
    'agência de marketing digital curitiba',
    'tráfego pago curitiba',
    'criação de sites curitiba',
    'gestão de redes sociais',
    'SEO curitiba',
    'publicidade digital paraná',
    'marketing para pequenas empresas',
    'desenvolvimento de sites curitiba',
    'agência full service curitiba',
    'bowl digital',
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description: SITE.seoDescription,
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
    description: SITE.seoDescription,
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
  other: {
    'google-adsense-account': 'ca-pub-3683972523898477',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NDMFFPDW');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              additionalType: 'https://schema.org/MarketingAgency',
              name: SITE.fullName,
              url: SITE.url,
              logo: `${SITE.url}/logo-bowl-digital.png`,
              description: SITE.description,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Curitiba',
                addressRegion: 'PR',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE.phone,
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
              sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDMFFPDW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}

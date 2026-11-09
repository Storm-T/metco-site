import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import './motion.css'
import './marquee.css'
import CustomCursor from '@/components/CustomCursor'
import { defaultOgImage, organisation, siteName, siteUrl } from '@/lib/seo'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit'
})

const gobold = localFont({
  src: './fonts/Gobold-Bold.otf',
  weight: '700',
  style: 'normal',
  display: 'swap',
  variable: '--font-gobold',
})

const description =
  'METCO accompagne vos projets industriels, structurels et architecturaux avec un savoir-faire spécialisé en construction métallique, chaudronnerie, tuyauterie industrielle, couverture et bardage.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'METCO — Construction métallique à Douala, Cameroun',
    // Sub-pages supply only their own name; this appends the brand.
    template: `%s | ${siteName}`,
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: 'METCO — Construction métallique à Douala, Cameroun',
    description,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'METCO — Construction métallique à Douala, Cameroun',
    description,
    images: [defaultOgImage],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

/** Identifies the business to search engines: powers the knowledge panel and local results. */
const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': `${siteUrl}/#organisation`,
  name: organisation.name,
  url: siteUrl,
  description,
  telephone: organisation.phone,
  email: organisation.email,
  image: `${siteUrl}${defaultOgImage}`,
  logo: `${siteUrl}/assets/image1.png`,
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: organisation.street,
    addressLocality: organisation.city,
    addressCountry: organisation.country,
  },
  openingHours: organisation.openingHours,
  areaServed: { '@type': 'Country', name: 'Cameroun' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${gobold.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

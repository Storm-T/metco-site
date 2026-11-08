import ContactPageLayout from '@/components/ContactPageLayout'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import { organisation, pageMetadata, siteUrl } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact — METCO à Douala',
  description:
    'Échangeons sur votre projet métallique. METCO est basée à PK 11, Douala : +237 699 632 236 ou contact@metco237.com.',
  path: '/contact',
})

/** Gives Google the address and hours it needs for the local pack and map results. */
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@id': `${siteUrl}/#organisation`,
    '@type': 'GeneralContractor',
    name: organisation.name,
    telephone: organisation.phone,
    email: organisation.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organisation.street,
      addressLocality: organisation.city,
      addressCountry: organisation.country,
    },
    openingHours: organisation.openingHours,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }])} />
      <JsonLd data={contactJsonLd} />
      <ContactPageLayout />
    </>
  )
}

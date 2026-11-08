import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import RevealSection from '@/components/RevealSection'
import Services from '@/components/Services'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata, siteUrl } from '@/lib/seo'
import { services } from '@/lib/site-content'

export const metadata = pageMetadata({
  title: 'Nos services de construction métallique',
  description:
    'Pergolas sur mesure, portails motorisés, charpentes et structures métalliques, couverture et bardage, tuyauterie industrielle et main-d’œuvre qualifiée à Douala.',
  path: '/services',
})

/** Lists the six services so Google can surface them individually. */
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services METCO',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.short,
      url: `${siteUrl}/services/${service.slug}`,
      provider: { '@id': `${siteUrl}/#organisation` },
      areaServed: { '@type': 'Country', name: 'Cameroun' },
    },
  })),
}

export default function ServicesPage() {
  return (
    <SitePageShell activePage="services">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Services', path: '/services' }])} />
      <JsonLd data={servicesJsonLd} />
      <PageBanner title="Des solutions métalliques conçues pour vos projets" breadcrumb="Services" />
      <RevealSection><Services showHeading={false} /></RevealSection>
    </SitePageShell>
  )
}

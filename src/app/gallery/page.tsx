import GalleryGrid from '@/components/GalleryGrid'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Galerie de nos travaux métalliques',
  description:
    'Soudure, chaudronnerie, pergolas et structures : une sélection en images des travaux réalisés par les équipes METCO.',
  path: '/gallery',
})

export default function GalleryPage() {
  return (
    <SitePageShell activePage="gallery">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Galerie', path: '/gallery' }])} />
      <PageBanner title="Notre savoir-faire en images" breadcrumb="Galerie" />
      <GalleryGrid />
    </SitePageShell>
  )
}

import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import ProjectGrid from '@/components/ProjectGrid'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Nos réalisations métalliques',
  description:
    'Pergolas, structures métalliques, portails et installations industrielles : découvrez les projets réalisés par METCO à Douala et au Cameroun.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <SitePageShell activePage="projects">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Réalisations', path: '/projects' }])} />
      <PageBanner title="Des réalisations qui donnent forme à notre savoir-faire" breadcrumb="Projets" />
      <ProjectGrid />
    </SitePageShell>
  )
}

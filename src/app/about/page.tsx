import AboutIntro from '@/components/AboutIntro'
import AboutWhy from '@/components/AboutWhy'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import PartnersBar from '@/components/PartnersBar'
import SitePageShell from '@/components/SitePageShell'
import Testimonials from '@/components/Testimonials'
import RevealSection from '@/components/RevealSection'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'À propos — notre histoire et notre savoir-faire',
  description:
    'METCO est née en 2023 à Douala de la passion de jeunes chaudronniers. Découvrez notre approche de la construction métallique, de la tuyauterie et du bardage.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <SitePageShell activePage="about">
      <JsonLd data={breadcrumbJsonLd([{ name: 'À propos', path: '/about' }])} />
      <PageBanner title="Notre histoire, notre vision, notre savoir-faire" breadcrumb="À propos" />
      <RevealSection><AboutIntro /></RevealSection>
      <RevealSection><AboutWhy /></RevealSection>
      <RevealSection><Testimonials /></RevealSection>
      <RevealSection><PartnersBar title="Ils nous font confiance" /></RevealSection>
    </SitePageShell>
  )
}

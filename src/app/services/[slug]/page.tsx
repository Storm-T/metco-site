import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import { pageMetadata, siteUrl } from '@/lib/seo'
import SitePageShell from '@/components/SitePageShell'
import { services } from '@/lib/site-content'

export const instant = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) return { title: 'Service introuvable', robots: { index: false, follow: true } }

  return pageMetadata({
    title: `${service.title} à Douala`,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  })
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  const faqItems = service.slug === 'pergola-sur-mesure'
    ? [
        ['Une pergola peut-elle être réalisée sur mesure ?', 'Oui. METCO propose des solutions adaptées aux caractéristiques et aux besoins spécifiques de chaque espace. Les dimensions et la configuration sont étudiées en fonction du projet.'],
        ['Quels espaces peuvent accueillir une pergola métallique ?', 'Une pergola peut être envisagée pour différents espaces extérieurs, selon la configuration du site et l’usage recherché.'],
        ['Puis-je demander une pergola selon un modèle particulier ?', 'Vous pouvez nous présenter votre idée, votre modèle de référence ou vos contraintes. METCO étudie votre besoin afin de définir une solution métallique adaptée.'],
        ['Comment demander un devis pour une pergola ?', 'Communiquez-nous les dimensions souhaitées, la localisation et l’usage prévu. Notre équipe pourra ensuite étudier votre besoin.'],
      ]
    : [
        [`${service.title} peut-il être réalisé sur mesure ?`, 'Oui. METCO adapte la conception aux dimensions, aux contraintes et à l’usage de votre projet.'],
        ['Quels éléments préparer pour une demande ?', 'Vous pouvez nous transmettre vos dimensions, la localisation du projet, des photos ou un plan si vous en disposez.'],
        ['Comment demander un devis ?', 'Écrivez-nous ou appelez-nous. Nous échangeons sur votre besoin et les prochaines étapes.'],
      ]

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    image: `${siteUrl}${service.image}`,
    provider: { '@id': `${siteUrl}/#organisation` },
    areaServed: { '@type': 'Country', name: 'Cameroun' },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <SitePageShell activePage="services">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.slug}` }])} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <PageBanner title={service.title} breadcrumb="Services" />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 items-start gap-8 lg:grid-cols-[285px_minmax(0,1fr)] lg:gap-12">
          <aside className="space-y-7 lg:sticky lg:top-[130px]">
            <div className="bg-[#056c8f] p-5 text-white">
              <h2 className="font-gobold mb-4 text-[20px] uppercase">Nos services</h2>
              <nav aria-label="Nos services" className="space-y-1">
                {services.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`} className={`flex min-h-[42px] items-center justify-between px-3 text-[11px] font-extrabold uppercase transition-colors ${item.slug === service.slug ? 'bg-[#011a23] text-white' : 'bg-white text-[#011a23] hover:bg-[#d9edf2]'}`}>
                    {item.title}<ChevronRight size={16} aria-hidden="true" className="shrink-0" />
                  </Link>
                ))}
              </nav>
            </div>
            <div className="bg-[#011a23] p-6 text-white">
              <p className="font-gobold text-[25px] uppercase leading-[1.05]">Votre projet mérite une solution à sa mesure.</p>
              <Link href="/contact" className="metco-btn mt-5 inline-flex items-center justify-center bg-[#056c8f] font-bold text-white">Demander un devis</Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['/assets/rectangle104.jpg', '/assets/rectangle105.jpg', '/assets/rectangle106.jpg', '/assets/rectangle107.jpg'].map((image) => (
                <div key={image} className="relative aspect-square overflow-hidden"><Image src={image} alt="Projet METCO" fill sizes="140px" className="object-cover transition-transform duration-500 hover:scale-105" /></div>
              ))}
            </div>
          </aside>

          <article className="min-w-0">
            <div className="relative mb-8 aspect-[1.55] overflow-hidden bg-[#eef2f4]">
              <Image src={service.image} alt={service.title} fill priority sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
            </div>
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#056c8f]">Une expertise adaptée à votre besoin</p>
            <h2 className="font-gobold mb-4 text-[28px] uppercase leading-tight text-[#011a23] md:text-[36px]">{service.title} à Douala</h2>
            <p className="text-[15px] leading-7 text-[#595a5c]">{service.description} Notre équipe étudie les caractéristiques de votre site, les dimensions souhaitées et l’usage de l’ouvrage afin de proposer une réalisation adaptée.</p>
            <h3 className="font-gobold mt-9 text-[22px] uppercase text-[#011a23]">Une structure conçue pour durer</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#595a5c]">De l’étude à la réalisation, nous privilégions la précision, la robustesse et la qualité d’exécution. Chaque projet est examiné selon ses propres contraintes techniques, son environnement et son calendrier.</p>

            <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ['STRUCTURE SUR MESURE', 'Conception adaptée à votre espace et à votre usage.'],
                ['ROBUSTESSE & DURABILITÉ', 'Des matériaux et une exécution pensés pour durer.'],
                ['MAÎTRISE TECHNIQUE', 'Un accompagnement clair, du besoin à la réalisation.'],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-3 bg-[#eef2f4] p-4">
                  <span className="grid size-9 shrink-0 place-items-center bg-[#056c8f] text-white" aria-hidden="true">✓</span>
                  <div><h3 className="text-[10px] font-extrabold uppercase leading-tight text-[#011a23]">{title}</h3><p className="mt-2 text-[11px] leading-4 text-[#595a5c]">{description}</p></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {['/assets/rectangle58.jpg', '/assets/rectangle59.jpg'].map((image) => (
                <div key={image} className="relative aspect-[1.3] overflow-hidden"><Image src={image} alt="Exemple de réalisation METCO" fill sizes="(max-width: 640px) 50vw, 340px" className="object-cover" /></div>
              ))}
            </div>

            <div className="mt-9 space-y-2">
              <h3 className="font-gobold mb-4 text-[22px] uppercase text-[#011a23]">Questions fréquentes</h3>
              {faqItems.map(([question, answer]) => (
                <details key={question} className="group bg-[#eef2f4]">
                  <summary className="font-gobold flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[12px] uppercase text-[#011a23] marker:hidden">{question}<span className="grid size-7 shrink-0 place-items-center bg-white text-[18px] transition-colors group-open:bg-[#056c8f] group-open:text-white" aria-hidden="true">+</span></summary>
                  <p className="px-5 pb-5 text-[14px] leading-6 text-[#595a5c]">{answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className="bg-[#eef2f4] px-5 py-16 md:min-h-[554px] md:px-8 md:py-[58px]">
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-h-[340px] overflow-hidden bg-[#011a23] md:h-[420px]">
            <Image src="/assets/rectangle77.jpg" alt="Structure métallique METCO" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011a23]/60 to-transparent" />
            <span className="absolute bottom-5 left-5 bg-[#056c8f] px-4 py-3 text-[11px] font-extrabold uppercase tracking-wide text-white">Conception adaptée</span>
          </div>
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#056c8f]">Notre approche technique</p>
            <h2 className="font-gobold mt-3 text-[28px] uppercase leading-tight text-[#011a23] md:text-[36px]">Une solution pensée autour de votre espace et de son usage</h2>
            <p className="mt-5 text-[14px] leading-7 text-[#595a5c]">Chaque projet possède ses propres contraintes. Nous adaptons la structure aux dimensions, à la configuration du site, à l’usage recherché et à l’intégration de l’ouvrage dans son environnement.</p>
            <p className="mt-4 text-[14px] leading-7 text-[#595a5c]">METCO privilégie une réalisation précise, robuste et durable, avec un accompagnement clair de l’étude jusqu’à la mise en œuvre.</p>
            <ul className="mt-6 space-y-3 text-[12px] font-extrabold uppercase text-[#011a23]">
              {['Conception adaptée à vos dimensions', 'Maîtrise de la structure métallique', 'Qualité et rigueur d’exécution'].map((point) => <li key={point} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-[#056c8f] text-white" aria-hidden="true">✓</span>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 md:min-h-[403px] md:px-8 md:py-20">
        <div className="mx-auto flex max-w-[820px] flex-col items-center justify-center text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#056c8f]">{service.title} à Douala</p>
          <h2 className="font-gobold mt-3 text-[27px] uppercase leading-tight text-[#011a23] md:text-[34px]">Une structure métallique sur mesure, durable et fonctionnelle</h2>
          <p className="mt-4 text-[14px] leading-7 text-[#595a5c]">METCO réalise des ouvrages adaptés à votre besoin et à votre environnement. Présentez-nous les dimensions souhaitées, la localisation et l’usage prévu : notre équipe pourra étudier votre projet et vous accompagner dans les prochaines étapes.</p>
          <Link href="/contact" className="metco-btn metco-btn--blue mt-6 inline-flex items-center justify-center bg-[#011a23] font-extrabold uppercase text-white">Demander un devis</Link>
        </div>
      </section>
    </SitePageShell>
  )
}

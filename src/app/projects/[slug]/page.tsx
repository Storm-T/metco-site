import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import ProjectGrid from '@/components/ProjectGrid'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata } from '@/lib/seo'
import { featuredProject, projects } from '@/lib/site-content'

export const instant = false

export function generateStaticParams() {
  return [...projects.map((project) => ({ slug: project.slug })), { slug: featuredProject.slug }]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug) ?? (slug === featuredProject.slug ? featuredProject : undefined)
  if (!project) return { title: 'Réalisation introuvable', robots: { index: false, follow: true } }

  return pageMetadata({
    title: `${project.title} — réalisation METCO`,
    description: `Découvrez le projet ${project.title}, réalisé avec l’expertise METCO en ${project.category.toLowerCase()} à Douala.`,
    path: `/projects/${project.slug}`,
    image: project.image,
  })
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug) ?? (slug === featuredProject.slug ? featuredProject : undefined)
  if (!project) notFound()
  const isPergola = slug === featuredProject.slug

  return (
    <SitePageShell activePage="projects">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Réalisations', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }])} />
      <PageBanner title={project.title} breadcrumb={`Projets / ${project.title}`} />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-12">
          <article>
            <div className="relative aspect-[1.55] overflow-hidden bg-[#eef2f4]">
              <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 pb-5 text-[11px] font-bold uppercase tracking-wide text-[#66747a]">
              <span>Réalisation METCO</span><span className="text-[#056c8f]">{project.category}</span><span>Douala, Cameroun</span>
            </div>
            <h2 className="font-gobold mt-7 text-[30px] uppercase leading-tight text-[#011a23] md:text-[38px]">{project.title}</h2>
            {isPergola ? (
              <>
                <h3 className="font-gobold mt-8 text-[22px] uppercase text-[#056c8f]">Une solution métallique pensée autour de l’espace et de son usage.</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">La réalisation de cette pergola répond à un besoin de création d’un espace extérieur à la fois fonctionnel, durable et esthétique. METCO a conçu une structure adaptée aux caractéristiques du site et aux besoins du projet, en s’appuyant sur son savoir-faire en construction métallique. L’approche privilégie une réalisation précise, robuste et intégrée à son environnement.</p>
                <h3 className="font-gobold mt-8 text-[22px] uppercase text-[#056c8f]">Une pergola conçue autour des besoins du projet</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">Chaque espace extérieur possède ses propres contraintes. Dimensions, configuration du site, usage recherché et intégration à l’environnement sont autant d’éléments à prendre en compte lors de la conception d’une structure métallique.</p>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">Pour ce projet, METCO a privilégié une approche sur mesure afin de proposer une pergola adaptée à l’espace disponible et à son utilisation. De la préparation de la structure à sa réalisation, l’objectif est de garantir un ouvrage à la fois fonctionnel, robuste et durable.</p>
                <h3 className="font-gobold mt-8 text-[25px] uppercase text-[#011a23]">Les enjeux du projet</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">La conception d’une pergola sur mesure nécessite de trouver le juste équilibre entre configuration de l’espace, fonctionnalité, robustesse et intégration esthétique.</p>
              </>
            ) : (
              <>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">Ce projet illustre l’approche METCO : comprendre les contraintes de l’ouvrage, définir une solution métallique adaptée et réaliser un travail précis, robuste et durable.</p>
                <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">Chaque étape s’appuie sur un échange avec le client et une attention portée à la qualité d’exécution, à la sécurité et à l’intégration de l’ouvrage dans son environnement.</p>
              </>
            )}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {['/assets/rectangle58.jpg', '/assets/rectangle61.jpg'].map((image) => <div key={image} className="relative aspect-[1.35] overflow-hidden"><Image src={image} alt="Détail de réalisation métallique" fill sizes="(max-width: 640px) 50vw, 340px" className="object-cover" /></div>)}
            </div>
          </article>
          <aside className="h-fit bg-[#eef2f4] p-6 lg:sticky lg:top-[130px]">
            <h2 className="font-gobold text-[21px] uppercase text-[#011a23]">Détails du projet</h2>
            <dl className="mt-5 divide-y divide-slate-300 text-[13px]">
              <div className="flex justify-between gap-3 py-3"><dt className="font-bold text-[#011a23]">Service</dt><dd className="text-right text-[#595a5c]">{project.category}</dd></div>
              <div className="flex justify-between gap-3 py-3"><dt className="font-bold text-[#011a23]">Type de structure</dt><dd className="text-right text-[#595a5c]">{isPergola ? 'Pergola métallique' : 'Structure métallique'}</dd></div>
              <div className="flex justify-between gap-3 py-3"><dt className="font-bold text-[#011a23]">Client</dt><dd className="text-right text-[#595a5c]">{isPergola ? 'Harold' : 'METCO'}</dd></div>
              <div className="flex justify-between gap-3 py-3"><dt className="font-bold text-[#011a23]">Localisation</dt><dd className="text-right text-[#595a5c]">Douala, Cameroun</dd></div>
            </dl>
            <Link href="/contact" className="metco-btn mt-5 flex items-center justify-center bg-[#056c8f] font-extrabold uppercase text-white">Parler d’un projet similaire</Link>
          </aside>
        </div>
      </section>
      <section className="bg-white px-5 py-12 md:min-h-[268px] md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-1"><p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#056c8f]">Notre engagement</p><h2 className="font-gobold mt-3 text-[25px] uppercase leading-tight text-[#011a23]">Un ouvrage pensé pour durer</h2></div>
          {['Étude adaptée au site', 'Exécution précise et rigoureuse'].map((item) => <div key={item} className="flex items-center gap-4 border-l-2 border-[#056c8f] pl-5"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eef2f4] text-[#056c8f]" aria-hidden="true">✓</span><p className="text-[12px] font-extrabold uppercase text-[#011a23]">{item}</p></div>)}
        </div>
      </section>
      <section className="bg-[#eef2f4] px-5 py-14 md:px-8 md:py-16"><div className="mx-auto max-w-[1024px]"><h2 className="font-gobold mb-8 text-[28px] uppercase text-[#011a23]">Autres réalisations</h2><ProjectGrid compact /></div></section>
    </SitePageShell>
  )
}

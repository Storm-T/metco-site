import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import ArticleCommentForm from '@/components/ArticleCommentForm'
import ArticleComments from '@/components/ArticleComments'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata, siteUrl } from '@/lib/seo'
import { articles } from '@/lib/site-content'

const MOIS: Record<string, string> = {
  JANV: '01', FEVR: '02', MARS: '03', AVRIL: '04', MAI: '05', JUIN: '06',
  JUIL: '07', AOUT: '08', SEPT: '09', OCT: '10', NOV: '11', DEC: '12',
}

/** Turns the card's split date ("20" / "SEPT" / "2026") into a machine-readable one. */
function isoDate(article: (typeof articles)[number]) {
  const mois = MOIS[article.month.toUpperCase()] ?? '01'
  return `${article.year}-${mois}-${String(article.date).padStart(2, '0')}`
}

export const instant = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  if (!article) return { title: 'Article introuvable', robots: { index: false, follow: true } }

  return pageMetadata({
    title: article.title,
    description: `${article.title} — conseils et repères techniques par METCO, spécialiste de la construction métallique à Douala.`,
    path: `/blog/${article.slug}`,
    image: article.image,
    type: 'article',
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  if (!article) notFound()

  const published = isoDate(article)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    datePublished: published,
    dateModified: published,
    image: `${siteUrl}${article.image}`,
    articleSection: article.category,
    url: `${siteUrl}/blog/${article.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${article.slug}` },
    author: { '@id': `${siteUrl}/#organisation` },
    publisher: { '@id': `${siteUrl}/#organisation` },
  }

  return (
    <SitePageShell activePage="blog">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }, { name: article.title, path: `/blog/${article.slug}` }])} />
      <JsonLd data={articleJsonLd} />
      <PageBanner title={article.title} breadcrumb={`Blog / ${article.title}`} />
      <section className="px-5 pb-0 pt-14 md:px-8 md:pb-0 md:pt-[121px]">
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_270px]">
          <article>
            <div className="relative aspect-[1.75] overflow-hidden bg-[#eef2f4]">
              <Image src={article.image} alt={article.title} fill priority sizes="(max-width: 1024px) 100vw, 730px" className="object-cover" />
              <time dateTime={published} className="absolute bottom-0 left-0 flex">
                <span className="grid size-12 place-items-center bg-[#056c8f] text-[22px] font-bold text-white">{article.date}</span>
                <span className="flex h-12 w-[54px] flex-col items-center justify-center bg-[#011a23] text-[10px] font-bold leading-tight text-white"><span>{article.month}</span><span>{article.year}</span></span>
              </time>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 border-b border-slate-200 pb-4 text-[11px] font-extrabold uppercase tracking-wide text-[#66747a]"><span>Par METCO</span><span className="text-[#056c8f]">{article.category}</span><span>Actualités & conseils</span></div>
            <h2 className="font-gobold mt-6 text-[29px] uppercase leading-tight text-[#011a23] md:text-[36px]">{article.title}</h2>
            <p className="mt-5 text-[15px] leading-7 text-[#595a5c]">La réussite d’un ouvrage métallique commence par une bonne compréhension du besoin. Chaque projet demande une étude de son environnement, de ses contraintes techniques et de l’usage attendu.</p>
            <h3 className="font-gobold mt-8 text-[22px] uppercase text-[#011a23]">De l’étude à la réalisation</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#595a5c]">Chez METCO, nous accompagnons les projets de construction métallique, de chaudronnerie et de tuyauterie industrielle avec une approche attentive à la précision, à la sécurité et à la durabilité. Les choix de conception et d’exécution sont adaptés à chaque ouvrage.</p>
            <p className="mt-4 text-[15px] leading-7 text-[#595a5c]">L’échange avec le client, la préparation technique et le suivi de fabrication permettent d’orienter le projet vers une solution fiable. Nos équipes restent disponibles pour étudier vos plans, vos dimensions ou vos premières idées.</p>
            <div className="mt-8 border-l-4 border-[#056c8f] bg-[#eef2f4] p-6 text-[16px] font-semibold leading-7 text-[#011a23]">Un projet réussi associe une conception adaptée, une exécution rigoureuse et une attention constante à l’usage de l’ouvrage.</div>
            <p className="mt-6 text-[15px] leading-7 text-[#595a5c]">Vous préparez un projet ? <Link href="/contact" className="font-bold text-[#056c8f] underline decoration-[#056c8f]/40 underline-offset-4 hover:text-[#011a23]">Parlez-en avec notre équipe.</Link></p>
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h3 className="font-gobold text-[22px] uppercase text-[#011a23]">Laisser un commentaire</h3>
              <p className="mt-2 text-[13px] text-[#69777d]">Une question sur cet article ? Envoyez-la à METCO.</p>
              <a href={`mailto:contact@metco237.com?subject=${encodeURIComponent(`Commentaire — ${article.title}`)}`} className="metco-btn mt-5 inline-flex items-center justify-center bg-[#056c8f] font-extrabold uppercase text-white">Écrire à METCO</a>
            </div>
          </article>
          <aside className="space-y-7 lg:sticky lg:top-[130px]">
            <div className="bg-[#eef2f4] p-6">
              <h3 className="font-gobold text-[20px] uppercase text-[#011a23]">Derniers articles</h3>
              <div className="mt-5 space-y-4">
                {articles.filter((item) => item.slug !== article.slug).map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex gap-3 border-b border-slate-300 pb-4 last:border-0 last:pb-0">
                    <span className="relative block size-[72px] shrink-0 overflow-hidden"><Image src={item.image} alt="" fill sizes="72px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></span>
                    <span className="font-gobold text-[12px] uppercase leading-[1.35] text-[#011a23] transition-colors group-hover:text-[#056c8f]">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-[#011a23] p-6 text-white"><p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#54bad5]">À votre écoute</p><p className="font-gobold mt-3 text-[24px] uppercase leading-tight">Besoin d’un accompagnement technique ?</p><Link href="/contact" className="metco-btn mt-5 inline-flex items-center justify-center bg-[#056c8f] font-bold text-white">Nous contacter</Link></div>
          </aside>
        </div>
      </section>
      <ArticleComments title={article.title} />
      <ArticleCommentForm title={article.title} />
    </SitePageShell>
  )
}

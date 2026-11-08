'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, ChevronRight, Search } from 'lucide-react'
import { articles } from '@/lib/site-content'

export default function BlogArchive() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tout')
  const visibleArticles = useMemo(() => articles.filter((article) => {
    const matchesQuery = article.title.toLocaleLowerCase('fr').includes(query.trim().toLocaleLowerCase('fr'))
    const matchesCategory = activeCategory === 'Tout' || article.category === activeCategory
    return matchesQuery && matchesCategory
  }), [activeCategory, query])

  return (
    <section className="px-5 py-16 md:px-8 md:py-[97px]">
      <div className="mx-auto grid max-w-[1024px] grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {visibleArticles.map((article) => (
              <article key={article.slug} className="group bg-white">
                <Link href={`/blog/${article.slug}`} aria-hidden="true" tabIndex={-1} className="relative block aspect-[1.18] overflow-hidden bg-[#eef2f4]">
                  <Image src={article.image} alt={article.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 330px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 flex">
                    <span className="grid size-11 place-items-center bg-[#056c8f] text-[20px] font-bold text-white">{article.date}</span>
                    <span className="flex h-11 w-[50px] flex-col items-center justify-center bg-[#011a23] text-[9px] font-bold leading-tight text-white"><span>{article.month}</span><span>{article.year}</span></span>
                  </div>
                </Link>
                <div className="border border-t-0 border-slate-100 p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#056c8f]">{article.category}</p>
                  <h2 className="font-gobold mt-2 min-h-[52px] text-[17px] uppercase leading-tight text-[#011a23]"><Link href={`/blog/${article.slug}`} className="transition-colors hover:text-[#056c8f]">{article.title}</Link></h2>
                  <p className="mt-3 text-[12px] leading-5 text-[#66747a]">Un projet métallique se prépare avec une étude adaptée, des choix techniques rigoureux et une réalisation de qualité.</p>
                  <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase text-[#011a23] transition-colors hover:text-[#056c8f]">Lire l’article <ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
          {visibleArticles.length === 0 && <p className="col-span-full bg-[#eef2f4] p-8 text-center text-[14px] text-[#595a5c]">Aucun article ne correspond à votre recherche.</p>}
          <nav aria-label="Pagination du blog" className="mt-9 flex justify-center gap-2">
            <span className="grid size-10 place-items-center bg-[#056c8f] text-[12px] font-bold text-white" aria-current="page">1</span>
            <span className="grid size-10 place-items-center bg-[#eef2f4] text-[12px] font-bold text-[#011a23]">2</span>
            <span className="grid size-10 place-items-center bg-[#eef2f4] text-[12px] font-bold text-[#011a23]">3</span>
          </nav>
        </div>

        <aside className="space-y-7 lg:sticky lg:top-[130px]">
          <form onSubmit={(event) => event.preventDefault()} className="flex bg-[#eef2f4] p-2">
            <label className="sr-only" htmlFor="blog-search">Rechercher un article</label>
            <input id="blog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher..." className="h-11 min-w-0 flex-1 bg-white px-3 text-[12px] outline-none focus:ring-1 focus:ring-[#056c8f]" />
            <button type="submit" aria-label="Rechercher" className="metco-btn metco-btn--compact grid size-11 shrink-0 place-items-center bg-[#056c8f] text-white"><Search size={18} aria-hidden="true" /></button>
          </form>
          <div className="bg-[#eef2f4] p-6">
            <h2 className="font-gobold text-[19px] uppercase text-[#011a23]">Actualités récentes</h2>
            <div className="mt-5 space-y-4">
              {articles.slice(0, 3).map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex gap-3 border-b border-slate-300 pb-4 last:border-0 last:pb-0">
                  <span className="relative block size-[68px] shrink-0 overflow-hidden"><Image src={article.image} alt="" fill sizes="68px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></span>
                  <span className="font-gobold text-[11px] uppercase leading-[1.35] text-[#011a23] transition-colors group-hover:text-[#056c8f]">{article.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-[#eef2f4] p-6">
            <h2 className="font-gobold text-[19px] uppercase text-[#011a23]">Catégories</h2>
            <ul className="mt-4 space-y-3 text-[12px] font-bold text-[#595a5c]">
              {['Tout', ...new Set(articles.map((article) => article.category))].map((category) => <li key={category} className="border-b border-slate-300 pb-3 last:border-0"><button type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className={`flex w-full items-center justify-between text-left transition-colors hover:text-[#056c8f] ${activeCategory === category ? 'text-[#056c8f]' : ''}`}>{category}<ChevronRight size={16} aria-hidden="true" /></button></li>)}
            </ul>
          </div>
          <div className="bg-[#eef2f4] p-6">
            <h2 className="font-gobold text-[19px] uppercase text-[#011a23]">Tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">{['Métal', 'Chantier', 'Industrie', 'Pergola', 'Soudure'].map((tag) => <button key={tag} type="button" onClick={() => setQuery(tag)} className="metco-btn metco-btn--blue metco-btn--compact bg-white px-3 py-2 text-[10px] font-bold uppercase text-[#595a5c] hover:text-white">{tag}</button>)}</div>
          </div>
          <div className="bg-[#011a23] p-6 text-white"><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#54bad5]">Un projet ?</p><p className="font-gobold mt-3 text-[22px] uppercase leading-tight">Parlons de vos besoins techniques.</p><Link href="/contact" className="metco-btn mt-5 inline-flex items-center justify-center bg-[#056c8f] font-extrabold uppercase text-white">Nous contacter</Link></div>
        </aside>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import SitePageShell from '@/components/SitePageShell'

export const metadata: Metadata = {
  title: 'Page introuvable',
  description: "La page demandée n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
}

const suggestions = [
  { label: 'Nos services', href: '/services' },
  { label: 'Nos réalisations', href: '/projects' },
  { label: 'À propos de METCO', href: '/about' },
  { label: 'Nous contacter', href: '/contact' },
]

export default function NotFound() {
  return (
    <SitePageShell activePage="home">
      <section className="px-5 py-24 text-center md:px-8 md:py-32">
        <div className="mx-auto max-w-[640px]">
          <p className="mb-4 text-[16px] font-bold uppercase leading-[25px] text-[#056c8f]">Erreur 404</p>
          <h1 className="font-gobold mb-6 text-[clamp(2rem,5vw,3rem)] uppercase leading-[1.2] text-[#011a23]">
            Cette page est introuvable
          </h1>
          <p className="mb-10 text-[16px] leading-[25px] text-[#595a5c]">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. Reprenez depuis l&apos;une de ces sections.
          </p>

          <nav aria-label="Suggestions de navigation" className="mb-10 flex flex-wrap justify-center gap-3">
            {suggestions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-[#eef2f4] px-5 py-3 text-[12px] font-extrabold uppercase tracking-wide text-[#011a23] transition-colors duration-200 hover:bg-[#d8e8ef] hover:text-[#056c8f]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="metco-btn metco-btn--blue inline-flex items-center justify-center bg-[#056c8f] font-medium text-white">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </SitePageShell>
  )
}

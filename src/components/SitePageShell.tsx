import { Children, type ReactNode } from 'react'
import Footer from '@/components/Footer'
import RevealSection from '@/components/RevealSection'
import SiteHeader from '@/components/SiteHeader'

type PageKey = 'home' | 'about' | 'services' | 'projects' | 'gallery' | 'blog' | 'contact'

export default function SitePageShell({ activePage, children }: { activePage: PageKey; children: ReactNode }) {
  return (
    <>
      <SiteHeader activePage={activePage} />
      <main className="min-h-screen overflow-x-clip bg-white">
        {Children.toArray(children).map((child, index) => <RevealSection key={index}>{child}</RevealSection>)}
      </main>
      <Footer />
    </>
  )
}

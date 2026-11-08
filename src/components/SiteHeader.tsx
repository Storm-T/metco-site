'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Clock, Mail, Menu, Phone, Plus, X } from 'lucide-react'
import { services } from '@/lib/site-content'

const serviceLinks = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}))

/** Brand marks stay as SVG files: Lucide carries no trademarked logos. */
const socialLinks = [
  { label: 'Facebook', icon: '/assets/vector.svg' },
  { label: 'Instagram', icon: '/assets/group.svg' },
  { label: 'TikTok', icon: '/assets/vector1.svg' },
]

const navLinks = [
  { label: 'Accueil', href: '/', key: 'home' },
  { label: 'A propos', href: '/about', key: 'about' },
  { label: 'Services', href: '/services', key: 'services' },
  { label: 'Réalisations', href: '/projects', key: 'projects' },
  { label: 'Galerie', href: '/gallery', key: 'gallery' },
  { label: 'Blog', href: '/blog', key: 'blog' },
] as const

type PageKey = (typeof navLinks)[number]['key'] | 'contact'

const navLinkClass = (isActive: boolean) =>
  `nav-link relative py-3 text-[15px] font-semibold uppercase transition-colors hover:text-[#056c8f] ${isActive ? 'text-[#056c8f]' : 'text-[#595a5c]'}`

const NavLinks = ({ activePage, onClick }: { activePage: PageKey; onClick?: () => void }) => (
  <>
    {navLinks.map((link) => {
      const topLink = (
        <Link
          href={link.href}
          aria-current={activePage === link.key ? 'page' : undefined}
          onClick={onClick}
          className={navLinkClass(activePage === link.key)}
        >
          {link.label}
        </Link>
      )

      if (link.key !== 'services') return <span key={link.key}>{topLink}</span>

      return (
        <div key={link.key} className="has-dropdown relative">
          {topLink}
          <ul className="menu-dropdown">
            {serviceLinks.map((service) => (
              <li key={service.href} className="menu-dropdown__item">
                <Link href={service.href} onClick={onClick} className="menu-dropdown__link">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    })}
  </>
)

export default function SiteHeader({ activePage }: { activePage: PageKey }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  /** The bar has left the flow and is pinned to the top. */
  const [pinned, setPinned] = useState(false)
  /** Set one frame after pinning, so the bar has a position to slide down from. */
  const [slidIn, setSlidIn] = useState(false)
  const [barHeight, setBarHeight] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!pinned) {
      setSlidIn(false)
      return
    }
    const frame = requestAnimationFrame(() => setSlidIn(true))
    return () => cancelAnimationFrame(frame)
  }, [pinned])

  // The spacer has to hold the bar's exact place, or the page jumps when it pins.
  useEffect(() => {
    const row = barRef.current
    if (!row) return
    const observer = new ResizeObserver(() => {
      // The bar's border sits outside the measured row, so add it back.
      const bar = row.parentElement
      const border = bar ? bar.offsetHeight - bar.clientHeight : 0
      setBarHeight(row.offsetHeight + border)
    })
    observer.observe(row)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ─── Original header (in document flow) ──────────────────────────────── */}
      <header className="relative z-40 w-full">
        {/* Top bar */}
        <div className="bg-[#011a23] text-white">
          <div className="mx-auto flex min-h-[42px] max-w-[1280px] items-center justify-between gap-4 px-5 text-[11px] sm:min-h-[62px] md:px-16 md:text-[12px]">
            <div className="flex items-center gap-4 md:gap-7">
              <a className="flex items-center gap-2 transition-colors hover:text-[#34a5c7]" href="mailto:contact@metco237.com">
                <Mail size={14} aria-hidden="true" /> contact@metco237.com
              </a>
              <a className="hidden items-center gap-2 transition-colors hover:text-[#34a5c7] sm:flex" href="tel:+237699632236">
                <Phone size={14} aria-hidden="true" /> +237 699 632 236
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/85">
              <span className="hidden items-center gap-2 sm:flex"><Clock size={14} aria-hidden="true" /> 8:30am - 5:30pm</span>
              {socialLinks.map((social) => (
                <Link key={social.label} href="#" aria-label={social.label} className="transition-opacity hover:opacity-100 opacity-80">
                  <Image src={social.icon} alt="" width={14} height={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Holds the bar's place in the flow once it pins to the top */}
        {pinned && <div aria-hidden="true" style={{ height: barHeight }} />}

        {/* Main nav — the only one; it pins itself instead of being cloned */}
        <div
          className={`border-b border-slate-100 bg-white/95 backdrop-blur-md ${
            pinned
              ? `fixed left-0 right-0 top-0 z-50 shadow-md transition-transform duration-500 ease-in-out ${slidIn ? 'translate-y-0' : '-translate-y-full'}`
              : 'relative shadow-sm'
          }`}
        >
          <div ref={barRef} className="mx-auto flex min-h-[76px] max-w-[1280px] items-center justify-between gap-5 px-5 md:min-h-[93px] md:px-16">
            <Link href="/" aria-label="METCO, accueil" className="shrink-0">
              <Image src="/assets/image1.png" alt="METCO" width={130} height={52} sizes="130px" className="h-[46px] w-[116px] object-contain md:h-[52px] md:w-[130px]" />
            </Link>
            <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex xl:gap-7">
              <NavLinks activePage={activePage} />
            </nav>
            <Link href="/contact" className="metco-btn hidden shrink-0 items-center justify-center bg-[#056c8f] font-bold text-white lg:inline-flex">
              Demander un devis
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center text-[#011a23] transition-colors hover:text-[#056c8f] lg:hidden"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {mobileOpen && (
            <nav id="mobile-navigation" aria-label="Navigation mobile" className="mobile-navigation border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden">
              <div className="mx-auto flex max-w-[1280px] flex-col">
                {navLinks.map((link) => {
                  const rowClass = `py-3 text-[15px] font-semibold uppercase transition-colors hover:text-[#056c8f] ${activePage === link.key ? 'text-[#056c8f]' : 'text-[#595a5c]'}`

                  if (link.key !== 'services') {
                    return (
                      <Link
                        key={link.key}
                        href={link.href}
                        aria-current={activePage === link.key ? 'page' : undefined}
                        className={`border-b border-slate-100 ${rowClass}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  }

                  return (
                    <div key={link.key} className="border-b border-slate-100">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          aria-current={activePage === link.key ? 'page' : undefined}
                          className={rowClass}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services"
                          aria-label={mobileServicesOpen ? 'Masquer les services' : 'Afficher les services'}
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          className="grid size-9 place-items-center text-[#595a5c] transition-colors hover:text-[#056c8f]"
                        >
                          <Plus size={18} aria-hidden="true" className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-45' : ''}`} />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <ul id="mobile-services" className="mb-3 flex flex-col gap-2 border-l-2 border-[#056c8f]/30 pl-4">
                          {serviceLinks.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className="block text-[13px] font-semibold uppercase leading-[1.3] text-[#595a5c] transition-colors hover:text-[#056c8f]"
                                onClick={() => setMobileOpen(false)}
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
                <Link href="/contact" className="metco-btn mt-4 flex items-center justify-center bg-[#056c8f] font-bold text-white" onClick={() => setMobileOpen(false)}>
                  Demander un devis
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

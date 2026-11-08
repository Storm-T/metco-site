import Image from 'next/image'
import Link from 'next/link'
import { Globe, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Pergolas', href: '/services/pergola-sur-mesure' },
  { label: 'Portails motorisés', href: '/services/portails-motorises' },
  { label: 'Réalisations', href: '/projects' },
  { label: 'Construction métallique', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const galleryImages = [
  '/assets/rectangle104.jpg',
  '/assets/rectangle105.jpg',
  '/assets/rectangle106.jpg',
  '/assets/rectangle107.jpg',
  '/assets/rectangle108.jpg',
  '/assets/rectangle109.jpg',
  '/assets/rectangle110.jpg',
  '/assets/rectangle111.jpg',
  '/assets/rectangle112.jpg',
]

const socials = [
  { src: '/assets/vector.svg', alt: 'Facebook', size: 20 },
  { src: '/assets/group.svg', alt: 'Instagram', size: 20 },
  { src: '/assets/vector1.svg', alt: 'TikTok', size: 20 },
]

const contacts = [
  { Icon: Phone, label: 'Téléphone', lines: ['+237 699 632 236', '+237 699 632 236'] },
  { Icon: Globe, label: 'Web', lines: ['metco237.com', 'contact@metco237.com'] },
  { Icon: MapPin, label: 'Adresse', lines: ['PK 11, Douala', 'Cameroun'] },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#011a23] text-white">
      {/* Vertical rule between the brand block and the widgets */}
      <div aria-hidden="true" className="absolute left-[33.52%] top-0 hidden h-[475px] w-px bg-white/10 lg:block" />

      <div className="mx-auto max-w-[1152px] px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 pt-16 sm:grid-cols-2 lg:grid-cols-[355px_227px_275px_167px] lg:gap-0 lg:pt-[125px]">
          {/* Brand */}
          <div>
            <Image src="/assets/image8.png" alt="METCO" width={213} height={91} className="h-auto w-[180px] object-contain lg:w-[213px]" />
            <p className="mt-[25px] max-w-[267px] text-[12px] font-medium leading-[18px] text-[#eef2f4]/40">
              Nous accompagnons les projets de construction métallique, de chaudronnerie et de tuyauterie industrielle avec des solutions pensées pour répondre aux exigences techniques de chaque ouvrage.
            </p>
            <div className="mt-[15px] flex gap-[18px]">
              {socials.map((social) => (
                <Link
                  key={social.alt}
                  href="#"
                  aria-label={social.alt}
                  className="footer-icon-wrap grid h-[37px] w-[37px] place-items-center rounded-full"
                >
                  <Image src={social.src} alt="" width={social.size} height={social.size} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:pt-[25px]">
            <h2 className="font-outfit mb-6 text-[16px] font-bold uppercase text-white">Liens rapides</h2>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link inline-block text-[16px] leading-[24px] text-[#eef2f4]/40">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:pt-[25px]">
            <h2 className="font-outfit mb-6 text-[16px] font-bold uppercase text-white">Contacts</h2>
            <ul className="flex flex-col gap-[22px]">
              {contacts.map((contact) => (
                <li key={contact.label} className="footer-contact flex items-center gap-[10px]">
                  <span aria-hidden="true" className="footer-icon-wrap grid h-[37px] w-[37px] shrink-0 place-items-center rounded-full text-white">
                    <contact.Icon size={18} />
                  </span>
                  <span className="text-[16px] leading-[20px] text-[#eef2f4]/40">
                    {contact.lines.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div id="galerie" className="lg:pt-[25px]">
            <h2 className="font-outfit mb-6 text-[16px] font-bold uppercase text-white">Gallery</h2>
            <div className="grid max-w-[167px] grid-cols-3 gap-[10px]">
              {galleryImages.map((image) => (
                <Link
                  key={image}
                  href="/gallery"
                  aria-label="Voir la galerie"
                  className="footer-gallery-item relative block aspect-square overflow-hidden"
                >
                  <Image src={image} alt="" fill sizes="49px" className="object-cover" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 h-px w-full bg-white/10 lg:mt-[93px]" />
      <p className="py-8 text-center text-[16px] font-semibold leading-[24px] text-[#eef2f4]/40 lg:py-[38px]">
        Copyright 2026 METCO. Powered by Harmonic Design
      </p>
    </footer>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-10">

          {/* LEFT: Text */}
          <div className="flex flex-col">
            <p className="mb-3 text-[13px] font-bold uppercase text-[#056c8f] sm:text-[14px]">
              À PROPOS DE METCO
            </p>

            <h2 className="font-gobold mb-5 text-[clamp(1.875rem,3.6vw,2.75rem)] uppercase leading-[1.1] text-[#011a23]">
              Une nouvelle génération d&apos;acteurs de la construction métallique
            </h2>

            <div className="text-justify text-[14px] leading-[1.75] text-[#595a5c] sm:text-[15px]">
              <p>
                METCO — Métallic Constructions est une entreprise créée en 2023 à l&apos;initiative de jeunes passionnés issus de la filière chaudronnerie.
              </p>
              <p>
                Née d&apos;une volonté de faire évoluer les pratiques du secteur du bâtiment et des travaux publics, METCO développe une approche fondée sur la maîtrise technique, la rigueur et la recherche de performance.
              </p>
              <p>
                Notre ambition est d&apos;adapter les méthodes modernes du génie civil aux réalités de notre environnement afin de proposer des solutions métalliques robustes, précises et fiables.
              </p>
            </div>

            <div className="my-6 h-px bg-gray-200 sm:my-7" />

            {/* Contacts */}
            <div className="mb-8 flex flex-wrap items-center gap-y-5 sm:mb-10">
              <div className="flex items-center gap-3 pr-6 sm:pr-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#011a23] text-white">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase text-[#011a23] sm:text-[13px]">LOCALISATION</p>
                  <p className="text-[16px] font-bold text-[#056c8f] sm:text-[17px]">PK11, Douala</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-gray-200 sm:border-l sm:pl-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#011a23] text-white">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase text-[#011a23] sm:text-[13px]">CONTACTS</p>
                  <a href="tel:+237699632236" className="text-[16px] font-bold text-[#056c8f] sm:text-[17px]">+237 699 632 236</a>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="metco-btn metco-btn--blue inline-flex items-center justify-center self-start bg-[#011a23] font-medium text-white"
            >
              Découvrir METCO
            </Link>
          </div>

          {/* RIGHT: tall main image + framed secondary in bottom-left corner */}
          <div className="relative mx-auto aspect-[300/425] w-full max-w-[460px] lg:mx-0 lg:max-w-none">
            <Image
              src="/assets/rectangle4.jpg"
              alt="Soudeur METCO sur structure métallique"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 aspect-square w-[62%] border-[8px] border-white sm:border-[10px]">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/rectangle72.jpg"
                  alt="Structure métallique METCO"
                  fill
                  sizes="(max-width: 1023px) 60vw, 28vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

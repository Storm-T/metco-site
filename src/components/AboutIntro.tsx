import Image from 'next/image'
import Link from 'next/link'
import { CircleCheck, Cog, TrendingUp } from 'lucide-react'

const strengths = [
  { label: 'Maîtrise technique', Icon: Cog },
  { label: 'Approche orientée performance', Icon: TrendingUp },
]

const checklist = ['Solutions adaptées', "Rigueur d'exécution", 'Vision durable']

export default function AboutIntro() {
  return (
    <section id="about-intro" className="overflow-hidden px-5 py-16 sm:px-8 lg:px-0 lg:py-[70px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:w-[1152px] lg:grid-cols-[572px_532px] lg:gap-x-12">
          {/* Image collage */}
          <div data-reveal="slide-left" data-reveal-delay="700" className="relative mx-auto w-full max-w-[572px] lg:mx-0 lg:h-[800px] lg:max-w-none">
            <div aria-hidden="true" className="absolute left-[96px] top-0 hidden h-[401px] w-[268px] border-[15px] border-[#056c8f] lg:block" />

            <div className="relative aspect-[444/569] w-full lg:absolute lg:left-[128px] lg:top-[25px] lg:h-[569px] lg:w-[444px]">
              <Image src="/assets/about-intro-main.jpg" alt="Soudeur METCO sur une structure métallique" fill sizes="(max-width: 1024px) 100vw, 444px" className="object-cover" />
            </div>

            <div className="relative mt-6 aspect-[426/323] w-full lg:absolute lg:left-0 lg:top-[477px] lg:mt-0 lg:h-[323px] lg:w-[426px]">
              <Image src="/assets/about-intro-bottom.jpg" alt="Atelier METCO en cours de fabrication" fill sizes="(max-width: 1024px) 100vw, 426px" className="object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 flex h-[120px] w-[190px] flex-col items-center justify-center bg-[#056c8f] text-white lg:left-[338px] lg:right-auto lg:top-[623px] lg:h-[149px] lg:w-[234px]">
              <span className="font-gobold text-[56px] leading-[70px] lg:text-[80px] lg:leading-[80px]">+07</span>
              <span className="text-[13px] font-semibold leading-[30px] lg:text-[16px]">ANNEES D&apos;EXPERIENCE</span>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:pt-[22px]">
            <p data-reveal="fade-up" data-reveal-duration="1500" className="mb-[13px] text-[16px] font-bold uppercase leading-[25px] text-[#056c8f]">À propos de METCO</p>

            <h2 data-reveal="fade-up" data-reveal-duration="1500" className="font-gobold mb-[33px] text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23]">
              Une expertise née de la passion du métal et de la construction
            </h2>

            <div data-reveal="fade-up" data-reveal-duration="1500" className="space-y-0 text-justify text-[16px] leading-[25px] text-[#595a5c]">
              <p>METCO — Métallic Constructions est une entreprise créée en 2023 à l&apos;initiative de jeunes passionnés issus de la filière chaudronnerie.</p>
              <p>Née d&apos;une volonté de faire évoluer les pratiques du secteur du bâtiment et des travaux publics, METCO développe une approche fondée sur la maîtrise technique, la rigueur et la recherche de performance.</p>
              <p>Notre ambition est d&apos;adapter les méthodes modernes du génie civil aux réalités de notre environnement afin de proposer des solutions métalliques robustes, précises et fiables.</p>
            </div>

            {/* Experience bar */}
            <div data-reveal="slide-up" data-reveal-delay="700" className="mt-8 lg:mt-[33px]">
              <p className="mb-[9px] text-[16px] font-bold uppercase leading-[20px] text-[#011a23]">Maîtrise des métiers du métal</p>
              <div className="relative h-[7px] w-full bg-[#d9d9d9]">
                <div className="exp-bar__fill absolute left-0 top-0 h-full bg-[#056c8f]" data-bar-to="90" style={{ width: '90%' }}>
                  <span
                    data-bar-label="%"
                    className="absolute bottom-[calc(100%+5px)] right-0 translate-x-1/2 text-[16px] leading-[25px] text-[#595a5c]"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div data-reveal="slide-up" data-reveal-delay="700" className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[23px] lg:grid-cols-[241px_1fr] lg:gap-x-0">
              {strengths.map((item) => (
                <div key={item.label} className="flex items-center gap-[18px]">
                  <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-[#eef2f4] text-[#056c8f]">
                    <item.Icon size={32} aria-hidden="true" />
                  </span>
                  <span className="text-[16px] font-bold uppercase leading-[20px] text-[#011a23]">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul data-reveal="fade-up" data-reveal-delay="700" className="mt-7 space-y-0 lg:mt-[32px]">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CircleCheck size={20} aria-hidden="true" className="shrink-0 text-[#056c8f]" />
                  <span className="text-[16px] leading-[30px] text-black">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/services" data-reveal="fade-up" data-reveal-delay="700" className="metco-btn metco-btn--blue mt-8 inline-flex w-full items-center justify-center bg-[#011a23] font-medium text-white sm:w-[247px] lg:mt-[31px]">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

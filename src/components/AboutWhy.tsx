import Image from 'next/image'
import Link from 'next/link'
import { Blocks, Calendar, Lightbulb, Monitor, Play, ShieldCheck, Trophy } from 'lucide-react'

const cards = [
  {
    title: 'Solutions sur mesure',
    Icon: Lightbulb,
    text: 'Chaque projet possède ses propres contraintes. Nous adaptons nos solutions aux caractéristiques de vos bâtiments, équipements et installations.',
  },
  {
    title: 'Rigueur & fiabilité',
    Icon: ShieldCheck,
    text: 'Notre approche privilégie la précision, la robustesse et le respect des exigences techniques propres à chaque réalisation.',
  },
]

const stats = [
  { value: '2023', label: ['Année de', 'création'], Icon: Calendar },
  { value: '04', label: ['Domaines', "d'expertise"], Icon: Blocks },
  { value: '100%', label: ['Engagement', 'qualité'], Icon: Trophy },
  { value: '∞', label: ['Possibilités', 'de conception'], Icon: Monitor },
]

export default function AboutWhy() {
  return (
    <section id="about-why" className="relative overflow-hidden bg-[#011a23]">
      {/* Light band behind the intro, cards and CTA */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[620px] bg-[#eef2f4] lg:h-[667px]" />

      {/* Pergola photo bleeding to the right edge */}
      <div aria-hidden="true" data-reveal="slide-right" data-reveal-delay="300" data-reveal-duration="1500" className="absolute right-0 top-0 hidden h-[689px] w-[570px] lg:block">
        <Image src="/assets/about-why-pergola.jpg" alt="" fill sizes="570px" className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-[1152px] px-5 pt-14 sm:px-8 lg:px-16 lg:pt-[46px]">
        {/* Intro copy */}
        <div data-reveal="fade-up" data-reveal-duration="1500" className="lg:max-w-[532px]">
          <p className="mb-[9px] text-[16px] font-bold uppercase leading-[25px] text-[#056c8f]">Pourquoi METCO ?</p>
          <h2 className="font-gobold mb-[12px] text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23]">
            Une approche technique pensée autour de vos exigences
          </h2>
          <p className="text-[16px] leading-[23px] text-[#595a5c]">
            Choisir un partenaire pour un projet métallique, c&apos;est choisir bien plus qu&apos;un prestataire. C&apos;est s&apos;assurer de pouvoir compter sur une équipe capable de comprendre les contraintes du projet, d&apos;adapter les solutions et de porter une attention particulière à la qualité de réalisation.
          </p>
        </div>

        {/* Two strength cards */}
        <div data-reveal="slide-up" data-reveal-delay="300" data-reveal-duration="1500" className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[30px] lg:w-[742px]">
          {cards.map((card) => (
            <div key={card.title} className="flex items-center gap-[19px] bg-white px-[17px] py-5 lg:min-h-[151px]">
              <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-[#eef2f4] text-[#056c8f]">
                <card.Icon size={32} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-outfit mb-3 text-[16px] font-bold uppercase leading-[20px] text-[#011a23]">{card.title}</h3>
                <p className="text-[14px] leading-[16px] text-[#595a5c]">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA over video still */}
        <div data-reveal="slide-up" data-reveal-delay="300" data-reveal-duration="1500" className="relative mt-8 h-[276px] w-full overflow-hidden lg:mt-[30px] lg:w-[694px]">
          <Image src="/assets/about-why-video.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 694px" className="object-cover" />
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-[244px] w-full bg-[#011a23] lg:w-[566px]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 64% 100%, 0 100%)' }}
          />
          <div className="absolute left-5 top-9 z-10 sm:left-[46px]">
            <h3 className="font-gobold max-w-[301px] text-[clamp(1.75rem,3.5vw,2.5rem)] uppercase leading-[1.3] text-white">
              Parlons de votre projet
            </h3>
            <Link href="/contact" className="metco-btn metco-btn--blue mt-5 inline-flex items-center justify-center bg-white font-medium text-[#011a23] lg:mt-[25px]">
              Demander un devis
            </Link>
          </div>
          <Play
            aria-hidden="true"
            fill="currentColor"
            strokeWidth={0}
            className="play-button-motion absolute right-6 top-1/2 z-10 h-[72px] w-[72px] -translate-y-1/2 text-white lg:right-[40px] lg:top-[127px] lg:h-[120px] lg:w-[120px] lg:translate-y-0"
          />
        </div>

        {/* Key figures */}
        <div className="mt-14 grid grid-cols-2 gap-[23px] pb-16 lg:mt-[93px] lg:grid-cols-4 lg:pb-[142px]">
          {stats.map((stat) => (
            <div key={stat.value} data-reveal="fade-up" data-reveal-delay="300" className="flex flex-col items-center bg-white pb-8 lg:h-[309px] lg:pb-0">
              <div className="grid h-[88px] w-[104px] place-items-center bg-[#eef2f4] text-[#056c8f] lg:h-[112px] lg:w-[128px]">
                <stat.Icon size={48} aria-hidden="true" />
              </div>
              <span className={`font-gobold mt-7 text-[#011a23] lg:mt-[34px] ${stat.value === '∞' ? 'text-[110px] leading-[60px] lg:text-[150px] lg:leading-[80px]' : 'text-[44px] leading-[56px] lg:text-[60px] lg:leading-[80px]'}`}>
                {stat.value}
              </span>
              <span className="mt-2 text-center text-[16px] font-semibold uppercase leading-[25px] text-[#595a5c] lg:mt-[20px] lg:text-[20px]">
                {stat.label.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

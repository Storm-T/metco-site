'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const BADGE = 'CONSTRUCTION MÉTALLIQUE · CHAUDRONNERIE · TUYAUTERIE INDUSTRIELLE'
const AUTOPLAY_MS = 7000

const slides = [
  {
    image: '/assets/rectangle4.jpg',
    titleTop: 'Le nouveau visage',
    titleBottom: 'de la construction',
    text: "METCO accompagne vos projets industriels, structurels et architecturaux avec un savoir-faire spécialisé en construction métallique, chaudronnerie, tuyauterie industrielle, couverture et bardage. Nous concevons et réalisons des ouvrages qui associent précision, robustesse, sécurité et durabilité.",
  },
  {
    image: '/assets/rectangle61.jpg',
    titleTop: 'La précision',
    titleBottom: "au service de l'industrie",
    text: "Chaudronnerie, tuyauterie industrielle et soudure : nos équipes interviennent sur vos installations avec la rigueur et la maîtrise technique qu'exigent les environnements industriels.",
  },
  {
    image: '/assets/rectangle59.jpg',
    titleTop: 'Des ouvrages',
    titleBottom: 'qui durent dans le temps',
    text: "Charpentes, structures, couverture et bardage : nous concevons et réalisons des ouvrages métalliques robustes, adaptés à leur environnement et pensés pour durer.",
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % slides.length), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [active])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid lg:h-[677px]" style={{ minHeight: 'clamp(560px, 80svh, 677px)' }}>
        {slides.map((slide, i) => {
          // Only the first slide carries the page's h1; the others are styled paragraphs,
          // so the carousel does not put three competing h1 in the document.
          const Headline = i === 0 ? 'h1' : 'p'

          return (
          <div
            key={slide.image}
            className={`hero-slide relative [grid-area:1/1] ${i === active ? 'is-active' : ''}`}
            aria-hidden={i !== active}
            inert={i !== active}
          >
            <div className="hero-slide__bg absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>

            {/* Flat overlay */}
            <div className="absolute inset-0 bg-[#011a23]/88" />

            {/* Content */}
            <div className="relative z-10 flex flex-col overflow-hidden px-5 py-16 sm:px-8 lg:px-[10%] lg:pb-0 lg:pt-[137px]">
              {/* Eyebrow badge */}
              <div className="hero-slide__badge mb-5 flex w-fit max-w-full items-center bg-[#056c8f]/50 px-5 py-[7px] lg:mb-[19px] lg:h-10 lg:w-[415px] lg:py-0">
                <p className="text-[10px] font-bold uppercase leading-[25px] text-white/50">{BADGE}</p>
              </div>

              {/* Headline */}
              <Headline className="hero-slide__title font-gobold relative mb-4 max-w-full self-start text-[clamp(2.5rem,5.1vw,4.0625rem)] uppercase leading-[1.154]">
                <span className="text-[#056c8f]">{slide.titleTop}</span>
                <br />
                <span className="text-white">{slide.titleBottom}</span>
                <span aria-hidden="true">
                  <span className="hero-slide__overlay" />
                  <span className="hero-slide__overlay" />
                  <span className="hero-slide__overlay" />
                  <span className="hero-slide__overlay" />
                </span>
              </Headline>

              {/* Separator */}
              <div className="hero-slide__rule mb-4 h-px w-full max-w-[440px] bg-[#056c8f]" />

              {/* Description */}
              <p className="hero-slide__text mb-8 max-w-[702px] text-[clamp(14px,1.05vw,16px)] font-normal leading-[25px] text-white lg:mb-[32px]">
                {slide.text}
              </p>

              {/* CTA */}
              <div className="hero-slide__btns flex">
                <Link
                  href="#services"
                  className="metco-btn flex w-full items-center justify-center bg-[#056c8f] font-medium text-white sm:w-[247px]"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </div>
          )
        })}
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-[27px] lg:bottom-auto lg:left-[5.94%] lg:top-[232px] lg:translate-x-0 lg:flex-col">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Afficher le slide ${i + 1}`}
            aria-current={i === active}
            className={`hero-dot relative h-[18px] w-[18px] rounded-full transition-colors duration-300 ${
              i === active ? 'is-active bg-[#056c8f]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

'use client'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    stars: 5,
    quote: "Nous recherchions une solution capable de répondre précisément aux contraintes de notre projet. L'approche technique et la capacité d'adaptation de METCO ont été au cœur de notre collaboration.",
    name: 'Harold Tsopkeng',
    role: 'Client Pergola',
    avatar: '/assets/ellipse17.svg',
  },
  {
    stars: 5,
    quote: "Une équipe sérieuse et réactive. METCO a su comprendre nos besoins spécifiques et proposer une solution métallique durable pour notre site industriel, dans les délais impartis.",
    name: 'Jean-Paul Moukam',
    role: 'Client Charpente',
    avatar: '/assets/ellipse17.svg',
  },
  {
    stars: 5,
    quote: "De la conception à la livraison, METCO a fait preuve d'un professionnalisme remarquable. La précision du travail et la qualité de finition dépassent nos attentes.",
    name: 'Marie Nguetse',
    role: 'Client Tuyauterie',
    avatar: '/assets/ellipse17.svg',
  },
]

const INTERVAL = 6000
const SPEED = 700

/** Slides are rendered for positions -1…3 so the track can always move forward. */
const SLIDE_POSITIONS = [-1, 0, 1, 2, 3]
/** Thumbs need one extra slot on each side (positions -2…4). */
const THUMB_POSITIONS = [-2, -1, 0, 1, 2, 3, 4]

const at = (position: number) => testimonials[((position % 3) + 3) % 3]

export default function Testimonials() {
  const [pos, setPos] = useState(0)
  const [animate, setAnimate] = useState(true)
  const current = ((pos % 3) + 3) % 3

  // Autoplay
  useEffect(() => {
    const t = setTimeout(() => setPos((p) => p + 1), INTERVAL)
    return () => clearTimeout(t)
  }, [current])

  // Once the slide is over, jump back to the equivalent position inside 0…2
  useEffect(() => {
    if (pos >= 0 && pos <= 2) return
    const t = setTimeout(() => {
      setAnimate(false)
      setPos(pos > 2 ? 0 : 2)
    }, SPEED)
    return () => clearTimeout(t)
  }, [pos])

  // Re-enable the transition once the silent jump is painted
  useEffect(() => {
    if (animate) return
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    return () => cancelAnimationFrame(frame)
  }, [animate])

  const goTo = (index: number) => {
    const delta = (index - current + 3) % 3
    if (delta === 0 || !animate) return
    setPos(pos + (delta === 2 ? -1 : 1))
  }

  const transition = animate ? `transform ${SPEED}ms ease` : 'none'

  return (
    <section id="temoignages" className="relative px-5 pb-16 pt-14 sm:px-8 lg:px-16 lg:pb-[92px] lg:pt-[63px]">
      {/* Grey band: stops before the dark bar overflows */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-12 top-0 bg-[#eef2f4] lg:bottom-auto lg:h-[626px]" />

      <div className="relative mx-auto max-w-[1026px]">
        <p className="mb-[11px] text-center text-[16px] font-bold uppercase leading-[25px] text-[#056c8f]">
          EXPÉRIENCE CLIENT
        </p>
        <h2 className="font-gobold mx-auto mb-10 max-w-[478px] text-center text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23] lg:mb-[47px]">
          Des projets construits sur la confiance
        </h2>

        {/* Card */}
        <div className="relative flex flex-col bg-white px-5 pt-10 sm:px-10 lg:px-[94px] lg:pt-[97px]">
          {/* Quote icon */}
          <Quote
            aria-hidden="true"
            fill="currentColor"
            strokeWidth={0}
            className="absolute right-5 top-5 h-12 w-12 text-[#eef2f4] sm:right-10 lg:right-[94px] lg:h-[89px] lg:w-[89px]"
          />

          {/* Sliding quotes */}
          <div className="overflow-hidden">
            <div className="flex w-[500%]" style={{ transform: `translateX(${-(pos + 1) * 20}%)`, transition }}>
              {SLIDE_POSITIONS.map((position) => {
                const item = at(position)
                return (
                  <div key={position} className="w-1/5 shrink-0 pr-6" aria-hidden={position !== pos}>
                    <div className="mb-[22px] flex gap-[5px]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          aria-hidden="true"
                          fill={i < item.stars ? 'currentColor' : 'none'}
                          className="h-[22px] w-[22px] text-[#056c8f] lg:h-7 lg:w-7"
                        />
                      ))}
                    </div>
                    <blockquote className="text-[clamp(18px,2.2vw,30px)] font-medium leading-[1.17] text-[#011a23] lg:leading-[35px]">
                      {item.quote}
                    </blockquote>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Author thumbs: the active one sits in the middle, under a blue bar */}
          <div className="-mb-12 mt-8 overflow-hidden bg-[#011a23] lg:-mb-[92px] lg:mt-[31px]">
            <div
              className="flex w-[700%] [--j-extra:1] lg:w-[233.333%] lg:[--j-extra:0]"
              style={{
                transform: `translateX(calc((${-(pos + 1)} - var(--j-extra)) * 100% / 7))`,
                transition,
              }}
            >
              {THUMB_POSITIONS.map((position) => {
                const item = at(position)
                const isActive = position === pos
                return (
                  <button
                    key={position}
                    type="button"
                    onClick={() => goTo(((position % 3) + 3) % 3)}
                    aria-label={`Témoignage de ${item.name}`}
                    aria-current={isActive}
                    className="relative flex w-[14.2857%] shrink-0 items-center gap-[10px] px-5 py-8 text-left lg:px-[22px] lg:py-[48px]"
                  >
                    {isActive && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[7px] bg-[#056c8f]" />}
                    <Image
                      src={item.avatar}
                      alt=""
                      width={54}
                      height={54}
                      className="h-11 w-11 shrink-0 lg:h-[54px] lg:w-[54px]"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-extrabold uppercase leading-[25px] text-white lg:text-[16px]">
                        {item.name}
                      </span>
                      <span className="block truncate text-[13px] font-semibold leading-[30px] text-[#eef2f4]/40 lg:text-[16px]">
                        {item.role}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

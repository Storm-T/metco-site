import Image from 'next/image'
import Link from 'next/link'
import { CircleCheck, Handshake, ThumbsUp } from 'lucide-react'
import CountUp from '@/components/CountUp'

const stats = [
  { end: 20, label: 'Clients satisfaits', Icon: ThumbsUp },
  { end: 15, label: 'Partenaires', Icon: Handshake },
]

const strengths = [
  'Maîtrise technique',
  'Solutions sur mesure',
  'Rigueur',
  'Performance durable',
]

export default function WhyMetco() {
  return (
    <section id="why" className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">

          {/* LEFT */}
          <div className="flex flex-col">
            <p className="mb-3 text-[13px] font-bold uppercase text-[#056c8f] sm:text-[14px]">
              POURQUOI METCO ?
            </p>

            <h2 className="font-gobold mb-5 text-[clamp(1.875rem,3.6vw,2.75rem)] uppercase leading-[1.1] text-[#011a23]">
              Une expertise technique pensée pour vos exigences
            </h2>

            <p className="mb-7 text-[14px] leading-[1.75] text-[#595a5c] sm:text-[15px]">
              Un projet métallique ne se résume pas à fabriquer une structure. Il faut comprendre les contraintes, maîtriser la réalisation et proposer une solution adaptée à son environnement. Chez METCO, nous plaçons la précision, la robustesse, la sécurité et la durabilité au cœur de notre approche.
            </p>

            {/* Stat cards */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-[#eef2f4] p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#056c8f] sm:h-14 sm:w-14">
                    <stat.Icon size={26} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#011a23] sm:text-[13px]">{stat.label}</p>
                    <p className="text-[22px] font-extrabold leading-tight text-[#056c8f] sm:text-[26px]">
                      <CountUp end={stat.end} prefix="+ " />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="mb-9 space-y-0">
              {strengths.map((s) => (
                <div key={s} className="flex items-center gap-3 border-b border-gray-200 py-[14px]">
                  <CircleCheck size={24} aria-hidden="true" className="shrink-0 text-[#056c8f]" />
                  <p className="text-[14px] font-bold uppercase text-[#011a23] sm:text-[15px]">{s}</p>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="metco-btn metco-btn--blue inline-flex items-center justify-center self-start bg-[#011a23] font-medium text-white"
            >
              Parlons de votre projet
            </Link>
          </div>

          {/* RIGHT: tall main image, secondary top-left, rotated years badge bottom-left */}
          <div className="relative mx-auto aspect-[400/663] w-full max-w-[460px] lg:mx-0 lg:max-w-none">
            {/* Main tall image, right-aligned */}
            <div className="absolute right-0 top-0 h-full w-[81%]">
              <Image
                src="/assets/rectangle77.jpg"
                alt="Installation industrielle METCO"
                fill
                sizes="(max-width: 1023px) 80vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Secondary image, overlapping top-left */}
            <div className="absolute left-0 top-[7%] h-[40%] w-[50%] border-[6px] border-white sm:border-[8px]">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/rectangle78.jpg"
                  alt="Équipe METCO sur échafaudage"
                  fill
                  sizes="(max-width: 1023px) 45vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Years badge, bottom-left. Rotated column: number and label sit
                side by side, each reading bottom-to-top. */}
            <div className="absolute bottom-[12%] left-0 flex h-[32%] w-[35%] items-center justify-center overflow-hidden bg-[#056c8f]">
              <div className="flex -rotate-90 flex-col items-center gap-1 whitespace-nowrap text-white">
                <span className="font-gobold text-[clamp(2.25rem,6.4vw,4.5rem)] leading-none">+07</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide sm:text-[12px]">
                  Années d&apos;experience
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

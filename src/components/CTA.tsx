import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative isolate px-5 pb-0 pt-14 before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-[calc(100%-150px)] before:bg-[#eef2f4] sm:px-8 sm:pt-16 lg:px-16 lg:pt-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[#056c8f] text-[16px] font-bold uppercase text-center mb-4">
          UN PROJET À CONCRÉTISER ?
        </p>
        <h2 className="font-gobold mx-auto mb-7 max-w-[676px] text-center text-[clamp(2.5rem,5vw,3.75rem)] uppercase leading-tight text-[#011a23] sm:mb-8">
          Donnez forme à vos ambitions avec METCO
        </h2>

        <div className="mb-10 flex justify-center sm:mb-12">
          <Link
            href="mailto:contact@metco237.com"
            className="metco-btn inline-flex items-center justify-center bg-[#056c8f] font-medium text-white"
          >
            Nous contacter
          </Link>
        </div>

        {/* Full-width image with play button */}
      <div id="realisations" className="relative mx-auto aspect-[1026/448] min-h-[230px] w-full max-w-[1026px] sm:min-h-[320px]">
          <Image
            src="/assets/rectangle83.jpg"
            alt="Nos réalisations"
            fill
            sizes="(max-width: 1066px) calc(100vw - 40px), 1026px"
            className="object-cover"
          />
          {/* Play button, centred on the image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Play size={80} aria-label="Voir la vidéo" fill="currentColor" strokeWidth={0} className="play-button-motion h-[56px] w-[56px] text-white sm:h-[80px] sm:w-[80px]" />
          </div>
        </div>

      </div>
    </section>
  )
}

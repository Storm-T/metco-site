import Image from 'next/image'

const logos = [
  { src: '/assets/image2.png', alt: 'Partenaire 1' },
  { src: '/assets/image2.png', alt: 'Partenaire 2' },
  { src: '/assets/image2.png', alt: 'Partenaire 3' },
  { src: '/assets/image2.png', alt: 'Partenaire 4' },
  { src: '/assets/image2.png', alt: 'Partenaire 5' },
]

export default function PartnersBar({ title }: { title?: string }) {
  return (
    <section id="partners" className="py-10 px-8 md:px-32 border-b border-gray-200">
      {title && (
        <h2 className="font-gobold mb-10 text-center text-[clamp(1.75rem,3.5vw,2.5rem)] uppercase leading-[1.3] text-[#011a23] md:mb-[54px]">
          {title}
        </h2>
      )}
      <div className="partners-marquee" aria-label="Partenaires METCO">
        <div className="partners-track">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14" aria-hidden={loop === 1}>
              {logos.map((logo, index) => (
                <div key={`${loop}-${index}`} className="opacity-30 transition-opacity hover:opacity-80">
                  <Image src={logo.src} alt={loop === 0 ? logo.alt : ''} width={120} height={51} sizes="120px" className="h-[51px] w-[120px] object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, DoorOpen, Factory, Fence, HardHat, Layers, Warehouse } from 'lucide-react'

const services = [
  {
    title: 'PERGOLA SUR MESURE',
    image: '/assets/rectangle57.jpg',
    Icon: Fence,
    href: '/services/pergola-sur-mesure',
  },
  {
    title: 'PORTAILS MOTORISÉS',
    image: '/assets/rectangle60.jpg',
    Icon: DoorOpen,
    href: '/services/portails-motorises',
  },
  {
    title: 'CHARPENTES & STRUCTURES MÉTALLIQUES',
    image: '/assets/rectangle61.jpg',
    Icon: Warehouse,
    href: '/services/charpentes-structures-metalliques',
  },
  {
    title: 'COUVERTURE & BARDAGE',
    image: '/assets/rectangle58.jpg',
    Icon: Layers,
    href: '/services/couverture-bardage',
  },
  {
    title: 'TUYAUTERIE INDUSTRIELLE',
    image: '/assets/rectangle59.jpg',
    Icon: Factory,
    href: '/services/tuyauterie-industrielle',
  },
  {
    title: "MAIN-D'ŒUVRE QUALIFIÉE",
    image: '/assets/rectangle62.jpg',
    Icon: HardHat,
    href: '/services/main-doeuvre-qualifiee',
  },
]

/**
 * `headingLevel` keeps the document outline intact: with the block heading hidden the
 * cards become the first headings under the page h1, so they must be h2, not h3.
 */
export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  const CardTitle = showHeading ? 'h3' : 'h2'

  return (
    <section id="services" className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-[1024px]">
        {showHeading && (
          <>
            <p className="mb-4 text-center text-[16px] font-bold uppercase text-[#056c8f]">NOS EXPERTISES</p>
            <h2 className="font-gobold mx-auto mb-4 max-w-[631px] text-center text-[clamp(2rem,4vw,2.5rem)] uppercase leading-tight text-[#011a23]">
              Des solutions métalliques adaptées à chaque projet
            </h2>
          </>
        )}
        <p className="mx-auto mb-10 max-w-[585px] text-center text-[15px] leading-[1.6] text-[#595a5c] sm:mb-12 sm:text-[16px] sm:leading-[25px]">
          De la conception à la réalisation, METCO mobilise son expertise technique pour répondre aux exigences des projets de construction, d&apos;infrastructure et d&apos;industrie.
        </p>

        <div className="grid grid-cols-1 gap-x-[47px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[52px]">
          {services.map((service) => (
            <ServiceCard key={service.href} service={service} CardTitle={CardTitle} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, CardTitle }: { service: (typeof services)[0]; CardTitle: 'h2' | 'h3' }) {
  return (
    <Link href={service.href} className="service-card group block">
      <div className="service-card__thumb relative aspect-[310/228] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 52px) / 2), 310px"
          className="service-card__img object-cover"
        />
        <span className="service-card__link absolute bottom-0 left-0 z-10 flex h-[52px] w-[68px] items-center justify-center bg-white text-[#011a23]">
          <ArrowRight size={22} aria-hidden="true" />
        </span>
      </div>

      <div className="service-card__content relative z-[1] flex min-h-[72px] items-stretch bg-white">
        <div className="service-card__icon flex w-[68px] shrink-0 items-center justify-center bg-[#011a23] text-white">
          <service.Icon size={30} aria-hidden="true" />
        </div>
        <CardTitle className="service-card__title flex items-center px-4 text-[15px] font-bold uppercase leading-[1.25] text-[#011a23] sm:text-[16px]">
          {service.title}
        </CardTitle>
      </div>
    </Link>
  )
}

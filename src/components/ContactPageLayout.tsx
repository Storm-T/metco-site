import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageBanner from '@/components/PageBanner'
import Reveal from '@/components/Reveal'
import SitePageShell from '@/components/SitePageShell'

const socialLinks = [
  { label: 'Facebook', icon: '/assets/vector.svg' },
  { label: 'Instagram', icon: '/assets/group.svg' },
  { label: 'TikTok', icon: '/assets/vector1.svg' },
]

type ContactMethod = {
  label: string
  value: string
  href?: string
  Icon: LucideIcon
}

const contactMethods: ContactMethod[] = [
  {
    label: 'Une question ?',
    value: '+237 699 632 236',
    href: 'tel:+237699632236',
    Icon: Phone,
  },
  {
    label: 'Email',
    value: 'contact@metco237.com',
    href: 'mailto:contact@metco237.com',
    Icon: Mail,
  },
  {
    label: 'Localisation',
    value: 'PK11, Douala',
    Icon: MapPin,
  },
]

export default function ContactPageLayout() {
  return (
    <SitePageShell activePage="contact">
      <Reveal />
      <div className="-mt-[3px]">
        <PageBanner title="Contact" breadcrumb="Contact" />
      </div>

      <section className="contact-form-section px-5 pt-[125px] md:px-8">
        <div className="mx-auto min-h-[740px] max-w-[746px]">
          <div className="contact-heading mx-auto h-[96px] max-w-[440px] text-center" data-reveal="fade-up" data-reveal-duration="1500">
            <p className="text-[16px] font-bold leading-[25px] text-[#056c8f]">CONTACTEZ-NOUS</p>
            <h2 className="font-gobold mt-[19px] text-[32px] uppercase leading-[42px] text-[#011a23] sm:text-[40px] sm:leading-[52px]">
              Parlons de votre projet
            </h2>
          </div>

          <div className="mt-[43px]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-map-section relative mt-[113px] pt-0">
        <div className="contact-card relative z-10 mx-auto grid max-w-[1026px] grid-cols-1 bg-white shadow-xl sm:grid-cols-[251px_minmax(0,1fr)] lg:grid-cols-[251px_193px_minmax(0,1fr)] lg:grid-rows-[62px_189px]" data-reveal="fade-up">
          <div className="contact-card__photo relative h-[220px] overflow-hidden sm:row-span-2 sm:h-full lg:h-[251px]">
            <Image
              src="/assets/contact-photo.jpg"
              alt="Soudure dans l’atelier METCO"
              fill
              sizes="(min-width: 1024px) 251px, (min-width: 640px) 251px, 100vw"
              className="contact-card__photo-image object-cover"
            />
          </div>

          <div className="contact-card__socials flex h-[62px] w-full items-center gap-[18px] bg-[#056c8f] px-[23px] sm:col-start-2 sm:row-start-1 sm:w-[193px]">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href="#"
                aria-label={social.label}
                className="footer-icon-wrap grid size-[37px] shrink-0 place-items-center rounded-full"
              >
                <Image src={social.icon} alt="" width={20} height={20} />
              </Link>
            ))}
          </div>

          <div className="contact-card__info grid grid-cols-1 gap-2 bg-[#011a23] px-5 py-4 text-white sm:col-start-2 sm:row-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:grid-cols-[224px_285px_184px] lg:items-center lg:gap-[17px] lg:py-0 lg:pl-[25px] lg:pr-[23px]">
            {contactMethods.map((method) => {
              const value = method.href ? (
                <a href={method.href} className="contact-method__value">
                  {method.value}
                </a>
              ) : (
                <p className="contact-method__value">{method.value}</p>
              )

              return (
                <div
                  key={method.label}
                  className="contact-method flex min-h-[54px] min-w-0 items-center gap-3"
                >
                  <span aria-hidden="true" className="contact-method__icon grid size-[54px] shrink-0 place-items-center rounded-full bg-[#056c8f] text-white">
                    <method.Icon size={24} />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[13px] font-medium leading-[20px] text-[#eef2f4]/40 lg:text-[16px] lg:leading-[30px]">
                      {method.label}
                    </span>
                    {value}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="contact-map relative -mt-[94px] h-[320px] overflow-hidden bg-[#eef2f4] sm:h-[420px] lg:h-[482px]">
          <iframe
            title="METCO — PK11, Douala, Cameroun"
            src="https://www.google.com/maps?q=PK11%2C+Douala%2C+Cameroun&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map__image absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>
    </SitePageShell>
  )
}

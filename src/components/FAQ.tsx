'use client'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '@/lib/site-content'


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1024px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[444px_532px] lg:gap-x-12 lg:gap-y-0">
          {/* Left image + logo badge + stat */}
          <div className="relative self-start pt-10 sm:pt-[62px]">
            <div className="relative aspect-[444/638] w-full">
              <Image src="/assets/rectangle84.jpg" alt="Atelier METCO" fill sizes="(max-width: 1024px) 100vw, 444px" className="object-cover" />
            </div>

            {/* Logo badge overlapping the top-left corner */}
            <div className="absolute left-[7.6%] top-0 flex h-20 w-20 items-center justify-center bg-white sm:h-32 sm:w-32">
              <Image src="/assets/image7.png" alt="" width={80} height={80} className="h-12 w-12 object-contain sm:h-20 sm:w-20" />
            </div>

            {/* Stat flag at the bottom-left */}
            <div className="absolute bottom-[-16px] left-0 flex items-end sm:bottom-[-23px]">
              <Image src="/assets/faq-corner.svg" alt="" width={34.5} height={23.5} className="h-4 w-[25px] sm:h-[23.5px] sm:w-[34.5px]" />
              <div className="bg-[#056c8f] px-[14px] pb-[10px] pt-[15px] text-white">
                <p className="font-gobold text-[44px] leading-[44px] sm:text-[60px] sm:leading-[60px]">+120</p>
                <p className="text-[14px] font-semibold leading-[24px] sm:text-[16px] sm:leading-[30px]">Utilisateurs satisfaits</p>
              </div>
            </div>
          </div>

          {/* Right FAQs */}
          <div className="lg:pt-[64px]">
            <p className="mb-[11px] text-[14px] font-bold uppercase leading-[25px] text-[#056c8f] sm:text-[16px]">FAQS</p>
            <h2 className="font-gobold mb-8 max-w-[443px] text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23] lg:mb-9">
              Tout savoir avant de lancer votre projet
            </h2>

            <div className="space-y-[21px]">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#eef2f4]">
                  <button
                    aria-expanded={openIndex === index}
                    className="flex w-full items-center justify-between gap-3 px-[21px] py-[13px] text-left"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span className="text-[14px] font-bold uppercase leading-[20px] text-[#011a23] sm:text-[16px]">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center text-[16px] font-bold transition-colors duration-200 ${
                        openIndex === index ? 'bg-[#056c8f] text-white' : 'bg-white text-[#011a23]'
                      }`}
                    >
                      {openIndex === index ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
                    </div>
                  </button>

                  {/* Smooth accordion with CSS grid technique */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div className="px-[21px] pb-[20px] pt-4 text-[14px] leading-[20px] text-[#595a5c] sm:text-[16px]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { galleryImages } from '@/lib/site-content'

const gallery = galleryImages.slice(0, 7).map((image, index) => ({
  image,
  category: index % 3 === 0 ? 'Welding' : index % 3 === 1 ? 'Working' : 'Pipe welding',
  span: [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1][index],
}))
const filters = ['All', 'Welding', 'Working', 'Pipe welding'] as const

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const visibleImages = useMemo(() => active === 'All' ? gallery : gallery.filter((item) => item.category === active), [active])

  return (
    <section className="px-5 py-14 md:px-8 md:pb-[92px] md:pt-[90px]">
      <div className="mx-auto max-w-[1024px]">
        <div className="mb-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrer les réalisations">
          {filters.map((filter) => (
            <button key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)} className={`px-5 py-3 text-[12px] font-extrabold uppercase tracking-wide transition-colors duration-200 ${active === filter ? 'bg-[#056c8f] text-white' : 'bg-[#eef2f4] text-[#011a23] hover:bg-[#d8e8ef] hover:text-[#056c8f]'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {visibleImages.map((item, index) => (
            <figure key={item.image} className={`group relative overflow-hidden bg-[#eef2f4] ${item.span === 2 ? 'md:col-span-2 aspect-[1.5]' : 'aspect-[1.05]'}`}>
              <Image src={item.image} alt={`Réalisation METCO — ${item.category}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-[#011a23]/85 to-transparent px-4 pb-4 pt-12 text-[12px] font-bold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{item.category}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

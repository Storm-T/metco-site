import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { projects } from '@/lib/site-content'

export default function ProjectGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`px-5 py-16 md:px-8 md:pt-[113px] ${compact ? 'md:pb-[145px]' : 'md:pb-[117px]'}`}>
      <Reveal />
      <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[47px] lg:gap-y-[64px]">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${'detailSlug' in project ? project.detailSlug : project.slug}`}
            data-reveal="fade-up"
            data-reveal-delay="200"
            data-reveal-duration="1500"
            className="group relative block aspect-[0.78] overflow-hidden bg-[#011a23] lg:aspect-[310/565]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px"
              className="object-cover"
            />

            {/* Veil drawn down over the image */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0 bg-[#011a23]/60 transition-[height] duration-[400ms] ease-in-out group-hover:h-full"
            />

            {/* Caption panel sliding up, its diamond straddling the top edge */}
            <span className="absolute inset-x-0 -bottom-full h-[176px] bg-[#011a23] transition-all duration-[400ms] ease-in-out group-hover:bottom-0">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 grid size-[112px] -translate-x-1/2 -translate-y-1/2 place-items-center"
              >
                <span className="col-start-1 row-start-1 size-[79px] rotate-45 border-[0.5px] border-[#056c8f]" />
                <span className="col-start-1 row-start-1 size-[67px] rotate-45 bg-[#056c8f]" />
                <ArrowRight size={32} aria-hidden="true" className="relative z-10 col-start-1 row-start-1 text-white" />
              </span>

              <h2 className="font-outfit absolute inset-x-5 top-[67px] text-center text-[20px] font-bold uppercase leading-[25px] text-white lg:inset-x-11 lg:text-[24px]">
                {project.title}
              </h2>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

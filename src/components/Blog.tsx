import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'chaudronnerie-industrielle',
    image: '/assets/rectangle98.jpg',
    title: "Chaudronnerie industrielle : de la conception à la réalisation d'un ouvrage",
    date: '20',
    month: 'SEPT',
    year: '2026',
    large: true,
  },
  {
    slug: 'construction-metallique-au-cameroun',
    image: '/assets/rectangle100.jpg',
    title: 'Construction métallique au Cameroun : quels avantages pour les projets modernes ?',
    date: '20',
    month: 'SEPT',
    year: '2026',
    large: false,
  },
  {
    slug: 'tuyauterie-industrielle',
    image: '/assets/rectangle99.jpg',
    title: "Tuyauterie industrielle : les exigences essentielles d'une installation fiable",
    date: '20',
    month: 'SEPT',
    year: '2026',
    large: false,
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-white px-5 py-12 sm:px-8 lg:px-16">
      <div className="max-w-[1024px] mx-auto">
        <p className="text-[#056c8f] text-[16px] font-bold uppercase text-center leading-[25px] mb-[11px]">
          ACTUALITÉS & CONSEILS
        </p>
        <h2 className="font-gobold mx-auto mb-12 max-w-[532px] text-center text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23] lg:mb-[82px]">
          L&apos;univers de la construction métallique, en mouvement
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          {/* Large post */}
          <article>
            <Link href={`/blog/${posts[0].slug}`} aria-hidden="true" tabIndex={-1} className="group relative block aspect-[488/582] w-full overflow-hidden">
              <Image src={posts[0].image} alt={posts[0].title} fill sizes="(max-width: 1024px) 100vw, 488px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="blog-card__plus" aria-hidden="true" />
            </Link>
            <div className="relative lg:-mt-[122px] lg:mx-[31px]">
              {/* Offset teal block */}
              <div className="absolute -left-[31px] top-[19px] hidden h-full w-[457px] bg-[#056c8f] lg:block" />
              <BlogCardOverlay post={posts[0]} />
            </div>
          </article>

          {/* Small posts */}
          <div className="flex flex-col gap-10 lg:gap-[15px]">
            {posts.slice(1).map((post, i) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} aria-hidden="true" tabIndex={-1} className={`group relative block w-full overflow-hidden ${i === 0 ? 'aspect-[488/277]' : 'aspect-[488/263]'}`}>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 488px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="blog-card__plus" aria-hidden="true" />
                </Link>
                <div className={`relative lg:mr-[62px] ${i === 0 ? 'lg:-mt-[141px]' : 'lg:-mt-[103px]'}`}>
                  <BlogCardOverlay post={post} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogCardOverlay({ post }: { post: typeof posts[0] }) {
  return (
    <div className="relative min-h-[168px] bg-white px-5 pb-[10px] pt-10">
      {/* Date badge */}
      <div className="absolute -top-6 right-[26px] flex">
        <div className="flex h-[48px] w-[48px] items-center justify-center bg-[#056c8f]">
          <span className="text-white text-[24px] font-bold leading-[20px]">{post.date}</span>
        </div>
        <div className="flex h-[48px] w-[49px] flex-col items-center justify-center bg-[#011a23] text-[12px] font-semibold leading-[15px] text-white">
          <span>{post.month}</span>
          <span>{post.year}</span>
        </div>
      </div>
      <h3 className="font-outfit mb-[11px] text-[20px] font-bold uppercase leading-[25px] text-[#011a23] sm:text-[24px]">
        <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[#056c8f]">
          {post.title}
        </Link>
      </h3>
      <Link href={`/blog/${post.slug}`} className="flex items-center justify-between text-[#595a5c] text-[16px] font-medium leading-[20px] transition-colors hover:text-[#056c8f]">
        Lire
        <ArrowRight size={28} aria-hidden="true" className="mr-[6px]" />
      </Link>
    </div>
  )
}

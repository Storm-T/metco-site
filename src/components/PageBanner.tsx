import Image from 'next/image'
import Link from 'next/link'

export default function PageBanner({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="relative isolate flex min-h-[250px] items-center justify-center overflow-hidden bg-[#011a23] px-5 py-16 text-center md:h-[381px]">
      <Image src="/assets/rectangle4.jpg" alt="" fill priority sizes="100vw" className="absolute inset-0 -z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[#011a23]/80" />
      <div className="relative mx-auto max-w-[900px]">
        <h1 className="font-gobold mx-auto max-w-[850px] text-[34px] uppercase leading-[1.2] text-white md:text-[48px] lg:text-[50px]">{title}</h1>
        <div className="mt-6 text-[12px] font-bold uppercase tracking-[0.14em] text-white/80">
          <Link className="transition-colors hover:text-[#35a7c8]" href="/">Accueil</Link>
          <span className="mx-2 text-[#35a7c8]">/</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  )
}

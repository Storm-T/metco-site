import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import PartnersBar from '@/components/PartnersBar'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyMetco from '@/components/WhyMetco'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Process from '@/components/Process'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import RevealSection from '@/components/RevealSection'
import { faqs } from '@/lib/site-content'

/** The home FAQ, repeated for search engines so it can appear as a rich result. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function Home() {
  return (
    <main id="accueil" className="bg-white overflow-x-clip">
      <JsonLd data={faqJsonLd} />
      <SiteHeader activePage="home" />
      <Hero />
      <RevealSection><PartnersBar /></RevealSection>
      <RevealSection><Services /></RevealSection>
      <RevealSection direction="left"><About /></RevealSection>
      <RevealSection><Testimonials /></RevealSection>
      <RevealSection direction="right"><WhyMetco /></RevealSection>
      <RevealSection><CTA /></RevealSection>
      <RevealSection direction="left"><FAQ /></RevealSection>
      <RevealSection><Process /></RevealSection>
      <RevealSection><Blog /></RevealSection>
      <Footer />
    </main>
  )
}

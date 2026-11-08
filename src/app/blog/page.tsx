import BlogArchive from '@/components/BlogArchive'
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd'
import PageBanner from '@/components/PageBanner'
import SitePageShell from '@/components/SitePageShell'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Actualités & conseils',
  description:
    'Conseils techniques et actualités sur la construction métallique, la chaudronnerie, la tuyauterie industrielle et le bardage au Cameroun.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <SitePageShell activePage="blog">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }])} />
      <PageBanner title="L’actualité de la construction métallique" breadcrumb="Blog" />
      <BlogArchive />
    </SitePageShell>
  )
}

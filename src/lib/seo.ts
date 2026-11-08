import type { Metadata } from 'next'

/** Set NEXT_PUBLIC_SITE_URL in production; the fallback keeps local builds working. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metco237.com').replace(/\/$/, '')

export const siteName = 'METCO'
export const siteTagline = 'Métallic Constructions'
/** Cropped to the 1200×630 social-preview ratio; the source photo is 1.46:1 and would be cut off. */
export const defaultOgImage = '/assets/og-metco.jpg'

export const organisation = {
  name: 'METCO — Métallic Constructions',
  phone: '+237699632236',
  email: 'contact@metco237.com',
  street: 'PK 11',
  city: 'Douala',
  country: 'CM',
  openingHours: 'Mo-Sa 08:30-17:30',
}

/**
 * Social previews need a 1200×630 image: the site's photos are 16:10 or taller, which
 * platforms crop badly, so each one has a pre-cropped twin in /assets/og.
 * Falls back to the default when none exists.
 */
function ogVariant(image: string) {
  const match = image.match(/\/assets\/(rectangle\d+)\.(?:png|jpg)$/)
  return match ? `/assets/og/${match[1]}.jpg` : defaultOgImage
}

/** Builds the per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${siteUrl}${path}`
  const ogImage = image ? ogVariant(image) : defaultOgImage

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'fr_FR',
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

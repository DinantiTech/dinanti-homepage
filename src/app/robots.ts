import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://dinanti.id/sitemap.xml',
  }
}
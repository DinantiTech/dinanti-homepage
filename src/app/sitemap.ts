import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dinanti.id',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://dinanti.id/harga',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://dinanti.id/tema',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://collinkleest.com',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1
    }
  ]
}

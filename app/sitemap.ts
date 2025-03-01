import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

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

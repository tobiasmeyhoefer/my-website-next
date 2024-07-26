import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBIC_BASE_URL}/`,
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBIC_BASE_URL}/tech`,
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBIC_BASE_URL}/contact`,
    //   lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
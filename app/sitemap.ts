import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tobiasmeyhoefer.de/",
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: "https://tobiasmeyhoefer.de/tech",
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: "https://tobiasmeyhoefer.de/contact",
    //   lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
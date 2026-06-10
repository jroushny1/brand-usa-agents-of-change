import { MetadataRoute } from 'next'
import { webinarData, webinarIds } from '@/data/webinars'
import { podcastData, podcastIds } from '@/data/podcasts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.janetteroush.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/library`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-audit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/storytelling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/shorts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/personal-os`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/personal-os-2`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/personal-os/walkthrough`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const webinarPages: MetadataRoute.Sitemap = webinarIds.map((id) => {
    const webinar = webinarData[id as keyof typeof webinarData] as { publishDate?: string }
    return {
      url: `${baseUrl}/webinar/${id}`,
      lastModified: webinar.publishDate ? new Date(webinar.publishDate) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  const podcastPages: MetadataRoute.Sitemap = podcastIds.map((id) => {
    const podcast = podcastData[id as keyof typeof podcastData] as { publishDate?: string }
    return {
      url: `${baseUrl}/podcast/${id}`,
      lastModified: podcast.publishDate ? new Date(podcast.publishDate) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  })

  return [...staticPages, ...webinarPages, ...podcastPages]
}

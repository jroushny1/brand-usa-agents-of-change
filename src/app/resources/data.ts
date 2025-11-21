
import { Code, ImageIcon, Link, Presentation, MessageSquare, Pencil, PersonStanding, GanttChartSquare, Megaphone, Video } from 'lucide-react';

export const resourceCategories = [
  {
    category: 'AI for Business Operations',
    items: [
      {
        title: 'Runway',
        description: 'AI-powered video editing and generation tools for creating professional-quality content.',
        url: 'https://runwayml.com',
        icon: Video,
        logo: 'https://images.squarespace-cdn.com/content/v1/645163f35298a46f77626966/b6223455-15d6-47e1-807e-b5b637a7b8f0/RunwayLogo_2023_FullLockup_Dark.png?format=1500w',
      },
      {
        title: 'OpusClip',
        description: 'AI-powered tool that automatically turns long videos into viral short clips.',
        url: 'https://www.opus.pro/',
        icon: Video,
        logo: 'https://assets-global.website-files.com/635f23c4578b375b4dd7f631/640733d240d4f64249a8ce6f_Opus%20Clip.png',
      },
      {
        title: 'Brandwatch',
        description: 'AI-powered social media listening and analytics for monitoring brand mentions and sentiment.',
        url: 'https://www.brandwatch.com',
        icon: Megaphone,
        logo: 'https://cdn-www.brandwatch.com/exports/images/logos/brandwatch/primary-monochrome-black.svg',
      },
      {
        title: 'Gong',
        description: 'AI-powered conversation intelligence for sales teams to analyze customer interactions.',
        url: 'https://www.gong.io',
        icon: PersonStanding,
        logo: 'https://www.gong.io/wp-content/themes/gong-wp-theme/dist/images/logo-gong.svg',
      },
    ],
  },
  {
    category: 'Content Creation Tools',
    items: [
      {
        title: 'Beautiful.ai',
        description: 'AI-powered presentation software with smart templates and automated design.',
        url: 'https://www.beautiful.ai',
        icon: Presentation,
        logo: 'https://assets-global.website-files.com/5f3ebf5c3dcbf4601c9d53cd/632e95db3dcbf40e6b4f71f5_Beautiful.ai%20logo%20square.png',
      },
      {
        title: 'Descript',
        description: 'AI-powered video and podcast editor with text-based editing and voice cloning.',
        url: 'https://www.descript.com',
        icon: Code,
        logo: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6408f6907936855c20961f84_descript-logo.png',
      },
      {
        title: 'Jasper',
        description: 'AI writing assistant for creating marketing copy, blog posts, and other content.',
        url: 'https://www.jasper.ai',
        icon: Pencil,
        logo: 'https://assets-global.website-files.com/6373809467c6a92f2939b693/6373809467c6a9a49939b6c4_Logo-Full-Color-p-500.png',
      },
      {
        title: 'Midjourney',
        description: 'AI image generator that creates images from natural language descriptions.',
        url: 'https://www.midjourney.com',
        icon: ImageIcon,
        logo: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/image/a7073c68-e376-4fab-8c82-a801b6352932/midjourney_logo.png',
      },
      
    ],
  },
  {
    category: 'Productivity and Workflow',
    items: [
      {
        title: 'Zapier',
        description: 'Automation platform that connects different apps and services to automate workflows.',
        url: 'https://zapier.com',
        icon: GanttChartSquare,
        logo: 'https://res.cloudinary.com/zapier-com/image/upload/v1676324083/z-logomark_2x_d552c67241.png',
      },
      {
        title: 'Reclaim.ai',
        description: 'AI-powered scheduling assistant that automatically manages your calendar and tasks.',
        url: 'https://reclaim..ai',
        icon: GanttChartSquare,
        logo: 'https://assets-global.website-files.com/6303b6d4b4491775e54d3156/6303b6d4b449174f884d3179_reclaim-logo-wordmark.svg',
      },
      {
        title: 'Motion',
        description: 'AI-powered time management tool that combines a calendar, to-do list, and project manager.',
        url: 'https://www.usemotion.com',
        icon: GanttChartSquare,
        logo: 'https://assets-global.website-files.com/62a3998f8b89d419f8027581/62a3998f8b89d479380275b2_256x256.png',
      },
    ],
  },
];

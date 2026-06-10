import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import FieldNoteContent from '@/components/FieldNoteContent'
import { fieldNotes, noteExcerpt } from '@/data/field-notes'

export function generateStaticParams() {
  return fieldNotes.map((note) => ({ slug: note.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const note = fieldNotes.find((n) => n.id === slug)
  if (!note) return {}
  const description = noteExcerpt(note.content)
  return {
    title: note.title,
    description,
    alternates: { canonical: `https://www.janetteroush.com/notes/${slug}` },
    openGraph: {
      title: note.title,
      description,
      type: 'article',
      publishedTime: note.date,
      authors: ['Janette Roush'],
    },
    twitter: { card: 'summary' },
  }
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = fieldNotes.find((n) => n.id === slug)

  if (!note) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: note.title,
    datePublished: note.date,
    url: `https://www.janetteroush.com/notes/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brand USA Agents of Change',
    },
    keywords: note.tags.join(', '),
    articleBody: note.content,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.janetteroush.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Field Notes',
        item: 'https://www.janetteroush.com/notes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: note.title,
        item: `https://www.janetteroush.com/notes/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      ></script>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>

      <AccessCheck>
        <Header />

        <div className="min-h-screen bg-gray-50">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href="/notes"
              className="inline-flex items-center text-gray-600 hover:text-brand-cyan mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              All Field Notes
            </Link>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={note.date}>
                    {new Date(note.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <span>By Janette Roush</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight font-display">
                {note.title}
              </h1>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <Tag className="h-4 w-4 text-gray-400" />
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-brand-accent-cream text-brand-navy rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <FieldNoteContent content={note.content} />
            </div>
          </article>
        </div>
      </AccessCheck>
    </>
  )
}

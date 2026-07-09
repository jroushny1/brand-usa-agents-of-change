import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    alternates: { canonical: `https://janetteroush.com/notes/${slug}` },
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
    url: `https://janetteroush.com/notes/${slug}`,
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
        item: 'https://janetteroush.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Field Notes',
        item: 'https://janetteroush.com/notes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: note.title,
        item: `https://janetteroush.com/notes/${slug}`,
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

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <Link
            href="/notes"
            className="dateline text-brand-slate hover:text-brand-cyan inline-flex items-center mb-12 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Field Notes
          </Link>

          {/* Dateline kicker */}
          <div className="dateline text-brand-slate flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
            <time dateTime={note.date}>
              {new Date(note.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>By Janette Roush</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight mb-8">
            {note.title}
          </h1>

          {/* Tag markers — hairline rule closes the head matter */}
          <div className="flex flex-wrap gap-x-5 gap-y-1 dateline text-brand-cyan pb-8 mb-10 border-b border-brand-sand">
            {note.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {/* Article body — readable measure, serif prose */}
          <div className="max-w-[68ch] text-lg leading-relaxed">
            <FieldNoteContent content={note.content} />
          </div>
        </article>

        <Footer />
      </AccessCheck>
    </>
  )
}

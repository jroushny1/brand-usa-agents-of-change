import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessCheck from '@/components/AccessCheck'
import { ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { pressItems, appearances } from '@/data/press'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press coverage, interviews, and podcast appearances featuring Janette Roush, SVP of Innovation and Chief AI Officer at Brand USA, on AI, destination marketing, and the future of travel discovery.',
  openGraph: {
    title: 'Press | Agents of Change',
    description: 'Press coverage, interviews, and podcast appearances featuring Janette Roush on AI and the future of destination marketing.',
  },
}

// The lead pull quote — promoted from the Travel Weekly entry.
const leadQuote = pressItems.find((item) => item.id === 'travel-weekly-high-stakes')!

export default function PressPage() {
  // ItemList schema (articles) for AI discoverability
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Press Coverage — Janette Roush',
    'description':
      'Articles and interviews featuring Janette Roush, SVP of Innovation and Chief AI Officer at Brand USA.',
    'itemListElement': pressItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'NewsArticle',
        'headline': item.title,
        'url': item.url,
        'datePublished': item.date,
        'publisher': { '@type': 'Organization', 'name': item.publication },
        ...(item.reporter ? { 'author': { '@type': 'Person', 'name': item.reporter } } : {}),
        'about': {
          '@type': 'Person',
          'name': 'Janette Roush',
          'jobTitle': 'SVP, Innovation and Chief AI Officer',
          'affiliation': { '@type': 'Organization', 'name': 'Brand USA' },
        },
      },
    })),
  }

  return (
    <>
      <script
        id="press-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <AccessCheck>
        <Header />

        <div className="min-h-screen">
          {/* Page header */}
          <section className="border-b border-brand-navy">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
              <div className="dateline text-brand-cyan mb-5">In the Media</div>
              <h1 className="font-display font-medium text-4xl md:text-6xl text-brand-navy leading-none">
                Press
              </h1>
              <p className="mt-6 text-xl text-brand-navy leading-relaxed max-w-3xl">
                Coverage, interviews, and conversations on AI, destination marketing, and the future
                of how travelers discover the United States.
              </p>
            </div>
          </section>

          {/* Lead moment — the Travel Weekly pull quote */}
          <section className="bg-brand-paper2 border-b border-brand-sand">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
              <blockquote className="font-display italic text-3xl md:text-5xl leading-tight text-brand-navy">
                <span className="text-brand-cyan">&ldquo;</span>
                {leadQuote.quote}
                <span className="text-brand-cyan">&rdquo;</span>
              </blockquote>
              <cite className="dateline text-brand-slate block mt-6 not-italic">
                {leadQuote.publication} &middot; &ldquo;{leadQuote.title}&rdquo; &middot; {leadQuote.dateDisplay}
              </cite>
            </div>
          </section>

          {/* In the News */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>In the News</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <div className="border-t border-brand-navy">
              {pressItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] gap-x-6 gap-y-2 py-10 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-cyan">{item.publication}</span>
                  <h3 className="font-display text-2xl leading-tight text-brand-navy">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-cyan transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <span className="dateline text-brand-slate sm:text-right whitespace-nowrap">
                    {item.dateDisplay}
                  </span>
                  <div className="sm:col-start-2 sm:col-span-2">
                    <blockquote className="mt-3">
                      <p className="font-display italic text-xl md:text-2xl leading-snug text-brand-navy">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <cite className="dateline text-brand-slate block mt-2 not-italic">
                        &mdash; Janette Roush
                      </cite>
                    </blockquote>
                    <p className="mt-4 text-brand-gray-blue leading-relaxed">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 dateline text-brand-navy hover:text-brand-cyan transition-colors"
                      >
                        Read on {item.publication}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      {item.reporter && (
                        <span className="dateline text-brand-slate">By {item.reporter}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Podcasts & Appearances */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
            <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
              <span>Podcasts &amp; Appearances</span>
              <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
            </div>
            <div className="border-t border-brand-navy">
              {appearances.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] gap-x-6 gap-y-1 py-7 border-b border-brand-sand"
                >
                  <span className="dateline text-brand-slate">{item.dateDisplay}</span>
                  <div>
                    <h3 className="font-display text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-brand-gray-blue leading-relaxed">{item.description}</p>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-brand-slate group-hover:text-brand-cyan transition-colors mt-1 justify-self-start sm:justify-self-end"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </AccessCheck>
    </>
  )
}

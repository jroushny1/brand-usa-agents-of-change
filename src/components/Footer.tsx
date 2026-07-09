import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <Link href="/" className="font-display text-2xl text-brand-navy hover:text-brand-cyan transition-colors">
            Janette <em>Roush</em>
          </Link>
          <p className="dateline text-brand-slate mt-3">Keynotes · Tools · Field Notes</p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <a href="mailto:jroush@thebrandusa.com" className="dateline text-brand-slate hover:text-brand-cyan transition-colors">
            jroush@thebrandusa.com
          </a>
          <a
            href="https://www.linkedin.com/in/janetteroush/"
            target="_blank"
            rel="noopener noreferrer"
            className="dateline text-brand-slate hover:text-brand-cyan transition-colors"
          >
            LinkedIn
          </a>
          <a href="/notes/feed.xml" className="dateline text-brand-slate hover:text-brand-cyan transition-colors">
            Field Notes RSS
          </a>
        </div>
      </div>
    </footer>
  )
}

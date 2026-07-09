import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full border-t border-brand-navy pt-10 pb-16">
        <p className="dateline text-brand-cyan mb-6">
          Page not found
        </p>
        <h1 className="font-display font-medium text-brand-navy leading-none text-8xl md:text-9xl mb-8">
          404
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-brand-gray-blue mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

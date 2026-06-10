import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-xs tracking-widest text-brand-cyan uppercase mb-4 font-semibold">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
          Page not found
        </h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-brand-cyan text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

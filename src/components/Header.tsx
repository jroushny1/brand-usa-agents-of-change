'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/notes', label: 'Field Notes' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/library', label: 'Resources' },
  { href: '/press', label: 'Press' },
  { href: '/ai-audit', label: 'AI Audit' },
  { href: '/story-lab', label: 'Story Lab' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-brand-navy bg-brand-paper/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-baseline py-5">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <span className="font-display text-2xl md:text-3xl leading-none text-brand-navy">
              Janette <em>Roush</em>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-baseline gap-6">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="dateline text-brand-navy hover:text-brand-cyan transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 text-brand-navy hover:text-brand-cyan transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-sand">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 dateline text-brand-navy hover:text-brand-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

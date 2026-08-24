import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Editorial personal palette (July 2026 redesign). The legacy token
          // names (blue/cyan/navy) are kept and remapped so every page shifts
          // to the new identity without touching each file.
          blue: '#8F1D55',      // deep fuchsia — links, hovers (was Brand USA blue)
          cyan: '#B12467',      // fuchsia accent (was Brand USA cyan)
          navy: '#0E1B2C',      // ink navy — headings, dark grounds
          sky: '#5A7EB4',       // legacy medium blue, kept for badges
          paper: '#F4EFE3',     // page ground — warm bond
          paper2: '#ECE5D3',    // alternate section ground
          sand: '#D9CFB8',      // hairline rules on paper
          slate: '#5A6068',     // datelines, captions, secondary text
          gray: {
            blue: '#4c5768',
            brown: '#7b6b6b',
            DEFAULT: '#878f9a',
          },
          accent: {
            blue: '#5a7eb4',
            cream: '#f4efe3',
          }
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        body: ['var(--font-newsreader)', 'Georgia', 'serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

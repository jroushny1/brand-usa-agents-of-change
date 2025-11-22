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
          blue: '#00549F',      // Primary brand blue
          cyan: '#00A9E0',      // Primary brand cyan
          navy: '#101F36',      // Alternate navy
          gray: {
            blue: '#4c5768',    // Complementary gray-blue
            brown: '#7b6b6b',   // Complementary gray-brown
            DEFAULT: '#878f9a', // Complementary light gray
          },
          accent: {
            blue: '#5a7eb4',    // Complementary medium blue
            cream: '#f4efe3',   // Complementary cream
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
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

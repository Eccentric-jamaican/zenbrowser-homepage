/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      center: true,
    },
    fontFamily: {
      junicode: [
        'Junicode, serif',
        {
          fontFeatureSettings: {
            swsh: 1,
          },
        },
      ],
    },
    extend: {
      screens: {
        '-sm': '@media (max-width: 639px)',
        '-md': '@media (max-width: 767px)',
        '-lg': '@media (max-width: 1023px)',
      },
      colors: {
        paper: 'var(--zen-paper)',
        // Brand: Meditation Fields
        mint: '#63DDBB',
        cream: '#FFF0B8',
        olive: '#263524',
        linen: '#F7F1E8',
        clay: '#E6B66E',
        ink: '#2E332A',
        // Coral kept as alias to brand signature mint for legacy refs
        coral: '#2F8F73',
        dark: 'var(--zen-dark)',
        subtle: 'var(--zen-subtle)',
        muted: 'var(--zen-muted)',
        'zen-blue': '#6287f5',
        'zen-green': '#63f78b',
      },
      fontFamily: {
        serif: ['Fraunces', 'Junicode', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        breathe: {
          '50%': { transform: 'scale(1.2)' },
          '0%, 100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // base palette centered on #5a0f18
          50:  '#f9eaea',
          100: '#f2d4d6',
          200: '#e5aab0',
          300: '#d87f8b',
          400: '#c14d5f',
          500: '#a83244',
          600: '#8a2433',
          700: '#741b28',
          800: '#5a0f18',   // primary background
          900: '#420b12',
          950: '#2e070c',
          bone:  '#f2eae7',
          haze:  '#bbaead',
          red:   '#d3505b',
          // Keep old names for backward compatibility
          bg: '#5a0f18',
          bg2: '#420b12',
          maroon: '#5a0f18',
          rose: '#d3505b',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

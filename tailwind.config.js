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
          bg: '#110607',
          bg2: '#1d0a0c',
          maroon: '#2a0b0e',
          red: '#b43b3b',
          rose: '#e25b5b',
          bone: '#f6f1ea',
          haze: '#c9bebe',
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

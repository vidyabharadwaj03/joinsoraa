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
          bone:  '#f2eae7',
          haze:  '#bbaead',
          red:   '#d3505b',
          50:  '#fbefef',
          100: '#f5dcdc',
          200: '#eab8b9',
          300: '#db8a90',
          400: '#c65964',
          500: '#ad3947',
          600: '#932a37',
          700: '#7b1f2c',
          800: '#5a0f18', // primary brand maroon
          900: '#4b0c14',
          950: '#2b080d', // darker base for page background
          // Keep old names for backward compatibility
          bg: '#5a0f18',
          bg2: '#420b12',
          maroon: '#5a0f18',
          rose: '#d3505b',
          // New dark burgundy palette
          burgundy: {
            light: '#4a1f1f',
            dark: '#3a1515',
            border: '#5a2525',
            'border-hover': '#7a3535',
          },
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

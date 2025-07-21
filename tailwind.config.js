/** @type {import('tailwindcss').Config} */
const { withAlphaVariable } = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: withAlphaVariable({
          50: '#fef7f0',
          100: '#feede0',
          200: '#fcd7c0',
          300: '#f9b895',
          400: '#f58d68',
          500: '#eb6800',
          600: '#d25a00',
          700: '#b04900',
          800: '#8e3a00',
          900: '#6b2c00',
        }),
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        medieval: ['Cinzel', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      aspectRatio: {
        theater: '21 / 9',
        portrait: '3 / 4',
      },
    },
  },
  plugins: [],
}

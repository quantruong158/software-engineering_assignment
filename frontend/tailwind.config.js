/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#032B91',
        'secondary-blue': {
          DEFAULT: '#1488DB',
          100: '#1278CE',
          200: '#0e65bf',
        },
      },
    },
  },
  plugins: [],
}
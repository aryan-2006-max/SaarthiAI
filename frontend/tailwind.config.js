/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0F2FE',
          DEFAULT: '#0EA5E9',
          dark: '#0369A1',
        },
        surface: '#F0F9FF',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0F2FE', // sky-100
          DEFAULT: '#0EA5E9', // sky-500
          dark: '#0369A1', // sky-700
        },
        surface: '#F0F9FF', // sky-50
      },
    },
  },
  plugins: [],
}

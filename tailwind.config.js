/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'principal': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/img/image1.jfif')",
        'secondary': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/img/image2.jfif')",
        'aux': "linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25), rgba(255,255,255,0.25))",
        'aux2': "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5))",
      },
      colors: {
        'primary': '#DFCF99',
        'secondary': '#866C5A',
        'tertiary': '#E0B44A',
      }
    },
  },
  plugins: [],
}
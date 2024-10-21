/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      },
      screens:{
        xs:'480px'
      }
    },
  },
  plugins: [],
}


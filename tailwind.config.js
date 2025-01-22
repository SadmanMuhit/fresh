/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FDBB57",
        secondary:"#CFA485",
        third:"#C4C4C4"
      }
    },
    container: { 
      center: true
    },
        fontFamily: {
        roboto:["Roboto", "sans-serif"],
        frank:["Frank Ruhl Libre", "serif"],
        poppins:["Poppins", "serif"]
      },
  },
  plugins: [],
}
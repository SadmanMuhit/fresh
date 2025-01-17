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
      }
    },
    container: { 
      center: true
    },
        fontFamily: {
        roboto:["Roboto", "sans-serif"]
      },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pryClr: '#06457d',
        secClr: '#18cb96',
        tetClr: '#373643',
        mainClr: '#ffffff',
      },
      fontFamily: {
        pryFF: ["Space Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [],
}


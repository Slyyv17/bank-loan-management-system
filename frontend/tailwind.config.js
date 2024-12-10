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
      },
    },
  },
  safelist: [
    'bg-green-100',
    'bg-yellow-100',
    'bg-red-100',
    'bg-blue-100',
    'bg-gray-100',
  ],
  plugins: [],
}

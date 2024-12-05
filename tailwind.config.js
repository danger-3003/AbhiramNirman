/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyan:"#E8F7FF",
        GStart:"#0039A6",
        GMiddle:"#274D96",
        GEnd:"#011F59",
      }
    },
  },
  plugins: [],
}
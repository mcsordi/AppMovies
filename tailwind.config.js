/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins"
      },
      backgroundImage: {
        banner: "url('/images/banner-favoritos.png')",
        error: "url('/images/error.png')"
      },
      backgroundColor: {
        blacktone: "#1c1c1c",
        blackOpacity: "#00000099"
      },
      screens: {
        450: "450px"
      }
    },
  },
  plugins: [],
}

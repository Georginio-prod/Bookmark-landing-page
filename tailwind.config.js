/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tcol: "#242A45",
        btn: "#FA5959",
      }
    },
  },
  plugins: [],
}


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
        menubg:'#242A45',
        ligne:"#979797",
        btn1:"#5267DF",
        btn2:"#F7F7F7",
        bgbtn:"#5267DF",
        
        
      },
      height: {
        92:'371px'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#213555",
          2: "#3E5879",
          3: "#213555",
          4: "#D8C4B6",
          5: "#F5EFE7",
          6: "#5DB996",
          7: "#F72C5B",
          8: "#1E201E",
          9: "#FCC737"
        }
      }
    },
  },
  plugins: [],
}


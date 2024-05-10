/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        input: "#f1f5f9",
        fundo: "#F5F5F5"
      }
    },
  },
  plugins: [],
}


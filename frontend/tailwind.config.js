/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaisei:['Kaisei Tokumin','serif'],
        poppins:['Poppins','serif']
      },
      colors: {
        'dark-teal': '#2C3531',
        'deep-teal': '#116466',
        'beige': '#D9B08C',
        'peach': '#FFCB9A',
        'pastel-green': '#D1E8E2',
      },
    },
  },
  plugins: [],
}


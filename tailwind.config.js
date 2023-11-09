/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],

  themes: {
    extend: {
      fontFamily: {
        'Gayathri': ['Gayathri', 'sans-serif']
      }
    },
  },

  plugins: [require("daisyui")],
}





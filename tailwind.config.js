/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bf962f",

          "secondary": "#e5f79b",

          "accent": "#ce9b04",

          "neutral": "#16181d",

          "base-100": "#fdfcfd",

          "info": "#7795d4",

          "success": "#208d5a",

          "warning": "#d7b209",

          "error": "#f34f83",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


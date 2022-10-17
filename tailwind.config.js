/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "668px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      display: ["last"],
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

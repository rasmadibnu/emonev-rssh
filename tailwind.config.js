/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#243763",
        secondary: "#ff6e31",
        accent: "#9384d1",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        sen: ["Sen"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

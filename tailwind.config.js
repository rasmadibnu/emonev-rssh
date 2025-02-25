/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  content: [],
  theme: {
    extend: {
      colors: {
        primary_old: "#243763",
        primary: "#3082c8",
        secondary_old: "#ff6e31",
        secondary: "#709600",
        accent_old: "#9384d1",
        accent: "#7a4790",
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

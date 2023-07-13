/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        sen: ["Sen"],
      },
    },
  },
  plugins: [],
};
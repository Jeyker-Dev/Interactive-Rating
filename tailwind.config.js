/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [
    require("./src/lib/mypreset"),
  ],
  theme: {
    fontFamily: {
      "overpass": ["Overpass", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}


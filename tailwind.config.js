/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,posthtml}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"BBH Bogle"', "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#5dc169",
          aqua: "#8ae0db",
          mint: "#b8f0ed",
          orange: "#ff9800",
          amber: "#ffc340",
        },
      },
    },
  },
  plugins: [],
};

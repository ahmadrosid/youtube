module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', "sans-serif"],
      },
      colors: {
        gpt: {
          100: "#F0F3FF",
          300: "#7D8398",
          400: "#565868",
          500: "#444753",
          600: "#40414E",
          700: "#343540",
          800: "#202123",
      }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
}

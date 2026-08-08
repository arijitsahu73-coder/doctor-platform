/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14213D",
        primary: "#0F5C4E",
        primaryDark: "#0A3F35",
        accent: "#C1440E",
        bg: "#F6F7F5",
        muted: "#5C6470",
        line: "#DFE3DE",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

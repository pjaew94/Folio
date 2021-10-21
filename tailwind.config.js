const { black } = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Sequel-Sans", "sans-serif"],
      serif: ["Shapiro", "sans-serif"],
    },
    colors: {
      red: "#EA0F1E",
      white: "#F9F9F9",
      gray: "#A8A8A7",
      black: black,
    },
    extend: {
      fontSize: {
        base: ["1.1rem", "2rem"],
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.5rem", "2.5rem"],
        "3xl": ["1.875rem", "3rem"],
        "4xl": ["2.25rem", "3.7rem"],
        // "5xl": ['2.5rem', '4.5rem'],
        "lg-vw": ["1.1vw", "1.7vw"],
        "2xl-vw": ["1.25vw", "1.7vw"],
        "3xl-vw": ["1.6vw", "2.5vw"],
        "8xl": ["6.5rem", "6.5rem"],
        "8xl-vw": ["6.2vw", "6.2vw"],
        "9xl": ["10vw", "10vw"],
      },
      screens: {
        "3xl": "2560px",
      },
      padding: {
        "30percent": "30%",
        "3xl": "22vw",
      },
      margin: {
        "3xl": "30vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

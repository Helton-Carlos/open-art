/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "650px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.5rem',
      '3xl': '3rem',
    },
    colors: {
      primary: "#002EF1",
      secondary: "#FFB802",
      warning: "#FF6711",
      error: "#FE3F61",
      success: "#009846",
      white: "#FFFFFF",
      green: "#5ed5a8",
      yellow: "#ffc82c",
      black: "#14142B",
      gray: "#999fae",
      "gray-dark": "#273444",
      "gray-light": "#F0F0F0",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};

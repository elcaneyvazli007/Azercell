/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
    },
  },
  colors: {
    primary: "#5c2483",
    primary2: "#7c6eb0",
    secondary: "#00B0DB",
    secondary2: "#F16828",
    black: "#222222",
    white: "#fff",
    grey: "#3f3f3f",

  }
  },
  plugins: [],
}
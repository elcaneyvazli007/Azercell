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
    secondary: "#00B0DB",
    black: "#222222",
    white: "#fff",
  }
  },
  plugins: [],
}
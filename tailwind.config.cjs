/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#BFBFBF",
        tertiary: "#0a0a0a",
        accent: "#00E5FF",
        "black-100": "#111111",
        "black-200": "#050505",
        "white-100": "#FFFFFF",
        "neon-cyan": "#00E5FF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 229, 255, 0.1)",
        "neon-glow": "0 0 20px rgba(0, 229, 255, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

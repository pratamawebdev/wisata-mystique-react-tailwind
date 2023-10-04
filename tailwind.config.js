/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1024px",
        "2xl": "1200px",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};

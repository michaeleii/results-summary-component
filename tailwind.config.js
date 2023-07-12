/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_slate_blue: "hsl(252, 100%, 67%)",
        bg_royal_blue: "hsl(241, 81%, 54%)",
        circle_violet: "hsla(256, 72%, 46%, 1)",
        circle_persian_blue: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

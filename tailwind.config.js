/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ms-madi": ['"Ms Madi"', "cursive"],
      },
      colors: {
        primary: "#2684de",
        light: "#FFFFFF1A",
        gray: "#9DA1B4",
        lightGray: "#F4F6FA",
        orange: "#FA9556",
      },
    },
  },
  plugins: [],
};

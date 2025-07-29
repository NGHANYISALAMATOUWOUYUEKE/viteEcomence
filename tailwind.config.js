/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 20px #00000015",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        "max-lg": { max: "1050px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
      },
    },
  },
  plugins: [],
};

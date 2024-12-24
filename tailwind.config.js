/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averia: ["Averia Serif Libre", "serif"],
      },
      colors: {
        heading: "#000000",
        text: "#898b8c",
        skillText: "#909090",
        skillBg: "#f3f3f3",
      },
    },
  },
  plugins: [],
};

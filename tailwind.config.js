/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#d9dfea",
        text: "#90a0b9",
        skillText: "#58dfce",
        skillBg: "#152b39",
      },
    },
  },
  plugins: [],
};

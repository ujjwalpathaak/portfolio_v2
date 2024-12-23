/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#000000",
        text: "#898b8c  ",
        skillText: "#F5F5F5",
        skillBg: "#5e5959",
      },
    },
  },
  plugins: [],
};

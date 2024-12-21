/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10172A",
        secondary: "#9333EA", // Purple
        textPrimary: "#e2e8f0", // Amber
        textSecondary: "#94A3B8", // Amber
        muted: "#6B7280", // Gray
        success: "#10B981", // Green
        error: "#EF4444", // Red
      },
    },
  },
  plugins: [],
};

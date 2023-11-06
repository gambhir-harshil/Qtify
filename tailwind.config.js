/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34C94B",
        secondary: "#121212",
      },
      boxShadow: {
        white: "0 2px 8px 0 rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};

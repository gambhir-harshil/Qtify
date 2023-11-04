/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34C94B",
        secondary: "#121212",
      },
    },
  },
  plugins: [],
};

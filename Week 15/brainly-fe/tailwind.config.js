/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#ebe7fe",
          500: "#3e38q7",
          600: "#5046e4",
        },
      },
    },
  },
  plugins: [],
};

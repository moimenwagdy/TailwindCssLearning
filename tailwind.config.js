/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["../TailwindLearning/**/*.{html,js}"],
  purge: [
    "./TailwindLearning/**/*.{js,jsx,ts,tsx}",
    "../TailwindLearning/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

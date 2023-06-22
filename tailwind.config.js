/** @type {import('tailwindcss').Config} */
module.exports = {
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

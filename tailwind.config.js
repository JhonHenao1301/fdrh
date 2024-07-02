/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      opacity: {
        30: ".3",
      },
    },
    colors: {
      "primary-10": "#BBDEFB",
      "primary-20": "#2196F3",
      "primary-30": "#0369a1",
      "primary-text": "#212121",
      accent: "#607D8B",
      "white-10": "#f1f5f9",
      "gray-10": "#cbd5e1",
      "gray-20": "#BDBDBD",
      "gray-30": "#757575",
    },
  },
  plugins: [],
};

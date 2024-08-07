/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      opacity: {
        30: ".3",
      },
      aspectRatio: {
        "5/2": "5 / 2",
      },
    },
    colors: {
      "primary-10": "#bae5fd",
      "primary-20": "#6dafed",
      "primary-30": "#0369a1",
      "primary-40": "#1e293b",
      "primary-50": "#0f172a",
      "primary-text": "#212121",
      accent: "#607D8B",
      "white-10": "#f8fafc",
      "white-20": "#e2e8f0",
      "gray-10": "#cbd5e1",
      "gray-20": "#BDBDBD",
      "gray-30": "#757575",
      "gray-50": "#292929",
      "red-5": "#f87171",
      "red-10": "#ef4444",
      "red-20": "#b91c1c",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cormorant: ["Cormorant"],
    },
    fontSize: {
      standart: "12px",
    },
    colors: {
      "light-turquoise": "#43FFD2",
      cherry: "#7D2253",
      pink: "#D978AC",
    },
    extend: {
      colors: {
        "dark-green": "#142B2B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          Poppins: ["Poppins", , "sans-serif"],
        },
        colors: {
          primary: {
            yellow: {
              50: "#fff050",
              100: "#fbd126",
            },
          },
          secondary: {
            blue: {
              50: "#15212B",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

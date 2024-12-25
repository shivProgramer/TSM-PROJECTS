// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#096BBA",
          DEFAULT: "#195180",
          dark: "#003F6D",
        },
        neutral: {
          light: "#F3F4F6",
          DEFAULT: "#E5E7EB",
          dark: "#374151",
        },
        warning : {
          light:"#fda246",
          dark: "#FF7F00",
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/frontend/components/**/*.{jsx,js,tsx,ts}",
    "./app/frontend/layouts/**/*.{jsx,js,tsx,ts}",
    "./app/frontend/pages/**/*.{jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
};

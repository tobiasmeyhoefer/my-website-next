/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ["var(--space-grotesk)", ...fontFamily.sans]
      }
    },
    colors: {
      text: "#272727",
      white: "#ffffff",
      middleGray: "#c2c2c2",
      lightGray: "#f0f0f0",
      test: "#ff0000",
      test2: "#ffff00"
    }
  },
  plugins: [],
}


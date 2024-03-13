/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    colors: {
      text: "#272727",
      white: "#ffffff",
      lightGray: "#f0f0f0",
      test: "#ff0000",
      test2: "#ffff00"
    }
  },
  plugins: [],
}


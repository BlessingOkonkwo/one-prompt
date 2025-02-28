/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/**/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/styles/**/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
      }
    },
  },
  plugins: [],
};

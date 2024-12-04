module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
      animation: {
        "flow-colors": "flow 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

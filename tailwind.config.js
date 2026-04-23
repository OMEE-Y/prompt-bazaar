/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Needed for your dark/light toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Added jsx and tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
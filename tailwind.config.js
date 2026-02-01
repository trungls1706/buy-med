/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "pharmacy-green": "#006B3F",
        "pharmacy-price": "#006B3F",
        "pharmacy-rx": "#ef4444",
        "pharmacy-rxLight": "#fee2e2",
      },

      fontFamily: {
        quicksand: ["Quicksand_400Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

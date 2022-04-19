module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'lightPurple': '#412174',
        'darkPurple': '#1F082F',
        'orange': '#FF6C00'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
],
}

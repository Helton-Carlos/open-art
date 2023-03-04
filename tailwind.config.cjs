/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#002EF1',
      'secondary': '#FFB802',
      'warning': '#FF6711',
      'error': '#FE3F61',
      'success': '#009846',
      'white': '#fff',
      'green': '#5ed5a8',
      'yellow': '#ffc82c',
      'gray': '#999fae',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

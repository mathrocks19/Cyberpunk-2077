/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FDF800',
      },
      fontFamily: {
        'oxanium': ['Oxanium', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};

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
        // Adicione suas fontes aqui
        'barlow': ['Barlow', 'sans-serif'],
        'exo2': ['Exo 2', 'sans-serif'], 
        'oxanium': ['Oxanium', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
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

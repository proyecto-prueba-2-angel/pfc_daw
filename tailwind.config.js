/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%'
      },
      colors: {
        'color-megahogar': 'rgb(1,37,123)', // Azul de Megahogar
        'color-cocinas': '#ffc107', // Amarillo de Megahogar CocinasÇ
        'custom-orange': 'rgba(255,39,7,1)'
      },
      boxShadow: {
        'second-border': '0 0 0 4px #ffc107' // Sombra simulando el segundo borde amarillo
      },
      variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover']
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms')
  ]
}

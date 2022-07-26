/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      width:{
        'w-80': '80px',
        'w-step': '16%',
      },
      height:{
        'h-80': '80px'
      },
      lineHeight:{
        'leading-56': '56px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

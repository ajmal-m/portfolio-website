/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",  "./src/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {

      // background colors
      'backgroundImage':{
        'blue-shadow':'radial-gradient(circle at 1003px 96px, rgb(10, 31, 68), rgb(9, 28, 61), rgb(8, 24, 53), rgb(7, 21, 45), rgb(5, 18, 37), rgb(4, 15, 30), rgb(3, 12, 23), rgb(2, 9, 17))',
      },


      // colors
      'colors':{
        'primary':'#fff'
      }
    },
  },
  plugins: [],
}


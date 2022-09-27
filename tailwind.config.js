/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors : { 
      'primary-purple':'#9a3ef7',
      'primary-yellow':'#eebc40'
     }
    },
  },
  plugins: [],
}
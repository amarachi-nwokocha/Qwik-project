/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue' : '#0059AA',
      'light-blue' : '#0059AA',
      'gray' : '#555555',
      'white' : '#FFFFFF'
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }

  },
  plugins: [],
}

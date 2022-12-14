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
      'white' : '#FFFFFF',
      'green' : '#53E0AD'
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }

  },
  plugins: [
   require("daisyui")
  ],
    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
     
    },
}

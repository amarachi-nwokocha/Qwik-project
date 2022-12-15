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
      'green' : '#53E0AD',
      'sky-blue': '#CCE7FF',
      'leaf': '#033217'
      
    },

    screens: {
      sm: '640px',
       // @media (min-width: 640px){....}
  
      md: '768px',
      // @media (min-width: 768px){....}
  
      lg: '1024px',
      // @media (min-width: 1024px){....}
  
      xl: '1280px',
      // @media (min-width: 1280px){....}
  
      '2xl': '1536px'
      // @media (min-width: 1536px){....}
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

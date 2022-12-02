/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '375px', 'max': '430px'},
        // => @media (min-width: 640px) { ... }
  
        'md': {'min': '768px', 'max': '1190px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': {'min': '1200px', 'max': '1440px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': {'min': '1500px', 'max': '1635px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
      },
    },
  },
  plugins: [require("daisyui")],
}

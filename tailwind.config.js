/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
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

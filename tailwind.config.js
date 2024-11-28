/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    screens: {
      'min':'393px',
      'pm':'430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
     '3xl': '1920px',
      
    },
    extend: {
      fontFamily: {
        
        poppins: ['"Poppins"', "sans-serif"], 
      },
    },
  },
  plugins: [],
};
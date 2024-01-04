/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3860D0',
        
        darkBG1: '#121F3D',
        darkBG2: '#0F182E',
        darkAccent: '#4D6AAE',
        darkText: '#F5F5F5',
  
        lightBG1: '#F5F8FF',
        lightBG2: '#E3ECFF',
        lightAccent: '#81A3FF',
        lightText: '#222222'
      },
    },
  },
  plugins: [],
  darkMode: "class"
}


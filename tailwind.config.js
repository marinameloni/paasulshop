/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['router-link-active'],
  theme: {
    fontFamily: {
      'kaisei': ['Kaisei Opti', 'serif'], // Adding Kaisei Opti
      'poppins': ['Poppins', 'sans-serif'], // Adding Poppins
      'sans': ['Inter', 'sans-serif'] // Keeping Inter
    },
    extend: {
      colors: {
        'paasul-pink1': '#EED4D0',
        'paasul-pink2': '#F4E7E8',
        'paasul-pink3': '#EECECA',
      }
    } // Removed the comment and correctly closed the theme object here
  },
  plugins: [] 
}
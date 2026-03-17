/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        homeoGreen: '#2E7D32',
        lightGreyGreen: '#F1F8F4'
      }
    }
  },
  plugins: []
};

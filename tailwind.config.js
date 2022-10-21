/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xs' : '320px',
      'xs' : '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

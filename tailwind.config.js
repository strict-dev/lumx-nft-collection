/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        primary: {
          one: '#A71A6B',
          two: '#7B209B'
        },
        secondary: '#8775D0',
        tertiary: '#98BBAF',
        quaternary: '#80CCF4',
        support: {
          error: '#D03025',
          success: '#4DBC19'
        },
        neutral: {
          100: '#FFFFFF',
          200: '#FEFEFE',
          300: '#FCFCFC',
          400: '#EFF0F6',
          500: '#D9DBE9',
          600: '#6E7191',
          700: '#4E4B66',
          800: '#262338',
          900: '#14142B'
        }
      }
    }
  },
  plugins: []
}

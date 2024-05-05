import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        'n25': '#F7F8FD',
        'n50': '#EFF1F4',
        'n100': '#DFE3E9',
        'n500': '#5D718F',

        'loading': '#384456',


      },
      fontFamily: {
        body: ['Nunito'],
      },

    },
  },
  plugins: [
    typography
  ],
}


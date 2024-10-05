/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#9d94d7',
        },
        secondary: {
          500: '#FFF7F7',
        },
      },
      boxShadow: {
        ...Array.from({ length: 96 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`neo-${num}`] = `${num * 2}px ${num * 2}px 0px #000`;
          acc[`neo-left-${num}`] = `${-num * 2}px ${num * 2}px 0px #000`;
          return acc;
        }, {}),
        'smooth-top': '0 -4px 6px -1px rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif']
      }
    },
  },
  plugins: [],
}


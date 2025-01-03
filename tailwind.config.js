/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00E5FF',
          DEFAULT: '#0066FF',
          dark: '#1E0B4B',
        },
        background: {
          light: '#F8FBFF',
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
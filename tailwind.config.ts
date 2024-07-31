/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#121010',
      'dark-grey': '#1B1B1B',
      grey: '#212121',
      white: '#D9D9D9',
      blue: '#1fb6ff',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      red: '#DC143C',
      'grad-green': '#02FFC2',
      'grad-blue': '#03E1FF',
      'light-black': '#131313',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        tauri: ['Tauri', 'sans-serif'],
      },
      typography: {
        'social-icon': {
          color: 'red',
          fontSize: '1em',
          '&:hover': {
            color: '#02FFC2',
          },
        },
        'social-icon-hover': {
          '&:hover': {
            color: '#02FFC2',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

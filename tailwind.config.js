/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette
        gold: {
          DEFAULT: '#B4934C',
          light: '#D4B36B',
          dark: '#967B3E',
        },
        platinum: {
          DEFAULT: '#E5E5E5',
          light: '#F5F5F5',
          dark: '#A3A3A3',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          secondary: '#141414',
          tertiary: '#1A1A1A',
        },
        accent: {
          blue: '#1E3A8A',
          copper: '#AE6B56',
          emerald: '#064E3B',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cormorant', 'serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra': '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(180, 147, 76, 0.1)',
        'premium': '0 25px 50px -12px rgba(180, 147, 76, 0.15)',
      },
      animation: {
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
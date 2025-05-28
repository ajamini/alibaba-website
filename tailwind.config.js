/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf3',
          100: '#ccd5e8',
          200: '#99abcf',
          300: '#6681b7',
          400: '#33579f',
          500: '#0A2463', // Main primary color
          600: '#091d50',
          700: '#07163d',
          800: '#05102a',
          900: '#020817',
        },
        secondary: {
          50: '#e7f5f9',
          100: '#ceebf2',
          200: '#9dd7e6',
          300: '#6cc3d9',
          400: '#3bafcc',
          500: '#118AB2', // Main secondary color
          600: '#0e728e',
          700: '#0a596b',
          800: '#073f48',
          900: '#032025',
        },
        accent: {
          50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd599',
          300: '#ffc066',
          400: '#ffab33',
          500: '#FF9F1C', // Main accent color
          600: '#cc7f16',
          700: '#995f11',
          800: '#66400b',
          900: '#332006',
        },
        success: {
          500: '#06D6A0',
        },
        warning: {
          500: '#FFD166',
        },
        error: {
          500: '#EF476F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
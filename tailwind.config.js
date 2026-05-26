/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4F8A',
          50:  '#EBF2FB',
          100: '#C5D9F5',
          200: '#9EC0EF',
          300: '#78A7E9',
          400: '#518EE3',
          500: '#2B75DD',
          600: '#1B4F8A',
          700: '#153E6C',
          800: '#0F2D4E',
          900: '#091B30',
        },
        secondary: {
          DEFAULT: '#2D8653',
          50:  '#E9F5EE',
          100: '#C3E4D0',
          200: '#9DD3B2',
          300: '#77C294',
          400: '#51B176',
          500: '#2D8653',
          600: '#246A42',
          700: '#1B4F31',
          800: '#123420',
          900: '#09190F',
        },
        accent: {
          DEFAULT: '#F2A900',
          50:  '#FEF6E0',
          100: '#FCE9B3',
          200: '#FADB86',
          300: '#F8CE59',
          400: '#F6C12C',
          500: '#F2A900',
          600: '#C28700',
          700: '#916500',
          800: '#614300',
          900: '#302200',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

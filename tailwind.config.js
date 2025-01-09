/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A192F 0%, #1A365D 100%)',
        'card-gradient': 'linear-gradient(to bottom right, #FFFFFF, #F3F4F6)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FDB347 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A192F 0%, #1E3A8A 100%)',
        'light-gradient': 'linear-gradient(to bottom, #F8FAFC, #EFF6FF)',
      },
      backgroundSize: {
        200: '200% auto', // For smooth hover transitions
      },
      backgroundPosition: {
        'position-right': 'right center', // Hover animation position
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxury': {
          50: '#fdfdf9',
          100: '#faf8f0',
          200: '#f4f0e0',
          300: '#ebe4c8',
          400: '#ddd4a8',
          500: '#d4c78a',
          600: '#c9b870',
          700: '#b8a55c',
          800: '#9a8a4f',
          900: '#7f7242',
        },
        'platinum': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'champagne': {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf1dc',
          300: '#f5e6c1',
          400: '#eed89e',
          500: '#e5c574',
          600: '#d9b054',
          700: '#c49843',
          800: '#a17c39',
          900: '#846532',
        },
        'midnight': {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0bbc9',
          400: '#8596ab',
          500: '#677991',
          600: '#536178',
          700: '#445062',
          800: '#3b4453',
          900: '#343c47',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d9b054 0%, #e5c574 50%, #eed89e 100%)',
        'premium-gradient': 'linear-gradient(135deg, #343c47 0%, #3b4453 50%, #445062 100%)',
      }
    },
  },
  plugins: [],
};
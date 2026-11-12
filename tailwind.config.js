/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FEEDO Luxury Palette: Dark Navy + Champagne Gold + Warm Ivory + Cream
        navy: {
          950: '#071426', // Primary dark navy
          900: '#09172A', // Deep background
          850: '#0c1b30',
          800: '#101F35', // Secondary navy
          750: '#13243d',
          700: '#172b47',
          600: '#223c61',
          500: '#34527d',
        },
        gold: {
          50: '#FDFBF5',
          100: '#FAF0E0',
          200: '#F4D49A', // Light gold
          300: '#E8C581',
          400: '#E0B86F',
          500: '#D9AD63', // Champagne gold
          600: '#C49646',
          700: '#A97E32',
          800: '#856122',
        },
        ivory: {
          50: '#FDFBF8',
          100: '#FFF7EC', // Cream surface
          200: '#F7EBDD', // Warm ivory
          300: '#EFE0CD',
          400: '#DEC9B1',
          500: '#C7B197',
        },
        cream: {
          DEFAULT: '#FFF7EC',
          surface: '#FFF7EC',
          warm: '#F7EBDD',
        },
        charcoal: {
          950: '#141620',
          900: '#202331', // Dark text
          800: '#333748',
          700: '#4B5162',
          600: '#646B7E',
          500: '#8D929B', // Muted text
          400: '#A8ADB7',
          300: '#C6CAD2',
        },
        emerald: {
          50: '#edf7f1',
          100: '#d7efe1',
          200: '#b2dfc5',
          300: '#85caa3',
          400: '#65A77B', // Success green
          500: '#4d8e64',
          600: '#3b7450',
          700: '#315d42',
          800: '#294b36',
          900: '#233f2e',
        },
        ink: {
          DEFAULT: '#202331',
          2: '#333748',
          3: '#8D929B',
          4: '#A8ADB7',
          5: '#C6CAD2',
        },
        accent: {
          DEFAULT: '#D9AD63',
          hover: '#C49646',
          soft: 'rgba(217, 173, 99, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(7, 20, 38, 0.06), 0 2px 6px -1px rgba(7, 20, 38, 0.04)',
        'lift': '0 12px 30px -4px rgba(7, 20, 38, 0.12), 0 4px 10px -2px rgba(7, 20, 38, 0.06)',
        'gold': '0 4px 24px -2px rgba(217, 173, 99, 0.25)',
        'gold-glow': '0 0 25px rgba(217, 173, 99, 0.35)',
        'navy': '0 20px 40px -15px rgba(7, 20, 38, 0.45)',
        'premium': '0 10px 30px -5px rgba(7, 20, 38, 0.08), 0 0 0 1px rgba(217, 173, 99, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4D49A 0%, #D9AD63 100%)',
        'navy-gradient': 'linear-gradient(180deg, #071426 0%, #09172A 100%)',
        'navy-card': 'linear-gradient(145deg, #101F35 0%, #071426 100%)',
        'cream-card': 'linear-gradient(180deg, #FFFFFF 0%, #FFF7EC 100%)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FBF3F5',
          100: '#F3DCE2',
          200: '#E4AFBF',
          300: '#D28299',
          400: '#B85470',
          500: '#93213E',
          600: '#7A1B34',
          700: '#5E1428',
          800: '#420E1C',
          900: '#280812',
          950: '#160409',
        },
        ink: {
          DEFAULT: '#0B0B0D',
          800: '#141417',
          700: '#1D1D21',
        },
        paper: '#FAF8F6',
        line: '#E7E1DD',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'trace-radial': 'radial-gradient(circle at 1px 1px, #E7E1DD 1px, transparent 0)',
        'maroon-gradient': 'linear-gradient(135deg, #93213E 0%, #5E1428 60%, #280812 100%)',
        'ink-gradient': 'linear-gradient(135deg, #1D1D21 0%, #0B0B0D 100%)',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(122, 27, 52, 0.25)',
        card: '0 1px 2px rgba(11,11,13,0.04), 0 8px 24px -8px rgba(11,11,13,0.08)',
      },
      clipPath: {
        hex: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      },
      animation: {
        'trace-draw': 'trace-draw 2.4s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        'trace-draw': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

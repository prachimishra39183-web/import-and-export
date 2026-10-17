/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f3f6fb',
          100: '#e6ecf5',
          200: '#cfd9ea',
          300: '#a9b8d4',
          400: '#6b7a99',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#0b1220',
          950: '#04060f',
        },
        sea: {
          50: '#ecfbff',
          100: '#cff5ff',
          200: '#9aebff',
          300: '#5edaff',
          400: '#22c2f0',
          500: '#0aa3d4',
          600: '#0a82ab',
          700: '#0f6685',
          800: '#15536d',
          900: '#16455b',
        },
        amber: {
          50: '#fff8ec',
          100: '#ffefcf',
          400: '#ffb547',
          500: '#ff9d2e',
          600: '#f08412',
        },
        coral: {
          400: '#ff6b6b',
          500: '#f94444',
        },
        cloud: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e8eef6',
        },
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        sail: {
          '0%': { transform: 'translateX(-12%)' },
          '100%': { transform: 'translateX(112%)' },
        },
        wave: {
          '0%,100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) scaleY(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        sail: 'sail 28s linear infinite',
        wave: 'wave 7s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        rise: 'rise 0.7s ease-out both',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
      },
    },
  },
  plugins: [],
};

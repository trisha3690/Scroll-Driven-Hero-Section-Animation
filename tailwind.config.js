/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#050608',
          900: '#0a0c10',
          800: '#11141c',
          700: '#1a1f2c',
        },
        volt: {
          DEFAULT: '#45db7d',
          lime: '#def54f',
          cyan: '#6ac9ff',
          amber: '#fa7328',
        },
      },
      boxShadow: {
        'volt-glow': '0 0 40px -8px rgba(69, 219, 125, 0.45)',
        'lime-glow': '0 0 40px -8px rgba(222, 245, 79, 0.35)',
      },
    },
  },
  plugins: [],
};

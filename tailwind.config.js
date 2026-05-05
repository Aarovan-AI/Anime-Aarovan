/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aarovan.AI Brand Palette
        // Primary - Light Blue
        'brand': '#509DD0',
        // Secondary - Dark Navy
        'navy': '#244357',
        // Tertiary - Muted Blue-Gray
        'sky-blue': '#89A9BA',

        // Background & Surface
        'page-bg': '#DBDCDC',
        'card-white': '#E8EAEB',
        'elevated': '#F0F1F2',
        'accent-surface': '#D0E4F0',
        // Mint alias (same as brand)
        'mint': '#509DD0',
        // Text & Neutral
        'heading': '#1A2A35',
        'body-text': '#344D5E',
        'muted': '#6B8A9E',
        'border': '#A8C0D0',
        // Legacy aliases for backwards compatibility
        primary: '#509DD0',
        'primary-light': '#244357',
        'primary-dark': '#89A9BA',
        accent: '#509DD0',
        gold: '#509DD0',
        surface: {
          'container-lowest': 'rgba(36, 67, 87, 0.02)',
          'container-low': 'rgba(36, 67, 87, 0.04)',
          'container': 'rgba(36, 67, 87, 0.06)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

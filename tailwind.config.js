/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Montserrat', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        streetlight: {
          dark: '#0B0F14',
          charcoal: '#1a1f28',
          gold: '#F4B942',
          'gold-light': '#f5c456',
          'gold-dark': '#d97706',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'shimmer-delay': 'shimmer-delay 4s ease-in-out infinite 1s',
        'float': 'float 15s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.6' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        },
        'shimmer-delay': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.4' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


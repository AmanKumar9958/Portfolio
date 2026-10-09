/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0b0c0e',
          secondary: '#121316',
          tertiary: '#18191d',
          elevated: '#1f2026',
        },
        accent: {
          DEFAULT: '#ff5500',
          orange: '#ff5500',
          hover: '#ff6b1a',
          muted: 'rgba(255, 85, 0, 0.12)',
          subtle: 'rgba(255, 85, 0, 0.05)',
        },
        txt: {
          primary: '#f4f4f6',
          secondary: '#a1a1aa',
          muted: '#71717a',
          dim: '#4b4b55',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'accent-glow': '0 0 25px rgba(255, 85, 0, 0.25)',
        'accent-soft': '0 0 50px rgba(255, 85, 0, 0.12)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}
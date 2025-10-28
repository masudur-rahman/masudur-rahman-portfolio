/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        'lg': '950px',
      },
      colors: {
        primary: '#2563eb',
        secondary: '#1d4ed8',
        bg: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#0f172a',
          dark: '#f0f0f0',
        },
      },
    },
  },
  plugins: [],
}

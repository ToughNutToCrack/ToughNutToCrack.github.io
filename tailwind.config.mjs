/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: '#1a1814',
        paper: '#f5f2ec',
        accent: '#c17f3d',
        muted: '#8a8278',
      },
      aspectRatio: {
        '1/1': '1 / 1',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}', './App.tsx'],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;



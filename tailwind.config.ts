import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        museoModerno: ['var(--font-museoModerno)'],
        montserrat: ['var(--font-montserrat)'],
      },
      textColor: {
        primary: '#ffffff',
        accent: '#06b6d4',
      },
      backgroundImage: {
        'hero-pattern': "url('/background.png')",
      },
      colors: {
        custom: {
          primary: '#202237',
          secondary: '#1C1E30',
          tertiary: '#2A2C3D',
          quaternary: '#212337',
        },
      },
    },
  },
  plugins: [],
};

export default config;

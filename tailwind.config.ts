import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'active-yellow': '#ffac00',
      },
      maxWidth: {
        container: '460px',
      },
      width: {
        modal: '400px',
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.button-active': {
          '@apply text-[#ffac00] border-[#ffac00]': {},
        },
      });
    },
  ],
};

export default config;

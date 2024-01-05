/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      monday: [
        'Figtree',
        'Roboto',
        'Noto Sans Hebrew',
        'Noto Kufi Arabic',
        'Noto Sans JP',
        'sans-serif',
      ],
    },
    extend: {
      gridTemplateColumns: {
        monday: 'auto 40%',
        balance: '1fr auto 1fr',
      },
      flexDirection: {
        unset: 'unset',
      },
      colors: {
        'ui-border-color': '#C3C4D6',
        'primary-text-color': '#323338',
      },
    },
  },
  plugins: [],
};

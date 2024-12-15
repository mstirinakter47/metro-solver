/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to bottom, #1B1B31, #2B1E36, #1B1B31)',
      },
      // cardLayout: {
      //   'custom-gradient':
      //     'linear-gradient(to bottom, #1B1B31, #2B1E36, #1B1B31)',
      // },
    },
  },
  plugins: [],
};

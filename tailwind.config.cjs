module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#D83B18',
        'secondary': '#871900',
        'neutral-light': '#F9FAFB',
        'neutral-middle': '#777777',
        'neutral-dark': '#333333',
      },
      fontFamily: {
        'display': ['Oswald'],
        'body': ['Open-Sans'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

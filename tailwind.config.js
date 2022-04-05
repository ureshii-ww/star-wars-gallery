module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'peopleList': 'auto 1fr',
      },
      minHeight: {
        'peopleList': 'calc(100vh - 3rem - 4rem)',
        'personPage': 'calc(100vh - 3rem)'
      }
    },
  },
  plugins: [],
}

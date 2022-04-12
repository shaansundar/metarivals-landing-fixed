module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'Gold': '#EDB70F',
        'Gradient': 'linear-gradient(180deg, rgba(109,255,255,1) 0%, rgba(42,120,251,1) 100%)',
        'Light': '#6dffff',
        'Dark': '#2a78fb',
      },
      fonts:{
        'ThunderboldDemo':'ThunderboldDemo',
        'Poppins':'Poppins',
      }
    },
  },
  plugins: [],
}
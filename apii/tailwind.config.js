module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      colors: {
        'whiteBlack': 'rgba(100, 100, 100, 2)',
      },
      gridTemplateColumns: {
        '2fr': '1fr 7fr;',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
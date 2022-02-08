module.exports = {
  content: [
      './public/**/*.html',
      './src/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto',  'sans-serif'],
      },
      screens: {
        table: '890px'
      },
      colors: {
        'grayf7': '#f7f7f7',
        'grayf8': '#f8f8f8',  
        'grayd6': '#d6d6d6',
      },
      width: {        
        '170': '10.625rem',
        '153': '9.5625rem',     
      },
      spacing: {
        '21px': '21px',
        '8px': '8px',
        '10px': '10px',
        '5.85px': '5.85px',
        '5.16px': '5.16px',
      },
    },
  },
  plugins: [],
}

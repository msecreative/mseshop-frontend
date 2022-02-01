module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: '414px',
      sm: '576px',
      md: '768px',
      lg: '1024',
      xl: '1280px',
      xxl: '2000px',
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        mseheading: "'Arvo', serif",
        msebody: "'Merriweather', serif"
      },

      colors: {
        "hcolor": "#333333",
        "scolor": "#27AE60",
        "lcolor": "#828282",
        "extracolor": "#FF5E4D",
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
}

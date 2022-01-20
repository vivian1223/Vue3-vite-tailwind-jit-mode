module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.vue', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container: {
          center: true,
          screens: {
              sm: "375px",
          }
      },
      margin: {
          '1': '16px',
          '2': '20px',
          '3': '24px',
          '4': '28px',
      },
      padding: {
          '1': '8px',
          '2': '16px',
          '3': '24px',
          '4': '48px',
          '5': '32px',
          '6': '64px',
      },
      borderRadius: {
          '1': '8px',
          '2': '16px',
      },
      colors: {
          primary: '#EF7B1B',
          secondary: '#464462',
          info: '#7B7B7B',
          transparent: 'transparent'
      },
      fontSize: {
        '1': '16px',
        '2': '20px',
        '3': '24px',
        '4': '28px',
        '5': '36px'
      },
      extend: {
          lineHeight: {
              '1': '16px',
              '2': '20px',
              '3': '28px',
              '4': '52px',
          }
      }
  },
  variants: {
      extend: {},
  },
  plugins: [],
};

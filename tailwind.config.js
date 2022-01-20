module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.vue', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container: {
          center: true,
          screens: {
              sm: "767px",
              md: "1025px",
              lg: "1680px",
          }
      },
      margin: {
          '1': '8px',
          '2': '16px',
          '3': '24px',
          '4': '48px',
          '5': '32px',
          '6': '64px',
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
          primaryColor: {
              100: '#FFE4BC',
              200: '#FEC36B',
              300: '#FFA31A',
              400: '#FF7A00',
          },
          successColor: {
              100: '#7ADD7E',
              200: '#34B83A',
              300: '#1D9D22',

          },
          dangerColor: {
              100: '#FF8E8E',
              200: '#FD5959',
              300: '#E03535',
          },
          darkColor: {
              100: '#767778',
              200: '#5F6061',
              300: '#49494B',
              400: '#323334',
              500: '#1B1C1E'
          },
          lightColor: {
              100: '#FFFFFF',
              200: '#F4F4F4',
              300: '#E8E8E8',
              400: '#DDDDDD',
              500: '#D1D2D2'
          }
      },
      fontSize: {
          '1': '12px',
          '2': '14px',
          '3': '18px',
          '4': '20px',
          '5': '36px',
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

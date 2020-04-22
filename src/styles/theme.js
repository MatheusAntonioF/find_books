import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#6200ea',
      main: '#651fff',
      light: '#b388ff',
      contrastText: '#ffff'
    },
    secondary: {
      dark: '#dd2c00',
      main: '#ff5722',
      light: '#ff9e80'
    }
  }
});


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       dark: '#311b92',
//       main: '#651fff',
//       light: '#b388ff',
//     },
//   }
// })

export default theme;

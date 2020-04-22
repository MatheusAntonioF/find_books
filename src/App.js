import React from 'react';

import Home from './pages/Home';

import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;

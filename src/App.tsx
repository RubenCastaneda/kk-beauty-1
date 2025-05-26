import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-bottom: 60px;  /* reserve space for footer */
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
  </ThemeProvider>
);

export default App;

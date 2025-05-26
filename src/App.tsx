import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './pages/Home';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Hero />
    <Home />
  </ThemeProvider>
);

export default App;

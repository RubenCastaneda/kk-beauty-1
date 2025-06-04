import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewsletterPage from './pages/NewsletterPage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     padding-top: 80px;    /* space for fixed header */
     padding-bottom: 60px; /* space for footer */
     background: ${({ theme }) => theme.colors.background};
   }
 `;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;

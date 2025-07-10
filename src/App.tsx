import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewsletterPage from './pages/NewsletterPage';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Products from './pages/Products';

const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     padding-top: 0px;    /* space for fixed header */
     padding-bottom: 0px; /* space for footer */
     background: ${({ theme }) => theme.colors.background};
   }
 `;

const VintageBackground = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.1) 2%,
      rgba(255, 255, 255, 0.05) 4%,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 0) 85%,
      rgba(255, 255, 255, 0.05) 96%,
      rgba(255, 255, 255, 0.1) 98%,
      rgba(255, 255, 255, 0.15) 100%
    ),
    #000;

  @media (max-width: 600px) {
    background: #000;
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <VintageBackground>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
        </Routes>
        <Footer />
      </VintageBackground>
    </Router>
  </ThemeProvider>
);

export default App;

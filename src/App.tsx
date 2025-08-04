import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewsletterPage from './pages/NewsletterPage';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import { CartProvider } from './context/CartContext';

const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     padding-top: 0px;    /* space for fixed header */
     padding-bottom: 0px; /* space for footer */
     background: ${({ theme }) => theme.colors.background};
     color: ${({ theme }) => theme.colors.text};
     font-family: ${({ theme }) => theme.fonts.sans};
   }

   h1,
   h2,
   body {
     margin: 0;
     padding-top: 0px;    /* space for fixed header */
     padding-bottom: 0px; /* space for footer */
     color: ${({ theme }) => theme.colors.text};
     font-family: ${({ theme }) => theme.fonts.serif};
   }

   h1,
   h2,
   h3 {
     font-family: ${({ theme }) => theme.fonts.serif};
   }
      rgba(255, 255, 255, 0.05) 4%,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 0) 85%,
      rgba(255, 255, 255, 0.05) 96%,
      rgba(255, 255, 255, 0.1) 98%,
      rgba(255, 255, 255, 0.15) 100%
    ),
    #000;
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CartProvider>
      <Router>
        <div style={{ minHeight: '100vh', background: theme.colors.background }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  </ThemeProvider>
);

export default App;

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewsletterPage from './pages/NewsletterPage';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import { CartProvider } from './context/CartContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 14px;
    line-height: 1.6;
    letter-spacing: 0.1px;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 8px;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 700;
    line-height: 1.25;
  }

  h1 { font-size: 22px; }
  h2 { font-size: 18px; }
  h3 { font-size: 16px; }
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
            <Route path="/shop" element={<Products />} />
            <Route path="/collections" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
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

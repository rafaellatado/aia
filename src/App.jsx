import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import WhatsappButton from './components/WhatsappButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './ScrollTop'; 
import { useState } from 'react';
import CartContext from './contexts/CartContext';
import styled from "styled-components";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={{ cartVisibility, setCartVisibility, cartProducts, setCartProducts }}>
      <BrowserRouter basename='/aia/'>
        <GlobalStyles />
        <NavBar />
        <Overlay $cartVisibility={cartVisibility} />
        <Cart />

        <ScrollTop />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/product/:productName' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
        <WhatsappButton />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
  
  display: ${props => (props.$cartVisibility ? "block" : "none")};
`

/* 
- CSS command to make an element's content to fit to the edges of its element (container), and/or vice-versa
*/

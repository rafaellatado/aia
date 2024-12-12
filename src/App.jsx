import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './ScrollTop'; 
import styled from 'styled-components';

function App() {

  return (
    <BrowserRouter basename='/aia'>
      <GlobalStyles />
      <NavBar />

      <ScrollTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/product/:productName' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {/* <WhatsappContainer> */}
      <IonIcon name="logo-whatsapp" />
      {/* </WhatsappContainer> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App

/* const WhatsappContainer = styled.div`
  background-color: #000000;
` */

const IonIcon = styled('ion-icon')`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1000;
  font-size: 35px;
  padding: 0 20px 20px 0;
`

/* 
- CSS command to make an element's content to fit to the edges of its element (container), and/or vice-versa
- Whatsapp button redirect command on React. I imagine in the onClick
- Whatsapp icon gray background
- Way to load images more quickly
*/

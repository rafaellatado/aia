import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import WhatsappButton from './components/WhatsappButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './ScrollTop'; 

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

      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  )
}

export default App

/* 
- CSS command to make an element's content to fit to the edges of its element (container), and/or vice-versa
*/

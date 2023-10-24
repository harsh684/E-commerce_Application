import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import men_banner_mobile from './Components/Assets/banner_mens_mobile.jpg'
import women_banner_mobile from './Components/Assets/banner_women_mobile.png'
import kid_banner_mobile from './Components/Assets/banner_kids_mobile.png'
import Login from './Components/LoginSignup/Login';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory mobBanner={men_banner_mobile} banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory mobBanner={women_banner_mobile} banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory mobBanner={kid_banner_mobile} banner={kid_banner} category="kid"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

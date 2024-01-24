import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import ProductPage from './pages/ProductPage'
import MyCart from './pages/MyCart'
import Login from './pages/Login'
import Regestration from './pages/Regestration'
import SellerRegistration from './pages/SellerRegistration'
import Profile from './pages/Profile'
import SelleProfile from './pages/SelleProfile'
import AddProduct from './pages/AddProduct'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Regestration/>}/>
          <Route path='/sellerregister' element={<SellerRegistration/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/sellerprofile' element={<SelleProfile/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import ProductPage from './pages/ProductPage'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />

        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App

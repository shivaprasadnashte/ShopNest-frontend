import React from 'react'
import ProductPageTop from '../Components/ProductPageTop'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductDetails from '../Components/ProductDetails'
import RecomendedProduct from '../Components/RecomendedProduct'
import DiscountBanner from '../Components/DiscountBanner'
function ProductPage() {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100 flex flex-col gap-5 pb-10 p-5'>
      <ProductPageTop />
      <ProductDetails />
      <RecomendedProduct/>
      <DiscountBanner/>
      </div>
      <Footer />
    </>
  )
}

export default ProductPage
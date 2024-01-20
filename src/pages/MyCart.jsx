import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cart from '../Components/Cart'
import SavedLatter from '../Components/SavedLatter'
import DiscountBanner from '../Components/DiscountBanner'
function MyCart() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-10 bg-gray-100 p-5'>
                <Cart />
                <SavedLatter />
                <DiscountBanner />
            </div>
            <Footer />
        </>
    )
}

export default MyCart
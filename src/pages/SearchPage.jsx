import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FilterSidebar from '../Components/FilterSidebar'
import ProductList from '../Components/ProductList'
import Newsletter from '../Components/Newsletter'
function SearchPage() {
    return (
        <>
            <Navbar />
            <div className='flex mt-3 w-full bg-gray-100  p-2 sm:p-5 '>
                <FilterSidebar />
                <ProductList />
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default SearchPage
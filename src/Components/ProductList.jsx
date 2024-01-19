import React from 'react'
import SearchTop from './SearchTop'
import ProductBigCard from './ProductBigCard'
import ProductSmallCard from './ProductSmallCard'
import BigCard2 from './BigCard2'
ProductBigCard
function ProductList() {
  return (
    <>
      <div className=' flex flex-col  overflow-hidden w-full gap-10'>
        <SearchTop />
        <div className='sm:hidden'>
          <BigCard2/>
          <BigCard2/>
          <BigCard2/>
          <BigCard2/>
        </div>
        <div className='hidden sm:flex flex-col gap-3'>
          <ProductBigCard />
          <ProductBigCard />
          <ProductBigCard />
          <ProductBigCard />
          <ProductBigCard />

        </div>
        {/* <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
          <ProductSmallCard />
        </div> */}
      </div>
    </>
  )
}

export default ProductList
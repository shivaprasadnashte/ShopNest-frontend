import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Deals from '../Components/Deals'
import HomeOutdoor from '../Components/HomeOutdoor'
import ConsumerElectronics from '../Components/ConsumerElectronics'
import QuoteBanner from '../Components/QuoteBanner'
import Recomended from '../Components/Recomended'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
      <div className=' m-5 flex flex-col gap-5 justify-center'>
        
        <Hero />
        <Deals />
        <HomeOutdoor />
        <ConsumerElectronics />
        <QuoteBanner />
        <Recomended />
        <Newsletter />
        
      </div>
      <Footer />
    </>
  )
}

export default Home
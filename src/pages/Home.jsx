import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Deals from '../Components/Deals'
import HomeOutdoor from '../Components/HomeOutdoor'
import ConsumerElectronics from '../Components/ConsumerElectronics'
import QuoteBanner from '../Components/QuoteBanner'
import Recomended from '../Components/Recomended'
function Home() {
  return (  
   <>
    <Navbar />
    <Hero />
    <Deals />
    <HomeOutdoor />
    <ConsumerElectronics />
    <QuoteBanner />
    <Recomended />
   </>
  )
}

export default Home
import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HeroImage2 from '../component/HeroImage2'
import PricingCard from '../component/PricingCard'
import Work from '../component/Work'

const Project = () => {
  return (
   <>
   <div>
    <Navbar />
    <HeroImage2 heading="PROJECTS." text="Some of my most recent works"/>
    <Work />
    <PricingCard />

    <Footer />
    
   </div>
   </>
  )
}

export default Project

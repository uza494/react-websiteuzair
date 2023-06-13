import React from 'react'
import Navbar from '../component/Navbar'

import Footer from '../component/Footer'
import HeroImage2 from '../component/HeroImage2'
import AboutContent from '../component/AboutContent'

const About = () => {
  return (
    <>
    <div>
      
      <Navbar/>
      <HeroImage2 heading="ABOUT" text="I am a Friendly Front-end Developer" />
      <AboutContent />
      <Footer/>
    </div>
    </>
  )
}

export default About

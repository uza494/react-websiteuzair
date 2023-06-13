import React from 'react'
import Navbar from '../component/Navbar'

import Footer from '../component/Footer'
import HeroImage2 from '../component/HeroImage2'
import Forms from '../component/Forms'



const Contact = () => {
  return (
<>
<div>

  <Navbar />
  <HeroImage2 heading="CONTACT." text="Let's have some chat " />
<Forms />
  <Footer />
</div>
</>
  )
}

export default Contact

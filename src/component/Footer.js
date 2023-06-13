import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyle.css"
import React from 'react'

const Footer = () => {
  return (
   <>
<div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <div>
                    <p>482 F2 Johar Town Lahore</p>
                    <p>Pakistan</p>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                03090091999
                </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                uzairarif600@gmail.com
                </h4>
                </div> 

            
        </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>This is me Uzair Arif. CEO and founder of techsoft.I enjoy discussing new projects and design challenges</p>

                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />





                </div>
            </div>
        
    </div>
</div>

   </>
  )
}

export default Footer

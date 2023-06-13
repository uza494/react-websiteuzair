import React from 'react'
import "./HeroimgStyle.css"
import Introimg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <>
<div className="hero">
    <div className="mask">
        <img className='intro-img' src={Introimg} alt="Introimg" />

    </div>
    <div className="content">
        <p>Hi You belive I am Human.</p>
        <h1>React Developer</h1>
        <div>
            <Link to='/project' className='btn'>
        Projects
            </Link>
            <Link to='/contact' className='btn btn-light'>
        Contact
            </Link>
        </div>

    </div>
</div>

    </>
  )
}

export default Heroimg

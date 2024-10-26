import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../Assets/logo/logo.png.webp'
import './Navbar.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {

  const [navLink , SetNavLink] = useState(null)
  const handleActive=(linkName)=>{
    SetNavLink(linkName)
  }
  return (
    <>
      <div className='below-nav bg-dark text-white'>
        <div className='container'>
          <div className='d-flex align-items-center py-2'>
            <Link className='d-flex text-decoration-none me-auto'>
              <ul className='d-flex list-unstyled align-items-center m-0'>
                <li className='nav-item me-4'>+(123) 1234-567-8901</li>
                <li className='nav-item me-4 '>info@domain.com</li>
                <li className='nav-item'>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
              </ul>
            </Link>
            <div className='d-flex align-items-center m-0 '>
              <Link className=' icon nav-item me-3 fs-5' target='_blank' to='https://www.facebook.com/'><FaFacebook /></Link>
              <Link className='icon nav-item me-3 fs-5' target='_blank' to='https://www.instagram.com/'><FaInstagram /></Link>
              <Link className='icon nav-item fs-5' target='_blank' to='https://www.twitter.com/'><FaTwitter /></Link>
            </div>
          </div>

        </div>

      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container p-2">
          <Link className="navbar-brand p-0" to="/">
            <img src={navlogo} alt='Navlogo' className='w-75 h-75' />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className={`nav-link ${navLink==='Home'? 'active' : ''}`} aria-current="page" to="/" onClick={()=>handleActive('Home')}>Home</Link>
              </li>
              <li className="nav-item  px-3">
                <Link className={`nav-link ${navLink === 'About' ? 'active' : ''}`} aria-current="page" to="/about" onClick={() => handleActive('About')}>About</Link>
              </li>
              <li className="nav-item  px-3">
                <Link className={`nav-link ${navLink === 'Service' ? 'active' : ''}`} aria-current="page" to="/service" onClick={() => handleActive('Service')}>Services</Link>
              </li>
              <li className="nav-item  px-3">
                <Link className={`nav-link ${navLink === 'projects' ? 'active' : ''}`} aria-current="page" to="/projects" onClick={() => handleActive('projects')}>Projects</Link>
              </li>
              {/* <li className="nav-item  px-3">
                <Link className={`nav-link ${navLink === 'blog' ? 'active' : ''}`} aria-current="page" to="/blog" onClick={() => handleActive('blog')}>Blog</Link>
              </li> */}
              <li className="nav-item  px-3">
                <Link className={`nav-link ${navLink === 'contact' ? 'active' : ''}`} aria-current="page" to="/contact" onClick={() => handleActive('contact')}>Contact</Link>
              </li>
            </ul>
            <Link to="/contact" className='btn px-3 py-2'>Contact Now</Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
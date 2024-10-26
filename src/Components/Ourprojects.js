import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Ourprojects.css'

const Ourprojects = () => {
    // State to track the active link
    const [activeLink, setActiveLink] = useState(null);

    // Function to handle link clicks and set the active link
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
  return (
    <>
          <div className='section4 mt-5'>
              <div className='container'>
                  <div className='row d-flex'>
                      <div className='d-flex customflex'>
                          <h1 className='customheading me-auto'>OUR PROJECTS</h1>
                          <div className=''>
                              <Link
                                  to=""
                                  className={`me-4 link ${activeLink === 'showAll' ? 'active' : ''}`}
                                  onClick={() => handleLinkClick('showAll')}
                              >
                                  Show All
                              </Link>
                              <Link
                                  to='interior'
                                  className={`me-4 link ${activeLink === 'interior' ? 'active' : ''}`}
                                  onClick={() => handleLinkClick('interior')}
                              >
                                  Interior
                              </Link>
                              <Link
                                  to='recent'
                                  className={`me-4 link ${activeLink === 'recent' ? 'active' : ''}`}
                                  onClick={() => handleLinkClick('recent')}
                              >
                                  Recent
                              </Link>
                              <Link
                                  to='bb'
                                  className={`me-4 link ${activeLink === 'bigBuilding' ? 'active' : ''}`}
                                  onClick={() => handleLinkClick('bigBuilding')}
                              >
                                  Big Building
                              </Link>
                              <Link
                                  to='park'
                                  className={`link ${activeLink === 'park' ? 'active' : ''}`}
                                  onClick={() => handleLinkClick('park')}
                              >
                                  Park
                              </Link>
                          </div>
                      </div>
                      <Outlet />
                  </div>
              </div>
          </div>
    </>
  )
}

export default Ourprojects
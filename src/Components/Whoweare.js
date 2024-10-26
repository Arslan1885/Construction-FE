import React from 'react'
// import { Link } from 'react-router-dom'
import wwr from "../Assets/images/whoweare.png.webp";
import './Whoweare.css'

const Whoweare = () => {
  return (
   <>
          <div className='section3 mt-5'>
              <div className='container-fluid'>
                  <div className='row d-flex customflex justify-content-between align-items-center'>
                      <div className='col-sm-12 col-lg-6 p-4'>
                          <h1 className='customheading'>WHO WE ARE</h1>
                          <h5 className='mt-4'>
                              Mollit anim laborum duis au dolor in voluptcate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
                          </h5>
                          <p className='mt-4'>
                              Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.
                          </p>
                          <p className='mt-2'>
                              Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur.
                          </p>
                          {/* <Link className='btn mt-4' to='#'>Read More</Link> */}
                      </div>
                      <div className='col-sm-12 col-lg-6 m-0 p-0'>
                          <img src={wwr} alt="Who We Are" className='img-fluid' />
                      </div>
                  </div>
              </div>
          </div>
   </>
  )
}

export default Whoweare
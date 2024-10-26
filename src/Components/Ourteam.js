import React from 'react'
import { Team } from '../Data/Team';
import './Ourteam.css'
const Ourteam = () => {
  return (
    <>
          <div className='section2 mt-5'>
              <div className='container'>
                  <h1 className='customheading mb-5'>OUR TEAM</h1>

                  <div className='row g-3'>
                      {Team.map((s) => (
                          <div className='col-md-4 col-sm-12 col-lg-4' key={s.id}>
                              <div className="card">
                                  <img src={s.image} className="card-img-top" alt={s.title} />
                                  <div className="card-body">
                                      <h5 className="card-title">{s.title}</h5>
                                      <p className="card-text">{s.description.slice(0, 90)}...</p>

                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
    </>
  )
}

export default Ourteam
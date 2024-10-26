import React from 'react'
import { projects } from '../../Data/Projects'
import { Link } from 'react-router-dom'

const filterData = projects.filter((x) => x.category === "Interior")

const Intorior = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row g-3'>
          {filterData.map((s) => (
            <div className='col-md-4 col-sm-12 col-lg-4' key={s.id}>
              <div className="card">
                <img src={s.image} className="card-img-top" alt={s.title} />
                <div className="card-body">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.description.slice(0, 40)}...</p>
                  <Link to={`/pdetail/${s.id}`} className="btn">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Intorior
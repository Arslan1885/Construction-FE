import React from 'react'
import Ourservice from '../../Components/Ourservice'
import Ourteam from '../../Components/Ourteam'
import './Service.css';

const Service = () => {
  return (
    <>
      {/* Section1 */}
      <div className='secsection1'>
        <div className='secherotext customheading'>
          <h1>OUR SERVICES</h1>

        </div>
        </div>
        <Ourservice />
        <Ourteam />
      </>
      )
}

      export default Service
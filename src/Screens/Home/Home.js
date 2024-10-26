import React from 'react';
import './Home.css';

import Slider from '../../Components/Slider.js'
import Ourservice from '../../Components/Ourservice.js';
import Whoweare from '../../Components/Whoweare.js';
import Ourprojects from '../../Components/Ourprojects.js';
import Ourteam from '../../Components/Ourteam.js';



const Home = () => {


  return (
    <>
      {/* Section1 */}
      <div className='section1'>
        <div className='herotext customheading'>
          <h1>ADVANCED</h1>
          <h1 className='px-md-5'>CONSTRUCTION</h1>
        </div>
      </div>
      {/* Section2 */}
      <Ourservice limit={3}/>
      {/* Section3 */}
      <Whoweare />
      {/* Section4 */}
      <Ourprojects/>

      {/* section6 */}
      <Slider />

      {/* Section5 */}
      <Ourteam/>
      
    </>
  );
};

export default Home;

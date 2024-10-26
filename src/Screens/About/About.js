import React from 'react'
import Whoweare from '../../Components/Whoweare'
import Slider from '../../Components/Slider'
import Ourteam from '../../Components/Ourteam'
import './About.css'


const About = () => {
    return (
        <>
            {/* Section1 */}
            <div className='abtsection1'>
                <div className='abtherotext customheading'>
                    <h1>ABOUT US</h1>
                    
                </div>
            </div>
        <Whoweare/>
        <Slider/>
        <Ourteam/>
        
        </>
    )
}

export default About
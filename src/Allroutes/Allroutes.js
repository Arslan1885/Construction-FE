import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home/Home.js'
import About from '../Screens/About/About.js'
import Service from '../Screens/Service/Service.js'
// import Blog from '../Screens/Blog/Blog.js'
import Contact from '../Screens/Contact/Contact.js'
import Showall from '../Screens/Home/Showall.js'
import Interior from '../Screens/Home/Interior.js'
import Recent from '../Screens/Home/Recent.js'
import BigBuilding from '../Screens/Home/BigBuilding.js'
import Park from '../Screens/Home/Park.js'
import Sdetailpage from '../Screens/Ourservicsdetail/Sdetailpage.js'
import Projects from '../Screens/Projects/Projects.js'
import Projectdetail from '../Screens/Projectdetail/Projectdetail.js'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index   element={<Showall/>} />
          <Route path='interior' element={<Interior/>} />
          <Route path='recent' element={<Recent/>} />
          <Route path='bb' element={<BigBuilding/>} />
          <Route path='park' element={<Park/>} />
        </Route>
        <Route path='/projects' element={<Projects />}>
          <Route index element={<Showall />} />
          <Route path='interior' element={<Interior />} />
          <Route path='recent' element={<Recent />} />
          <Route path='bb' element={<BigBuilding />} />
          <Route path='park' element={<Park />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/sdetail/:id' element={<Sdetailpage/>}/>
        <Route path='/pdetail/:id' element={<Projectdetail/>}/>
      </Routes >
    </>
  )
}

export default Allroutes
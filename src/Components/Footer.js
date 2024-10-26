import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../Assets/logo/logo.png.webp'
import footerimg from '../Assets/images/map-footer.png.webp'
import toast from 'react-hot-toast'
const Footer = () => {
    const [email, setEmail] = useState('')
    const handlesignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            if (response.ok) {
                toast.success(data.Message)

                setEmail('')

            } else {
                toast.error(data.Message)

            }
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>
            <div className='bg-dark mt-5'>
                <div className='container pb-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 mt-5 text-white'>
                            <Link to='/'>
                                <img src={navlogo} alt='Company Logo' className='w-50' />
                            </Link>
                            <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className='col-sm-12 col-md-2 mt-5 text-white'>
                            <h3>QUICK LINK</h3>
                            <Link to='/about' className=' d-block mt-4 text-decoration-none text-white'>About</Link>
                            <Link to='/service' className=' d-block mt-3 text-decoration-none text-white'>Services</Link>
                            {/* <Link to='/blog' className=' d-block mt-3 text-decoration-none text-white'>Blog</Link> */}
                            <Link to='/projects' className=' d-block mt-3 text-decoration-none text-white'>Projects</Link>
                            <Link to='/contact' className=' d-block mt-3 text-decoration-none text-white'>Contact</Link>

                        </div>
                        <div className='col-sm-12 col-md-3 mt-5 text-white'>
                            <h3>CONTACT</h3>
                            <Link className='mt-4 d-block text-decoration-none text-white'>198 West 21th Street, Suite 721 New York,NY 10010</Link>
                            <Link className='mt-3 d-block text-decoration-none text-white'>Phone: +95 (0) 123 456 789</Link>
                            <Link className='mt-3 d-block text-decoration-none text-white'>Cell: +95 (0) 123 456 789</Link>
                        </div>
                        <div className='col-sm-12 col-md-3 mt-5 text-white'>
                            <div className='d-flex'>
                                <input className='form-control form-control-sm w-50 p-2 bg-dark text-white' type="email" placeholder='SEND EMAIL'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <button className='btn btn-outline-danger btn-sm' onClick={handlesignup}>SIGN UP</button>
                            </div>
                            <img src={footerimg} alt='Company Logo' className='img-fluid mt-5 mb-5' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

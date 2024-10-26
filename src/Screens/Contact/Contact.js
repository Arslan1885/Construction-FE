import React, { useState } from 'react'
import "./Contact.css"
import toast from 'react-hot-toast'

const Contact = () => {
  const [name , setName]=useState('')
  const [email , setEmail]=useState('')
  const [message , setMessage]=useState('')
  
  const handlecontact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      if (response.ok) {
        toast.success(data.Message)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        toast.error(data.Message)

      }
    } catch (error) {
      console.log(error)

    }

  }


  return (
    <>
      {/* Section1 */}
      <div className='sectionc'>
        <div className='herotextc customheading'>
          <h1>CONTACT US</h1>
        </div>
      </div>
      {/* Section2 */}
      <div className='conact Section mt-5'>
        <div className="container p-4">
          <form className="contact-form" onSubmit={handlecontact}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" style={{ resize: 'none' }} id="message" rows={6} placeholder="Enter your message" 
                value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button className="btn p-3">Send Message</button>
          </form>
        </div>





      </div>


    </>
  )
}

export default Contact
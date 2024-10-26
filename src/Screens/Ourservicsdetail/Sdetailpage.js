/* eslint-disable eqeqeq */
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Service } from '../../Data/Service'
import './Sdetailpage.css'

const Sdetailpage = () => {
    const { id } = useParams()
    const data = Service.find((x) => x.id == id)
    return (
        <>
            <div className='sd container mt-5'>
                <div>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className='sdtext mt-5'>
                    <h1 className='customheading'>
                        {data.title}
                    </h1>
                    <p className='mt-5'>{data.description}</p>
                    <h1 className='mt-5 customheading'>
                        How can we help you?

                    </h1>
                    <p className='mt-5'>{data.description}</p>

                </div>
                <Link className='btn  mt-5' to='/'>GO HOME</Link>
            </div>
        </>
    )
}

export default Sdetailpage
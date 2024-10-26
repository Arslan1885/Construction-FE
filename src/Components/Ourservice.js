    import React from 'react';
    import { Service } from '../Data/Service';
    import { Link } from 'react-router-dom';
    import './Ourservice.css';

    const Ourservice = ({ limit }) => {
        // If limit is provided, show only that many services, otherwise show all
        const displayedServices = limit ? Service.slice(0, limit) : Service;

        return (
            <div className='section2 mt-5'>
                <div className='container'>
                    <h1 className='customheading mb-5'>OUR SERVICES</h1>
                    <div className='row g-3'>
                        {displayedServices.map((s) => (
                            <div className='col-md-4 col-sm-12' key={s.id}>
                                <div className="card">
                                    <img src={s.image} className="card-img-top img-fluid" alt={s.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{s.title}</h5>
                                        <p className="card-text">{s.description.slice(0, 90)}...</p>
                                        <Link to={`/sdetail/${s.id}`} className="btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default Ourservice;

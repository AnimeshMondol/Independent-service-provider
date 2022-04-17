import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className='container pt-5 mt-1'>
            <h1 className='text-dark text-center mt-1'> My Services!!</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;
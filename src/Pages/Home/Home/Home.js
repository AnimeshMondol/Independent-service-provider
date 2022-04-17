import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const navigate = useNavigate();

    const goToServicesPage = () => {
        const path = `/services`
        navigate(path);
    }

    return (
        <div className='container'>
            <Banner></Banner>
            <h1 className='text-center fw-bolder my-5 text-color'>My Services!!</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <button onClick={goToServicesPage} className='button2 my-3'>Click Here To See More Services <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>

        </div>
    );
};

export default Home;
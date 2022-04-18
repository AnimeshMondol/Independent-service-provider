import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='container mt-5'>       
            <div className='text-center mt-5'>
                <br /><br /><br /><br />
            <h2 className='mb-5'>Welcome to detail: {serviceId}</h2>
                <Link to="/checkout">
                    <button className='btn button-style btn-block'>Proceed Checkout</button>
                </Link>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default ServiceDetail;
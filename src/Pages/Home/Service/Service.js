import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price, duration} = service;
    const navigate = useNavigate();

    const navigateToDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='col'>
            <div className='bg-color h-100 p-3 rounded-3 d-flex flex-column'>
                <img className='card-img-top img-fluid' src={img} alt="100*100" />
                <div className='card-body'>
                    <h2 className='text-center fw-bolder text-light'>{name}</h2>
                    <h4 className='text-center fw-bold my-4 fs-5'>Price: {price}</h4>
                    <h6 className='text-center fw-bold my-4 fs-5'>Discription: {description.slice(0, 99)}...</h6>
                    <h6 className='text-center fw-bold my-4 fs-5'>Duration: {duration}</h6>
                    <hr />    
                </div>
                <div className='card-footer'>
                    <Button onClick={() => navigateToDetail(id)} className="btn btn-success">Book: {name}</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div className="spinner-border text-danger text-center size-spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
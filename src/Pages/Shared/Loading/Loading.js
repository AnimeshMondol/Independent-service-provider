import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div className="spinner-border text-danger text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;

import React from 'react';
import './NotFound.css'

const NotFound = () => {

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>404 Not Found</h1>
            <p className="zoom-area"><b>Sorry,</b> there is no page exist using this name.</p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="d-flex justify-content-center">
                    <img src="https://c.tenor.com/hylEE2LtVtcAAAAC/sad.gif" className="gif-border rounded-4 shadow-4"
                        alt="" />
            </div>
        </div>
    );
};

export default NotFound;
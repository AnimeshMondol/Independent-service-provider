import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="container py-4 mt-5">
            <h2 className="display-1 fw-bolder mt-5 text-center">About Peter Parker</h2>
            <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-lite mb-5 display-1">Peter Parker</h2>
                            <br />
                            <div>
                                <h6 className='fw-lite text-start text-class-class'>Peter Parker is an internationally acclaimed photographer, and entrepreneur based in Toronto, Canada. Peter uses his platforms to inspire and help people pursue their passions behind the lens. In 2019 he was named Breakout Photographer of the Year at the Shorty Awards and in 2020 received a Streamy for Cinematographer of the Year. Peters work can be found in a number of outlets but a notable personal achievement for this Canadian was having his work featured on two special collection coins issued by the Royal Canadian Mint.</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0 mt-5">
                    <img src="https://images.unsplash.com/photo-1597226229094-22c49bf2ee62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxwaG90b2dyYXBoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
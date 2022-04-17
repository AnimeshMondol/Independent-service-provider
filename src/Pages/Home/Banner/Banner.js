import React from 'react';
import img1 from '../../../Images/Banner/1.png';
import img2 from '../../../Images/Banner/2.png';
import img3 from '../../../Images/Banner/3.png';
import img4 from '../../../Images/Banner/4.png';
import img5 from '../../../Images/Banner/5.png';
import img6 from '../../../Images/Banner/6.png';
import img7 from '../../../Images/Banner/7.png';


const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4500">
                    <img src={img4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Landscape photography</h1>
                            <p>Place: Canada</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Architectural Photography</h1>
                            <p>Place: Spain</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Nature Photography</h1>
                            <p>Place: Beautiful Sunset in Bahamas</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img5} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Underwater photography</h1>
                            <p>Place: Great Barrier Reef (Australia)</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img6} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Aerial photography</h1>
                            <p>Place: Red Mountains Red Sea</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img7} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Portrait photography</h1>
                            <p>Potrait Shot</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={img2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: '0' }}>
                        <div className='border border-3 rounded-3'>
                            <h1>Professional grade Adobe After Effects and Lightroom Presets</h1>
                            <p>Contains some professional-grade presits for making your editing job easier.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>/
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;
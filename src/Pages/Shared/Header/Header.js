import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink'
import logo from '../../../Images/Logo/headerlogo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className=''>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-bg-color ">
                <div className="container-fluid">
                    <CustomLink className='img-fluid mx-auto' to="/home">
                        <img
                            src={logo}
                            height='100px'
                            alt='Peter Parker'
                        />
                    </CustomLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink to="/home">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/services">Services</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/reviews">Review</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/checkout">CheckOut</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/blogs">Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/aboutus">About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/signup">Sign Up</CustomLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                user ?
                                    <li className="nav-item nav-item text-light fw-bold ms-5">
                                       Welcome Back<span className='text-decor'> {user.displayName}</span>
                                    </li>
                                    :
                                    <li className="nav-item nav-item text-light fw-bold ms-5">

                                    </li>
                            }
                            {
                                user ?
                                    <li className='nav-item text-light fw-bold ms-5' onClick={handleSignOut}>
                                        Sign Out
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <CustomLink to="/login">Login</CustomLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
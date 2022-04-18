import React from 'react';
import './Footer.css'

const Footer = () => {
    let today = new Date();

    let date = '(' + today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear() + ')';

    let time = today.getHours() + ":" + today.getMinutes();

    let dateTime = (date + '  ' + time);

    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50 mt-5">
            <div className="container text-center">
                <h3>Copyright &copy; Peter Parker {dateTime}</h3>
            </div>
        </footer>
    );
};

export default Footer;
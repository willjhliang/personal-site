import React from 'react';
import './footer.css';

import initials from '../../assets/initials_footer.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-initials">
                <img src={initials} alt="initials" />
            </div>
            <div className="footer-contact">
                <h2>Contact Me</h2>
                <p>willjhliang@gmail.com<br></br>wjhliang@seas.upenn.edu<br></br>(925) 400 - 9698</p>
            </div>
            <div className="footer-copyright">
                <p>@William Jiahua Liang 2021</p>
            </div>
        </section>
    );
};

export default Footer;
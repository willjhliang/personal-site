import React from 'react';
import './footer.css';

import initials from '../../assets/initials_footer.png';
import linkedin from '../../assets/linkedin_footer.png';
import instagram from '../../assets/instagram_footer.png';
import github from '../../assets/github_footer.png';
import email from '../../assets/email_footer.png';
import facebook from '../../assets/facebook_footer.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-initials">
                <img src={initials} alt="initials" />
            </div>
            <div className="footer-contact">
                <h2>Contact Me</h2>
                <p>willjhliang@gmail.com<br></br>wjhliang@seas.upenn.edu<br></br>(925) 400 - 9698</p>
            </div>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/willjhliang/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/BitLorax" target="_blank"><img src={github} alt="github" /></a>
                <a href="" target="_blank"><img src={email} alt="email" /></a>
                <a href="https://www.instagram.com/willjhliang/" target="_blank"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com/willjhliang/" target="_blank"><img src={facebook} alt="facebook" /></a>
            </div>
        </div>
    );
};

export default Footer;
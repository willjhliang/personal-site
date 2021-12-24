import React from 'react';
import './about.css';

import face from '../../assets/face.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import resume from '../../assets/resume.pdf';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-picture">
                <img src={face} alt="face" />
                <p>By the way, here’s an actual picture of me.</p>
            </div>
            <div className="about-content">
                <div className="about-content-links">
                    <a href="https://www.linkedin.com/in/willjhliang/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/BitLorax" target="_blank"><img src={github} alt="github" /></a>
                    <a href="" target="_blank"><img src={email} alt="email" /></a>
                    <a href="https://www.instagram.com/willjhliang/" target="_blank"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.facebook.com/willjhliang/" target="_blank"><img src={facebook} alt="facebook" /></a>
                </div>
                <h2 className="about-content-intro">
                    My formal name’s William Liang, but please call me Will.  I’m a student at the University of Pennsylvania pursuing a bachelor’s in <strong>Computer Science</strong>.
                </h2>
                <p className="about-content-description">
                    I’m from the cozy suburbs of Pleasanton, California. My journey through computer science started in high school with <strong>competitive programming (USACO)</strong> and some <strong>machine learning research</strong>. Now, I’m seeking to gain some internship and university research experience. In my free time, I also enjoy traditional visual arts, design, music, and ping pong.
                </p>
                <div className="about-content-button">
                    <button type="button"><a href={resume} target="_blank">Open Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default About;
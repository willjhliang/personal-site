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
            </div>
            <div className="about-content">
                <h2 className="about-content-intro">
                     I’m a student at the University of Pennsylvania pursuing a BSE in <strong>Computer Science</strong>.
                </h2>
                <p className="about-content-description">
                    I hail from the cozy suburbs of Pleasanton, California. Like many others, my CS journey began in high school with <strong>competitive programming (USACO)</strong> and some <strong>machine learning research</strong>. Now at university, I’m hoping to expand my experience through internships and research as well as the ocassional passion project, usually something related to ML (check out my Github!). In my free time, I also enjoy traditional visual arts, design, music, and ping pong.
                </p>
                <p className="about-content-changepicture">
                    By the way, here's an actual picture of me.
                </p>
                <div className="about-content-links">
                    <a href={resume} target="_blank"><span class="about-content-links-button">Open <strong>resume</strong></span></a>
                    <a href="https://www.linkedin.com/in/willjhliang/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/BitLorax" target="_blank"><img src={github} alt="github" /></a>
                    <a href="" target="_blank"><img src={email} alt="email" /></a>
                    <a href="https://www.facebook.com/willjhliang/" target="_blank"><img src={facebook} alt="facebook" /></a>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './about.css';

import face from '../../assets/face.png';
import face_alt from '../../assets/face_alt.png';
import resume from '../../assets/resume.pdf';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <p className="about-content-description">
                    I hail from the cozy suburbs of Pleasanton, California. In high school, I began my CS journey with <strong className="highlight">competitive programming (USACO)</strong> and some <strong className="highlight">machine learning research</strong>. Now at university, I’m hoping to expand my experience through internships and research as well as the ocassional passion project, usually something related to ML (check out my Github!). In my free time, I also enjoy traditional visual arts, design, music, and the outdoors.
                </p>
                <div className="about-content-links">
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-solid">
                            <a href={resume} target="_blank" rel="noopener noreferrer"><span>Open <strong>resume</strong></span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="https://www.linkedin.com/in/willjhliang/" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="https://github.com/BitLorax" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="mailto:willjhliang@gmail.com" target="_blank" rel="noopener noreferrer"><span>Email</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="about-picture">
                <img src={face} alt="face" />
            </div>
            </ScrollAnimation>
        </section>
    );
};

export default About;

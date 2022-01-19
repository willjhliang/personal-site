import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './about.css';

import face from '../../assets/face.png';
import face_alt from '../../assets/face_alt.png';
import resume from '../../assets/resume.pdf';

function changeImage() {
    console.log("clicked");
    var img = document.getElementById("picture");
    img.src = face_alt;
    return false;
}

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="about-content-intro">
                     I’m a student at the <strong>University of Pennsylvania</strong> pursuing a <strong>BSE in Computer Science</strong>.
                </h2>
                <ScrollAnimation animateIn="about-content-description-animation" animateOnce={true} initiallyVisible={true}>
                <p className="about-content-description">
                    I hail from the cozy suburbs of Pleasanton, California. In high school, I began my CS journey with <strong>competitive programming (USACO)</strong> and some <strong>machine learning research</strong>. Now at university, I’m hoping to expand my experience through internships and research as well as the ocassional passion project, usually something related to ML (check out my Github!). In my free time, I also enjoy traditional visual arts, design, music, and the outdoors.
                </p>
                </ScrollAnimation>
                <p className="about-content-changepicture">
                    By the way, hover over the graphic for an actual picture of me.
                </p>
                <div className="about-content-links">
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-solid">
                            <a href={resume} target="_blank"><span>Open <strong>resume</strong></span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="https://www.linkedin.com/in/willjhliang/" target="_blank"><span>Linkedin</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="https://github.com/BitLorax" target="_blank"><span>Github</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-ghost">
                            <a href="mailto:willjhliang@gmail.com" target="_blank"><span>Email</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true}>
            <ScrollAnimation animateIn="about-picture-animation" animateOnce={true}>
            <div className="about-picture">
                <img src={face} alt="face" />
                <img src={face_alt} alt="face" className="about-picture-hover" />
            </div>
            </ScrollAnimation>
            </ScrollAnimation>
        </section>
    );
};

export default About;
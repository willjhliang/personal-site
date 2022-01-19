import React from 'react';
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
            <div className="about-picture">
                <img src={face} alt="face" id="picture" />
            </div>
            <div className="about-content">
                <h2 className="about-content-intro">
                     I’m a student at the University of Pennsylvania pursuing a BSE in <strong>Computer Science</strong>.
                </h2>
                <p className="about-content-description">
                    I hail from the cozy suburbs of Pleasanton, California. Like many others, my CS journey began in high school with <strong>competitive programming (USACO)</strong> and some <strong>machine learning research</strong>. Now at university, I’m hoping to expand my experience through internships and research as well as the ocassional passion project, usually something related to ML (check out my Github!). In my free time, I also enjoy traditional visual arts, design, music, and ping pong.
                </p>
                <p className="about-content-changepicture">
                    By the way, <button onClick={changeImage}>here's</button> an actual picture of me.
                </p>
                <div className="about-content-links">
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-black">
                            <a href={resume} target="_blank"><span>Open <strong>Resume</strong></span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-blue">
                            <a href="https://www.linkedin.com/in/willjhliang/" target="_blank"><span>Linkedin</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-red">
                            <a href="https://github.com/BitLorax" target="_blank"><span>Github</span></a>
                        </div>
                    </div>
                    <div className="about-content-links-button">
                        <div className="about-content-links-button-yellow">
                            <a href="mailto:willjhliang@gmail.com" target="_blank"><span>Email</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
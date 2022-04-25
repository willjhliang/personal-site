import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './timeline.css';

const Timeline = () => {
    return (
        <section className="timeline" id="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-title">
                <h3 className="timeline-title-sub">Timeline</h3>
                <h2 className="timeline-title-main">My past pursuits</h2>
            </div>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>UPenn GRASP Lab</strong> | Student Researcher</h3>
                <h4 className="timeline-entry-date">February 2022 - present</h4>
                <ul>
                    <li className="timeline-entry-details">Studied, implemented, and successfully trained landmark <strong>computer vision</strong> algorithms like YOLO and Faster R-CNN</li>
                    <li className="timeline-entry-details">Helped set up <strong>multi-modal data collection</strong> and processing for latest dataset publication</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>Penn Electric Racing</strong> | Developer</h3>
                <h4 className="timeline-entry-date">September 2021 - present</h4>
                <ul>
                    <li className="timeline-entry-details">Learned electrical components of REV 6 race car, <strong>embedded programming</strong>, and UNIX operating systems</li>
                    <li className="timeline-entry-details">Worked in team to develop CAN-SPI adapter for <strong>data acquisition board</strong>, allowing car to wirelessly transmit data in real time</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>UC Santa Barbara</strong> | Student Researcher</h3>
                <h4 className="timeline-entry-date">June 2020 - December 2021</h4>
                <ul>
                    <li className="timeline-entry-details">Researched <strong>evolutionary neural networks</strong> at UCSB Research Mentorship Program (RMP)</li>
                    <li className="timeline-entry-details">Developed novel algorithm for training NN encoders to play Snake, presented results in paper and symposium</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>Studio Heart Engine</strong> | Founder, Former President, and Advisor</h3>
                <h4 className="timeline-entry-date">August 2019 - December 2021</h4>
                <ul>
                    <li className="timeline-entry-details">Founded and grew game development club to 30+ members, presented meeting materials on Godot engine</li>
                    <li className="timeline-entry-details">Directed team, animated sprites, wrote storyline, and programmed scripts over 2 years to build <strong>Joyspring</strong>, an indie game</li>
                    <li className="timeline-entry-details">Launched Joyspring on Steam, hit <strong>30k downloads in the first month of launch</strong> through extensive marketing and promotions</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>Fungible, Inc.</strong> | Software Engineer Intern</h3>
                <h4 className="timeline-entry-date">June 2021 - August 2021</h4>
                <ul>
                    <li className="timeline-entry-details">Built <strong>end-to-end DPU log analysis system</strong> including collection, parsing, and UI for Integration team debugging</li>
                    <li className="timeline-entry-details">Used <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana) to retrieve and collect logs from multiple source machines</li>
                    <li className="timeline-entry-details">Developed custom <strong>Ruby filter plugin</strong> for Logstash to parse logs for certain fields (ex: timestamp, error level)</li>
                    <li className="timeline-entry-details">Developed Python functions to integrate Logstash and Elasticsearch into current job processing system</li>
                    <li className="timeline-entry-details">Created <strong>Angular front-end</strong> for listing and filtering log events for each job</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>Pioneer Academics</strong> | Student Researcher</h3>
                <h4 className="timeline-entry-date">Februrary 2020 - July 2020</h4>
                <ul>
                    <li className="timeline-entry-details">Developed <strong>novel neural network architecture for depth prediction</strong>, outperformed many previous works</li>
                    <li className="timeline-entry-details">First-authored 25+ page research paper, published in <strong>National High School Journal of Science</strong> in April 2021</li>
                </ul>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
            <div className="timeline-entry">
                <h3 className="timeline-entry-title"><strong>UC Los Angeles</strong> | Student Researcher</h3>
                <h4 className="timeline-entry-date">July 2019 - August 2019</h4>
                <ul>
                    <li className="timeline-entry-details">Led team to develop <strong>novel collage art generation algorithm</strong> in UCLA SciArt Program</li>
                    <li className="timeline-entry-details">Generated artwork featured in international Humanities+ Journal, won <strong>Scholastic Art Silver Key</strong></li>
                </ul>
            </div>
            </ScrollAnimation>

            <hr></hr>
        </section>
    );
};

export default Timeline;
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './timeline.css';

const Timeline = () => {
    return (
        <section className="timeline" id="timeline">
            <div className="timeline-title">
                <h3>Timeline</h3>
                <h2>My past pursuits</h2>
            </div>
            <div className="timeline-entry">
                <h3>Developer at Penn Electric Racing</h3>
                <h4>September 2021 - present</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Learned electrical components of REV 6/7 race car, <strong>embedded programming</strong>, and UNIX operating systems</li>
                    <li>Develop codebase for data collection, analysis, implausibility checks, and car functions with C++</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <h3>Started studying at <strong className="timeline-entry-color">Penn</strong></h3>
                </ScrollAnimation>
                <h4>August 2021</h4>
            </div>
            <div className="timeline-entry">
                <h3>Software Engineering Intern at Fungible, Inc.</h3>
                <h4>June 2021 - August 2021</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Built <strong>end-to-end DPU log analysis system</strong> including collection, parsing, and UI for Integration team debugging</li>
                    <li>Used <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana) to retrieve and collect logs from multiple source machines</li>
                    <li>Developed custom <strong>Ruby filter plugin</strong> for Logstash to parse logs for certain fields (ex: timestamp, error level)</li>
                    <li>Developed Python functions to integrate Logstash and Elasticsearch into current job processing system</li>
                    <li>Created <strong>Angular front-end</strong> for listing and filtering log events for each job</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <h3>Student Researcher at UC Santa Barbara</h3>
                <h4>June 2020 - present</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Researched <strong>evolutionary neural networks</strong> at UCSB Research Mentorship Program (RMP)</li>
                    <li>Developed novel algorithm for training NN encoders to play Snake, presented results in paper and symposium</li>
                    <li>Continued research with mentor after RMP, submitted paper to <strong>IEEE ICASSP 2022</strong> in October 2021</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <h3>Student Researcher at Pioneer Academics</h3>
                <h4>Februrary 2020 - July 2020</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Developed <strong>novel neural network architecture for depth prediction</strong>, outperformed many previous works</li>
                    <li>First-authored 25+ page research paper, published in <strong>National High School Journal of Science</strong> in April 2021</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <h3>Reached USA Computing Olympiad (USACO) <strong className="timeline-entry-color">Platinum</strong></h3>
                </ScrollAnimation>
                <h4>December 2019</h4>
            </div>
            <div className="timeline-entry">
                <h3>Founder, Former President, and Advisor at Studio Heart Engine</h3>
                <h4>August 2019 - present</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Founded and grew game development club to 30+ members, presented meeting materials on Godot engine</li>
                    <li>Directed team, animated sprites, wrote storyline, and programmed scripts for <strong>Joyspring</strong>, an indie game</li>
                    <li>Launched Joyspring on Steam after 1.5 years of development, hit <strong>30k downloads in the first month of launch</strong></li>
                    <li>Maintained Joyspring, delivered patches and hotfixes in response to player feedback</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <h3>Student Student Researcher at UC Los Angeles</h3>
                <h4>July 2019 - August 2019</h4>
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>Led team to develop <strong>novel collage art generation algorithm</strong> in UCLA SciArt Program</li>
                    <li>Generated artwork featured in international Humanities+ Journal, won <strong>Scholastic Art Silver Key</strong></li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="timeline-entry">
                <ScrollAnimation animateIn="timeline-entry-animation" animateOnce={true} initiallyVisible={true}>
                <h3>Became <strong className="timeline-entry-color">Congressional Art Competition Finalist</strong></h3>
                </ScrollAnimation>
                <h4>April 2019</h4>
            </div>
        </section>
    );
};

export default Timeline;
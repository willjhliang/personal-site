import React from 'react';
import './timeline.css';

const Timeline = () => {
    return (
        <section className="timeline" id="timeline">
            <div className="timeline-title">
                <h2>Timeline</h2>
            </div>
            <div className="timeline-entry">
                <h3><strong>Developer</strong> at <strong className="timeline-entry-org">Penn Electric Racing</strong></h3>
                <h4>September 2021 - present</h4>
                <ul>
                    <li>Learned electrical components of REV 6/7 race car, embedded programming, and UNIX operating systems</li>
                    <li>Revamp codebase for data collection, analysis, implausibility checks, and car functions with Rust</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3>Started studying at <strong className="timeline-entry-misc">Penn</strong></h3>
                <h4>August 2021</h4>
            </div>
            <div className="timeline-entry">
                <h3><strong>Software Engineering Intern</strong> at <strong className="timeline-entry-org">Fungible, Inc.</strong></h3>
                <h4>June 2021 - August 2021</h4>
                <ul>
                    <li>Built end-to-end DPU log analysis system including collection, parsing, and UI for Integration team debugging</li>
                    <li>Used ELK Stack (Elasticsearch, Logstash, Kibana) to retrieve and collect logs from multiple source machines</li>
                    <li>Developed custom Ruby filter plugin for Logstash to parse logs for certain fields (ex: timestamp, error level)</li>
                    <li>Developed Python functions to integrate Logstash and Elasticsearch into current job processing system</li>
                    <li>Created Angular front-end for listing and filtering log events for each job</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3><strong>Student Researcher</strong> at <strong className="timeline-entry-org">UC Santa Barbara</strong></h3>
                <h4>June 2020 - present</h4>
                <ul>
                    <li>Researched evolutionary neural networks at UCSB Research Mentorship Program (RMP)</li>
                    <li>Developed novel algorithm for training NN encoders to play Snake, presented results in paper and symposium</li>
                    <li>Continued research with mentor after RMP, submitted paper to IEEE ICASSP 2021 in October 2021</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3><strong>Student Researcher</strong> at <strong className="timeline-entry-org">Pioneer Academics</strong></h3>
                <h4>Februrary 2020 - July 2020</h4>
                <ul>
                    <li>Developed novel neural network architecture for depth prediction, outperformed many previous works</li>
                    <li>First-authored 25+ page research paper, published in National High School Journal of Science in April 2021</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3>Reached USA Computing Olympiad (USACO) <strong className="timeline-entry-award">Platinum</strong></h3>
                <h4>December 2019</h4>
            </div>
            <div className="timeline-entry">
                <h3><strong>Founder, Former President, and Advisor</strong> at <strong className="timeline-entry-org">Studio Heart Engine</strong></h3>
                <h4>August 2019 - present</h4>
                <ul>
                    <li>Founded and grew game development club to 30+ members, presented meeting materials on Godot engine</li>
                    <li>Directed team, animated sprites, wrote storyline, and programmed scripts for Joyspring, an indie game</li>
                    <li>Launched Joyspring on Steam after 1.5 years of development, hit 30k downloads in the first month of launch</li>
                    <li>Maintained Joyspring, delivered patches and hotfixes in response to player feedback</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3><strong>Student Researcher</strong> at <strong className="timeline-entry-org">UC Los Angeles</strong></h3>
                <h4>July 2019 - August 2019</h4>
                <ul>
                    <li>Led team to develop novel collage art generation algorithm in UCLA SciArt Program</li>
                    <li>Generated artwork featured in international Humanities+ Journal, won Scholastic Art Silver Key</li>
                </ul>
            </div>
            <div className="timeline-entry">
                <h3>Became <strong className="timeline-entry-award">Congressional Art Competition Finalist</strong></h3>
                <h4>April 2019</h4>
            </div>
        </section>
    );
};

export default Timeline;
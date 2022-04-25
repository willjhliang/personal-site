import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './projects.css';

import encodedNeuroevolution from '../../assets/encoded_neuroevolution.png';
import imageDepthPrediction from '../../assets/image_depth_prediction.png';
import joyspring from '../../assets/joyspring.png';
import collageArtGeneration from '../../assets/collage_art_generation.png';


const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-title">
                <h3 className="projects-title-sub">Projects</h3>
                <h2 className="projects-title-main">The things I've made</h2>
            </div>
            <div className="projects-entry projects-left-entry">
                <div className="projects-left-entry-description">
                    <h3 className="projects-entry-title">Encoded Neuroevolution</h3>
                    <ScrollAnimation animateIn="projects-entry-animation" animateOnce={true} initiallyVisible={true} animatePreScroll={false}>
                    <p className="projects-entry-details">A <strong className="highlight">novel encoding method</strong>, combined with the <strong className="highlight">genetic algorithm</strong>, that successfully trained a FCNN to <strong className="highlight">play the game Snake</strong>. The algorithm is extremely efficient and space-efficient when compared to more common methods due to the special incorporation of vector-based encoding and decoding.</p>
                    </ScrollAnimation>
                    <div className="projects-entry-buttons">
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-solid">
                                <a href="https://github.com/BitLorax/encoded-neuroevolution" target="_blank" rel="noopener noreferrer"><span>Learn <strong>more</strong></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false}>
                <div className="projects-entry-image projects-entry-left-image">
                    <img className="projects-entry-image-image" src={encodedNeuroevolution} alt="" />
                </div>
                </ScrollAnimation>
            </div>
            <div className="projects-entry projects-right-entry">
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false}>
                <div className="projects-entry-image projects-entry-right-image">
                    <img className="projects-entry-image-image" src={imageDepthPrediction} alt="" />
                </div>
                </ScrollAnimation>
                <div className="projects-right-entry-description">
                    <h3 className="projects-entry-title">Image Depth Prediction</h3>
                    <ScrollAnimation animateIn="projects-entry-animation" animateOnce={true} initiallyVisible={true} animatePreScroll={false}>
                    <p className="projects-entry-details">A unique CNN that <strong className="highlight">predicts the depth of each individual pixel</strong> in an image. It utilizes a U-shaped architecture as well as skip connections to keep track of big-picture data while still analyzing individual regions of the image.</p>
                    </ScrollAnimation>
                    <div className="projects-entry-buttons">
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-ghost">
                                <a href="https://nhsjs.com/2021/monocular-depth-prediction-with-a-fully-convolutional-neural-network-and-skip-connections/" target="_blank" rel="noopener noreferrer"><span>See publication</span></a>
                            </div>
                        </div>
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-solid">
                                <a href="https://github.com/BitLorax/depth-prediction" target="_blank" rel="noopener noreferrer"><span>Learn <strong>more</strong></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-entry projects-left-entry">
                <div className="projects-left-entry-description">
                    <h3 className="projects-entry-title">Joyspring</h3>
                    <ScrollAnimation animateIn="projects-entry-animation" animateOnce={true} initiallyVisible={true} animatePreScroll={false}>
                    <p className="projects-entry-details">An <strong className="highlight">indie platformer</strong> about the courage to let go. Led the dev team at Studio Heart Engine, developed much of the codebase as well as animations and sound effects.<br></br><br></br><strong className="highlight">“On the edge of nowhere, seek the next spring anywhere.”</strong></p>
                    </ScrollAnimation>
                    <div className="projects-entry-buttons">
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-solid">
                                <a href="https://store.steampowered.com/app/1532360/Joyspring/" target="_blank" rel="noopener noreferrer"><span>Learn <strong>more</strong></span></a>
                            </div>
                        </div>
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-ghost">
                                <a href="https://github.com/studio-heart-engine/joyspring" target="_blank" rel="noopener noreferrer"><span>See code</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false}>
                <div className="projects-entry-image projects-entry-left-image">
                    <img className="projects-entry-image-image" src={joyspring} alt="" />
                </div>
                </ScrollAnimation>
            </div>
            <div className="projects-entry projects-right-entry">
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false}>
                <div className="projects-entry-image projects-entry-right-image">
                    <img className="projects-entry-image-image" src={collageArtGeneration} alt="" />
                </div>
                </ScrollAnimation>
                <div className="projects-right-entry-description">
                    <h3 className="projects-entry-title">Collage Art Generation</h3>
                    <ScrollAnimation animateIn="projects-entry-animation" animateOnce={true} initiallyVisible={true} animatePreScroll={false}>
                    <p className="projects-entry-details">A BFS-based algorithm that generates <strong className="highlight">abstract collage art</strong> from an input reference image. Final pieces featured in <strong className="highlight">international Humanities+ Journal</strong> and won <strong className="highlight">Scholastic silver key</strong> when compared against human artists.</p>
                    </ScrollAnimation>
                    <div className="projects-entry-buttons">
                        <div className="projects-entry-button">
                            <div className="projects-entry-button-solid">
                                <a href="https://github.com/BitLorax/collage-art-generation" target="_blank" rel="noopener noreferrer"><span>Learn <strong>more</strong></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
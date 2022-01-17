import React from 'react';
import './projects.css';

import encodedNeuroevolution from '../../assets/encoded_neuroevolution.png';
import imageDepthPrediction from '../../assets/image_depth_prediction.png';
import joyspring from '../../assets/joyspring.png';
import collageArtGeneration from '../../assets/collage_art_generation.png';


const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects-title">
                <h2>Projects</h2>
            </div>
            <div className="projects-entry">
                <div className="projects-left-entry-description">
                    <h3>Encoded Neuroevolution</h3>
                    <p>A novel encoding method, combined with the genetic algorithm, that successfully trained a FCNN to play the game Snake. The algorithm is extremely efficient and space-efficient when compared to more common methods due to the special incorporation of vector-based encoding and decoding.</p>
                    <a href="https://github.com/BitLorax/encoded-neuroevolution" target="_blank"><span class="projects-entry-button">Learn more</span></a>
                </div>
                <div className="projects-entry-image">
                    <img src={encodedNeuroevolution} alt="image" />
                </div>
            </div>
            <div className="projects-entry">
                <div className="projects-entry-image">
                    <img src={imageDepthPrediction} alt="image" />
                </div>
                <div className="projects-right-entry-description">
                    <h3>Image Depth Prediction</h3>
                    <p>A unique CNN that predicts the depth of each individual pixel in an image. It utilizes a U-shaped architecture as well as skip connections to keep track of big-picture data while still analyzing individual regions of the image.</p>
                    <a href="https://github.com/BitLorax/depth-prediction" target="_blank"><span class="projects-entry-button">Learn more</span></a>
                </div>
            </div>
            <div className="projects-entry">
                <div className="projects-left-entry-description">
                    <h3>Joyspring</h3>
                    <p>An indie platformer about the courage to let go. Led the dev team at Studio Heart Engine, developed much of the codebase as well as animations and sound effects.<br></br><br></br>“On the edge of nowhere, seek the next spring anywhere.”</p>
                    <a href="https://github.com/studio-heart-engine/joyspring" target="_blank"><span class="projects-entry-button">Learn more</span></a>
                </div>
                <div className="projects-entry-image">
                    <img src={joyspring} alt="image" />
                </div>
            </div>
            <div className="projects-entry">
                <div className="projects-entry-image">
                    <img src={collageArtGeneration} alt="image" />
                </div>
                <div className="projects-right-entry-description">
                    <h3>Collage Art Generation</h3>
                    <p>A BFS-based algorithm that generates abstract collage art from an input reference image. Final pieces featured in international Humanities+ Journal and won Scholastic silver key when compared against human artists.</p>
                    <a href="https://github.com/BitLorax/collage-art-generation" target="_blank"><span class="projects-entry-button">Learn more</span></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
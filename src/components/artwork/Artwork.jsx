import React from 'react';
import './artwork.css';

import money from '../../assets/money.png';
import aWorldOfComparison from '../../assets/a_world_of_comparison.png';
import consumerism from '../../assets/consumerism.png';
import trolley from '../../assets/trolley.png';
import prayer from '../../assets/prayer.png';
import will from '../../assets/will.png';

const Artwork = () => {
    return (
        <div className="artwork" id="artwork">
            <div className="artwork-title">
                <h2>Artwork</h2>
            </div>
            <div className="artwork-description">
                <p>I’m mostly a STEM guy, but I dabble in visual arts from time to time, using mediums like acrylic, oil paint, and charcoal. Here are some of the pieces of most proud of!<br></br><br></br>I’m not a big fan of describing each work in detail, so I’ll leave a two questions that these pieces tackle.</p>
                <ul>
                    <li>What self-imposed constructs prevent us from being happy?</li>
                    <li>Can happiness be innate or is it dependent on our surroundings?</li>
                </ul>
            </div>
            <div className="artwork-gallery">
                <img src={money} alt="money" />
                <img src={aWorldOfComparison} alt="a world of comparison" />
                <img src={consumerism} alt="consumerism" />
                <img src={trolley} alt="trolley" />
                <img src={prayer} alt="prayer" />
                <img src={will} alt="will" />
            </div>
        </div>
    );
};

export default Artwork;
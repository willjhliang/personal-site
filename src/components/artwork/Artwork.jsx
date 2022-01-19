import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './artwork.css';

import money from '../../assets/money.jpg';
import aWorldOfComparison from '../../assets/a_world_of_comparison.jpg';
import consumerism from '../../assets/consumerism.jpg';
import trolley from '../../assets/trolley.jpg';
import prayer from '../../assets/prayer.jpg';
import will from '../../assets/will.jpg';

const Artwork = () => {
    return (
        <section className="artwork" id="artwork">
            <div className="artwork-title">
                <h3>Artwork</h3>
                <h2>My dreams on canvas</h2>
            </div>
            <div className="artwork-description">
                <p>I’m mostly a STEM guy, but I dabble in visual arts from time to time, using mediums like acrylic, oil paint, and charcoal. Here are some of the pieces of most proud of.<br></br><br></br>I prefer to leave my art’s meaning to the viewer’s interpretation, so I’ll just leave two questions that prompted this portfolio.</p>
                <ScrollAnimation animateIn="artwork-description-animation" animateOnce={true} initiallyVisible={true}>
                <ul>
                    <li>What <strong>self-imposed constructs</strong> prevent us from being happy?</li>
                    <li>Can happiness be <strong>innate</strong> or is it dependent on our surroundings?</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="artwork-gallery">
                <img src={money} alt="money" />
                <img src={aWorldOfComparison} alt="a world of comparison" />
                <img src={consumerism} alt="consumerism" />
                <img src={trolley} alt="trolley" />
                <img src={prayer} alt="prayer" />
                <img src={will} alt="will" />
            </div>
        </section>
    );
};

export default Artwork;
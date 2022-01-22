import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
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
                <p>I’m mostly a STEM guy, but I dabble in visual arts from time to time, using mediums like acrylic, oil paint, and charcoal. Here are some of the pieces of most proud of, and these are the two questions that prompted this portfolio.</p>
                <ScrollAnimation animateIn="artwork-description-animation" animateOnce={true} initiallyVisible={true} animatePreScroll={false}>
                <ul>
                    <li>What <strong>self-imposed constructs</strong> prevent us from being happy?</li>
                    <li>Can happiness be <strong>innate</strong> or is it dependent on our surroundings?</li>
                </ul>
                </ScrollAnimation>
            </div>
            <div className="artwork-gallery">
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={money} alt="money" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={aWorldOfComparison} alt="a world of comparison" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={consumerism} alt="consumerism" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={trolley} alt="trolley" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={prayer} alt="prayer" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true} animatePreScroll={false} duration={0.5}>
                <img src={will} alt="will" />
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Artwork;
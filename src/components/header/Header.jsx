import React from 'react';
import './header.css';

import hands from '../../assets/hands.png';
import underline from '../../assets/underline1.png';

const Header = () => {
    return (
        <div className="header" id="home">
            <div className="header-content">
                <h1 className="hello-text">
                    Hi, I'm <strong>Will</strong>.
                </h1>
                <div className="header-underline">
                    <img src={underline} alt="underline" />
                </div>
            </div>
            <div className="header-image">
                <img src={hands} alt="hands" />
            </div>
        </div>
    );
};

export default Header;
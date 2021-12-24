import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import initials from '../../assets/initials.png';

// const Menu = () => {
//     <>
//     <p><a href="#home">Home</a></p>
//     <p><a href="#about">About</a></p>
//     <p><a href="#timeline">Timeline</a></p>
//     <p><a href="#projects">Projects</a></p>
//     <p><a href="#artwork">Artwork</a></p>
//     </>
// }

const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-initials">
                <img src={initials} alt="initials" />
            </div>
            <div className="navbar-links">
                <div className="navbar-links-container">
                    <p className="navbar-links-container-home"><a href="#home">1. Home</a></p>
                    <p className="navbar-links-container-about"><a href="#about">2. About</a></p>
                    <p className="navbar-links-container-timeline"><a href="#timeline">3. Timeline</a></p>
                    <p className="navbar-links-container-projects"><a href="#projects">4. Projects</a></p>
                    <p className="navbar-links-container-artwork"><a href="#artwork">5. Artwork</a></p>
                    {/* <Menu /> */}
                </div>
            </div>
            {/* <div className="navbar-menu">
                {toggleMenu 
                    ? <RiCloseLine color="#000" size={27} onClick ={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#000" size={27} onClick ={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="navbar-menu-container scale-up-center">
                        <div className="navbar-menu-container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Navbar;
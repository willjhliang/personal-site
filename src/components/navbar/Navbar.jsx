import React, { Component } from 'react';
import './navbar.css';

import initials from '../../assets/initials.png';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos || currentScrollPos == 0;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <div className="navbar">
                <div className="navbar-initials">
                    <a href="#home"><img src={initials} alt="initials" /></a>
                </div>
                <nav className="navbar-links" style={{visibility: this.state.visible ? 'visible' : 'hidden', opacity: this.state.visible ? '1' : '0'}}>
                    <ul>
                        <li className="navbar-links-about"><a href="#about">1. About</a></li>
                        <li className="navbar-links-timeline"><a href="#timeline">2. Timeline</a></li>
                        <li className="navbar-links-projects"><a href="#projects">3. Projects</a></li>
                        <li className="navbar-links-artwork"><a href="#artwork">4. Artwork</a></li>
                    </ul>

                    {/* <p className="active"><a className="navbar-links-home" href="#home">1. Home</a></p> */}
                    {/* <p><a className="navbar-links-about" href="#about">1. About</a></p>
                    <p><a className="navbar-links-timeline" href="#timeline">2. Timeline</a></p>
                    <p><a className="navbar-links-projects" href="#projects">3. Projects</a></p>
                    <p><a className="navbar-links-artwork" href="#artwork">4. Artwork</a></p>
                    <div className="navbar-links-animation"> </div> */}
                </nav>
                {/* <script src="http://code.jquery.com/jquery-3.3.1.js"></script>
                <script type="text/javascript">
                    $(document).ready(function(){
                        $('p').on('click', function(){

                        })
                    })
                </script> */}
            </div>
        );
    }
};
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

import { About, Artwork, Footer, Header, Navbar, Projects, Timeline } from './components';

import './App.css';
import './index.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    
    componentDidMount() {
        this.setState({isLoading: false})
    }
    
    render() {
        if (this.state.isLoading) {
            console.log("loading...");
            return (<div style={{"backgroundColor": "#FFFFFF"}}></div>);
        } else {
            console.log("loaded!");
            return (
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true}>
                <div className="App">
                    <div className="top-background">
                        <div className="animatedwrapper">
                            <div className="dot dot--one"></div>
                            <div className="dot dot--two"></div>
                            <div className="dot dot--three"></div>
                        </div>
                        <Navbar />
                        <Header />
                        <About />
                        <Timeline />
                        <Projects />
                        <Artwork />
                    </div>
                    <Footer />
                </div>
                </ScrollAnimation>
            );
        }
    }
};

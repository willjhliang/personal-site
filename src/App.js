import React from 'react';

import { About, Artwork, Footer, Header, Navbar, Projects, Timeline } from './components';

import './App.css';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <div className="top-background">
                <Navbar />
                <Header />
            </div>
            <About />
            <Timeline />
            <Projects />
            <div className="bottom-background">
                <Artwork />
            </div>
            <Footer />
        </div>
    );
};

export default App;

document.addEventListener('DOMContentLoaded',function(event){
    // document.getElementsByClassName("App").classList.add('fade-in');
    document.body.classList.add('fade-in');
});

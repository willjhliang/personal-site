import React from 'react';

import { About, Footer, Header } from './containers';
import { Navbar, Project } from './components';

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
            <Footer />
        </div>
    );
};

export default App;
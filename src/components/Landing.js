import React from 'react';
import Parallax from './Parallax';
import Description from './Description';
import Gallery from './Gallery';
import Contact from './Contact';

const Landing = () => {
    return(
        <div className="App">
            <Parallax/>
            <Description/>
            <Gallery/>
            <Contact/>
        </div>
    );
}

export default Landing;
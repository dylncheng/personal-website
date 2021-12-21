import React from 'react'
import moon from '../assets/moon.png'
import stars from '../assets/stars.png'
import mountains_front from '../assets/mountains_front.png'
import mountains_back from '../assets/mountains_behind.png'

const Animation = () => {
    return(
        <section>
            <h1>My name is <strong>Dylan.</strong></h1>
            <img src={stars} id="stars"></img>
            <img src={moon} id="moon"></img>
            <img src={mountains_back} id="mountains-back"></img>
            <img src={mountains_front} id="mountains-front"></img>
        </section>
    );
}

export default Animation;
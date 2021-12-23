import React, { useEffect, useState } from 'react'
import moon from '../assets/moon.png'
import stars from '../assets/stars.png'
import mountains_front from '../assets/mountains_front.png'
import mountains_back from '../assets/mountains_behind.png'

const Animation = () => {
    // let stars = document.getElementById('stars');
    // let moon = document.getElementById('moon');
    // let mountains_front = document.getElementById('mountains-front');
    // let mountains_back = document.getElementById('mountains-back');
    // let text = document.getElementById('text');
    // let btn = document.getElementById('btn');

    // window.addEventListener
    const [offsetX, setOffsetX] = useState(0);
    const handleScroll = () => {setOffsetX(window.scrollY)};

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <>
            <div className='section' id="section">
                <img src={stars} id="stars" style={{transform: `translateY(${offsetX * 0.7}px)`}, {transform: `translateX(${offsetX * 0.25}px)`}}></img>
                <img src={moon} id="moon" style={{transform: `translateY(${offsetX * 0.75}px)`}}></img>
                <img src={mountains_back} id="mountains-back"></img>
                <h1 id="text" style={{ transform: `translateX(${1070-(offsetX * 3)}px)` }}>My name is <strong>Dylan.</strong></h1>
                <a href="#description" id="btn">Explore</a>
                <img src={mountains_front} id="mountains-front"></img>
            </div>

        
        </>
    );
}

export default Animation;
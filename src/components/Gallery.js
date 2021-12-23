import React, {useState, useEffect} from 'react'
import data from '../data'


const Gallery = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [opacity, setOpacity] = useState(0)
    const handleScroll = () => {
        if(window.scrollY < 2154.39)
            setOffsetY(window.scrollY);
        
        if(window.scrollY > 1833.59)
            setOpacity((-1833.59 + window.scrollY)/(317));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="gallery" id="gallery">
            <h2>Projects</h2>
            <div className="projects" style={{transform:`translateY(${1100 + offsetY * -0.5}px)`, opacity:`${opacity}`}}>
                {data.projects.map(project => {
                    return(
                <div className="project">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.github}</p>
                    <p>{project.link}</p>
                </div>);
            
        })}
            </div>
        </div>
    );
}

export default Gallery;
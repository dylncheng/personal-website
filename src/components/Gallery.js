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
                // <div className="project card bg-dark text-white">
                //     <h3 className="card-title">{project.name}</h3>
                //     <img className="card-img" src={project.image}></img>
                //     <div className="card-img-overlay">
                //         <p className="card-text">{project.description}</p>
                //         <p className="card-text">{project.github}</p>
                //         <p className="card-text">{project.link}</p>
                //     </div>
                    
                // </div>
                <div className="project">
                    <h3 className="project-title">{project.name}</h3>
                    <a href={project.link===""?project.github:project.link} target="_blank"><img className="project-img" src={project.image}></img></a>
                    <div className="project-description">
                        <p className="project-text">{project.description}</p>
                        <p className="project-github"><a href={project.github} target="_blank">{project.github===""?"":"github"}</a></p>
                        <p className="project-link"><a href={project.link} target="_blank">{project.link===""?"":"website"}</a></p>
                    </div>
                    
                </div>
                
                );
            
        })}
            </div>
        </div>
    );
}

export default Gallery;
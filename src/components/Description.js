import React, {useState, useEffect} from 'react';


const Description = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        if(window.scrollY < 1073.599)
            setOffsetY(window.scrollY)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <div className="description" id="description">
                <h2>About Me</h2>
                <p className="up-scroll" style={{transform:`translateY(${610 + offsetY * -0.5}px)`, opacity:`${offsetY/1073}`}}>I'm an Electrical Engineering student fron Vancouver, BC currently studying at the <strong>University of Toronto</strong>.<br/><br/>
                </p>
        </div>
    );
}

export default Description
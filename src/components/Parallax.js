import React from 'react'
import Animation from './Animation'

const Parallax = () => {
    return(
        <div className='jumbotron'>
            <div className='header'>
                <a href="#" className='logo'>Hey there <strong>!</strong></a>
                <ul>
                    <li><a href='#' className='active'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Work</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <Animation/>
        </div>
    );
}

export default Parallax;
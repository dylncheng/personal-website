import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className='header'>
            <a href="/" className='logo'>Hey there<strong>!</strong></a>
            <ul>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#description'>About</a></li>
                <li><a href='#gallery'>Projects</a></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;
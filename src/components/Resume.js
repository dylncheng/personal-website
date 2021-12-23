import React from 'react'
import Header from './Header'
import resume_pdf from '../assets/DylanCheng_Resume.pdf'
import Contact from './Contact'

const Resume = () => {
    return(
        <>
            <div className='header'>
                <a href="/" className='logo'>back home<strong>!</strong></a>
                <ul>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className="resume">
                <h2>Resume</h2>
                <div className="resume-container">
                    
                    {/* <object width="200" height="600" type="application/pdf" data={resume_pdf}>
                    <p>PDF cannot be displayed.</p>
                    </object> */}
                    <iframe src={resume_pdf} width="60%" height="800px">
                    </iframe>
                </div>
            </div>
            <Contact/>
        </>
        
    );
}

export default Resume;
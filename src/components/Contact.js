import React from 'react'


const Contact = () => {
    return(
        <div className="contact" id="contact">
            <h2>Links</h2>
            <ul>
                <li className="email"><a href={"mailto:dylan.cheng@mail.utoronto.ca"} target="_blank">email</a></li>
                <li className="linkedin"><a href={"https://linkedin.com/in/dylnchng"} target="_blank">linkedin</a></li>
                <li className="github"><a href={"https://github.com/dylncheng"} target="_blank">github</a></li>
            </ul>
        </div>
    );
}

export default Contact;
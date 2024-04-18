import React from "react";

import myResume from '../assets/files/Leesa_Gonzalez_Resume.pdf'

const Resume = () => {
    const h2Style = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '55px',
        textAlign: 'center',
        padding: '20px',
        color: '#bc2e4a',
        marginBottom: '20px'
    }

    const downloadStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '30px'
    }
    const btnStyle = {
        height: '50px',
        width: '120px',
        border: 'solid 2px #d94470',
        borderRadius: '50px',
        backgroundColor: '#d94470',
        color: '#fff',
        marginLeft: '20px',
        marginTop: '-20px'
    }

    const skillsFlex = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '15%',
        marginRight: '15%',
    }

    const sectionStyle = {
        height: '400px',
        width: '25%',
        backgroundColor: '#FEEBFE',
        border: 'dotted 3px #d94470',
        marginBottom: '57px'

    }

    const h5Style = {
        fontFamily: 'monospace',
        fontSize: '20px',
        color: '#d94470',
        textAlign: 'center',
        padding: '20px',

    }

    const liStyle = {
        fontFamily: 'monospace',
        fontSize: '15px',
        color:'#4a506d',
        marginLeft: '20px',
        paddingBottom: '7px',
        wordSpacing: '2px',
        
    }

    return (
        <div>
            <div>
                <h2 style={h2Style}>Resume</h2>
                <div style={downloadStyle}>
                   <h5 style={{ color: '#bc2e4a'}}>Click Here to Download my Resume: 
                   <span><button style={btnStyle}><a href={myResume} style={{textDecoration: 'none', color: '#fff'}} download>Resume</a></button></span>
                   </h5>
                </div>
                <div style={skillsFlex}>
                <section style={sectionStyle}>
                    <h5 style={h5Style}>Back-End Skills</h5>
                    <ul style={liStyle}>
                        <li>GIT</li>
                        <li>SQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Progressive Web Applications</li>
                        <li>Object-Relational Mapping</li>
                        <li>React</li>
                        <li>MERN</li>
                        <li>State</li>
                        <li>Model-View Controllers</li>
                        <li>Object-Oriented Programming</li>
                    </ul>
                </section>
                <section style={sectionStyle}>
                    <h5 style={h5Style}>Front-End Skills</h5>
                    <ul style={liStyle}>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>NoSql/MySql</li>
                        <li>Sequelize</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REST</li>
                        <li>Third-Party APIs</li>
                        <li>Server-Side APIs</li>
                    </ul>
                </section>
                </div>
            </div>
        </div>
    )
}
export default Resume;
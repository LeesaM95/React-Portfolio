import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

function ContactMe() {
    const [email, setEmail ] = useState('');
    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        
        const {name, value} = e.target;
        if (name === 'email') {
            setEmail(value)
        };
        if (name === 'firstName') {
            setFirstName(value)
        };
        if (name === 'message') {
            setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !firstName) {
            setErrorMessage("Email or Name is invalid!");

            return;
        }

        if (!setMessage(message)) {
            setErrorMessage("Message cannot be left blank!");
            return
        }
    }

    const h2Style = {
        fontFamily: 'Pacifico, cursive',
        textAlign: 'center',
        fontSize: '37px',
        paddingTop: '30px',
        paddingBottom: '10px',
        color: '#D23F67'

    }

    const h3Style = {
        fontFamily: 'monospace',
        textAlign: 'center',
        fontSize: '30px',
        paddingBottom: '30px',
        color: '#d94470'
    }

    const addressStyle = {
        width: '600px',
        height: '175px',
        padding: '15px',
        textAlign: 'center',
        backgroundColor: '#FEEBFE',
        border: 'solid 4px #d94470',
        alignContent: 'center',
        marginLeft: '34%',
        fontFamily: 'monospace',
        color: '#4a506d',

    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '500px',
        width: '750px',
        backgroundColor: '#FEEBFE',
        border: 'solid 4px #d94470',
        marginLeft: '30%',
        padding: '20px',
        fontFamily: 'monospace',
        color:'#4a506d',

    }

    const labelStyle = {
        paddingBottom: '10px',
        fontWeight: 'bold',
        fontSize: '19px',
    }

    const inputStyle = {
        marginBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        height: '40px',
        borderRadius: '50px',
        paddingLeft: '20px',
        borderStyle: 'dotted',
        borderColor: '#d94470'
    }

    const btnStyle = {
        height: '50px',
        width: '110px',
        border: 'solid 3px #d94470',
        borderRadius: '50px',
        backgroundColor: '#bc2e4a',
        color: '#fff',
        alignSelf: 'center',
        marginTop: '20px'
    }

    return (
        <>
        <div>

            <div>
                <h2 style={h2Style}>Like What I Do?</h2>
                <h3 style={h3Style}>Contact Me!</h3>
            
                <blockquote style={addressStyle}>
                Homestead, PA <br />
                Text: <a href="tel: 206-295-4256" style={{textDecoration: 'none', color: '#d94470'}}>206.295.4256</a>
                <br />
                Email: {" "}
                <a href="mailto://leesamarie95@gmail.com" style={{textDecoration: 'none', color: '#d94470'}}>leesamarie95@gmail.com</a>
                <p>I'm eager to hear your feedback!</p>
                </blockquote>
            </div>

            <div>
                <form style={formStyle}>
                    <label htmlFor="contact-name" style={labelStyle}>First Name</label>
                    <input
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        id="contact-name"
                        placeholder="Your name"
                        style={inputStyle} />


                    <label htmlFor="contact-email" style={labelStyle}>Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        id="contact-email"
                        placeholder="Your email"
                        style={inputStyle} />

                    <label htmlFor="contact-message" style={labelStyle}>Message</label>
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="message"
                        id="contact-message"
                        placeholder="Your message"
                        style={inputStyle} />

                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        style={btnStyle}
                    >
                        Submit
                    </button>
                </form>
                
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
            </div>
        </>
    )
}
export default ContactMe;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../utils/helper';

function ContactMe() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'firstName') {
            setFirstName(inputValue)
        } else {
            setMessage(inputValue)
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

    setEmail("");
    setFirstName("");
    setMessage("");

    return (
        <div>
            <div>
                <h2>Contact Me!</h2>
            </div>
            <div>
                <div>
                    <h3>Like What I Do?</h3>
                    <p>Contact Me!</p>
                </div>
                <address>
                    Homestead, PA <br />
                    Text: <a href="tel: 206-295-4256">206.295.4256</a>
                    <br />
                    Email: {" "}
                    <a href="mailto://leesamarie95@gmail.com">leesamarie95@gmail.com</a>
                </address>
                <p>I'm eager to hear your feedback!</p>
            </div>

            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="contact-name">
                       <Form.Label for="contact-name">First Name</Form.Label>
                    <Form.Control
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    id="contact-name"
                    placeholder="Your name" /> 
                    </Form.Group>
                    

                    <Form.Label for="contact-email">Email</Form.Label>
                    <Form.Control
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    id="contact-email"
                    placeholder="Your email" />

                    <Form.Label for="contact-message">Message</Form.Label>
                    <Form.Control
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    id="contact-message"
                    placeholder="Your message" />

                    <Button
                    type="button"
                    onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>
                </Form>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ContactMe;
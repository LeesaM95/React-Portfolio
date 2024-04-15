//Contact Page

//import useState from React
import { useState } from "react"

//import validateEmail helper
import { validateEmail } from '../utils/helper'

//create a contact function
function Contact() {
    //create base variables for the form fields and set the initial values to empty strings
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    // set up an input change function that gets the value and name of each imput that triggered the change

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        // based on what's entered, we set the state of [email, name, message]

        if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'name') {
            setName(inputValue)
        } else {
            setMessage(inputValue)
        };

        // set up the form submission. 
        const handleFormSubmission = (e) => {
        // 1. prevent the default behavior of form submission (refreshing the page immediately)    
            e.preventDefault();

        // 2. verify if the email is valid and if the name section is empty. if YES, display an error message.
            if(!validateEmail(email) || !name) {
                setError("Name or Email invalid!");
        // 3. make sure we exit out of this block of code if something's wrong so that it can be corrected.
                return;
        
            }
        // 3b. check to see if the message is invalid. if YES, send error message
            if(!setMessage(message)) {
                setError("Section cannot be empty!");
                return;
            }
        }
        // 4. If everything is valid, we want to make sure that the submit form is cleared after the previous form was filled out
            setName('');
            setEmail('');
            setMessage('')
        
    };
};

// set up html section and styling

return (
    <div class="container">
        <div class="mb-3">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" id="inputName" class="form-control"></input>
        </div>

        <div class="mb-3">
        <label for="inputEmail" class="form-label">Email</label>
        <input type="text" id="inputEmail" class="form-control"></input>
        </div>

        <div class="mb-3">
        <label for="inputMessage" class="form-label">Message</label>
        <input type="text" id="inputmessage" class="form-control"></input>
        </div>
    </div>
)
import React from "react";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import '../../styles/contact.css';

function InputForm() {
  //create state variables with empty string values (these are the fields in the form)
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    //value and name of input that triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //based on the input type we set the state 
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //function for submitting form
  const handleFormSubmit = (e) => {
//prevent default behaviour 
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }

    if (!Name) {
      alert("Field is Required");
      return;
    }

    if (!message) {
      alert("Field is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

    return (
      <div>
        <h2 id="contact">Contact me</h2>
        <form action="mailto:sarafnrealtor@gmail.com" method= "post"
         encType="text/plain" className="form">
        <div>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="formInput"
            required
          />
        </div>
        <div>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            className="formInput"
            required
          />
        </div>
        <div>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
            className="msg"
            required
          />
        </div>
        <div>
          <button className="submit" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
      </div>
    )
  }


export default InputForm;
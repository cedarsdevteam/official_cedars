<<<<<<< HEAD
import React, { useState} from 'react';
import './c-style.css';
=======
import React, { useState } from "react";
import "./c-style.css";
>>>>>>> fb2f427dc18eb87244c5d420000af2fae7609842

// components
import FormToast from "../Toasts/FormToast";
import usePostRequest from "../../../hooks/usePostRequest";

const ContactForm = (props) => {
  const CEDARS_URL = "http://cedarsprohub.com/api/contact/";

  // Toast state
  const [state, setState] = useState(null);
  const [type, setType] = useState(null);
  const [messages, setMessages] = useState(null);

  // Form states
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    sender: name,
    subject: subject,
    email: email,
    message: message,
  };
  const [response, isLoading, error, postRequest] = usePostRequest(
    CEDARS_URL,
    data
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && subject && email && message !== "") {
      // Validation shouldn't be to rigid since it's a contact form
    
        postRequest();

        if (error) {
          toggleStateToast(true, "Error", error.message);
          return;
        }

        toggleStateToast(true, "Success", "Message sent successfully");

        // return inputs to default state
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      }
     else {
      e.preventDefault();
      // toggle error state/ log error fn
      toggleStateToast(
        true,
        "Error",
        "Invalid input, please try something else"
      );
      console.error("Invalid input on contact form");
    }
  };

  const toggleStateToast = (state, type, messages) => {
    setState(state);
    setType(type);
    setMessages(messages);

    setTimeout(() => {
      setState(null);
    }, 4000);
  };

  return (
    <div>
      <div className="header text-start mb-5">
        <h1>Get in touch</h1>
        <h5>feel free to get in touch with us</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="text"
          placeholder="Full name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="text"
          name="subject"
          className="form-control"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <textarea
          className="form-control"
          cols="30"
          rows="10"
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button className="get-involved-btn btn mt-2" type="submit">
          {isLoading ? "Loading..." : "Get Involved"}
        </button>
      </form>

      <FormToast type={type} state={state} message={messages} />
    </div>
  );
};

export default ContactForm;

// const validateNames = () => {
//   const names = document.querySelectorAll('[validate="name"]');
//   // regexp condition = names must not be 2 < 15
//   const re = /^[a-z]{5,}$/i;

//   names.forEach(name => {

//     if (name)
//       if (!re.test(name.value)) {
//         // throw error and set error state
//         name.classList.add('is-invalid')
//         state.error = true;
//         name.focus()

//       } else {
//         // success
//         name.classList.remove('is-invalid')
//         state.errDone = false;
//       }

//   })
// }

// const validateEmail = () => {
//   const email = document.querySelector('[validate="email"]');
//   // regexp condition @mail !< 3, .com !< 2
//   const re = /^([a-z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

//   if (email)
//     if (!re.test(email.value)) {
//       email.classList.add('is-invalid')
//       state.error = true;
//       email.focus()
//     } else {
//       email.classList.remove('is-invalid')
//       state.errDone = false;
//     }
// }

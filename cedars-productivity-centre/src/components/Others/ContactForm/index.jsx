import React, { useState } from 'react';
import './c-style.css';

const ContactForm = (props) => {

  var state = {
    error: null
  }

  // Initialize states
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    if (name && subject && email && message !== '') {
      // Validation shouldn't be to rigid since it's a contact form
        if(name.length > 5 && subject.length > 4 && email.length > 7 && message.length > 10){
          const data = {
            "sender": name,
            "subject": subject,
            "email": email,
            "message": message,
          }
    
          // Send Request
          postMessage(data);
    
          // return inputs to default state
          setName('')
          setSubject('')
          setEmail('')
          setMessage('')
        }
    } else{
      e.preventDefault();
      // toggle error state/ log error fn
      console.error('Invalid input on contact form');
    }
  }

  const { header, subText } = props;

  return (
    <div>
      <div className="header text-start mb-5">
        <h1>{header}</h1>
        <h5>{subText}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" name="text" placeholder="Full name"
          onChange={e => setName(e.target.value)} value={name} />

        <input type="email" name="email" className="form-control" placeholder="Email Address"
          onChange={e => setEmail(e.target.value)} value={email} />

        <input type="text" name="subject" className="form-control" placeholder="Subject"
          onChange={e => setSubject(e.target.value)} value={subject} />

        <textarea className="form-control" cols="30" rows="10" name="message" placeholder="Message"
          onChange={e => setMessage(e.target.value)} value={message}></textarea>

        <button className="get-involved-btn btn mt-2" type="submit">Get Involved</button>
      </form>
    </div>
  )
}


ContactForm.defaultProps = {
  header: 'Get in touch',
  subText: 'feel free to get in touch with us'
};

export default ContactForm;


const postMessage = async (data) => {
  const url = 'https://cedarsprohub.com/api/contact';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const res = await response.json();
    // handle response data
    console.log(res);
    return res;

  } catch (error) {
    console.log(error);
  }
}

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
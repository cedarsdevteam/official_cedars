import React, { Component } from 'react';
import './c-style.css';

export class ContactForm extends Component {
    state = {
        error: null,
    };

    // validateNames = () => {
    //     const names = document.querySelectorAll('[validate="name"]');
    //     // regexp condition = names must not be 2 < 15
    //     const re = /^[a-z]{2,}$/i;

    //     names.forEach(name => {

    //         if(name)
    //         if(!re.test(name.value)){
    //             // throw error and set error state
    //             name.classList.add('is-invalid')
    //             this.state.error = true;
    //             name.focus()

    //         } else{
    //             // success
    //             name.classList.remove('is-invalid')
    //             this.state.errDone = false;
    //         }

    //     })
    // }

    // validateEmail = () => {
    //     const email = document.querySelector('[validate="email"]');
    //     // regexp condition @mail !< 3, .com !< 2
    //     const re = /^([a-z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    //     if(email)
    //     if(!re.test(email.value)){
    //         email.classList.add('is-invalid')
    //         this.state.error = true;
    //         email.focus()
    //     } else{
    //         email.classList.remove('is-invalid')
    //         this.state.errDone = false;
    //     }
    // }
    
    handleSubmit = (event) => {
        event.preventDefault();
        // Set alert {validation for empty user value}
        // if(this.state.text === ''){
        //     this.props.setAlert('Please enter something', 'light')
        // } else{

        //     // Passing the user input up through props
        //     this.props.searchUsers(this.state.text);
    
        //     this.setState({ text: '' })
        // }
        console.log(this.state.text);
    }

    handleChange = (e) => {
        // For multiple inputs
        this.setState({ [e.target.name]: e.target.value });
    }

    // handleChange = handleChange.bind(this);
    // handleSubmit = handleSubmit.bind(this);
    
    
    render() {
      const {header, subText} = this.props;
      
    return (
      <div>
        <div className="header text-start mb-5">
            <h1>{header}</h1>
            <h5>{subText}</h5>
        </div>
        <form  onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" name="text" placeholder="Your name" 
                    onChange={this.handleChange} value={this.state.text}/>

            <input type="email" name="email" className="form-control" placeholder="Enter your email address" 
                   onChange={this.handleChange} value={this.state.email} />

            <textarea className="form-control" cols="30" rows="10" name="message" placeholder="Your message"
                    onChange={this.handleChange} value={this.state.message}></textarea>

            <button className="get-involved-btn btn mt-2" type="submit">Get Involved</button>
        </form>
      </div>
    )
  }
}

ContactForm.defaultProps = {
    header: 'Get in touch',
    subText: 'feel free to get in touch with us'
};

export default ContactForm;
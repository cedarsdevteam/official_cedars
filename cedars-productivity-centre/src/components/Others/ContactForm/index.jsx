import React, { Component } from 'react';
import AutohideToast from './toast';
import './c-style.css';

export class ContactForm extends Component {
    state = {
        error: null,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Set alert {validation for empty user value}
        if(this.state.text === '' || this.state.email === '' || this.state.message === ''){
            // Call error toast and state
            // this.props.setAlert('Please enter something', 'light')
        } else{
            // ** Success
            // Passing the user data up through props
            this.props.formDatas(this.state.text);

            this.setState({ text: '', email: '', message: '' })
        }

        console.log(this.state.text);
    }

    handleChange = (e) => {
        // For multiple inputs
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { header, subText } = this.props;

        return (
            <div>
                <div className="header text-start mb-5">
                    <h1>{header}</h1>
                    <h5>{subText}</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" name="text" placeholder="Your name"
                        onChange={this.handleChange} value={this.state.text} />

                    <input type="email" name="email" className="form-control" placeholder="Enter your email address"
                        onChange={this.handleChange} value={this.state.email} />

                    <textarea className="form-control" cols="30" rows="10" name="message" placeholder="Your message"
                        onChange={this.handleChange} value={this.state.message}></textarea>

                    <button className="get-involved-btn btn mt-2" type="submit">Get Involved</button>
                </form>

                <AutohideToast />
            </div>
        )
    }
}

ContactForm.defaultProps = {
    header: 'Get in touch',
    subText: 'feel free to get in touch with us'
};

function validateForm(name, email, message) {

    console.log(this.state.error, 'error state');

    const validateNames = () => {
        // regexp condition = names must not be 2 < 15
        const re = /^[a-z]{2,}$/i;

        if (!re.test(name)) {
            // throw error and set error state
            // init toast
            // name.classList.add('is-invalid')
            this.state.error = true;
            name.focus()

        } else {
            // success
            // init toast
            // name.classList.remove('is-invalid')
            this.state.error = false;
        }
    }

    const validateEmail = () => {
        // regexp condition @mail !< 3, .com !< 2
        const re = /^([a-z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (!re.test(email)) {
            // init toast
            // email.classList.add('is-invalid')
            this.state.error = true;
            email.focus()
        } else {
            // init toast
            // email.classList.remove('is-invalid')
            this.state.error = false;
        }
    }

    const validateMessage = () => {
        if(message.length > 2){
            console.log('error');
        }
    }
}

export default ContactForm;
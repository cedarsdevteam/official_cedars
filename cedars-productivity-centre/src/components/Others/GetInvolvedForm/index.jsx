import React, { Component } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import './style.css';

export class GetInvolvedForm extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        // Set alert {validation for empty user value}
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {

            // Passing the user input up through props
            this.props.searchUsers(this.state.text);

            this.setState({ text: '' })
        }
    }

    onChange = (e) => {
        // For multiple inputs
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {

        return (
            <div className="col-12">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" name="text" placeholder="Your name"
                        onChange={this.onChange} value={this.state.text} />

                    <input type="email" name="email" className="form-control" placeholder="Enter your email address"
                        onChange={this.onChange} value={this.state.email} />

                    <input type="number" name="number" className="form-control" placeholder="Enter your phone number"
                        onChange={this.onChange} value={this.state.number} />

                    <div className="input-group">
                        <select className="form-select">
                            <option>How would you like to be part of us?</option>
                            <option>As a volunteer</option>
                            <option>As a contributor</option>
                            <option>As a partner</option>
                        </select>
                        <div className="input-group-text">
                            <ChevronDown />
                        </div>
                    </div>

                    <button className="get-involved-btn btn mt-2" type="submit">Get Involved</button>
                </form>
            </div>
        )
    }
}

export default GetInvolvedForm;
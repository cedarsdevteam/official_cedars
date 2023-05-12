import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Subscribe extends Component {
    state = {
        email: '',
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        // Set alert {validation for empty user value}
        if(this.state.email === ''){
            this.props.setAlert('Please enter something', 'light')
        } else{

            // Passing the user input up through props
            this.props.searchUsers(this.state.email);
    
            this.setState({ email: '' })
        }
    }

    onChange = (e) => {
        // for single inputs the inpt name is required
        this.setState({ email: e.target.value });

        // For multiple inputs
        // this.setState({ [e.target.name]: e.target.value });

    }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <form className="footer__container__subscribe__form__cont__main__form d-flex justify-content-end" onSubmit={this.onSubmit}>
            <input type="email" placeholder="Enter your email" className="form-control" value={this.state.email}
                onChange={this.onChange} />

            <Link className="btn" type="submit" to="/">Subscribe</Link>
        </form>
      </div>
    )
  }
}

export default Subscribe;
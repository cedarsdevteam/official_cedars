import React, { Component } from 'react';
import './style.css';

export class Comments extends Component {

    state = {}

    postComment = (event) => {
        const e = event;
        e.preventDefault();
        // Set alert {validation for empty user value}
        // if(this.state.text === ''){
        //     this.props.setAlert('Please enter something', 'light')
        // }

        // Send data up
        this.props.createComment(this.state.text, this.state.message);

        // Clear State
        this.setState({ text: '', email: '', message: '' });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="mt-5 bg-light" id="Comments">
                <div className="container">
                    <div className="header text-start mb-5">
                        <h2>Leave a comment</h2>
                        <small>Let us know what you think.</small>
                    </div>

                    <form onSubmit={this.postComment}>
                        <div className="mb-2">
                            <small>Your email address will not be published.</small>
                        </div>
                        <div className="flex-group d-flex">
                            <input type="text" className="form-control" name="text" placeholder="Your name"
                                onChange={this.handleChange} value={this.state.text} />

                            <input type="email" name="email" className="form-control" placeholder="Enter your email address"
                                onChange={this.handleChange} value={this.state.email} />
                        </div>

                        <textarea className="form-control" cols="30" rows="10" name="message" placeholder="Comment..."
                            onChange={this.handleChange} value={this.state.message}></textarea>

                        <button className="post-btn btn mt-2" type="submit">Post Comment</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comments;
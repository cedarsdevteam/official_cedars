import React, { Component } from 'react';
import sentIcon from '../../../images/newsletter-content/sent-icon.svg';

export class NewsLetterform extends Component {
  render() {
    return (
      <div className="col-12">
        <form>
            <div className="input-group">
                <input type="email" className="form-control" name="email" placeholder="Input your email" />
                <button type="submit" className="input-group-text">
                    <img src={sentIcon} alt="sent-icon" className="img-fluid" />
                </button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewsLetterform;
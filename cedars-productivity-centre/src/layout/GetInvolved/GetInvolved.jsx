import React from 'react';
import GetInvolvedForm from '../../components/Others/GetInvolvedForm';
import './style.css';

const GetInvolved = () => {
  return (
    <div className="GetInvolved">
        <div className="container">
            <div className="header text-start">
                <h2>Become a part of Cedars</h2>
                <small>
                    We aim to provide young people with the Leading practices, tools & materials to help guide <br />
                    them towards a position of self-sustainability.
                </small>
            </div>

            <div className="row align-items-center">
                <div className="col intro flex-fluid">
                    <h1>Help us get</h1>
                    <h1>Involved with</h1>
                    <h1>the young people</h1>
                    <h1>in our society</h1>
                </div>
                <div className="col text-start GI-form flex-fluid">
                    <h1>How would you like to help?</h1>
                    <h6>Please fill the form to let us know</h6>

                    {/* Get Involved form */}
                    <GetInvolvedForm /> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default GetInvolved;
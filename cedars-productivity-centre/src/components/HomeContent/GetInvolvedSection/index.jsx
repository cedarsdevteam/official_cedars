import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div>
        <div className="get-involved-section">
            <div className="container flex-fluid get-involved-bg">
                <h1>Like what you see? </h1>
                <Link to="/get-involved" className="btn mt-3">Get Involved</Link> 
            </div>
        </div>
    </div>
  )
}

export default GetInvolved;
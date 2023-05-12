import React from 'react';
import excel from '../../../images/core_values_contents/award.svg';
import innovation from '../../../images/core_values_contents/bulb.svg';
import integrity from '../../../images/core_values_contents/handshake.svg';
import collaboration from '../../../images/core_values_contents/collaboration.svg';

const CoreValues = () => {
  return (
    <div className="OurCoreValues" id="OurCoreValues">
        <div className="container">
            <div className="header mb-5">
                <h1>Our <span>Core Values</span></h1>
            </div> 

            <div className="row">
                <div className="col-md-6 col-sm-8 col-10 core-box">
                    <img src={excel} className="icon img-fluid" alt="excel-ico" />
                    <h4>Excellence</h4>
                    <p>
                        We commit to the highest level of quality in everything <br /> 
                        we do, and we continuously improve to exceed 
                        <br /> expectations.
                    </p>
                </div>

                <div className="col-md-6 col-sm-8 col-10 core-box">
                    <img src={integrity} className="icon img-fluid" alt="integrity-ico" />
                        <h4>Integrity</h4>
                    <p>
                        We hold ourselves to the highest standards of conduct <br />
                        and are committed to doing the right thing always.
                    </p>
                </div>
                
                <div className="col-md-6 col-sm-8 col-10 core-box">
                    <img src={innovation} className="icon img-fluid" alt="innovation-ico" />
                        <h4>Innovation</h4>
                    <p>
                        We strive to push boundaries, embrace new ideas, and <br />
                        create solutions that make a real impact.
                    </p>
                </div>

                <div className="col-md-6 col-sm-8 col-10 core-box">
                    <img src={collaboration} className="icon img-fluid" alt="collaboration-ico" />
                        <h4>Collaboration</h4>
                    <p>
                        By valuing collaboration, we foster a culture of <br />
                        teamwork and open communication, leading to better <br />
                        decision-making, problem-solving, and innovation.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CoreValues;
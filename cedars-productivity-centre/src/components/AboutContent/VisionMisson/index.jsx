import React from 'react';
import EyeIcon from '../../../images/about-content/eye.svg';
import TargetIcon from '../../../images/about-content/target.svg';
import './style.css';

const VisionMission = () => {
  return (
    <div id="vision-mission">
        <div className="container-lg vision-content">
            <div className="row g-0">
                <div className="content-bg col-md-6 col-12"></div>
                <div className="mission-content col-md-6 col-12">
                    <div className="bullet-box d-flex">
                        <div className="icon me-3">
                            <img src={EyeIcon} alt="vision-icon" /> 
                        </div>
                        <div className="text">
                            <h3 className='mb-2'>Vision</h3>
                            <p>
                                To be a leading contributor to Africa's growth and transformation
                            </p>
                        </div>
                    </div>

                    <div className="bullet-box d-flex">
                        <div className="icon me-3">
                            <img src={TargetIcon} alt="vision-icon" />
                        </div>
                        <div className="text">
                            <h3 className='mb-2'>Mission</h3>
                            <p>
                                To empower individuals and communities by providing access to digital resources and training.
                            </p>
                            <p>
                                To provide sustainable digital solutions to African communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisionMission;
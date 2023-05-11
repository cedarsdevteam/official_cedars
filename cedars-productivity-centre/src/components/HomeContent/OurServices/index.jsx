import React from 'react';
import webIcon from '../../../images/our-services-content/web-icon.svg';
import innovation from '../../../images/core_values_contents/bulb.svg';
import integrity from '../../../images/core_values_contents/handshake.svg';
import digitalMIcon from '../../../images/our-services-content/dg-icon.svg';

const OurServices = () => {
    return (
        <div className="OurServices" id="OurCoreValues">
            <div className="container">
                <div className="header mb-5">
                    <h1>Our <span>Services</span></h1>
                </div>

                <div className="row" id="service-row">
                    <div className="col-md-6 col-sm-8 col-10 core-box">
                        <img src={webIcon} className="icon img-fluid" alt="web-ico" />
                        <h4>Web Development</h4>
                        <p>
                            We commit to the highest level of quality in everything
                            we do, and we continuously improve to exceed
                            expectations.
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-8 col-10 core-box">
                        <img src={integrity} className="icon img-fluid" alt="mobile-ico" />
                        <h4>Mobile Development</h4>
                        <p>
                            We hold ourselves to the highest standards of conduct
                            and are committed to doing the right thing always.
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-8 col-10 core-box">
                        <img src={innovation} className="icon img-fluid" alt="pd-ico" />
                        <h4>Product Design</h4>
                        <p>
                            We strive to push boundaries, embrace new ideas, and
                            create solutions that make a real impact.
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-8 col-10 core-box">
                        <img src={digitalMIcon} className="icon img-fluid" alt="dg-ico" />
                        <h4>Digital Marketing</h4>
                        <p>
                            By valuing collaboration, we foster a culture of
                            teamwork and open communication, leading to better
                            decision-making, problem-solving, and innovation.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurServices;
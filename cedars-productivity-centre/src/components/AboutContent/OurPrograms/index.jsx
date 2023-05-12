import React from 'react';
import { Link } from 'react-router-dom';
import CPW from '../../../images/our-programs-content/dgst.svg';
import DGST from '../../../images/our-programs-content/cpw.svg';
import IVO from '../../../images/our-programs-content/ivo.svg';
import TAP from '../../../images/our-programs-content/tap.svg';
import arrowGreen from '../../../images/our-programs-content/arrow_green.svg';
import arrowWhite from '../../../images/our-programs-content/arrow_white.svg';
import './style.css';

const OurPrograms = () => {
  return (
        <div className="OurPrograms my-3" id="our-programs">
            <div className="container">

                <div className="split-row align-items-center d-flex">
                    <div className="header text-start mb-5 col-md-4">
                        <h1>Our <span>Programs</span></h1>
                        <p>
                            Cedars Productivity Centre was founded in 2015
                            and has since served thousands of young people.
                            We operate in Bonny Island and focus on providing
                            Free digital skills training, As well as provide IT
                            support for schools, other NGOs, and developing
                            locally relevant technology solutions for businesses.
                        </p>
                    </div>

                    <div className="row col-md-8" id="programs-row">

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={DGST} className="icon img-fluid" alt="dgst-ico" />
                            <h4>Digital Skills Training and Internet Literacy</h4>
                            <p>
                                We commit to the highest level of quality in everything
                                we do, and we continuously improve to exceed expectations.
                                <Link to="/activities">
                                    Read more <img src={arrowWhite} alt="arr-right" />
                                </Link>
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={CPW} className="icon img-fluid" alt="cpw-ico" />
                            <h4>Coding and Programming Workshops</h4>
                            <p>
                                We hold ourselves to the highest standards of conduct 
                                and are committed to doing the right thing always.
                                <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link>
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={IVO} className="icon img-fluid" alt="ivo-ico" />
                            <h4>Internship/Volunteer Opportunities</h4>
                            <p>
                                We strive to push boundaries, embrace new ideas, and 
                                create solutions that make a real impact.
                                <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link>
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={TAP} className="icon img-fluid" alt="tap-ico" />
                            <h4>Technology Access Program</h4>
                            <p>
                                By valuing collaboration, we foster a culture of
                                teamwork and open communication, leading to better
                                decision-making, problem-solving, and innovation.
                                <Link to="/activities">
                                    Read more <img src={arrowWhite} alt="arr-right" />
                                </Link>
                            </p>
                        </div>

                    </div>
                    {/* Service row */}
                </div>
                {/* Split row */}
            </div>
        </div>
  )
}

export default OurPrograms;
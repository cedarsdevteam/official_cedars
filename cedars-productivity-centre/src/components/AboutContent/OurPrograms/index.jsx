import React from 'react';
// import { Link } from 'react-router-dom';
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
                        We offer a range of programs and services designed to support startups, entrepreneurs, and individuals
                        in their tech journey.
                        </p>
                    </div>

                    <div className="row col-md-8" id="programs-row">

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={DGST} className="icon img-fluid" alt="dgst-ico" />
                            <h4>Digital Skills Training and Internet Literacy</h4>
                            <p>
                            Offering classes and workshops in digital literacy, photography, computer repairs as well as the safe and
                            effective use of the internet.

                                {/* <Link to="/activities">
                                    Read more <img src={arrowWhite} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={CPW} className="icon img-fluid" alt="cpw-ico" />
                            <h4>Coding and Programming Workshops</h4>
                            <p>
                                We hold ourselves to the highest standards of conduct 
                                and are committed to doing the right thing always.
                                {/* <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={IVO} className="icon img-fluid" alt="ivo-ico" />
                            <h4>Internship/Volunteer Opportunities</h4>
                            <p>
                            Providing a platform for technology professionals and enthusiasts to volunteer their skills and time to
                            help bridge the digital divide.

                                {/* <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={TAP} className="icon img-fluid" alt="tap-ico" />
                            <h4>Technology Access Program</h4>
                            <p>
                            Providing hardware and software donations to underprivileged youths schools, and non-profits.
                                {/* <Link to="/activities">
                                    Read more <img src={arrowWhite} alt="arr-right" />
                                </Link> */}
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
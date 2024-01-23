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
                        Launch your tech adventure! Dive into our dynamic programs, crafted to ignite your skills and fuel your entrepreneurial spirit.
                        </p>
                    </div>

                    <div className="row col-md-8" id="programs-row">

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={DGST} className="icon img-fluid" alt="dgst-ico" />
                            <h4>Digital Skills Training and Internet Literacy:</h4>
                            <p>
                            Immerse yourself in our array of classes and workshops designed to enhance your digital literacy, photography skills, computer repair know-how, and ensure your mastery in the safe and effective utilization of the internet."

                                {/* <Link to="/activities">
                                    Read more <img src={arrowWhite} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={CPW} className="icon img-fluid" alt="cpw-ico" />
                            <h4>Coding and Programming Workshops:</h4>
                            <p>
                            Join our dynamic Coding and Programming Workshops to dive deep into the realms of coding excellence. Elevate your skills, unravel the secrets of programming, and empower yourself for a future driven by technology."
                                {/* <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-white">
                            <img src={IVO} className="icon img-fluid" alt="ivo-ico" />
                            <h4>Internship/Volunteer Opportunities:</h4>
                            <p>
                            Discover meaningful Internship and Volunteer Opportunities with us. Join our vibrant community, contribute your skills, and make a lasting difference. Your journey towards positive change starts here."

                                {/* <Link to="/activities">
                                    Read more <img src={arrowGreen} alt="arr-right" />
                                </Link> */}
                            </p>
                        </div>

                        <div className="col-md-6 col-12 programs-box invert-green">
                            <img src={TAP} className="icon img-fluid" alt="tap-ico" />
                            <h4>Technology Access Program:</h4>
                            <p>
                            Our Technology Access Program is dedicated to ensuring that everyone has the opportunity to engage with and harness the power of technology. Join us in bridging the digital divide and unlocking a world of possibilities."
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
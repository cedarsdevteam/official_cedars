import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../../components/Others/BackToTop/index';
import ContactForm from '../../components/Others/ContactForm';
import facebook from '../../images/contact_icons/facebook.svg';
import instagram from '../../images/contact_icons/instagram.svg';
import linkedin from '../../images/contact_icons/linkedin.svg';
import location from '../../images/contact_icons/location.svg';
import mail from '../../images/contact_icons/mail.svg';
import phone from '../../images/contact_icons/phone.svg';
import twitter from '../../images/contact_icons/twitter.svg';
import './style.css';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="row g-0">
                    <div className="col contact-content flex-fluid">
                        <div className="text-start col-12">
                            <h1>Contact us</h1>
                        </div>
                        <div className="details flex-fluid">

                            <div className="d-flex">
                                <div className="col-1">
                                    <img src={location} alt="location" />
                                </div>
                                <small>
                                    Cedars Productivity Centre, Ground Floor, <br />
                                    OmmaMall, Moore Jackson Street, Bonny Island, <br />
                                    Rivers State.
                                </small>
                            </div>
                            {/* each detail */}
                            
                            <div className="d-flex col-12">
                                <div className="col-1">
                                    <img src={mail} alt="mailbox" />
                                </div>
                                <small>
                                    info@cedarsprohub.com
                                </small>
                            </div>
                            {/* each detail */}

                            <div className="d-flex col-12">
                                <div className="col-1">
                                    <img src={phone} alt="phone" />
                                </div>
                                <small>
                                    0813 339 6417
                                </small>
                            </div>
                            {/* each detail */}

                            <div className="d-flex col-12">
                                <div className="col-1">
                                    <img src={linkedin} alt="linkedin" />
                                </div>
                                <small>
                                    cedars productivity centre
                                </small>
                            </div>
                            {/* each detail */}

                            {/* socials icon */}
                            <div className=" socials d-flex justify-content-start align-items-center col-12">
                                <div className="col-1">
                                    <Link to={{ pathname: "https://www.instagram.com/thisiscedars/" }} target="_blank">
                                        <img src={instagram} alt="instagram-social" />
                                    </Link>
                                </div>
                                <div className="col-1">
                                    <Link to={{ pathname: "https://twitter.com/thisiscedars" }} target="_blank">
                                        <img src={twitter} alt="twitter-social" />
                                    </Link>
                                </div>
                                <div className="col-1">
                                    <Link to={{ pathname: "https://web.facebook.com/thisiscedars" }} target="_blank">
                                        <img src={facebook} alt="facebook-social" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <BackToTop />
        </div>
    )
}

export default Contact;
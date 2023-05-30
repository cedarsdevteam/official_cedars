import React from 'react';
import { Link } from 'react-router-dom';
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
                                <Link to='#' onClick={(e) => {window.location.href ='mailto:info@cedarsprohub.com';}}>
                                <small>
                                    info@cedarsprohub.com
                                </small>
                                </Link>
                            </div>
                            {/* each detail */}

                            <div className="d-flex col-12">
                                <div className="col-1">
                                    <img src={phone} alt="phone" />
                                </div>
                                <Link to='#' onClick={(e) => {window.location.href ='tel:+2340813 339 6417';}}>
                                <small>
                                    +2340813 339 6417
                                </small>
                                </Link>
                            </div>
                            {/* each detail */}

                            <div className="d-flex col-12">
                                <div className="col-1">
                                    <img src={linkedin} alt="linkedin" />
                                </div>
                                <Link to="https://www.linkedin.com/company/cedars-productivity-centre/" target="_blank">
                                <small>
                                    cedars productivity centre
                                </small>
                                </Link>
                            </div>
                            {/* each detail */}

                            {/* socials icon */}
                            <div className=" socials d-flex justify-content-start align-items-center col-12">
                                <div className="col-1">
                                    <Link to="https://www.instagram.com/thisiscedars/" target="_blank">
                                        <img src={instagram} alt="instagram-social" />
                                    </Link>
                                </div>
                                <div className="col-1">
                                    <Link to="https://twitter.com/thisiscedars" target="_blank">
                                        <img src={twitter} alt="twitter-social" />
                                    </Link>
                                </div>
                                <div className="col-1">
                                    <Link to="https://web.facebook.com/thisiscedars" target="_blank">
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
            
        </div>
    )
}

export default Contact;
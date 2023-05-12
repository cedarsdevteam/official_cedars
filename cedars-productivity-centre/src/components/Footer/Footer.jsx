import React from 'react';
import { Navlist } from '../../utilities/Navutils';
import { Link } from 'react-router-dom';
import './style.scss';
import Facebook from '../../images/social_icons/Facebook.svg';
import Instagram from '../../images/social_icons/Instagram.svg';
import Linkedin from '../../images/social_icons/Linkedin.svg';
import Twitter from '../../images/social_icons/Twitter.svg';
import Subscribe from '../HomeContent/SubscribeNewsLetter/subscribe';

const Footer = () => {
    return (
        <div id="Footer">
            <footer className="footer">
                <div className="container d-flex justify-content-center mt-5 footer__container">
                    <div className="col flex-column footer__container__row row g-0">
                        <ul>
                            { 
                                Navlist.map((item, key) => {
                                    return <li key={key} className="footer__container__row__li">
                                        <Link to={item.to} className="nav-link footer__links">
                                            {item.label}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>

                        <h3 className="footer__container__row__copyright">
                            &copy; 2023 Cedars all rights reserved.
                        </h3>
                    </div>

                    <div className="col footer__container__socials__cont text-end">
                        <div className="footer__container__socials__cont__icons">
                            <h2>Follow Us</h2>
                            <div className="d-flex justify-content-around">
                                
                                <span>
                                    <Link to="https://www.linkedin.com/in/cedars-prohub-7ba9b0230/?originalSubdomain=ng" target="_blank">
                                    <img src={Linkedin} alt="Linkedin-ico" />
                                    </Link>
                                </span>
                                <span>
                                    <Link to={{ pathname: "https://web.facebook.com/thisiscedars" }} target="_blank">
                                    <img src={Facebook} alt="f-ico" />
                                    </Link>
                                </span>
                                <span>
                                    <Link to={{ pathname: "https://www.instagram.com/thisiscedars/" }} target="_blank">
                                        <img src={Instagram} alt="Insta-ico" />
                                    </Link>
                                </span>
                                <span>
                                    <Link to={{ pathname: "https://twitter.com/thisiscedars" }} target="_blank">
                                        <img src={Twitter} alt="Twitter-ico" />
                                    </Link>
                                </span>
                            </div>
                        </div>

                        <div className="footer__container__subscribe__form__cont d-flex justify-content-end pt-3">
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
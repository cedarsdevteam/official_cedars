import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '../../../images/social_icons/twitter-2.svg';
import LinkedinIcon from '../../../images/social_icons/linkedin-2.svg';
import './style.css';

const OurBoard = () => {
  return (
    <div id="our-board">
        <div className="container-lg py-5">
            <div className="header text-center">
                <h1>Our <span>Board</span></h1>
            </div>

            <div className="row align-items-center">

                <div className="col-md-3 col-sm-5 col-10 board-box">
                    <div className="board-member-img"></div>
                    <h3 className="board-member-name">Osa Olomu</h3>
                    <small className="title">FOUNDER</small>
                    <div>
                        <Link to="#">
                            <img src={TwitterIcon} className="social-icon" />
                        </Link>
                        <Link to="#">
                            <img src={LinkedinIcon} className="social-icon" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3 col-sm-5 col-10 board-box">
                    <div className="board-member-img"></div>
                    <h3 className="board-member-name">Adaora Olomu</h3>
                    <small className="title">VICE FOUNDER</small>
                    <div>
                        <Link to="#">
                            <img src={TwitterIcon} className="social-icon" />
                        </Link>
                        <Link to="#">
                            <img src={LinkedinIcon} className="social-icon" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3 col-sm-5 col-10 board-box">
                    <div className="board-member-img"></div>
                    <h3 className="board-member-name">
                        Dr.A.Aja-Onu (OD)
                    </h3>
                    <small className="title">TRUSTEE</small>
                    <div>
                        <Link to="#">
                            <img src={TwitterIcon} className="social-icon" />
                        </Link>
                        <Link to="#">
                            <img src={LinkedinIcon} className="social-icon" />
                        </Link>
                    </div>
                </div>

                <div className="col-md-3 col-sm-5 col-10 board-box">
                    <div className="board-member-img"></div>
                    <h3 className="board-member-name">Amarachi Onuwuma</h3>
                    <small className="title">TRUSTEE</small>
                    <div>
                        <Link to="#">
                            <img src={TwitterIcon} className="social-icon" />
                        </Link>
                        <Link to="#">
                            <img src={LinkedinIcon} className="social-icon" />
                        </Link>
                    </div>
                </div>

                {/* board members row */}
            </div>
        </div>
    </div>
  )
}

export default OurBoard;
import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../../components/Others/BackToTop';
import WhoWeAre from '../../components/HomeContent/WhoWeAre';
import Testimonies from '../../components/HomeContent/Testimonies';
import TrainingPrograms from '../../components/HomeContent/TrainingPrograms';
import Getinvolved from '../../components/HomeContent/GetInvolvedSection';
import OurImpact from '../../components/HomeContent/OurImpact/OurImpact';
import OurPrograms from '../../components/AboutContent/OurPrograms/index';
import CoreValues from '../../components/HomeContent/CoreValues';
import './style.css';
import OurServices from '../../components/HomeContent/OurServices';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
        
    return (
        <div>
            {/* Hero Content */}
            <div className="hero hero-main-bg" id="hero"> 
                <div className="container-lg">
                    <div className="row g-0 gy-5 pt-md-4">

                        <div className="text-content col-12 col-md-6">
                            <h1>
                                Your Productivity, Our
                                Passion.
                            </h1>
                            <p>
                                We aim to inspire and empower individuals with in-demand digital skills to build viable digital solutions,
                                develop their careers and access global opportunities.
                            </p>
                            <Link className="btn learn-btn" to="/about">
                                Learn more
                            </Link>
                        </div>

                        <div className="hero-bg col-12 col-md-6"></div>
                    </div>
                </div>
            </div>

            {/* Who We Are Content */}
            <WhoWeAre />

            {/*Our Impact section */}
            <OurImpact />

            {/* Our Programs */}
            <OurPrograms />

            {/* Oue Services */}
            {/* <OurServices /> */}

            {/* Testimonies */}
            <Testimonies />

            {/* Training Programs */}
            <TrainingPrograms />

            {/* Get Invlolved Section */}
            <Getinvolved />

            {/* Back to top */}
            <BackToTop />

            {/* News Letter Popup */}
            {/* <NewsLetter /> */}
            {/*
                * Newsletter modals styling - complete
                * Commented newsletter modals
             */}

        </div>
    )
}

export default Home;
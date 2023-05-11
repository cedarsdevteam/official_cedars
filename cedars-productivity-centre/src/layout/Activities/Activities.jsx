import React from 'react';
import BackToTop from '../../components/Others/BackToTop/index';
import BlogBox from '../../components/BlogContent/BlogBox/BlogBox';
import GetInvolved from '../../components/HomeContent/GetInvolvedSection';

import './style.css';

const Activities = () => {
    return (
        <div id="Activities">
            <div className="blog-hero hero-main-bg"> 
                <div className="container-lg">
                    <div className="container">
                        <div className="row g-0">
                            <div className="blog-hero-bg text-center col-10 col-md-6"></div>

                            <div className="text-content col-12 col-md-5">
                                <h1>
                                    PROFESSIONAL DEVELOPMENT
                                </h1>
                                <p max-75="true">
                                    Our Echo Event is a platform for systematic mentorship and coaching
                                    where professionals and experts of different fields coach and train our
                                    community young people.

                                    Over the years we’ve partnered with NGOs, as well as, individuals on and
                                    off the shores of Bonny Island to coach and mentor young technovators.
                                </p>
                                <small className="date">4th march 2023</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* main-div */}
            </div>

            <BlogBox />

            <GetInvolved />

            <BackToTop />
        </div>
    )
}

export default Activities;
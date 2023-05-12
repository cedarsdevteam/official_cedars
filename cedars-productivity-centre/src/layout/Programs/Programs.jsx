import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../../components/Others/BackToTop/index';
import BlogBox from '../../components/BlogContent/BlogBox/BlogBox';
import arrowWhite from '../../images/our-programs-content/arrow_white.svg';
import './style.css';
import OurPrograms from '../../components/AboutContent/OurPrograms';

const Programs = () => {
  return (
    <div id="Programs">
        <div className="programs-hero hero-main-bg light">
            <div className="container">
                <div className="row g-0">
                    <div className="text-content">
                        <h1>
                            Connect with Cedars: 
                            <span> Learn, build, and achieve growth.</span>
                        </h1>
                        <p className="pt-1">
                            This is a community of young individuals who are connected through technology and share a 
                            common goal of addressing the digital skills gap. They aim to achieve this goal through 
                            providing training and opportunities for capacity development.
                        </p>
                    </div>
                    <div className="programs-bg"></div>
                </div>
            </div>
        </div>
        {/* Programs Hero */}

        {/* Programs Section */}
        <OurPrograms />


        {/* What to expect */}
        <div className="what-to-expect container">
            <div className="header">
                <h1>What to Expect</h1>
            </div>

            <div className="content-row">
                <div className="w-card text-center">
                    <div className="img-bg"></div>

                    <h4>Learning</h4>
                    <p>
                        Learn from Industry experts who have curated
                        our lessons to incorporate hands-on teaching.
                    </p>
                </div>

                <div className="w-card text-center">
                    <div className="img-bg"></div>

                    <h4>Work Experience</h4>
                    <p>
                        Gain experience while undergoing our programs to advance your Career.
                    </p>
                </div>

                <div className="w-card text-center">
                    <div className="img-bg"></div>

                    <h4>Exposure</h4>
                    <p>
                        Get exposed to best practices & Global 
                        standards, and access certifications.
                    </p>
                </div>
            </div>
        </div>

        {/* Latest News */}
        <div className="bg-primary-light py-4 mt-3">
            <div className="header">
                <h1>Latest From The Blog</h1>
            </div>

            {/* Blog contents */}
            <BlogBox />
        </div>

        <BackToTop />
    </div>
  )
}

export default Programs;
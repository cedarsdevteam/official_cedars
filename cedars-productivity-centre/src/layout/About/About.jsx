import React from 'react';
import WhoWeAre from '../../components/HomeContent/WhoWeAre';
import OurBoard from '../../components/AboutContent/OurBoard';
import Testimonies from '../../components/HomeContent/Testimonies';
import OurImpact from '../../components/HomeContent/OurImpact/OurImpact';
import GetInvolved from '../../components/HomeContent/GetInvolvedSection';
import './style.css';
import VisionMission from '../../components/AboutContent/VisionMisson';
import OurTeam from '../../components/AboutContent/OurTeam';
import CoreValues from '../../components/HomeContent/CoreValues';
import OurPrograms from '../../components/AboutContent/OurPrograms';
import aboutHeroImg from '../../images/about-content/about-hero.png';

const About = () => {
  return (
    <div id="about">
        <div className="about-hero hero-main-bg">
            <div className="container-lg">
                <div className="row g-0 gy-5 pt-md-4">
                    <div className="text-content col-12 col-md-6">
                        <h1>
                            OUR STORY 
                        </h1>
                        <p>
                            Cedars Productivity Centre was founded in 2015
                            and has since served thousands of young people.
                            We operate in Bonny Island and focus on providing 
                            Free digital skills training, As well as provide IT 
                            support for schools, other NGOs, and developing 
                            locally relevant technology solutions for businesses.
                        </p>
                    </div>

                    <div className="about-hero-bg text-center col-10 col-md-5">
                        <img src={aboutHeroImg} alt="about-hero"  className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        {/* who we are section */}
        <WhoWeAre />

        {/* who we are section */}
        <VisionMission />

        {/* Our Programs */}
        <OurPrograms />

        {/* Core Values */}
        <CoreValues />

        {/* Our Impact section */}
        <OurImpact />

        {/* Our Board */}
        <OurBoard />

        {/* Our Team
        <OurTeam /> */}

        {/* What they are saying about us */}
        <Testimonies />

        {/* Get Involved Section */}
        <GetInvolved />
    </div>
  )
}

export default About;
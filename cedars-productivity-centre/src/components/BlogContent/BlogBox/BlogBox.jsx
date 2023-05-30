import React from 'react';
import { Link } from 'react-router-dom';
import ArrowFowardIcon from '../../../images/blog-content/arrow_forward.svg';


const BlogBox = () => {
  return (
    <div>
        <div className="container" id="blog-content">
            <div className="row g-0">

                <div className="blog-box">
                    <div className="blog-bg"></div>
                    <div className="content">
                        <h4 className="title">DIGITAL LITERACY CAMPAIGN</h4>
                        <p className="text-content">
                            In October 2019 we launched a Digital Literacy
                            Campaign (DLC) for schools within Bonny Island to
                            expose secondary school students and young people
                            to relevant digital tools and skills required to succeed in
                            the 21st century.
                        </p>
                        <Link to="/blog"  className="blog-btn">
                            {/* <Route></Route> */}
                            Read more
                            <img src={ArrowFowardIcon} className="img-fluid" alt="arrow" />
                        </Link>
                    </div>
                </div>
                {/* blog box */}

                <div className="blog-box">
                    <div className="blog-bg"></div>
                    <div className="content">
                        <h4 className="title">COMMUNITY OUTREACH</h4>
                        <p className="text-content">
                            Building relationships with community organizations
                            and leaders to understand the unique needs
                            and challenges of each community we serve    
                        </p>
                        <Link to="/blog" className="blog-btn">
                            Read more
                            <img src={ArrowFowardIcon} className="img-fluid" alt="arrow" />
                        </Link>
                    </div>
                </div>
                {/* blog box */}

                <div className="blog-box">
                    <div className="blog-bg"></div>
                    <div className="content">
                        <h4 className="title">IDEATION HUB</h4>
                        <p className="text-content">
                            Welcome to our ideation hub, a platform designed to
                            foster creativity, collaboration, and innovation. It is a
                            place where we brainstorm, plan, and tap into the collective 
                            wisdom of our community to develop innovative solutions that create value.
                            We leverage on divergent and convergent thinking to arrive at sustainable solutions.
                        </p>
                        <Link to="/blog" className="blog-btn">
                            Read more
                            <img src={ArrowFowardIcon} className="img-fluid" alt="arrow" />
                        </Link>
                    </div>
                </div>
                {/* blog box */}
            </div>
        </div>
    </div>
  )
}

export default BlogBox;
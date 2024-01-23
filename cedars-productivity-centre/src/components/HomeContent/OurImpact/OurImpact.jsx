import React from 'react';
import CountUp from 'react-countup';

const OurImpact = () => {

  return (
    <div className="our-impact my-3" id="our-impact">
        <div className="container">
            <div className="header flex-fluid pb-2 mb-5">
                <h1>Our <span>Impact</span></h1>
                <small className="d-flex col-12 col-md-8">
                From tech novices to digital wizards, we've empowered over 7,000 young people in Bonny. More than just training, we've helped small businesses take flight, fueled by technology and community.
                </small>
            </div>

            <div className="row boxi-row">
                <div className="col-lg col-md-5 col-sm-10 col-12 boxico d-flex">
                    <div className="count">
                        <h3>
                            <CountUp
                                start={0}
                                end={1000}
                                duration={3}
                            />+
                        </h3>
                    </div>
                    <p> 
                    Young people trained in Web Development (JavaScript, PHP & Python).
                    </p>
                </div>

                <div className="col-lg col-md-5 col-sm-10 col-12 boxico d-flex">
                    <div className="count">
                        <h3> 
                            <CountUp
                                start={0}
                                end={60}
                                duration={3}
                            />+
                        </h3>
                    </div>
                    <p> 
                    Young people trained in Photography. 
                    </p>
                </div>

                <div className="col-lg col-md-5 col-sm-10 col-12 boxico d-flex">
                    <div className="count">
                        <h3>
                            <CountUp
                                start={0}
                                end={3000}
                                duration={3}
                            />+
                        </h3>
                    </div>
                    <p> 
                    Young people trained in Computer Basics.
                    </p>
                </div>

                <div className="col-lg col-md-5 col-sm-10 col-12 boxico d-flex">
                    <div className="count">
                        <h3>
                            <CountUp
                                start={0}
                                end={2000}
                                duration={3}
                            />+
                        </h3>
                    </div>
                    <p> 
                    Young people trained in Graphic Design (Corel Draw and Photoshop)..
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurImpact;
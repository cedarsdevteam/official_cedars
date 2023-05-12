import React from 'react';
import CountUp from 'react-countup';

const OurImpact = () => {

  return (
    <div className="our-impact my-3" id="our-impact">
        <div className="container">
            <div className="header flex-fluid pb-2 mb-5">
                <h1>Our <span>Impact</span></h1>
                <small className="d-flex col-12 col-md-8">
                    Cedars Productivity Centre has provided digital literacy training to over 6,000 
                    young people in Bonny over the last 7 years and helped a few small businesses to
                    start and grow using technology.
                </small>
            </div>

            <div className="row boxi-row">
                <div className="col-lg col-md-5 col-sm-10 col-12 boxico d-flex">
                    <div className="count">
                        <h3>
                            <CountUp
                                start={0}
                                end={990}
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
                                end={40}
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
                                end={800}
                                duration={3}
                            />+
                        </h3>
                    </div>
                    <p> 
                        Young people trained in Web Development (JavaScript, PHP & Python).
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurImpact;
import React from 'react'

const WhoWeAre = () => {
  return (
    <div>
        <div className="who-we-are bg-lg-light mt-lg-4">
            <div className="container-lg">

                <div className="row justify-content-evenly gy-5 g-0">
                    <div className="bg-content col-md-9 col-12 col-lg-5 order-1 order-lg-0"></div>

                    <div className="text-content d-flex flex-column text-lg-start text-center
                            justify-content-center col-md-9 col-12 col-lg-6 ps-md-5">

                        <h1> <span>WHO</span> WE ARE</h1>
                        <p>
                            Cedars Productivity Centre is a non-profit organization that transforms communities
                            by building digital capabilities and fostering the development of innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre;
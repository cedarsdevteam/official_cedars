import React from 'react';
import TestimoniesSlide from '../Testimonies-slide';

const Testimonies = () => {
  return (
    <div className="Testimonials bg-light py-3 m-0">
      <div className="what-they-are-saying mt-lg-5 mt-2">
        <div className="header mb-3 text-center">
          <h1 className="mb-0"><span>Testimonials</span></h1>
          <small>What They Are Saying About Us</small>
        </div>

        <div className="content">
          <TestimoniesSlide />
        </div>
      </div>
    </div>
  )
}

export default Testimonies;
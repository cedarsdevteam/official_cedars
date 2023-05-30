import React from 'react';
import backToTop from '../../../images/back-to-top.svg';
import { Link } from 'react-router-dom';

const BackToTop = () => {

  // Back to top function
  document.onscroll = (e) => {
    const totalScrollY = window.frames.scrollY;
    const back_to_top = document.querySelector('.back-to-top');
    // const heroScrollHeight = document.querySelector(".hero-main-bg").scrollHeight;

    if (totalScrollY > 600) {
      // show to top
      back_to_top.classList.add('active');
      
      back_to_top.onclick = (e) => {
        e.preventDefault();
        
        window.scrollTo(null, 0);
      }
    } else if(totalScrollY < 600) {
      back_to_top.classList.remove('active');
    }
    
  }

  return (
    <div className="fade-icon">
      {/* Back to top button */}
      <Link to="#" className="back-to-top">
        <img src={backToTop} alt="back-to-top-icon" />
      </Link>
    </div>
  )
}

export default BackToTop;
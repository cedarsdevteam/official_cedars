import React, { useState } from 'react';
// import jQuery from 'jquery';
// import { Button, Modal } from 'react-bootstrap';
import newsLetterBg from '../../images/newsletter-content/cedars-nl.png';
import NewsLetterform from '../../components/Others/NewsLetterForm/NLform';
import newsLetterSuccess from '../../images/newsletter-content/success-nl.svg';
import newsLetterError from '../../images/newsletter-content/error-nl.svg';
import './newsletterstyle.css';

const NewsLetter = () => {
    // NewsLetter Modal Popup
    // function toggleModal(value){
    //     let showModal;
    //     if(value){
    //         showModal = value;
    //         console.log(showModal);
    //         return showModal;
    //     }
    // }

    // setTimeout(() => {
    //     toggleModal(true)
    // }, 3000)
    
    return (
        <div id="NewsLetterContainer">
            {/* News letter form modal */}
            <div className="modal fade" id="NewsLetter" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="letter-row align-items-center justify-content-center g-0">
                                <div className="newsletterbg">
                                    <img src={newsLetterBg} alt="newsletterbg" className="img-fluid" />
                                </div>
                                <div className="main-content flex-fluid">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    <div className="header text-start mb-5">
                                        <h1>Stay connected with <span>us</span></h1>
                                        <small>
                                            Subscribe to our newsletter and never miss our updates and other information that you might need
                                        </small>
                                    </div>
                                    {/* new letter form */}
                                    <NewsLetterform />
                                </div>
                                {/* row */}
                            </div>      
                        </div>
                    </div>
                </div>
            </div>

            {/* News letter success modal */}
            <div className="modal fade" id="NewsLetterSuccess" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body p-0">
                            <div className="row d-flex align-items-center justify-content-center g-0">

                                <div className="main-content col-5 flex-fluid">

                                    <div className="header text-start mb-5">
                                        <h1>
                                            <span>Thank You! </span>
                                            for choosing to connect with us
                                        </h1>
                                        <button to="/" data-bs-dismiss="modal" className="btn success-btn">Go back to home</button>
                                    </div>
                                </div>

                                <div className="newslettersuccessbg col-6">
                                    <img src={newsLetterSuccess} alt="newslettersuccessbg" className="img-fluid" />
                                </div>
                                {/* row */}
                            </div>      
                        </div>
                    </div>
                </div>
            </div>


            {/* News letter Error modal */}
            <div className="modal fade" id="NewsLetterError" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body p-0">
                            <div className="row d-flex align-items-center justify-content-center g-0">

                                <div className="main-content col-5 flex-fluid">

                                    <div className="header text-start mb-5">
                                        <h1>
                                            <span>Oops,  </span>
                                            seems your action didn't go through
                                        </h1>
                                        <button data-bs-toggle="modal" data-bs-target="#NewsLetter" className="btn error-btn">Try again?</button>
                                    </div>
                                </div>

                                <div className="newslettererrorbg col-6">
                                    <img src={newsLetterError} alt="newslettererrorbg" className="img-fluid" />
                                </div>
                                {/* row */}
                            </div>      
                        </div>
                    </div>
                </div>
            </div>


            <div className="bd-example">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#NewsLetterSuccess">
                    Newsletter modal
                </button>
            </div>
        </div>
    )
}

export default NewsLetter;
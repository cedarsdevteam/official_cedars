import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './style.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination, Navigation } from 'swiper';
import TwitterIcon from '../../../images/social_icons/twitter-2.svg';
import LinkedinIcon from '../../../images/social_icons/linkedin-2.svg';
import './style.css';


const OurTeam = () => {
    SwiperCore.use([Autoplay]);

  return (
    <div className="container-lg" id="our-team">
        <div className="header text-center">
                <h1>Our <span>Team</span></h1>
        </div>
        <Swiper
            loop={true}
            spaceBetween={50}

            autoplay={{
                delay: 8000,
                disableOnInteraction: false
            }}

            pagination={{
                type: "bullets",
                clickable: true,
                dynamicBullets: true,
            }}

            slidesPerView={4}

            breakpoints= {{
                0: {
                    slidesPerView: 1,
                },

                567: {
                    slidesPerView: 2,
                },

                767: {
                    slidesPerView: 3,
                },
                
                992: {
                    slidesPerView: 4,
                },
            }}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {/* each slide */}
            <SwiperSlide className="team-box"> 
                <div className="team-member-img one"></div>
                <h3 className="team-member-name">
                    Godswill Thompson
                </h3>
                <small className="title">CENTRE MANAGER</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box"> 
                <div className="team-member-img two"></div>
                <h3 className="team-member-name">
                    Alozie Blessed
                </h3>
                <small className="title">TRAINING CO-ORDINATOR</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box"> 
                <div className="team-member-img three"></div>
                <h3 className="team-member-name">
                    Ngere Harry
                </h3>
                <small className="title">PROJECT MANAGER</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box"> 
                <div className="team-member-img four"></div>
                <h3 className="team-member-name">
                    Nwadike Philip
                </h3>
                <small className="title">MOBILE DEVELOPER</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box"> 
                <div className="team-member-img five"></div>
                <h3 className="team-member-name">
                    Pepple David
                </h3>
                <small className="title">WEB DEVELOPER</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box">
                <div className="team-member-img six"></div>
                <h3 className="team-member-name">
                    Priscillia Israel
                </h3>
                <small className="title">SOCIAL MEDIA MANAGER</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="team-box">
                <div className="team-member-img seven"></div>
                <h3 className="team-member-name">
                    Juliet Pepple
                </h3>
                <small className="title">FRONT-DESK PERSONNEL</small>
                <div className="d-flex socials text-center col-12">
                    <Link to="#">
                        <img src={TwitterIcon} className="social-icon" />
                    </Link>
                    <Link to="#">
                        <img src={LinkedinIcon} className="social-icon" />
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default OurTeam;
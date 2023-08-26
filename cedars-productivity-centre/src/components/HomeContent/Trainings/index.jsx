import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './style.css';
import { Navigation, Pagination } from 'swiper';


const Trainings = () => {
    return (
        <div className="container-lg">
            <Swiper
                loop={true}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1, 
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}

                pagination={{
                    type: "bullets",
                    clickable: true,
                    dynamicBullets: true,
                }}

                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="training-cont">
                    <div className="col flex-fluid text-center">
                        <div className="text-center training-bg"></div>
                        <div className="training-content text-center">
                            <h6 className="mt-3 mb-1">Teen's Summer Bootcamp</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium natus.
                                Voluptas nemo sit Voluptatem, nisi?
                            </p>
                            <button className="btn register-btn">Registration Closed</button>
                        </div> 
                    </div>
                </SwiperSlide>

                <SwiperSlide className="training-cont">
                    <div className="col flex-fluid text-center">
                        <div className="text-center training-bg"></div>
                        <div className="training-content text-center">
                            <h6 className="mt-3 mb-1">L.i.F.E Legacy Training</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium natus.
                                Voluptas nemo sit Voluptatem, nisi?
                            </p>
                            <button className="btn register-btn">Registration Closed</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="training-cont">
                    <div className="col flex-fluid text-center">
                        <div className="text-center training-bg"></div>
                        <div className="training-content text-center">
                            <h6 className="mt-3 mb-1">Kids Summer of Codes</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium natus.
                                Voluptas nemo sit Voluptatem, nisi?
                            </p>
                            <button className="btn register-btn">Registration Closed</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Trainings;
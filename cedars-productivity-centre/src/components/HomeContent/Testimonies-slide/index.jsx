import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './style.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination, Navigation } from 'swiper';

const TestimoniesSlide = () => {
    // Using autoplay
    SwiperCore.use([Autoplay]);

    return (
        <div className="container" id="Testimonies-slide">
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

                // navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide className="testimonial-item">
                    <div className="row justify-content-center">
                        <div className="col-6 content">
                            <p>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                Maecen aliquam, risus at semper.
                            </p>
                            <h3 className="name">Cyprian Tochi</h3>
                            <h4 className="title">Graphic Designer</h4>
                        </div>
                        <div className="col-3 text-center img"></div>
                    </div>
                </SwiperSlide>
                {/* Testimonial slide */}


                <SwiperSlide className="testimonial-item">
                    <div className="row justify-content-center">
                        <div className="col-6 content">
                            <p>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                Maecen aliquam, risus at semper.
                            </p>
                            <h3 className="name">Cyprian Tochi</h3>
                            <h4 className="title">Graphic Designer</h4>
                        </div>
                        <div className="col-3 text-center img"></div>
                    </div>
                </SwiperSlide>
                {/* Testimonial slide */}

                <SwiperSlide className="testimonial-item">
                    <div className="row justify-content-center">
                        <div className="col-6 content">
                            <p>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                Maecen aliquam, risus at semper.
                            </p>
                            <h3 className="name">Cyprian Tochi</h3>
                            <h4 className="title">Graphic Designer</h4>
                        </div>
                        <div className="col-3 text-center img"></div>
                    </div>
                </SwiperSlide>
                {/* Testimonial slide */}

            </Swiper>
        </div>
    )
}

export default TestimoniesSlide;
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './style.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination, Navigation } from 'swiper';









const TestimoniesSlide = () => {
    const [testimonyData, setTestimonyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTestimoniesData();
    }, []);

    SwiperCore.use([Autoplay]);

    const fetchTestimoniesData = async () => {
        try {
            const response = await fetch('https://cedarsprohub.com/api/testimonies/');
            const data = await response.json();
            setTestimonyData(data);
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    return (
        <div className="container" id="Testimonies-slide">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
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
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonyData.map(data => (
                        <SwiperSlide key={data.id} className="testimonial-item">
                        <div className="row justify-content-center">
                            <div className="col-6 content">
                                <p>
                                    {data.testimony}
                                </p>
                                <h3 className="name">{data.name}</h3>
                                <h4 className="title">{data.position}</h4>
                            </div>
                            <div className="col-3 text-center img" 
                            style={{ 
                                backgroundImage: `url(${data.picture})`
                             }}>
                                {/* <img src={data.picture} alt="lol" /> */}
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default TestimoniesSlide;






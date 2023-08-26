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
    const [testimonyData, updateData] = useState(undefined);

    useEffect(() => {
        testimoniesData()
        .then(res => updateData(res))
        .catch(err => console.log(err))
    
    }, [])
    

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

                {
                    testimonyData && testimonyData.map((data) => (
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
                    ))
                }

                {/* <SwiperSlide className="testimonial-item">
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
                </SwiperSlide> */}
                {/* Testimonial slide */}

            </Swiper>
        </div>
    )
}

export default TestimoniesSlide;


const testimoniesData = async () => {
    const res = await fetch('https://cedarsprohub.com/api/testimonies/')
    

    return res.json();
    
}
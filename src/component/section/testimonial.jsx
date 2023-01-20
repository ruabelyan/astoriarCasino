import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '../sidebar/rating';

const title = "our gamers reviews";
const desc = "At Modeltheme, we show only the best websites and portfolios built completely with passion simplicity and creativity !";

const testimonialList = [
    {
        top: [
            {
                imgUrl: 'assets/images/testimonial/01.jpg',
                imgAlt: 'thumb',
                name: 'Sajahan Sagor',
                degi: 'UI Designer',
                ratingCount: '2.8',
                desc: 'Edgeing nterfaces fnergstca plagiarize teams anbudng paradgms rapidiousl buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze',
            },
        ],
        bottom: [
            {
                imgUrl: 'assets/images/testimonial/02.jpg',
                imgAlt: 'thumb',
                name: 'Rajib Raj',
                degi: 'Front End Developer',
                ratingCount: '2.8',
                desc: 'Rapidious buildcaboration anden deas sharing viaing and beedng edgeing nterfaces fnergstcia plagiarize teams anbuding paradgm whereas goingi forward process and monetze',
            },
        ],
    },
]

const Testimonial = () => {
    return (
        <div className="testimonial padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/testimonial/bg.png)"}}>
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial__thumb position-relative">
                                <img src="assets/images/testimonial/03.jpg" alt="testimonial" />
                                <div className="video-icon">
                                    <a href="https://www.youtube.com/embed/g5eQgEuiFC8">
                                        <i className="icofont-play-alt-1"></i>
                                        <span className="pluse"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-slider overflow-hidden">
                                <Swiper
                                    spaceBetween={20}
                                    loop={'true'}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                >
                                    {testimonialList.map((val, i) => (
                                        <SwiperSlide key={i}>
                                            {val.top.map((val, i) => (
                                                <div className="testimonial-item" key={i}>
                                                    <div className="testimonial-inner">
                                                        <div className="testimonial-head">
                                                            <div className="testi-top">
                                                                <div className="testimonial-thumb">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                </div>
                                                                <div className="name-des">
                                                                    <h5>{val.name}</h5>
                                                                    <p>{val.degi}</p>
                                                                </div>
                                                            </div>
                                                            <div className="testimonial-footer">
                                                                <Rating />
                                                                <h5>{val.ratingCount}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-body">
                                                            <p>{val.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {val.bottom.map((val, i) => (
                                                <div className="testimonial-item" key={i}>
                                                    <div className="testimonial-inner">
                                                        <div className="testimonial-head">
                                                            <div className="testi-top">
                                                                <div className="testimonial-thumb">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                </div>
                                                                <div className="name-des">
                                                                    <h5>{val.name}</h5>
                                                                    <p>{val.degi}</p>
                                                                </div>
                                                            </div>
                                                            <div className="testimonial-footer">
                                                                <Rating />
                                                                <h5>{val.ratingCount}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-body">
                                                            <p>{val.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
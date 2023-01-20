import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/page-header";
import PaginationTwo from "../component/sidebar/pagination-2";
import ArchiveWidget from "../component/sidebar/widget/archive-widget";
import CategoryWidget from "../component/sidebar/widget/category-widget";
import InstagramWidget from "../component/sidebar/widget/instagram-widget";
import PostWidget from "../component/sidebar/widget/post-widget";
import SearchWidget from "../component/sidebar/widget/search-widget";
import TagWidget from "../component/sidebar/widget/tag-widget";


const blogList = [
    {
        imgUrl: 'assets/images/blog/10.jpg',
        imgAlt: 'thumbnail',
        title: 'It’s no secret that the digital industry is boom',
        desc: 'It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.',
        date: "January 5, 2022 10:59 am",
        admin: 'Robot Smith',
        comment: '09 Comments',
    },
    {
        imgUrl: 'assets/images/blog/13.jpg',
        imgAlt: 'thumbnail',
        title: 'It’s no secret that the digital industry is boom',
        desc: 'It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.',
        date: "January 5, 2022 10:59 am",
        admin: 'Robot Smith',
        comment: '09 Comments',
    },
]

const blogSliderList = [
    {
        title: 'It’s no secret that the digital industry is boom',
        desc: 'It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.',
        date: "January 5, 2022 10:59 am",
        admin: 'Robot Smith',
        comment: '09 Comments',
        slideImg: [
            {
                imgUrl: 'assets/images/blog/10.jpg',
                imgAlt: 'thumbnail',
            },
            {
                imgUrl: 'assets/images/blog/11.jpg',
                imgAlt: 'thumbnail',
            },
            {
                imgUrl: 'assets/images/blog/12.jpg',
                imgAlt: 'thumbnail',
            },
        ]
    },
]

const blogVideoList = [
    {
        imgUrl: 'assets/images/blog/10.jpg',
        imgAlt: 'thumbnail',
        title: 'It’s no secret that the digital industry is boom',
        desc: 'It’s no secret that the digital industry is booming. from exciting startups to global brands, to the new companies are reachin boomingesagencies, responding to the new psblites available. however, the industry is exciting fast becoming overcr.',
        date: "January 5, 2022 10:59 am",
        admin: 'Robot Smith',
        comment: '09 Comments',
        videoLink: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    },
]

const BlogPageTwo = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'our blog posts'} curPage={'Blog Page'} />
            <div className="blog-section padding-top padding-bottom aside-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <article>
                                    {blogList.map((val, i) => (
                                        <div className="post-item-2" key={i}>
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>{val.title}</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> {val.date} </span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">{val.admin}</a></span> </li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">{val.comment}</a></span></li>
                                                    </ul>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {blogSliderList.map((val, i) => (
                                        <div className="post-item-2" key={i}>
                                            <div className="post-inner">
                                                <div className="post-thumb-container">
                                                    <Swiper
                                                        spaceBetween={20}
                                                        loop={'true'}
                                                        autoplay={{
                                                            delay: 5000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        navigation={{
                                                            prevEl: '.thumb-prev',
                                                            nextEl: '.thumb-next',
                                                        }}
                                                        modules={[Autoplay, Navigation]}
                                                    >
                                                        {val.slideImg.map((val, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className="post-img">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
    
                                                    <div className="thumb-next thumb-nav"><i className="icofont-rounded-right"></i></div>
                                                    <div className="thumb-prev thumb-nav"><i className="icofont-rounded-left"></i></div>
    
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>{val.title}</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> {val.date}</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">{val.admin}</a></span>
                                                        </li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">{val.comment}</a></span></li>
                                                    </ul>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {blogVideoList.map((val, i) => (
                                        <div className="post-item-2" key={i}>
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </Link>
                                                    <a href={val.videoLink} className="play-btn"
                                                       >
                                                        <i className="icofont-play"></i>
                                                        <span className="pluse_2"></span>
                                                    </a>
                                                </div>
                                                <div className="post-content">
                                                    <Link to="/blog-single">
                                                        <h2>{val.title}</h2>
                                                    </Link>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> {val.date}</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">{val.admin}</a></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">{val.comment}</a></span></li>
                                                    </ul>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-button"><span>read more <i className="icofont-circled-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <PaginationTwo />
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <aside className="ps-lg-4">
                                    <SearchWidget />
                                    <CategoryWidget />
                                    <PostWidget />
                                    <InstagramWidget />
                                    <ArchiveWidget />
                                    <TagWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default BlogPageTwo;
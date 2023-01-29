import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerList = [
  {
    bgImg: "assets/images/banner/bg.jpg",
    titleh3: "the best website",
    titleh2: "Genuine Money Transaction",
    titleh1: "Online Casino",
    desc: "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital",
    btnText: "join us today",
  },
  {
    bgImg: "assets/images/banner/bg-2.jpg",
    titleh3: "the best website",
    titleh2: "Genuine Money Transaction",
    titleh1: "Online Casino",
    desc: "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital",
    btnText: "join us today",
  },
  {
    bgImg: "assets/images/banner/bg-3.jpg",
    titleh3: "the best website",
    titleh2: "Genuine Money Transaction",
    titleh1: "Online Casino",
    desc: "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital",
    btnText: "join us today",
  },
  {
    bgImg: "assets/images/banner/bg-4.jpg",
    titleh3: "the best website",
    titleh2: "Genuine Money Transaction",
    titleh1: "Online Casino",
    desc: "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital",
    btnText: "join us today",
  },
];

const BannerTwo = () => {
  return (
    <div className="banner__slider overflow-hidden">
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={20}
          loop={"true"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {bannerList.map((val, i) => (
            <SwiperSlide key={i}>
              <div
                className="banner banner-style2"
                style={{ backgroundImage: `url(${val.bgImg})` }}
              >
                <div className="container">
                  <div className="row g-0">
                    <div className="col-lg-6 col-12">
                      <div className="banner__content">
                        <h3>{val.titleh3}</h3>
                        <h1>{val.titleh1}</h1>
                        <h2>{val.titleh2}</h2>
                        <p>{val.desc}</p>
                        <Link to="/login" className="default-button">
                          <span>
                            {val.btnText} <i className="icofont-play-alt-1"></i>
                          </span>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerTwo;

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerTwo = () => {
  const { t, i18n } = useTranslation();

  const bannerList = useMemo(() => {
    return [
      {
        bgImg: "assets/images/banner/bg.jpg",
        titleh3: t("bannersList.1.titleh3"),
        titleh2: t("bannersList.1.titleh2"),
        titleh1: t("bannersList.1.titleh1"),
        desc: t("bannersList.1.desc"),
        btnText: t("bannersList.1.btnText"),
      },
      {
        bgImg: "assets/images/banner/bg.jpg",
        titleh3: t("bannersList.2.titleh3"),
        titleh2: t("bannersList.2.titleh2"),
        titleh1: t("bannersList.2.titleh1"),
        desc: t("bannersList.2.desc"),
        btnText: t("bannersList.2.btnText"),
      },
      {
        bgImg: "assets/images/banner/bg.jpg",
        titleh3: t("bannersList.3.titleh3"),
        titleh2: t("bannersList.3.titleh2"),
        titleh1: t("bannersList.3.titleh1"),
        desc: t("bannersList.3.desc"),
        btnText: t("bannersList.3.btnText"),
      },
      {
        bgImg: "assets/images/banner/bg.jpg",
        titleh3: t("bannersList.4.titleh3"),
        titleh2: t("bannersList.4.titleh2"),
        titleh1: t("bannersList.4.titleh1"),
        desc: t("bannersList.4.desc"),
        btnText: t("bannersList.4.btnText"),
      },
    ];
  }, [t]);

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

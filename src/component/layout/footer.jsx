import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RatingTwo from "../sidebar/rating-2";


const blogList = [
  {
    imgUrl: "assets/images/footer/01.jpg",
    imgAlt: "footer-widget-img",
    title: "free Poker Game",
    name: "Poker",
    price: "$230",
  },
  {
    imgUrl: "assets/images/footer/02.jpg",
    imgAlt: "footer-widget-img",
    title: "CLUB Poker Game",
    name: "Poker",
    price: "$230",
  },
  {
    imgUrl: "assets/images/footer/03.jpg",
    imgAlt: "footer-widget-img",
    title: "Royal Poker Game",
    name: "Poker",
    price: "$230",
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();


  const desc = t('footerText')
const blogTitle = t("topJackpotGames");
const newsTitle = t("ourNewsletter");
const newsDesc = t("casinoesports");

const socialList = [
  {
    imgUrl: "assets/images/match/social-1.png",
    imgAlt: "social",
    siteLink: "#",
  },
  {
    imgUrl: "assets/images/match/social-2.png",
    imgAlt: "social",
    siteLink: "#",
  },
  {
    imgUrl: "assets/images/match/social-3.png",
    imgAlt: "social",
    siteLink: "#",
  },
];


  const infoList = useMemo(() => {
    return [
      {
        imgUrl: "assets/images/footer/icons/01.png",
        imgAlt: "icon",
        text: `${t("phoneNumber")} : +88012 345 678 912`,
      },
      {
        imgUrl: "assets/images/footer/icons/02.png",
        imgAlt: "icon",
        text: `${t("email")} :  info@astoriar.am"`,
      },
      {
        imgUrl: "assets/images/footer/icons/03.png",
        imgAlt: "icon",
        text: `${t("address")} : 30 Yerevan"`,
      },
    ];
  }, []);

  return (
    <footer
      className="footer-section"
      style={{ backgroundImage: "url(/assets/images/footer/bg3.jpg)" }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 justify-content-center g-lg-0">
            {infoList.map((val, i) => (
              <div className="col-lg-4 col-sm-6 col-12" key={i}>
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="lab-content">
                      <span>{val.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-middle padding-top padding-bottom">
        <div className="container">
          <div className="row padding-lg-top">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title mb-4">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </div>
                  <div className="fm-item-content">
                    <p className="mb-4">{desc}</p>
                    <ul className="match-social-list d-flex flex-wrap align-items-center">
                      {socialList.map((val, i) => (
                        <li key={i}>
                          <a href={val.siteLink}>
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title">
                    <h4>{blogTitle}</h4>
                  </div>
                  <div className="fm-item-content">
                    {blogList.map((val, i) => (
                      <div className="fm-item-widget lab-item" key={i}>
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <Link to="/blog-single">
                              {" "}
                              <img
                                src={`${val.imgUrl}`}
                                alt={`${val.imgAlt}`}
                                className="rounded-3"
                              />
                            </Link>
                          </div>
                          <div className="lab-content">
                            <Link to="/blog-single">
                              <h6>{val.title}</h6>
                            </Link>
                            <p>
                              {val.name}: <b>{val.price}</b>
                            </p>
                            <RatingTwo />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item-3 mb-lg-0">
                  <div className="fm-item-title">
                    <h4>{newsTitle}</h4>
                  </div>
                  <div className="fm-item-content">
                    <p>{newsDesc}</p>
                    <form>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group mb-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <button type="submit" className="default-button">
                        <span>
                          {t("sendMessage")}{" "}
                          <i className="icofont-circled-right"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-content text-center">
                <p>
                  &copy;2022 <Link to="/">{t("casino")}</Link> -{" "}
                  {t("rightsReserved")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

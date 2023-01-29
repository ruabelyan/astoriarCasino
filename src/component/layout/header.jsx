import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+800-123-4567 6587";
const address = "Beverley, New York 224 USA";

const socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-skype",
    siteLink: "#",
  },
  {
    iconName: "icofont-rss-feed",
    siteLink: "#",
  },
];

const Header = () => {
  const { t, i18n } = useTranslation();

  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div className="container">
        <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
          <div className="brand-logo d-none d-lg-inline-block">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="header-menu-part">
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
              <div className="header-top-area">
                <ul className="left">
                  <li>
                    <i className="icofont-ui-call"></i>{" "}
                    <span>{phoneNumber}</span>
                  </li>
                  <li>
                    <i className="icofont-location-pin"></i> {address}
                  </li>
                </ul>
                <ul className="social-icons d-flex align-items-center">
                  {socialList.map((val, i) => (
                    <li key={i}>
                      <a href={val.siteLink}>
                        <i className={val.iconName}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="header-bottom">
              <div className="header-wrapper justify-content-lg-end">
                <div className="mobile-logo d-lg-none">
                  <Link to="/">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="menu-area">
                  <ul className={`menu ${menuToggle ? "active" : ""}`}>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t("home")}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink to="/">{t("home1")}</NavLink>
                        </li>
                        <li>
                          <NavLink to="/index-2">{t("home2")}</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t("features")}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink to="/about">{t("Welcome to React")}</NavLink>
                        </li>

                        <li>
                          <NavLink to="/jaqpot">Casino Jackpot</NavLink>
                        </li>
                        <li>
                          <NavLink to="/game-list">game list 1</NavLink>
                        </li>
                        <li>
                          <NavLink to="/game-list2">game list 2</NavLink>
                        </li>
                        <li>
                          <NavLink to="/tournament">Tournament</NavLink>
                        </li>
                        <li>
                          <NavLink to="/partners">partners</NavLink>
                        </li>
                        <li>
                          <NavLink to="/pricing-plan">Pricing Plan</NavLink>
                        </li>
                        <li>
                          <NavLink to="/login">login</NavLink>
                        </li>
                        <li>
                          <NavLink to="/signup">signup</NavLink>
                        </li>
                        <li>
                          <NavLink to="/forpass">Forget Password</NavLink>
                        </li>
                        <li>
                          <NavLink to="/404">404 Page</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t("blog")}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog-2">Blog 2</NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog-single">Blog Single</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t("shop")}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink to="/shop"> {t("shop")}</NavLink>
                        </li>
                        <li>
                          <NavLink to="/shop-single">
                            {" "}
                            {t("shopDetails")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/cart-page"> {t("cardPage")}</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/contact"> {t("contact")}</NavLink>
                    </li>
                  </ul>
                  {/* <Link to="/login" className="login">
                    <i className="icofont-user"></i> <span>LOG IN</span>{" "}
                  </Link>
                  <Link to="/signup" className="signup">
                    <i className="icofont-users"></i> <span>SIGN UP</span>
                  </Link> */}

                  <div
                    className={`header-bar d-lg-none ${
                      menuToggle ? "active" : ""
                    }`}
                    onClick={() => setMenuToggle(!menuToggle)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div
                    className="ellepsis-bar d-lg-none"
                    onClick={() => setSocialToggle(!socialToggle)}
                  >
                    <i className="icofont-info-square"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

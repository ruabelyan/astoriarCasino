import { t } from "i18next";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import SelectCountry from "../component/sidebar/select/select-country";
import SelectCountryCode from "../component/sidebar/select/select-countrycode";
import SelectDay from "../component/sidebar/select/select-day";
import SelectMonth from "../component/sidebar/select/select-month";
import SelectProvency from "../component/sidebar/select/select-provency";
import SelectYear from "../component/sidebar/select/select-year";

const title = "Registration Page";

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

const SignUp = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Registration Page"} curPage={"SignUp"} />
      <div className="login-section padding-top padding-bottom">
        <div className=" container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form text-start">
              <div className="select-gender mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    {t("mr")}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    {t("mrs")}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    {t("others")}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>{t("firstname")}:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="Fname"
                  required
                />
              </div>
              <div className="form-group">
                <label>{t("surname")}:</label>
                <input type="text" name="surname" required />
              </div>
              <div className="birth-select">
                <label>{t("birth")}</label>
                <SelectDay select={"day"} />
                <SelectMonth select={"month"} />
                <SelectYear select={"year"} />
              </div>
              <div className="country">
                <label>{t("countryResidence")}</label>
                <SelectCountry select={"all"} />
              </div>
              <div className="form-group">
                <label>{t("address")}</label>
                <input type="text" name="Address" required />
              </div>
              <div className="form-group">
                <label>{t("city")}</label>
                <input type="text" name="City" required />
              </div>
              <div className="provency-group">
                <label>{t("provency")}:</label>
                <SelectProvency select={"all"} />
              </div>
              <div className="form-group">
                <label>{t("postalCode")}</label>
                <input type="text" name="Postal" required />
              </div>
              <div className="form-group">
                <label>{t("email")}:</label>
                <input type="text" name="email" required />
              </div>
              <div className="number-group">
                <label>{t("phoneNumber")}:</label>
                <SelectCountryCode select={"880"} />
                <input type="text" name="number" required />
              </div>
              <div className="form-group">
                <button className="d-block default-button">
                  <span>{t("getStartedNow")}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                {t("isMember")} <Link to="/login">{t("login")}</Link>
              </span>
              <span className="or">
                <span>{t("or")}</span>
              </span>
              <h5 className="subtitle">{t("withSocial")}</h5>
              <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
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
      <Footer />
    </Fragment>
  );
};

export default SignUp;

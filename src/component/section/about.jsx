import { t } from "i18next";
import { useTranslation } from "react-i18next";

const title = "WELCOME TO CASINO";
const desc =
  "At Modeltheme, we show only the best websites and portfolios built completely with passion simplicity and creativity!";

const About = () => {
  const { t, i18n } = useTranslation();
  const aboutList = [
    {
      serial: "1",
      title: `${t("registerToday")}`,
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
    {
      serial: "2",
      title: `${t("depositCash")}`,
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
    {
      serial: "3",
      title: `${t("startGambling")}`,
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
  ];
  return (
    <section className="about-section style2 pb-0">
      <div className="container">
        <div className="section-wrapper padding-top padding-bottom">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image position-relative">
                <img
                  src="assets/images/about/01.jpg"
                  alt="about-image"
                  className="w-100"
                />
                <div className="video-icon">
                  <a href="https://www.youtube.com/embed/g5eQgEuiFC8">
                    <i className="icofont-play-alt-1"></i>
                    <span className="pluse"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about-wrapper">
                <div className="section-header">
                  <h2>{title}</h2>
                </div>
                <div className="about-content">
                  <p>{desc}</p>
                  <ul className="about-list">
                    {aboutList.map((val, i) => (
                      <li className="about-item d-flex flex-wrap" key={i}>
                        <div className="about-item-thumb">
                          <span>{val.serial}</span>
                        </div>
                        <div className="about-item-content">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import GoogleMap from "../component/sidebar/googlemap";

const infoTitle = "We're Always Eager To Hear From You!";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  const infoList = [
    {
      imgUrl: "assets/images/contact/icon/01.png",
      imgAlt: "contact-thumb",
      title: "Office Address",
      desc: "ք.Ծաղկաձոր , սարալանջի փ. 2",
    },
    {
      imgUrl: "assets/images/contact/icon/02.png",
      imgAlt: "contact-thumb",
      title: "Phone number",
      desc: "+37494966669",
    },
    {
      imgUrl: "assets/images/contact/icon/03.png",
      imgAlt: "contact-thumb",
      title: "Send Email",
      desc: "info@astoriar.am",
    },
  ];

  const [formStatus, setFormStatus] = React.useState("Send our Message");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submited");
    const { name, email, phone, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={t("contactUs")} curPage={t("contact")} />
      <div className="info-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2>{infoTitle}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center g-4">
              {infoList.map((val, i) => (
                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                  <div className="contact-item text-center">
                    <div className="contact-thumb mb-4">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="contact-content">
                      <h6 className="title">{val.title}</h6>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div
          className="contact-top padding-top padding-bottom bg-attachment"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525018667593-176858caed6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80')",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contact-form-wrapper text-center">
                  <div className="section-header">
                    <h2>{conTitle}</h2>
                  </div>
                  <form className="contact-form" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="form-group w-100">
                      <textarea
                        name="message"
                        rows="8"
                        id="message"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group w-100 text-center">
                      <button className="default-button" type="submit">
                        <span>{formStatus}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contac-bottom">
            <div className="row justify-content-center g-0">
              <div className="col-12">
                <div className="location-map">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
